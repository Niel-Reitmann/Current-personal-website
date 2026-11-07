-- Subscribers table for the website email list.
-- Run this once in the Supabase dashboard: SQL Editor -> New query -> paste -> Run.

create table public.subscribers (
  id                uuid        primary key default gen_random_uuid(),
  email             text        not null unique,
  created_at        timestamptz not null default now(),
  confirmed_at      timestamptz,                         -- set when they click the confirmation link (phase 2)
  unsubscribed_at   timestamptz,                         -- set when they unsubscribe
  unsubscribe_token uuid        not null default gen_random_uuid(),
  source            text        not null default 'website',
  constraint subscribers_email_lowercase check (email = lower(email)),
  constraint subscribers_email_shape check (position('@' in email) > 1 and length(email) <= 254)
);

-- Row Level Security: ON, with no policies.
-- That means the public (anon) key can neither read nor write this table.
-- Only the server, using the secret service-role key, can touch it.
alter table public.subscribers enable row level security;

-- Explicit permissions (needed if "Automatically expose new tables" was turned off
-- when the project was created, and harmless if it was left on):
-- the public-facing roles get nothing; only the server's service_role can use the table.
revoke all on public.subscribers from anon, authenticated;
grant select, insert, update, delete on public.subscribers to service_role;
