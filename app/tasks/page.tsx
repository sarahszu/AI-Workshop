import { redirect } from "next/navigation";
import { createClient } from "../supabase-server";
import AddTaskForm from "./add-task-form";

// The study task list: a form to add a task, then every task you have
// added, each with its skill label. The database only ever hands back
// your own tasks.
export default async function TasksPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const { data: tasks, error } = await supabase
    .from("tasks")
    .select("id, title, skill")
    .order("created_at", { ascending: true });

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
          {tasks.map((task) => (
            <li key={task.id}>
              <span>{task.title}</span>
              <span className="skill-label">{task.skill}</span>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
