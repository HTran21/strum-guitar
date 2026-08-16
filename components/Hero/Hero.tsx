"use client";
import { motion } from "framer-motion";
import { GuitarScene } from "./GuitarScene";

const strings = [
  ["1", "E₄", "Thinnest"],
  ["2", "B3", ""],
  ["3", "G3", ""],
  ["4", "D3", ""],
  ["5", "A2", ""],
  ["6", "E2", "Thickest"],
];
const benefits = [
  ["♢", "Premium Quality", "Handcrafted\nwith care"],
  ["▥", "Solid Wood", "Selected tonewoods\nfor the best sound"],
  ["⌁", "Lifetime Setup", "Free setup &\nmaintenance"],
  ["◉", "Expert Support", "We're here for\nyour music"],
];
export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[760px] overflow-hidden border-b border-white/15 bg-[#09090a] lg:h-[min(100vh,860px)]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_63%_58%,#704316_0%,#21140d_25%,transparent_53%),radial-gradient(ellipse_at_84%_22%,#3d2410_0%,transparent_29%)]" />
      <div className="grain" />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[15] h-44 bg-gradient-to-b from-[#09090a] via-[#09090a]/95 to-transparent" />
      <nav className="absolute z-30 flex w-full items-center justify-between px-6 py-6 lg:px-12">
        <a
          className="font-display text-lg tracking-wide text-cream"
          href="#top"
        >
          <span className="mr-3 text-2xl text-gold">♧</span>STRUM STUDIO
        </a>
        <div className="hidden gap-10 font-display text-sm text-white/90 lg:flex">
          <a href="#collection">Guitars</a>
          <a href="#collection">Ukuleles</a>
          <a href="#collection">Pianos</a>
          <a href="#collection">Accessories</a>
          <a href="#journal">About</a>
        </div>
        <div className="flex gap-5 text-lg text-white/90">
          <button aria-label="Search">⌕</button>
          <button aria-label="Account">◎</button>
          <button aria-label="Bag">♧</button>
        </div>
      </nav>
      <div className="relative mx-auto h-full max-w-[1440px] px-6 pt-32 lg:px-[68px]">
        <div className="relative z-20 max-w-[430px] pt-8 lg:pt-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="eyebrow"
          >
            Made to be heard
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 65, delay: 0.2 }}
            className="mt-5 font-display text-[3.6rem] leading-[.91] tracking-tight sm:text-7xl"
          >
            Hear Before
            <br />
            You <i className="text-gold">Buy</i>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mt-6 max-w-[340px] text-sm leading-6 text-muted"
          >
            Put your hand to the strings. Drag across this instrument and let
            its voice guide your next guitar.
          </motion.p>
          <div className="mt-7 flex items-center gap-6">
            <motion.a
              whileHover={{ scale: 1.04 }}
              href="#collection"
              className="rounded-full bg-gold px-6 py-3 text-sm font-bold text-[#16100a]"
            >
              Shop Guitars <span className="ml-3">›</span>
            </motion.a>
            <button className="flex items-center gap-3 text-sm text-gold">
              <span className="grid h-10 w-10 place-items-center rounded-full border border-gold text-xs">
                ▶
              </span>
              Watch Video
            </button>
          </div>
          <p className="mt-5 text-[10px] font-bold uppercase tracking-[.16em] text-muted">
            Hold + drag on strings to play
          </p>
        </div>
        <div className="pointer-events-none absolute left-[38%] top-[-465px] z-10 hidden h-[1520px] w-[950px] lg:block [mask-image:linear-gradient(to_bottom,transparent_0%,black_15%,black_78%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_15%,black_78%,transparent_100%)]">
          <div className="pointer-events-auto h-full w-full">
            <GuitarScene />
          </div>
        </div>
        <svg
          className="pointer-events-none absolute inset-0 z-[16] hidden h-full w-full lg:block"
          viewBox="0 0 1440 860"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {[1068, 1051, 1035, 1019, 1003, 987].map((startX, index) => {
            const y = 214 + index * 32;
            return (
              <path
                key={startX}
                d={`M${startX} ${y} H1253`}
                stroke="url(#string-callout)"
                strokeWidth="1"
              />
            );
          })}
          <defs>
            <linearGradient id="string-callout" x1="0" x2="1">
              <stop offset="0" stopColor="#d4a15d" stopOpacity=".8" />
              <stop offset="1" stopColor="#d4a15d" stopOpacity=".3" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute right-[0%] top-[204px] z-20 hidden w-[175px] space-y-3 lg:block">
          {strings.map(([number, note, detail]) => (
            <div
              key={note}
              className="relative flex items-center gap-3 text-xs before:absolute before:right-[calc(100%+12px)] before:top-1/2 before:h-px before:w-[190px] before:-translate-y-1/2 before:bg-gradient-to-r before:from-gold/0 before:via-gold/35 before:to-gold/70"
            >
              <span className="grid h-5 w-5 place-items-center rounded-full bg-[#e6c18d] text-[10px] font-bold text-ink">
                {number}
              </span>
              <span className="font-bold text-gold">{note}</span>
              {detail && <span className="text-muted">({detail})</span>}
            </div>
          ))}
        </div>
        <div className="absolute bottom-11 left-[68px] z-20 hidden gap-0 lg:flex">
          {benefits.map(([icon, title, description]) => (
            <div
              key={title}
              className="w-[125px] border-r border-white/10 px-4 first:pl-0 last:border-0"
            >
              <div className="text-2xl text-gold">{icon}</div>
              <h3 className="mt-3 text-xs font-bold text-gold">{title}</h3>
              <p className="mt-2 whitespace-pre-line text-xs leading-5 text-muted">
                {description}
              </p>
            </div>
          ))}
        </div>
        <div className="absolute bottom-12 right-8 z-20 hidden w-52 rounded-2xl border border-white/10 bg-black/25 p-7 text-center shadow-2xl backdrop-blur-sm lg:block">
          <div className="text-4xl text-gold">☝</div>
          <p className="mt-4 text-xs font-bold uppercase tracking-[.1em] text-gold">
            Drag across
            <br />
            the strings
          </p>
          <p className="mt-3 text-xs leading-5 text-muted">
            Hold and drag up or down to play the guitar
          </p>
        </div>
        <div className="relative mt-10 h-[560px] sm:h-[680px] lg:hidden">
          <GuitarScene />
        </div>
      </div>
    </section>
  );
}
