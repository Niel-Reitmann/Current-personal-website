import { SITE_URL } from "./constants";

export type OutgoingEmail = {
  to: string;
  subject: string;
  html: string;
  text: string;
  headers?: Record<string, string>;
};

export function emailConfigured() {
  return !!process.env.RESEND_API_KEY;
}

// Only trust our own hosts when building links; anything else falls back to the real site.
export function baseUrlFrom(host: string | undefined) {
  if (
    host &&
    (host === "nielreitmann.com" ||
      host === "www.nielreitmann.com" ||
      /^[a-z0-9-]+\.vercel\.app$/.test(host) ||
      host.startsWith("localhost"))
  ) {
    return host.startsWith("localhost") ? `http://${host}` : `https://${host}`;
  }
  return SITE_URL;
}

// Sends one email through Resend's REST API (no SDK needed).
export async function sendEmail(email: OutgoingEmail, idempotencyKey?: string) {
  const key = process.env.RESEND_API_KEY;
  if (!key) return { ok: false as const, error: "not_configured" };

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
      ...(idempotencyKey ? { "Idempotency-Key": idempotencyKey } : {}),
    },
    body: JSON.stringify({
      from: process.env.EMAIL_FROM || "Niel Reitmann <niel@nielreitmann.com>",
      to: [email.to],
      subject: email.subject,
      html: email.html,
      text: email.text,
      headers: email.headers,
      reply_to: process.env.EMAIL_REPLY_TO || undefined,
    }),
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    console.error("resend: send failed", res.status, body.slice(0, 300));
    return { ok: false as const, error: `http_${res.status}` };
  }
  return { ok: true as const };
}
