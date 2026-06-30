create table if not exists public.classes (
  id uuid primary key default gen_random_uuid(),
  class_code text not null unique,
  teacher_name text,
  created_at timestamptz not null default now()
);

create table if not exists public.students (
  id uuid primary key default gen_random_uuid(),
  student_key text not null unique,
  class_code text not null,
  name text not null,
  grade int not null,
  stats jsonb not null default '{}'::jsonb,
  topic_stats jsonb not null default '{}'::jsonb,
  mistake_book jsonb not null default '[]'::jsonb,
  question_times jsonb not null default '[]'::jsonb,
  assignments jsonb not null default '[]'::jsonb,
  updated_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);

create table if not exists public.attempts (
  id bigint primary key generated always as identity,
  student_key text not null,
  class_code text not null,
  name text not null,
  grade int not null,
  topic text not null,
  question_id text not null,
  is_correct boolean not null,
  is_blank boolean not null,
  spent_seconds int not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists public.mistakes (
  id bigint primary key generated always as identity,
  student_key text not null,
  class_code text not null,
  question_id text not null,
  grade int not null,
  topic text not null,
  status text not null default 'Bekliyor',
  miss_count int not null default 1,
  question jsonb not null,
  updated_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  unique(student_key, question_id)
);

create table if not exists public.custom_questions (
  id text primary key,
  class_code text not null,
  grade int not null,
  topic text not null,
  difficulty text not null,
  outcome text,
  text text not null,
  stem text not null,
  options jsonb not null,
  answer text not null,
  solution text not null,
  wrong text,
  strategy text not null,
  hint text,
  created_at timestamptz not null default now()
);

alter table public.classes enable row level security;
alter table public.students enable row level security;
alter table public.attempts enable row level security;
alter table public.mistakes enable row level security;
alter table public.custom_questions enable row level security;

drop policy if exists "anon classroom read" on public.classes;
drop policy if exists "anon classroom write" on public.classes;
drop policy if exists "anon students read" on public.students;
drop policy if exists "anon students write" on public.students;
drop policy if exists "anon attempts read" on public.attempts;
drop policy if exists "anon attempts write" on public.attempts;
drop policy if exists "anon mistakes read" on public.mistakes;
drop policy if exists "anon mistakes write" on public.mistakes;
drop policy if exists "anon custom questions read" on public.custom_questions;
drop policy if exists "anon custom questions write" on public.custom_questions;

create policy "anon classroom read" on public.classes for select to anon using (true);
create policy "anon classroom write" on public.classes for insert to anon with check (true);

create policy "anon students read" on public.students for select to anon using (true);
create policy "anon students write" on public.students for all to anon using (true) with check (true);

create policy "anon attempts read" on public.attempts for select to anon using (true);
create policy "anon attempts write" on public.attempts for insert to anon with check (true);

create policy "anon mistakes read" on public.mistakes for select to anon using (true);
create policy "anon mistakes write" on public.mistakes for all to anon using (true) with check (true);

create policy "anon custom questions read" on public.custom_questions for select to anon using (true);
create policy "anon custom questions write" on public.custom_questions for all to anon using (true) with check (true);

grant usage on schema public to anon;
grant select, insert, update, delete on public.classes to anon;
grant select, insert, update, delete on public.students to anon;
grant select, insert on public.attempts to anon;
grant select, insert, update, delete on public.mistakes to anon;
grant select, insert, update, delete on public.custom_questions to anon;
grant usage, select on all sequences in schema public to anon;
