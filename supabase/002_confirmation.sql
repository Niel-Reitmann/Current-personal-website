-- Phase 2: double opt-in confirmation and a record of which posts were sent to whom.
-- Run once in the Supabase dashboard: SQL Editor -> New query -> paste -> Run.

alter table public.subscribers
  add column confirmation_token  uuid not null default gen_random_uuid(),
  add column confirmation_sent_at timestamptz;

-- One row per (subscriber, post) so a post can never be emailed to the same person twice.
create table public.post_sends (
  id            uuid        primary key default gen_random_uuid(),
  subscriber_id uuid        not null references public.subscribers(id) on delete cascade,
  post_slug     text        not null,
  sent_at       timestamptz not null default now(),
  unique (subscriber_id, post_slug)
);

alter table public.post_sends enable row level security;
revoke all on public.post_sends from anon, authenticated;
grant select, insert, update, delete on public.post_sends to service_role;
