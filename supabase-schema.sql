-- Supabase setup for the SUT Physics equipment platform.
-- Run this in Supabase SQL Editor, then edit `supabase-config.js` with your
-- Project URL and anon public key.

create extension if not exists pgcrypto;

create table if not exists public.registry_admins (
  email text primary key,
  full_name text,
  role text not null default 'faculty' check (role in ('faculty', 'manager', 'admin')),
  active boolean not null default true,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.registry_admins
  drop constraint if exists registry_admins_sut_email;

alter table public.registry_admins
  add constraint registry_admins_sut_email
  check (
    lower(btrim(email)) like '%@sut.ac.th'
    or lower(btrim(email)) like '%@g.sut.ac.th'
  );

create table if not exists public.facilities (
  id text primary key,
  name text not null,
  building text,
  room text,
  lead text,
  description text,
  color text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.faculty (
  id text primary key,
  name text not null,
  title text,
  email text,
  office text,
  phone text,
  bio text,
  research_interests jsonb not null default '[]'::jsonb,
  highlights jsonb not null default '[]'::jsonb,
  activities jsonb not null default '[]'::jsonb,
  recognitions jsonb not null default '[]'::jsonb,
  profile_links jsonb not null default '{}'::jsonb,
  color text,
  public_ready boolean not null default true,
  owner_email text,
  sample boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.equipment (
  id text primary key,
  name text not null,
  asset_code text,
  manufacturer text,
  model text,
  category text,
  description varchar(800),
  facility_id text references public.facilities(id) on update cascade on delete set null,
  room text,
  custodian text,
  email text,
  research_group text,
  acquisition_year integer,
  status text not null default 'Operational',
  access text not null default 'Shared by arrangement',
  last_maintenance date,
  next_maintenance date,
  safety text,
  public_ready boolean not null default false,
  review_status text not null default 'Draft' check (review_status in ('Draft', 'Submitted', 'Verified')),
  submitter_name text,
  submitter_email text,
  submitter_notes text,
  feature_photo jsonb,
  gallery jsonb not null default '[]'::jsonb,
  sample boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists equipment_public_idx
  on public.equipment (review_status, public_ready);

create index if not exists equipment_facility_idx
  on public.equipment (facility_id);

create index if not exists faculty_public_idx
  on public.faculty (public_ready);

create index if not exists faculty_owner_email_idx
  on public.faculty (lower(owner_email));

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists facilities_set_updated_at on public.facilities;
create trigger facilities_set_updated_at
before update on public.facilities
for each row execute function public.set_updated_at();

drop trigger if exists equipment_set_updated_at on public.equipment;
create trigger equipment_set_updated_at
before update on public.equipment
for each row execute function public.set_updated_at();

drop trigger if exists faculty_set_updated_at on public.faculty;
create trigger faculty_set_updated_at
before update on public.faculty
for each row execute function public.set_updated_at();

drop trigger if exists registry_admins_set_updated_at on public.registry_admins;
create trigger registry_admins_set_updated_at
before update on public.registry_admins
for each row execute function public.set_updated_at();

create or replace function public.is_sut_editor()
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  with current_identity as (
    select lower(btrim(coalesce(
      nullif(auth.jwt() ->> 'email', ''),
      nullif(auth.jwt() -> 'user_metadata' ->> 'email', ''),
      ''
    ))) as email
  )
  select exists (
    select 1
    from public.registry_admins
    cross join current_identity
    where lower(btrim(registry_admins.email)) = current_identity.email
      and registry_admins.active = true
      and (
        current_identity.email like '%@sut.ac.th'
        or current_identity.email like '%@g.sut.ac.th'
      )
  );
$$;

revoke all on function public.is_sut_editor() from public;
grant execute on function public.is_sut_editor() to anon, authenticated;

alter table public.registry_admins enable row level security;
alter table public.facilities enable row level security;
alter table public.faculty enable row level security;
alter table public.equipment enable row level security;

drop policy if exists "Approved admins can read admin list" on public.registry_admins;
create policy "Approved admins can read admin list"
on public.registry_admins for select
to authenticated
using (public.is_sut_editor());

drop policy if exists "Approved admins can manage admin list" on public.registry_admins;
create policy "Approved admins can manage admin list"
on public.registry_admins for all
to authenticated
using (public.is_sut_editor())
with check (public.is_sut_editor());

drop policy if exists "Public can read facilities" on public.facilities;
create policy "Public can read facilities"
on public.facilities for select
to anon
using (true);

drop policy if exists "SUT editors can read all facilities" on public.facilities;
create policy "SUT editors can read all facilities"
on public.facilities for select
to authenticated
using (public.is_sut_editor());

drop policy if exists "SUT editors can manage facilities" on public.facilities;
create policy "SUT editors can manage facilities"
on public.facilities for all
to authenticated
using (public.is_sut_editor())
with check (public.is_sut_editor());

drop policy if exists "Public can read public faculty profiles" on public.faculty;
create policy "Public can read public faculty profiles"
on public.faculty for select
to anon
using (public_ready = true);

drop policy if exists "SUT editors can read all faculty profiles" on public.faculty;
create policy "SUT editors can read all faculty profiles"
on public.faculty for select
to authenticated
using (public.is_sut_editor());

drop policy if exists "SUT editors can manage faculty profiles" on public.faculty;
create policy "SUT editors can manage faculty profiles"
on public.faculty for all
to authenticated
using (public.is_sut_editor())
with check (public.is_sut_editor());

drop policy if exists "Public can read approved equipment" on public.equipment;
create policy "Public can read approved equipment"
on public.equipment for select
to anon
using (review_status = 'Verified' and public_ready = true);

drop policy if exists "SUT editors can read all equipment" on public.equipment;
create policy "SUT editors can read all equipment"
on public.equipment for select
to authenticated
using (public.is_sut_editor());

drop policy if exists "SUT editors can insert equipment" on public.equipment;
create policy "SUT editors can insert equipment"
on public.equipment for insert
to authenticated
with check (public.is_sut_editor());

drop policy if exists "SUT editors can update equipment" on public.equipment;
create policy "SUT editors can update equipment"
on public.equipment for update
to authenticated
using (public.is_sut_editor())
with check (public.is_sut_editor());

drop policy if exists "SUT editors can delete equipment" on public.equipment;
create policy "SUT editors can delete equipment"
on public.equipment for delete
to authenticated
using (public.is_sut_editor());

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'equipment-photos',
  'equipment-photos',
  true,
  5242880,
  array['image/jpeg', 'image/png', 'image/webp']
)
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "Public can read equipment photos" on storage.objects;
create policy "Public can read equipment photos"
on storage.objects for select
to anon, authenticated
using (bucket_id = 'equipment-photos');

drop policy if exists "SUT editors can upload equipment photos" on storage.objects;
create policy "SUT editors can upload equipment photos"
on storage.objects for insert
to authenticated
with check (bucket_id = 'equipment-photos' and public.is_sut_editor());

drop policy if exists "SUT editors can update equipment photos" on storage.objects;
create policy "SUT editors can update equipment photos"
on storage.objects for update
to authenticated
using (bucket_id = 'equipment-photos' and public.is_sut_editor())
with check (bucket_id = 'equipment-photos' and public.is_sut_editor());

drop policy if exists "SUT editors can delete equipment photos" on storage.objects;
create policy "SUT editors can delete equipment photos"
on storage.objects for delete
to authenticated
using (bucket_id = 'equipment-photos' and public.is_sut_editor());
