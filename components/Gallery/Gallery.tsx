"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";

const audioSources = [
  "/audio/guitar_sound/Acoustic_Guitar_Sound_Effect.mp3",
  "/audio/guitar_sound/Electric_Guitar_Sound_Effect.mp3",
  "/audio/guitar_sound/Classic_Guitar_Sound_Effect.mp3",
  "/audio/guitar_sound/Ukulele_Melody.mp3",
];

function Waveform({ playing }: { playing: boolean }) {
  return (
    <div className="wave flex h-8 items-center">
      {Array.from({ length: 20 }, (_, index) => (
        <span
          key={index}
          style={{
            height: `${8 + ((index * 11) % 23)}px`,
            animationDelay: `${index * 0.05}s`,
            animationPlayState: playing ? "running" : "paused",
          }}
        />
      ))}
    </div>
  );
}

export function Gallery() {
  const { t } = useLanguage();
  const reduced = useReducedMotion();
  const [playing, setPlaying] = useState<number | null>(null);
  const audio = useRef<HTMLAudioElement | null>(null);
  const copy = t.gallery;
  useEffect(() => () => audio.current?.pause(), []);
  async function select(index: number) {
    if (playing === index) {
      audio.current?.pause();
      setPlaying(null);
      return;
    }
    audio.current?.pause();
    const next = new Audio(audioSources[index]);
    audio.current = next;
    next.addEventListener("ended", () =>
      setPlaying((current) => (current === index ? null : current)),
    );
    setPlaying(index);
    try {
      await next.play();
    } catch {
      setPlaying(null);
    }
  }
  const reveal = {
    initial: reduced ? false : { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  };
  return (
    <section id="sound" className="bg-[#101012]">
      <div className="section grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <motion.div {...reveal}>
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2 className="mt-3 font-display text-5xl leading-none md:text-6xl">
            {copy.before}
            <i className="text-gold">{copy.accent}</i>
          </h2>
          <p className="mt-6 max-w-sm leading-7 text-muted">{copy.body}</p>
          <div className="mt-10 flex items-center gap-2">
            <span className="text-sm font-bold text-gold">
              {copy.headphones}
            </span>
            <img
              src="/images/icon/headphone-symbol.png"
              alt=""
              className="h-[15px] w-auto"
            />
          </div>
        </motion.div>
        <div className="space-y-3">
          {copy.samples.map(([name, caption], index) => (
            <motion.button
              key={audioSources[index]}
              initial={reduced ? false : { opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                delay: index * 0.08,
                duration: 0.52,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={reduced ? undefined : { scale: 1.008 }}
              onClick={() => void select(index)}
              className="glass flex w-full items-center gap-4 rounded-2xl p-5 text-left"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gold text-lg text-ink">
                {playing === index ? "Ⅱ" : "▶"}
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="font-display text-xl">{name}</h3>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted">
                  {caption}
                </p>
              </div>
              <Waveform playing={playing === index} />
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
