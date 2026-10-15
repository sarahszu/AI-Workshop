# Roadmap

## What this is
A study task list for people learning a language. Each task is tagged with one of four skills (Reading, Writing, Listening, Speaking), so a learner can see which skill they have been avoiding.

## What Done means
A stranger opens the live site, creates an account with an email and password, and adds a few study tasks, each tagged Reading, Writing, Listening, or Speaking. They mark some tasks done, and a summary shows how many tasks they finished in each skill over the last 7 days and labels the lowest "Avoided". They can give any task a due date, and a task whose due date has already passed shows that date in red. They can set each task's priority to Low, Normal or High, and High tasks come to the top. When they come back later, their tasks and summary are still there, and no other account can see them. That is the whole project.

## Slices
1. Sign up and log in | done-criteria: (1) In a private browser window, open the site, click Sign up, enter a new email and a password of at least 8 characters, click Create account: you land on /tasks and see "Signed in as" followed by that email. (2) Click Log out: you see the Log in page, and typing /tasks into the address bar sends you back to Log in. (3) On Log in, enter the right email with a wrong password: you see "Wrong email or password" and stay on the Log in page. (4) Log in correctly, close the tab, reopen the site: you still see "Signed in as" with your email without logging in again. | status: DONE
2. Add tasks tagged with a skill | done-criteria: (1) Signed in, type "Read one news article", choose Reading from the skill menu, click Add: the task appears in the list labeled Reading. (2) Click Add with the text box empty or no skill chosen: a message says what is missing and the list does not change. (3) Log out and log back in: every task you added is still there with its skill label. (4) Sign up a second account in a different browser: its list is empty and shows none of the first account's tasks. | status: DONE
3. Due dates | done-criteria: (1) Signed in, next to a task, click "Add due date", type a date, click Save: the date appears next to that task, and it is still there after reloading the page. (2) Add a due date that is already past (for example yesterday): the date appears in red. A date today or later is not red. | status: DONE
4. Task priority | done-criteria: (1) Signed in, next to a task, click "Change priority", choose Low, Normal or High, click Save: the task shows that priority, and it is still there after reloading the page. (2) The priority word is green for Low, orange for Normal and red for High. (3) A task set to High moves above every Normal and Low task. | status: ACTIVE
5. Mark tasks done and see the avoided skill | done-criteria: (1) Tick the box next to a task: it moves under Done and is still under Done after reloading the page. (2) Finish two Reading tasks and nothing else: the summary shows Reading 2, Writing 0, Listening 0, Speaking 0 and labels the three zeros "Avoided". (3) On a brand-new account with nothing finished, the summary says "Finish a task to see which skill you are avoiding" and labels nothing. (4) Untick a finished task: it moves back to the open list and its skill's count goes down by one. | status: NOT STARTED

## Backlog
- Editing task text
- Deleting tasks
- Reminders
- Custom or extra skills (for example Vocabulary, Grammar)
- More than one language per account
- Password reset by email
- Email confirmation at sign-up
- Google or other third-party sign-in
- Streaks, charts, or history longer than 7 days
- Filtering or sorting by skill
- Sharing lists with other people
- Mobile app
- Dark mode
