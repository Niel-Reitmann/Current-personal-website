import type { NextApiRequest, NextApiResponse } from "next";
import { randomUUID } from "crypto";
import { getSupabaseAdmin } from "../../lib/supabase-server";
import { baseUrlFrom, sendEmail } from "../../lib/email";
import { confirmationEmail } from "../../lib/email-templates.mjs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RESEND_AFTER_MS = 5 * 60 * 1000; // don't re-send a confirmation more than once per 5 minutes

// Best-effort limiter (per server instance). Real protection is the honeypot,
// the unique constraint and the confirmation throttle above.
const hits = new Map<string, number[]>();
function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < 60_000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false });
  }

  const ip =
    (req.headers["x-forwarded-for"] as string | undefined)?.split(",")[0] ||
    req.socket.remoteAddress ||
    "unknown";
  if (limited(ip)) return res.status(429).json({ ok: false });

  const { email, website } = req.body || {};

  // Honeypot: real people never fill the hidden "website" field. Pretend success.
  if (website) return res.status(200).json({ ok: true });

  const clean = typeof email === "string" ? email.trim().toLowerCase() : "";
  if (!clean || clean.length > 254 || !EMAIL_RE.test(clean)) {
    return res.status(400).json({ ok: false, error: "invalid_email" });
  }

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    console.error("subscribe: Supabase env vars are not set");
    return res.status(500).json({ ok: false });
  }

  // Duplicates are ignored, and we always answer ok, so nobody can use this
  // form to find out whether an address is already on the list.
  const { error } = await supabase
    .from("subscribers")
    .upsert({ email: clean, source: "website" }, { onConflict: "email", ignoreDuplicates: true });
  if (error) {
    console.error("subscribe: insert failed", error.message);
    return res.status(500).json({ ok: false });
  }

  try {
    const { data: row } = await supabase
      .from("subscribers")
      .select("id, confirmed_at, unsubscribed_at, confirmation_token, confirmation_sent_at")
      .eq("email", clean)
      .maybeSingle();

    if (row) {
      let token: string = row.confirmation_token;
      let confirmed = !!row.confirmed_at;

      // Someone who unsubscribed and signs up again must confirm again, with a fresh token.
      if (row.unsubscribed_at) {
        token = randomUUID();
        confirmed = false;
        await supabase
          .from("subscribers")
          .update({ unsubscribed_at: null, confirmed_at: null, confirmation_token: token })
          .eq("id", row.id);
      }

      const recentlySent =
        row.confirmation_sent_at &&
        Date.now() - new Date(row.confirmation_sent_at).getTime() < RESEND_AFTER_MS;

      if (!confirmed && !recentlySent) {
        const url = `${baseUrlFrom(req.headers.host)}/confirm?token=${token}`;
        const sent = await sendEmail({ to: clean, ...confirmationEmail({ url }) });
        if (sent.ok) {
          await supabase
            .from("subscribers")
            .update({ confirmation_sent_at: new Date().toISOString() })
            .eq("id", row.id);
        }
      }
    }
  } catch (e) {
    // The address is saved; a failed confirmation email must not break signup.
    console.error("subscribe: confirmation step failed", e);
  }

  return res.status(200).json({ ok: true });
}
