import Link from "next/link";
import { signUp } from "../auth-actions";
import AuthForm from "../auth-form";

export default function SignUpPage() {
  return (
    <main>
      <h1>Sign up</h1>
      <AuthForm
        action={signUp}
        buttonLabel="Create account"
        passwordHint="At least 8 characters."
      />
      <p>
        Already have an account? <Link href="/login">Log in</Link>
      </p>
    </main>
  );
}
