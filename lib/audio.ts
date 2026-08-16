"use client";
import * as Tone from "tone";
import type { GuitarNote } from "./notes";
let sampler: Tone.Sampler | null = null;
let fallback: Tone.PolySynth | null = null;
let ready = false;
function instruments() {
  const loadedSampler =
    sampler ??
    (sampler = new Tone.Sampler({
      urls: {
        E2: "E2.mp3",
        A2: "A2.mp3",
        D3: "D3.mp3",
        G3: "G3.mp3",
        B3: "B3.mp3",
        E4: "E4.mp3",
      },
      baseUrl: "/audio/guitar/",
      onload: () => {
        ready = true;
      },
    }).toDestination());
  const synth =
    fallback ??
    (fallback = new Tone.PolySynth(Tone.Synth, {
      oscillator: { type: "triangle" },
      envelope: { attack: 0.008, decay: 0.55, sustain: 0.08, release: 1.2 },
    }).toDestination());
  return { sampler: loadedSampler, fallback: synth };
}
export async function resumeAudio() {
  await Tone.start();
  instruments();
}
export async function preloadAudio() {
  await resumeAudio();
}
export async function playNote(note: GuitarNote) {
  await resumeAudio();
  const { sampler: s, fallback: f } = instruments();
  (ready ? s : f).triggerAttackRelease(note, "1.5");
}
export async function playChord(notes: GuitarNote[]) {
  await resumeAudio();
  const { sampler: s, fallback: f } = instruments();
  (ready ? s : f).triggerAttackRelease(notes, "1.5");
}
