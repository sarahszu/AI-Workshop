# Roadmap

## What this is
A study task list for people learning a language. Each task is tagged with one of four skills (Reading, Writing, Listening, Speaking), so a learner can see which skill they have been avoiding.

## What Done means
A stranger opens the live site, creates an account with an email and password, and adds a few study tasks, each tagged Reading, Writing, Listening, or Speaking. They mark some tasks done, and a summary shows how many tasks they finished in each skill over the last 7 days and labels the lowest "Avoided". When they come back later, their tasks and summary are still there, and no other account can see them. That is the whole project.

## Slices
1. Sign up and log in | done-criteria: (1) In a private browser window, open the site, click Sign up, enter a new email and a password of at least 8 characters, click Create account: you land on /tasks and see "Signed in as" followed by that email. (2) Click Log out: you see the Log in page, and typing /tasks into the address bar sends you back to Log in. (3) On Log in, enter the right email with a wrong password: you see "Wrong email or password" and stay on the Log in page. (4) Log in correctly, close the tab, reopen the site: you still see "Signed in as" with your email without logging in again. | status: ACTIVE
2. Add tasks tagged with a skill | done-criteria: (1) Signed in, type "Read one news article", choose Reading from the skill menu, click Add: the task appears in the list labeled Reading. (2) Click Add with the text box empty or no skill chosen: a message says what is missing and the list does not change. (3) Log out and log back in: every task you added is still there with its skill label. (4) Sign up a second account in a different browser: its list is empty and shows none of the first account's tasks. | status: pending
3. Mark tasks done and see the avoided skill | done-criteria: (1) Tick the box next to a task: it moves under Done and is still under Done after reloading the page. (2) Finish two Reading tasks and nothing else: the summary shows Reading 2, Writing 0, Listening 0, Speaking 0 and labels the three zeros "Avoided". (3) On a brand-new account with nothing finished, the summary says "Finish a task to see which skill you are avoiding" and labels nothing. (4) Untick a finished task: it moves back to the open list and its skill's count goes down by one. | status: pending

## Backlog
- Editing task text
- Deleting tasks
- Due dates and reminders
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
