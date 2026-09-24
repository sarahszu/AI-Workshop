# Project state
Last updated: 2026-09-23

## Works
- Next.js site (App Router, TypeScript, plain CSS) is live on Vercel at https://ai-workshop-beta-two.vercel.app/
- Pushing to main on GitHub (sarahszu/AI-Workshop) deploys to Vercel.
- A Supabase project exists and is linked to the repo.

## Broken or flaky
- Nothing known yet.

## Environment notes
- The site does not use Supabase yet: no sign-in, no database tables.
- Not yet confirmed: whether the Supabase URL and public key are set as environment variables in Vercel.
- Claude Code runs in the browser at claude.ai/code with the repo already selected.

## Next session
- Decide whether to turn off "Confirm email" in Supabase. Supabase's built-in email service likely only sends to members of the Supabase team, so strangers may never get a confirmation email.
- Check that the Supabase environment variables are set in Vercel.
- Start Slice 1: sign up and log in.
