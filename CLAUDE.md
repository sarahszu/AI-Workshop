# CLAUDE.md

## Stack
- Next.js with the App Router, TypeScript, plain CSS (no CSS frameworks)
- Supabase for sign-in and the database
- Deployed on Vercel; merging to main deploys the live site

## Commands
- `npm run dev` starts the site locally
- `npm run build` checks the site builds; run it before saying a change is done
- `npm run lint` checks code style

## Never
- Add a dependency without asking first.
- Edit .env or any environment variable.
- Change auth configuration without saying what is changing and why.
- Create new top-level folders.
- Put passwords, API keys, or connection strings in code or chat.
- Use real personal data; fake names and fake content only.
- Work on anything outside the ACTIVE slice.

## Conventions
- Every Supabase table has Row Level Security turned on, so each user can only read and write their own rows.
- Skills are a fixed list: Reading, Writing, Listening, Speaking.
- Keep changes small, and explain every change in plain language for someone with no coding background.
- Show what changed and stop before committing, unless the prompt explicitly says to commit.

## Current focus
See roadmap.md. Work only on the slice marked ACTIVE.
