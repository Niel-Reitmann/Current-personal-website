#!/usr/bin/env node
// Email a new post to confirmed subscribers.
//
//   node scripts/send-post.mjs <slug>                         dry run: shows who WOULD get it, sends nothing
//   node scripts/send-post.mjs <slug> --test you@example.com  sends ONE test email to that address
//   node scripts/send-post.mjs <slug> --send                  sends for real (asks you to type SEND first)
//
// Options: --note "one line shown above the link"   --limit 100
//
// Reads secrets from .env.local in the repo root (gitignored). Needs SUPABASE_URL,
// SUPABASE_SERVICE_ROLE_KEY and RESEND_API_KEY. Only confirmed, not-unsubscribed people
// who haven't already been sent this post are included. Resend's free plan allows
// 100 emails/day, so --limit defaults to 100.

import fs from "fs";
import path from "path";
import readline from "readline";
import matter from "gray-matter";
import { createClient } from "@supabase/supabase-js";
import { postEmail } from "../lib/email-templates.mjs";

const SITE = "https://nielreitmann.com";
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");

// Minimal .env.local loader (no extra dependency).
const envFile = path.join(root, ".env.local");
if (fs.existsSync(envFile)) {
  for (const line of fs.readFileSync(envFile, "utf8").split("\n")) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
}

const args = process.argv.slice(2);
const slug = args.find((a) => !a.startsWith("--") && args[args.indexOf(a) - 1] !== "--note" && args[args.indexOf(a) - 1] !== "--test" && args[args.indexOf(a) - 1] !== "--limit");
const flag = (name) => args.includes(name);
const value = (name) => (args.includes(name) ? args[args.indexOf(name) + 1] : undefined);

const fail = (msg) => {
  console.error(`\n${msg}\n`);
  process.exit(1);
};

if (!slug) fail("Usage: node scripts/send-post.mjs <slug> [--note \"...\"] [--test email] [--send]");
const postFile = path.join(root, "_posts", `${slug}.md`);
if (!fs.existsSync(postFile)) fail(`No post found at _posts/${slug}.md`);

const need = ["SUPABASE_URL", "SUPABASE_SERVICE_ROLE_KEY", "RESEND_API_KEY"];
const missing = need.filter((k) => !process.env[k]);
if (missing.length) fail(`Missing in .env.local: ${missing.join(", ")}`);

const { data: front } = matter(fs.readFileSync(postFile, "utf8"));
const title = front.title;
const note = value("--note") || "";
const limit = Number(value("--limit") || 100);
const postUrl = `${SITE}/posts/${slug}`;
const from = process.env.EMAIL_FROM || "Niel Reitmann <niel@nielreitmann.com>";
const replyTo = process.env.EMAIL_REPLY_TO || undefined;

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false },
});

const build = (unsubscribeToken) => {
  const unsubscribeUrl = `${SITE}/unsubscribe?token=${unsubscribeToken}`;
  const mail = postEmail({ title, note, postUrl, unsubscribeUrl });
  return {
    from,
    subject: mail.subject,
    html: mail.html,
    text: mail.text,
    reply_to: replyTo,
    headers: {
      // One-click unsubscribe, which Gmail and Yahoo expect from bulk senders.
      "List-Unsubscribe": `<${SITE}/api/unsubscribe?token=${unsubscribeToken}>`,
      "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
    },
  };
};

const resend = async (path_, body) => {
  const res = await fetch(`https://api.resend.com${path_}`, {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok) fail(`Resend error ${res.status}: ${JSON.stringify(json).slice(0, 300)}`);
  return json;
};

const ask = (q) =>
  new Promise((resolve) => {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    rl.question(q, (a) => {
      rl.close();
      resolve(a);
    });
  });

// --- test mode: one email to one address ---
if (flag("--test")) {
  const to = value("--test");
  if (!to || !to.includes("@")) fail("--test needs an email address");
  const msg = build("00000000-0000-0000-0000-000000000000");
  msg.subject = `[TEST] ${msg.subject}`;
  const out = await resend("/emails", { ...msg, to: [to] });
  console.log(`Test email sent to ${to} (id ${out.id}). Its unsubscribe link is a dummy.`);
  process.exit(0);
}

// --- find recipients ---
const { data: subs, error } = await supabase
  .from("subscribers")
  .select("id, email, unsubscribe_token")
  .not("confirmed_at", "is", null)
  .is("unsubscribed_at", null);
if (error) fail(`Supabase error: ${error.message}`);

const { data: already, error: err2 } = await supabase.from("post_sends").select("subscriber_id").eq("post_slug", slug);
if (err2) fail(`Supabase error: ${err2.message}`);
const done = new Set(already.map((r) => r.subscriber_id));
const todo = subs.filter((s) => !done.has(s.id));
const batch = todo.slice(0, limit);

console.log(`\nPost:        ${title}  (${postUrl})`);
console.log(`Confirmed and subscribed:      ${subs.length}`);
console.log(`Already sent this post:        ${done.size}`);
console.log(`Would send now:                ${batch.length}${todo.length > batch.length ? `  (limit ${limit}; ${todo.length - batch.length} left for tomorrow)` : ""}`);
for (const s of batch.slice(0, 5)) console.log(`   ${s.email.replace(/^(.{2}).*(@.*)$/, "$1***$2")}`);
if (batch.length > 5) console.log(`   ...and ${batch.length - 5} more`);

if (!flag("--send")) {
  console.log("\nDry run only. Nothing was sent. Add --send to send for real.\n");
  process.exit(0);
}
if (batch.length === 0) {
  console.log("\nNobody to send to.\n");
  process.exit(0);
}

const answer = await ask(`\nType SEND to email ${batch.length} people: `);
if (answer.trim() !== "SEND") fail("Cancelled. Nothing was sent.");

const result = await resend("/emails/batch", batch.map((s) => ({ ...build(s.unsubscribe_token), to: [s.email] })));
const sent = Array.isArray(result.data) ? result.data.length : 0;
if (sent !== batch.length) console.warn(`Warning: asked for ${batch.length}, Resend accepted ${sent}.`);

// Record who was sent this post so it can never go out twice.
const { error: err3 } = await supabase
  .from("post_sends")
  .insert(batch.slice(0, sent).map((s) => ({ subscriber_id: s.id, post_slug: slug })));
if (err3) fail(`Emails were sent but recording them failed: ${err3.message}. Do NOT re-run until you fix this.`);

console.log(`\nSent to ${sent} people and recorded in post_sends.\n`);
