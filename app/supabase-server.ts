import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

// Makes a Supabase connection for code that runs on the server (pages and
// form actions). It reads and writes the sign-in cookies so Supabase knows
// who is signed in.
export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // Pages are not allowed to set cookies. That is fine: the
            // middleware keeps the sign-in cookies fresh instead.
          }
        },
      },
    }
  );
}
