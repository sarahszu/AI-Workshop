"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "./supabase-server";
import { SKILLS, type Skill } from "./skills";

// What the Add task form shows after you click Add. On a mistake it keeps
// what you typed so you do not have to type it again.
export type AddTaskState = {
  error: string | null;
  title: string;
  skill: string;
};

export async function addTask(
  _prev: AddTaskState,
  formData: FormData
): Promise<AddTaskState> {
  const title = String(formData.get("title") ?? "").trim();
  const skill = String(formData.get("skill") ?? "");
  const skillChosen = SKILLS.includes(skill as Skill);

  if (!title && !skillChosen) {
    return { error: "Type a task and choose a skill.", title, skill };
  }
  if (!title) return { error: "Type a task.", title, skill };
  if (!skillChosen) return { error: "Choose a skill.", title, skill };

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { error } = await supabase
    .from("tasks")
    .insert({ user_id: user.id, title, skill });

  if (error) {
    return { error: "Could not save the task. Please try again.", title, skill };
  }

  revalidatePath("/tasks");
  return { error: null, title: "", skill: "" };
}
