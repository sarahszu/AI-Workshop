# Project state
Last updated: 2026-10-01

## Works
- Next.js site (App Router, TypeScript, plain CSS) is live on Vercel at https://ai-workshop-beta-two.vercel.app/
- Pushing to main on GitHub (sarahszu/AI-Workshop) deploys to Vercel.
- A Supabase project exists and is linked to the repo.
- On the live site, a person can create an account with an email and a password of at least 8 characters.
- A person can log in and log out. A wrong password shows "Wrong email or password".
- A signed-in person sees "Signed in as" and their email at the top of every page, and stays signed in after closing the tab.
- Only signed-in people can open the /tasks page. Anyone else is sent to the Log in page. The page has no tasks on it yet.

## Broken or flaky
- Nothing known yet.

## Environment notes
- The site uses Supabase for sign-in. There are no database tables yet.
- The Supabase URL and public key are set as environment variables in Vercel.
- "Confirm email" is turned off in Supabase, so a new account can sign in straight away.
- Claude Code runs in the browser at claude.ai/code with the repo already selected.

## Next session
- Start Slice 2: add tasks tagged with a skill.
