# Supabase setup for the SUT Physics equipment platform

This site can run in two modes:

- Prototype mode: uses browser `localStorage`; no shared database.
- Supabase mode: uses faculty login, shared PostgreSQL tables, and Supabase Storage for equipment photos.

## 1. Create the Supabase project

1. Go to Supabase and create a new project.
2. Open **SQL Editor**.
3. Copy the full contents of [`supabase-schema.sql`](supabase-schema.sql) and run it.

The SQL creates:

- `registry_admins` approved-faculty allowlist table
- `facilities` table
- `equipment` table
- `equipment-photos` storage bucket
- Row Level Security policies

By default, edit access is limited to authenticated users who are both:

- using an email ending with `@sut.ac.th`;
- listed as active in `registry_admins`.

## 2. Configure authentication

In Supabase, open **Authentication → Providers → Email**.

Recommended settings:

- Enable Email provider.
- Enable magic links if you want password-free faculty login.
- Add the GitHub Pages URL to allowed redirect URLs:
  `https://thebeatzzz.github.io/sut-physics-equipment-platform/`

If your faculty use a different email domain, edit both the `registry_admins_sut_email` constraint and the `public.is_sut_editor()` function in `supabase-schema.sql` before running it, or update them in SQL Editor.

## 3. Add approved faculty admins

After running the schema, insert the first approved registry manager directly in Supabase SQL Editor:

```sql
insert into public.registry_admins (email, full_name, role, active)
values ('faculty.name@sut.ac.th', 'Faculty Name', 'admin', true)
on conflict (email) do update set
  full_name = excluded.full_name,
  role = excluded.role,
  active = excluded.active;
```

Add one row per approved faculty member. Only active emails in this table can manage equipment records.

Once the first admin is added, approved admins can also manage this table from Supabase SQL Editor. Do not store this list or any service-role key in the GitHub Pages website.

## 4. Add project credentials to the website

Open [`supabase-config.js`](supabase-config.js) and replace:

```js
url: "https://YOUR-PROJECT-REF.supabase.co",
anonKey: "YOUR-SUPABASE-ANON-KEY",
```

Use values from **Project Settings → API**:

- Project URL, for example `https://your-project-ref.supabase.co`
- anon public key

Use the base Project URL only. Do not paste the REST endpoint ending in `/rest/v1/`.

Do not put the service-role key in this website.

## 5. Seed example records

After publishing the config:

1. Open `admin.html`.
2. Sign in with a pre-approved SUT faculty email.
3. Go to **Data & export**.
4. Click **Seed examples**.

This adds the example Physics equipment and facility records to Supabase.

## 6. Public publishing workflow

The public page shows only equipment where:

- `reviewStatus` is `Verified`
- `publicReady` is checked

The admin page can see all records after sign-in.

## Security note

`admin.html` is still a public file on GitHub Pages. That is normal for a static site. The protection is in Supabase:

- anonymous visitors cannot read draft/internal equipment rows;
- anonymous visitors can read only facilities linked to approved public equipment;
- anonymous visitors cannot edit records;
- only authenticated, active, pre-approved `@sut.ac.th` users in `registry_admins` can manage records and upload photos.

## Magic-link troubleshooting

If a faculty member receives the email but clicking it returns them to the login screen:

1. Confirm **Authentication → URL Configuration** contains the exact admin page URL they are using.
2. Confirm their email is active in `public.registry_admins`.
3. Ask them to open the link in the same browser where they requested it.
4. Refresh the admin page once after the redirect.

The site explicitly exchanges Supabase's `?code=...` callback for a browser session before loading the registry.
