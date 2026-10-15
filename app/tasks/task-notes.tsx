"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { addNote } from "../task-actions";

export type Note = {
  id: string;
  body: string;
  created_at: string;
};

// Turns the saved time into "Oct 15, 2026, 3:05 PM" in your own time zone.
function formatTime(time: string) {
  return new Date(time).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

// The "Notes" part of a task. Click it to open the task's notes, oldest
// first like a comment thread, with a box to add a new note at the bottom.
export default function TaskNotes({
  taskId,
  notes,
}: {
  taskId: string;
  notes: Note[];
}) {
  const formRef = useRef<HTMLFormElement>(null);
  const [showTimes, setShowTimes] = useState(false);
  const [state, formAction, pending] = useActionState(
    addNote.bind(null, taskId),
    { error: null, saved: 0 }
  );

  // Times are shown only once the page is in your browser, so they use
  // your time zone, not the server's.
  useEffect(() => setShowTimes(true), []);

  // Empty the box after each saved note.
  useEffect(() => {
    if (state.saved > 0) formRef.current?.reset();
  }, [state.saved]);

  return (
    <details className="task-notes">
      <summary>Notes ({notes.length})</summary>
      {notes.length === 0 ? (
        <p className="notes-empty">No notes yet.</p>
      ) : (
        <ol className="notes-list">
          {notes.map((note) => (
            <li key={note.id}>
              {showTimes && (
                <time dateTime={note.created_at}>
                  {formatTime(note.created_at)}
                </time>
              )}
              <p>{note.body}</p>
            </li>
          ))}
        </ol>
      )}
      <form ref={formRef} action={formAction} className="add-note-form">
        <textarea
          name="body"
          rows={2}
          maxLength={2000}
          placeholder="Write a note"
          aria-label="New note"
        />
        <button type="submit" disabled={pending}>
          {pending ? "Adding…" : "Add note"}
        </button>
        {state.error && (
          <p className="form-error" role="alert">
            {state.error}
          </p>
        )}
      </form>
    </details>
  );
}
