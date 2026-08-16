"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { playChord } from "@/lib/audio";
import type { GuitarNote } from "@/lib/notes";
const sounds: { title: string; caption: string; notes: GuitarNote[] }[] = [
  {
    title: "Ember / Open room",
    caption: "Mahogany · fingerstyle",
    notes: ["E2", "B3", "E4"],
  },
  {
    title: "Nova 61 / Glass",
    caption: "Alnico pickups · clean",
    notes: ["A2", "D3", "G3", "B3"],
  },
  {
    title: "Luna / Sunlight",
    caption: "Cedar top · nylon",
    notes: ["D3", "G3", "B3", "E4"],
  },
];
function Waveform({ playing }: { playing: boolean }) {
  return (
    <div className="wave flex h-8 items-center">
      {Array.from({ length: 20 }, (_, i) => (
        <span
          key={i}
          style={{
            height: `${8 + ((i * 11) % 23)}px`,
            animationDelay: `${i * 0.05}s`,
            animationPlayState: playing ? "running" : "paused",
          }}
        />
      ))}
    </div>
  );
}
export function Gallery() {
  const [playing, setPlaying] = useState<number | null>(null);
  async function select(i: number) {
    setPlaying(i);
    await playChord(sounds[i].notes);
    window.setTimeout(() => setPlaying(null), 1500);
  }
  return (
    <section id="sounds" className="bg-[#101012]">
      <div className="section grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <p className="eyebrow">Sound library</p>
          <h2 className="mt-3 font-display text-5xl leading-none md:text-6xl">
            Find your <i className="text-gold">first note.</i>
          </h2>
          <p className="mt-6 max-w-sm leading-7 text-muted">
            Every model is recorded in our listening room. Press play and make
            the space your own.
          </p>
        </div>
        <div className="space-y-3">
          {sounds.map((sound, i) => (
            <motion.button
              whileHover={{ x: 7 }}
              onClick={() => void select(i)}
              key={sound.title}
              className="glass flex w-full items-center gap-4 rounded-2xl p-5 text-left"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gold text-lg text-ink">
                {playing === i ? "❚❚" : "▶"}
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="font-display text-xl">{sound.title}</h3>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted">
                  {sound.caption}
                </p>
              </div>
              <Waveform playing={playing === i} />
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
