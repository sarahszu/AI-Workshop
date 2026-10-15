# Project state
Last updated: 2026-10-15

## Works
- Next.js site (App Router, TypeScript, plain CSS) is live on Vercel at https://ai-workshop-beta-two.vercel.app/
- Pushing to main on GitHub (sarahszu/AI-Workshop) deploys to Vercel.
- A Supabase project exists and is linked to the repo.
- On the live site, a person can create an account with an email and a password of at least 8 characters.
- A person can log in and log out. A wrong password shows "Wrong email or password".
- A signed-in person sees "Signed in as" and their email at the top of every page, and stays signed in after closing the tab.
- Only signed-in people can open the /tasks page. Anyone else is sent to the Log in page.
- On the /tasks page, a signed-in person can type a study task, choose Reading, Writing, Listening, or Speaking, and click Add. The task appears in their list with its skill label.
- If the text box is empty or no skill is chosen, a message says what is missing and nothing is added.
- Tasks are saved, so they are still there after logging out and back in.
- Each person sees only their own tasks. A different account cannot see them.
- Next to each task, "Add due date" opens a date box; after Save the date shows as "Due Oct 15, 2026" with a Change button. A due date before today shows in red. "Today" comes from the person's own device, so their time zone is used.

## Broken or flaky
- Nothing known yet.

## Environment notes
- The site uses Supabase for sign-in.
- The database has one table, `tasks`, with Row Level Security on, so each user can only read, add and change their own tasks.
- `tasks` has a `due_date` column (a date, empty until set).
- The Supabase URL and public key are set as environment variables in Vercel.
- "Confirm email" is turned off in Supabase, so a new account can sign in straight away.
- Claude Code runs in the browser at claude.ai/code with the repo already selected.

## Next session
- Slice 3 (Due dates) is done. Start Slice 4: task priority.
