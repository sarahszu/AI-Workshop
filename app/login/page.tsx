import Link from "next/link";
import { logIn } from "../auth-actions";
import AuthForm from "../auth-form";

export default function LogInPage() {
  return (
    <main>
      <h1>Log in</h1>
      <AuthForm action={logIn} buttonLabel="Log in" />
      <p>
        New here? <Link href="/signup">Sign up</Link>
      </p>
    </main>
  );
}
