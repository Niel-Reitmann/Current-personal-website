import type { NextApiRequest, NextApiResponse } from "next";
import { getSupabaseAdmin } from "../../lib/supabase-server";

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

// POST only. Email apps' one-click unsubscribe (List-Unsubscribe-Post) sends a POST
// to the URL in the email, with the token in the query string.
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false });
  }
  const fromQuery = typeof req.query.token === "string" ? req.query.token : "";
  const fromBody = typeof req.body?.token === "string" ? req.body.token : "";
  const token = fromQuery || fromBody;
  if (!UUID_RE.test(token)) return res.status(400).json({ ok: false });

  const supabase = getSupabaseAdmin();
  if (!supabase) return res.status(500).json({ ok: false });

  const { data, error } = await supabase
    .from("subscribers")
    .update({ unsubscribed_at: new Date().toISOString() })
    .eq("unsubscribe_token", token)
    .select("id");
  if (error) {
    console.error("unsubscribe: update failed", error.message);
    return res.status(500).json({ ok: false });
  }
  return data && data.length > 0
    ? res.status(200).json({ ok: true })
    : res.status(404).json({ ok: false });
}
