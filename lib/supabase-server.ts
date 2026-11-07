import { createClient } from "@supabase/supabase-js";

// Server-only. The service-role key bypasses Row Level Security, so it must
// never be imported from a component or exposed to the browser.
export function getSupabaseAdmin() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key, { auth: { persistSession: false } });
}
