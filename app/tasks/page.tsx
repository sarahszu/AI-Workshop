import { redirect } from "next/navigation";
import { createClient } from "../supabase-server";
import AddTaskForm from "./add-task-form";
import DueDate from "./due-date";
import TaskPriority from "./task-priority";
import TaskNotes, { type Note } from "./task-notes";
import { PRIORITIES, type Priority } from "../priorities";

// The study task list: a form to add a task, then every task you have
// added. Each task shows its name and skill label, and underneath, in one
// area, its priority, due date and notes. High priority tasks come first.
// The database only ever hands back your own tasks and notes.
export default async function TasksPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const { data: tasks, error } = await supabase
    .from("tasks")
    .select("id, title, skill, due_date, priority")
    .order("created_at", { ascending: true });

  const { data: notes, error: notesError } = await supabase
    .from("task_notes")
    .select("id, task_id, body, created_at")
    .order("created_at", { ascending: true });

  // Sort the notes into one pile per task, oldest first.
  const notesByTask = new Map<string, Note[]>();
  for (const note of notes ?? []) {
    const pile = notesByTask.get(note.task_id) ?? [];
    pile.push(note);
    notesByTask.set(note.task_id, pile);
  }

  // Put High first, then Normal, then Low. Tasks with the same priority
  // stay in the order you added them.
  const rank = (priority: string) => PRIORITIES.indexOf(priority as Priority);
  const sortedTasks = [...(tasks ?? [])].sort(
    (a, b) => rank(a.priority) - rank(b.priority)
  );

  return (
    <main>
      <h1>Your study tasks</h1>
      <AddTaskForm />
      {error || notesError ? (
        <p className="form-error">Could not load your tasks. Please reload.</p>
      ) : sortedTasks.length === 0 ? (
        <p>No tasks yet. Add your first one above.</p>
      ) : (
        <ul className="task-list">
          {sortedTasks.map((task) => (
            <li key={task.id}>
              <div className="task-top">
                <span className="task-title">{task.title}</span>
                <span className="skill-label">{task.skill}</span>
              </div>
              <div className="task-details">
                <TaskPriority taskId={task.id} priority={task.priority} />
                <DueDate taskId={task.id} dueDate={task.due_date} />
                <TaskNotes
                  taskId={task.id}
                  notes={notesByTask.get(task.id) ?? []}
                />
              </div>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
