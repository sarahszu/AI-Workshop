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
- Each task shows its priority as a colored word: Low in green, Normal in orange, High in red. "Change priority" opens a Low / Normal / High menu with Save. New tasks start as Normal. The list is sorted High, then Normal, then Low; tasks with the same priority stay in the order they were added.
- Under each task's name and skill label, one outlined area holds its priority, due date and "Notes (n)". Clicking "Notes (n)" opens that task's notes, oldest first like a comment thread, each with the date and time it was added in the person's own time zone. Typing in the box and clicking "Add note" adds a note to the bottom. An empty note shows "Type a note." Notes can be at most 2000 characters and cannot be edited or deleted.

## Broken or flaky
- Nothing known yet.

## Environment notes
- The site uses Supabase for sign-in.
- The database has two tables, both with Row Level Security on:
  - `tasks`: each user can only read, add and change their own tasks.
  - `tasks` has a `due_date` column (a date, empty until set) and a `priority` column (Low, Normal or High; starts as Normal; the database refuses any other value).
  - `task_notes`: one row per note, linked to its task. Each user can only read their own notes and add notes to their own tasks. Nobody can change or delete a note. Deleting a task deletes its notes.
- The Supabase URL and public key are set as environment variables in Vercel.
- "Confirm email" is turned off in Supabase, so a new account can sign in straight away.
- Claude Code runs in the browser at claude.ai/code with the repo already selected.

## Next session
- Slices 3 (Due dates), 4 (Task priority) and 5 (Notes on a task) are done. Start Slice 6: mark tasks done and see the avoided skill.
