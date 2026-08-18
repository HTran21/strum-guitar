"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";

const samples = [
  {
    en: "Ember / Open room",
    enCaption: "Mahogany · fingerstyle",
    vi: "Ember / Phòng mộc",
    viCaption: "Gỗ gụ · fingerstyle",
    src: "/audio/guitar_sound/Acoustic_Guitar_Sound_Effect.mp3",
  },
  {
    en: "Nova 61 / Glass",
    enCaption: "Alnico pickups · clean",
    vi: "Nova 61 / Trong trẻo",
    viCaption: "Pickup Alnico · clean",
    src: "/audio/guitar_sound/Electric_Guitar_Sound_Effect.mp3",
  },
  {
    en: "Luna / Sunlight",
    enCaption: "Cedar top · nylon",
    vi: "Luna / Ánh nắng",
    viCaption: "Mặt gỗ cedar · dây nylon",
    src: "/audio/guitar_sound/Classic_Guitar_Sound_Effect.mp3",
  },
  {
    en: "Tide / Island air",
    enCaption: "Ukulele · bright",
    vi: "Tide / Hơi thở đảo xa",
    viCaption: "Ukulele · tươi sáng",
    src: "/audio/guitar_sound/Ukulele_Melody.mp3",
  },
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
  const { locale } = useLanguage();
  const reduced = useReducedMotion();
  const vi = locale === "vi";
  const [playing, setPlaying] = useState<number | null>(null);
  const audio = useRef<HTMLAudioElement | null>(null);
  useEffect(() => () => audio.current?.pause(), []);
  async function select(index: number) {
    if (playing === index) {
      audio.current?.pause();
      setPlaying(null);
      return;
    }
    audio.current?.pause();
    const next = new Audio(samples[index].src);
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
          <p className="eyebrow">
            {vi ? "Thư viện âm thanh" : "Sound library"}
          </p>
          <h2 className="mt-3 font-display text-5xl leading-none md:text-6xl">
            {vi ? "Tìm " : "Find your "}
            <i className="text-gold">
              {vi ? "nốt nhạc đầu tiên." : "first note."}
            </i>
          </h2>
          <p className="mt-6 max-w-sm leading-7 text-muted">
            {vi
              ? "Mỗi mẫu đàn được thu âm tỉ mỉ trong phòng nghe chuyên dụng của chúng tôi. Hãy nhấn phát, nhắm mắt lại và biến không gian quanh bạn thành buổi hòa nhạc riêng."
              : "Every model is meticulously recorded in our custom-built listening room. Just press play, close your eyes, and transform your surroundings into your own personal concert hall."}
          </p>
          <div className="mt-10 flex items-center gap-2">
            <span className="text-sm font-bold text-gold">
              {vi ? "NÊN DÙNG TAI NGHE" : "HEADPHONES RECOMMENDED"}
            </span>
            <img
              src="/images/icon/headphone-symbol.png"
              alt=""
              className="h-[15px] w-auto"
            />
          </div>
        </motion.div>
        <div className="space-y-3">
          {samples.map((sample, index) => (
            <motion.button
              key={sample.en}
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
                <h3 className="font-display text-xl">
                  {vi ? sample.vi : sample.en}
                </h3>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted">
                  {vi ? sample.viCaption : sample.enCaption}
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
