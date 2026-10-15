"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "./supabase-server";
import { SKILLS, type Skill } from "./skills";
import { PRIORITIES, type Priority } from "./priorities";

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

// What a task's due date form shows after you click Save.
export type DueDateState = {
  error: string | null;
  saved: boolean;
};

export async function setDueDate(
  taskId: string,
  _prev: DueDateState,
  formData: FormData
): Promise<DueDateState> {
  const dueDate = String(formData.get("due_date") ?? "");

  // The date box sends dates as year-month-day, for example 2026-10-15.
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dueDate)) {
    return { error: "Type a date.", saved: false };
  }

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  // The database only lets you change your own tasks, so if this task is
  // not yours nothing comes back and we show an error.
  const { data, error } = await supabase
    .from("tasks")
    .update({ due_date: dueDate })
    .eq("id", taskId)
    .select("id");

  if (error || !data || data.length === 0) {
    return { error: "Could not save the date. Please try again.", saved: false };
  }

  revalidatePath("/tasks");
  return { error: null, saved: true };
}

// What a task's priority form shows after you click Save.
export type PriorityState = {
  error: string | null;
  saved: boolean;
};

export async function setPriority(
  taskId: string,
  _prev: PriorityState,
  formData: FormData
): Promise<PriorityState> {
  const priority = String(formData.get("priority") ?? "");

  if (!PRIORITIES.includes(priority as Priority)) {
    return { error: "Choose a priority.", saved: false };
  }

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  // The database only lets you change your own tasks, so if this task is
  // not yours nothing comes back and we show an error.
  const { data, error } = await supabase
    .from("tasks")
    .update({ priority })
    .eq("id", taskId)
    .select("id");

  if (error || !data || data.length === 0) {
    return {
      error: "Could not save the priority. Please try again.",
      saved: false,
    };
  }

  revalidatePath("/tasks");
  return { error: null, saved: true };
}
