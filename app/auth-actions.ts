"use server";

import { redirect } from "next/navigation";
import { createClient } from "./supabase-server";

// What the Sign up and Log in forms show when something goes wrong.
export type FormState = { error: string | null };

export async function signUp(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  if (!email) return { error: "Enter your email." };
  if (password.length < 8) {
    return { error: "Password must be at least 8 characters." };
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.signUp({ email, password });

  if (error) {
    if (error.code === "user_already_exists" || error.code === "email_exists") {
      return { error: "An account with that email already exists. Log in instead." };
    }
    return { error: "Could not create the account. Please try again." };
  }

  redirect("/tasks");
}

export async function logIn(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    return { error: "Wrong email or password" };
  }

  redirect("/tasks");
}

export async function logOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/login");
}
