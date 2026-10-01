import { redirect } from "next/navigation";
import { createClient } from "../supabase-server";

// The study task list. For now it only shows who is signed in; tasks come
// in Slice 2.
export default async function TasksPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  return (
    <main>
      <h1>Your study tasks</h1>
      <p>Tasks will appear here.</p>
    </main>
  );
}
