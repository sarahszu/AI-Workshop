// The four skills a task can be tagged with. This list is fixed.
export const SKILLS = ["Reading", "Writing", "Listening", "Speaking"] as const;

export type Skill = (typeof SKILLS)[number];
