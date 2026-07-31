"use client";

import { useActionState } from "react";
import { loginAction } from "@/app/admin/actions";

export function LoginForm() {
  const [state, formAction, pending] = useActionState(loginAction, { error: "" });

  return (
    <form className="admin-card admin-form" action={formAction}>
      <div className="wide">
        <h1>Admin Login</h1>
        <p>Sign in to manage Aravali Marbles website content.</p>
        {state.error ? <p className="admin-error">{state.error}</p> : null}
      </div>
      <label className="wide">
        Username
        <input name="username" autoComplete="username" defaultValue="aravaliadmin" required />
      </label>
      <label className="wide">
        Password
        <input name="password" type="password" autoComplete="current-password" required />
      </label>
      <button className="admin-button wide" type="submit" disabled={pending}>
        {pending ? "Signing in..." : "Sign in"}
      </button>
    </form>
  );
}
