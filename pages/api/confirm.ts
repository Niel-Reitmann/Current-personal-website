import type { NextApiRequest, NextApiResponse } from "next";
import { getSupabaseAdmin } from "../../lib/supabase-server";

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

// POST only: a link click that merely loads a page must not confirm anyone,
// because email security scanners open links automatically.
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false });
  }
  const token = typeof req.body?.token === "string" ? req.body.token : "";
  if (!UUID_RE.test(token)) return res.status(400).json({ ok: false });

  const supabase = getSupabaseAdmin();
  if (!supabase) return res.status(500).json({ ok: false });

  const { data, error } = await supabase
    .from("subscribers")
    .update({ confirmed_at: new Date().toISOString(), unsubscribed_at: null })
    .eq("confirmation_token", token)
    .is("confirmed_at", null)
    .select("id");
  if (error) {
    console.error("confirm: update failed", error.message);
    return res.status(500).json({ ok: false });
  }
  if (data && data.length > 0) return res.status(200).json({ ok: true });

  // No row updated: either already confirmed (fine) or an unknown token.
  const { data: existing } = await supabase
    .from("subscribers")
    .select("id")
    .eq("confirmation_token", token)
    .maybeSingle();
  return existing
    ? res.status(200).json({ ok: true })
    : res.status(404).json({ ok: false });
}
