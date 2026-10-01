"use client";

import { useActionState } from "react";
import { addTask } from "../task-actions";
import { SKILLS } from "../skills";

// The text box, skill menu and Add button above the task list.
export default function AddTaskForm() {
  const [state, formAction, pending] = useActionState(addTask, {
    error: null,
    title: "",
    skill: "",
  });

  return (
    <form action={formAction} className="add-task-form">
      <label>
        Task
        <input
          type="text"
          name="title"
          defaultValue={state.title}
          placeholder="Read one news article"
        />
      </label>
      <label>
        Skill
        <select name="skill" defaultValue={state.skill}>
          <option value="">Choose a skill</option>
          {SKILLS.map((skill) => (
            <option key={skill} value={skill}>
              {skill}
            </option>
          ))}
        </select>
      </label>
      <button type="submit" disabled={pending}>
        {pending ? "Adding…" : "Add"}
      </button>
      {state.error && (
        <p className="form-error" role="alert">
          {state.error}
        </p>
      )}
    </form>
  );
}
