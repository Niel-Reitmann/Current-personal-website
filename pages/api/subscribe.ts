import type { NextApiRequest, NextApiResponse } from "next";
import { getSupabaseAdmin } from "../../lib/supabase-server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Best-effort limiter (per server instance). Real protection is the honeypot
// plus the unique constraint; this just blunts casual abuse.
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

  return res.status(200).json({ ok: true });
}
