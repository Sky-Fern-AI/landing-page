-- Create waitlist table to store early access signups
create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null unique,
  company text not null,
  role text,
  created_at timestamp with time zone default now()
);

-- Create index on email for faster lookups
create index if not exists waitlist_email_idx on public.waitlist(email);

-- Create index on created_at for sorting
create index if not exists waitlist_created_at_idx on public.waitlist(created_at desc);
