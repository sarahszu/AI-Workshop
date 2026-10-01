import Link from "next/link";
import { logOut } from "./auth-actions";
import { createClient } from "./supabase-server";

// The bar at the top of every page. Signed out: Sign up and Log in links.
// Signed in: "Signed in as <email>" and a Log out button.
export default async function SiteHeader() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <nav className="site-header">
      <Link href="/">Home</Link>
      {user ? (
        <div className="site-header-right">
          <Link href="/tasks">Tasks</Link>
          <span>Signed in as {user.email}</span>
          <form action={logOut}>
            <button type="submit">Log out</button>
          </form>
        </div>
      ) : (
        <div className="site-header-right">
          <Link href="/signup">Sign up</Link>
          <Link href="/login">Log in</Link>
        </div>
      )}
    </nav>
  );
}
