"use client";

import { useActionState, useEffect, useState } from "react";
import { setPriority } from "../task-actions";
import { PRIORITIES } from "../priorities";

// The priority next to one task: the colored word (Low, Normal or High)
// with a "Change priority" button, or a menu with Save.
export default function TaskPriority({
  taskId,
  priority,
}: {
  taskId: string;
  priority: string;
}) {
  const [editing, setEditing] = useState(false);
  const [state, formAction, pending] = useActionState(
    setPriority.bind(null, taskId),
    { error: null, saved: false }
  );

  // Close the menu once the priority is saved.
  useEffect(() => {
    if (state.saved) setEditing(false);
  }, [state]);

  if (editing) {
    return (
      <form action={formAction} className="priority-form">
        <select name="priority" defaultValue={priority} aria-label="Priority">
          {PRIORITIES.map((choice) => (
            <option key={choice} value={choice}>
              {choice}
            </option>
          ))}
        </select>
        <button type="submit" disabled={pending}>
          {pending ? "Saving…" : "Save"}
        </button>
        {state.error && (
          <p className="form-error" role="alert">
            {state.error}
          </p>
        )}
      </form>
    );
  }

  return (
    <span className="priority">
      <span className={`priority-text priority-${priority.toLowerCase()}`}>
        {priority}
      </span>
      <button type="button" onClick={() => setEditing(true)}>
        Change priority
      </button>
    </span>
  );
}
