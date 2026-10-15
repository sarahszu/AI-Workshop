// The three priorities a task can have, highest first. This list is fixed.
export const PRIORITIES = ["High", "Normal", "Low"] as const;

export type Priority = (typeof PRIORITIES)[number];
