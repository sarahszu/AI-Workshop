import { redirect } from "next/navigation";
import { createClient } from "../supabase-server";
import AddTaskForm from "./add-task-form";
import DueDate from "./due-date";
import TaskPriority from "./task-priority";
import { PRIORITIES, type Priority } from "../priorities";

// The study task list: a form to add a task, then every task you have
// added, each with its priority, due date and skill label. High
// priority tasks come first. The database only ever hands back your own
// tasks.
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
      {error ? (
        <p className="form-error">Could not load your tasks. Please reload.</p>
      ) : tasks.length === 0 ? (
        <p>No tasks yet. Add your first one above.</p>
      ) : (
        <ul className="task-list">
          {sortedTasks.map((task) => (
            <li key={task.id}>
              <span className="task-title">{task.title}</span>
              <TaskPriority taskId={task.id} priority={task.priority} />
              <DueDate taskId={task.id} dueDate={task.due_date} />
              <span className="skill-label">{task.skill}</span>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
