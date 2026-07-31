"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import type { AdminActionState } from "@/app/admin/actions";

type AdminAction = (state: AdminActionState, formData: FormData) => Promise<AdminActionState>;

type AdminActionFormProps = {
  action: AdminAction;
  children: React.ReactNode;
  className?: string;
  successReset?: boolean;
};

const initialState: AdminActionState = { ok: false, message: "", error: "" };

export function AdminActionForm({ action, children, className, successReset = false }: AdminActionFormProps) {
  const [state, formAction] = useActionState(action, initialState);
  const [toast, setToast] = useState<AdminActionState>(initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!state.message && !state.error) return;
    setToast(state);
    if (state.ok && successReset) {
      formRef.current?.reset();
    }
    const timer = window.setTimeout(() => setToast(initialState), 4200);
    return () => window.clearTimeout(timer);
  }, [state, successReset]);

  return (
    <form ref={formRef} className={className} action={formAction}>
      {children}
      {toast.message || toast.error ? (
        <div className={`admin-toast ${toast.ok ? "admin-toast--success" : "admin-toast--error"}`} role="status">
          {toast.ok ? toast.message : toast.error}
        </div>
      ) : null}
    </form>
  );
}

export function AdminSubmitButton({
  children,
  pendingText = "Saving...",
  className = "admin-button wide",
}: {
  children: React.ReactNode;
  pendingText?: string;
  className?: string;
}) {
  const { pending } = useFormStatus();

  return (
    <button className={className} type="submit" disabled={pending} aria-busy={pending}>
      {pending ? <span className="admin-spinner" aria-hidden="true" /> : null}
      {pending ? pendingText : children}
    </button>
  );
}
