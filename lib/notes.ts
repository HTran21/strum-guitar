export const STRING_NOTES = ["E4", "B3", "G3", "D3", "A2", "E2"] as const;
export type GuitarNote = (typeof STRING_NOTES)[number];
