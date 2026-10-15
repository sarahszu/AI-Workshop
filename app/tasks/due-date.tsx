"use client";

import { useActionState, useEffect, useState } from "react";
import { setDueDate } from "../task-actions";

// Turns 2026-10-15 into "Oct 15, 2026".
function formatDate(date: string) {
  const [year, month, day] = date.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

// Today's date on your own device, as year-month-day.
function todayOnThisDevice() {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${now.getFullYear()}-${month}-${day}`;
}

// The due date next to one task: an "Add due date" button, a date box
// with Save, or the saved date (in red if it has already passed).
export default function DueDate({
  taskId,
  dueDate,
}: {
  taskId: string;
  dueDate: string | null;
}) {
  const [editing, setEditing] = useState(false);
  const [today, setToday] = useState<string | null>(null);
  const [state, formAction, pending] = useActionState(
    setDueDate.bind(null, taskId),
    { error: null, saved: false }
  );

  // Read today's date in the browser, so "past due" uses your time zone,
  // not the server's.
  useEffect(() => setToday(todayOnThisDevice()), []);

  // Close the date box once the date is saved.
  useEffect(() => {
    if (state.saved) setEditing(false);
  }, [state]);

  if (editing) {
    return (
      <form action={formAction} className="due-date-form">
        <input
          type="date"
          name="due_date"
          defaultValue={dueDate ?? ""}
          aria-label="Due date"
        />
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

  if (!dueDate) {
    return (
      <button type="button" onClick={() => setEditing(true)}>
        Add due date
      </button>
    );
  }

  // Dates written as year-month-day sort like words, so a plain "<"
  // tells us whether the due date is before today.
  const pastDue = today !== null && dueDate < today;

  return (
    <span className="due-date">
      <span className={pastDue ? "due-date-text past-due" : "due-date-text"}>
        Due {formatDate(dueDate)}
      </span>
      <button type="button" onClick={() => setEditing(true)}>
        Change
      </button>
    </span>
  );
}
