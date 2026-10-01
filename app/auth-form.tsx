"use client";

import { useActionState } from "react";
import type { FormState } from "./auth-actions";

// The email + password form shared by the Sign up and Log in pages.
export default function AuthForm({
  action,
  buttonLabel,
  passwordHint,
}: {
  action: (prev: FormState, formData: FormData) => Promise<FormState>;
  buttonLabel: string;
  passwordHint?: string;
}) {
  const [state, formAction, pending] = useActionState(action, { error: null });

  return (
    <form action={formAction} className="auth-form">
      <label>
        Email
        <input type="email" name="email" required autoComplete="email" />
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          required
          minLength={passwordHint ? 8 : undefined}
          autoComplete={passwordHint ? "new-password" : "current-password"}
        />
      </label>
      {passwordHint && <p className="hint">{passwordHint}</p>}
      {state.error && (
        <p className="form-error" role="alert">
          {state.error}
        </p>
      )}
      <button type="submit" disabled={pending}>
        {pending ? "Please wait…" : buttonLabel}
      </button>
    </form>
  );
}
