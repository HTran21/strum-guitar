"use client";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { Lora } from "next/font/google";
import { GuitarScene } from "./GuitarScene";
import { useLanguage } from "@/components/LanguageProvider";

const headerLora = Lora({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500"],
});

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
  const { locale, setLocale, text } = useLanguage();
  const reduced = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const benefits = [
    ["♢", ...text.quality],
    ["▥", ...text.wood],
    ["⌁", ...text.setup],
    ["◉", ...text.support],
  ];
  const strings = [
    ["1", "E₄", text.thin],
    ["2", "B3", ""],
    ["3", "G3", ""],
    ["4", "D3", ""],
    ["5", "A2", ""],
    ["6", "E2", text.thick],
  ];
  return (
    <section
      id="top"
      className="relative min-h-[760px] overflow-hidden  bg-[#09090a] lg:h-[min(100vh,860px)]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_63%_58%,#704316_0%,#21140d_25%,transparent_53%),radial-gradient(ellipse_at_84%_22%,#3d2410_0%,transparent_29%)]" />
      <div className="grain" />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[15] h-44 bg-gradient-to-b from-[#09090a] via-[#09090a]/95 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[15] h-44 bg-gradient-to-t from-[#09090a] via-[#09090a]/70 to-transparent" />
      <nav
        className={`fixed inset-x-0 top-0 z-50 h-[74px] w-full transition duration-500 ${scrolled ? "border-b border-white/10 bg-[#0b0b0d]/90 backdrop-blur-md" : "bg-transparent"}`}
      >
        <div className="mx-auto grid h-full w-full max-w-[1440px] grid-cols-[1fr_auto] items-center px-6 lg:grid-cols-[1fr_auto_1fr] lg:px-12">
          <motion.a
            initial={reduced ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`${headerLora.className} flex whitespace-nowrap text-lg tracking-wide text-cream`}
            href="#top"
          >
            <img
              src="/images/icon/guitar_logo.png"
              alt="Acoustic guitar"
              draggable={false}
              className="mr-3 h-[25px]"
            />
            STRUM STUDIO
          </motion.a>
          <motion.div
            initial={reduced ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="hidden gap-9 text-[13px] font-medium tracking-[.02em] text-white/70 lg:flex"
          >
            {[
              ["#collection", locale === "vi" ? "Bộ sưu tập" : "Collection"],
              ["#craft", locale === "vi" ? "Chế tác" : "Craft"],
              ["#sound", locale === "vi" ? "Âm thanh" : "Sound"],
              ["#stories", locale === "vi" ? "Câu chuyện" : "Stories"],
              ["#about", locale === "vi" ? "Về chúng tôi" : "About"],
            ].map(([href, label]) => (
              <a
                key={href}
                className={`${headerLora.className} transition hover:text-gold`}
                href={href}
              >
                {label}
              </a>
            ))}
          </motion.div>
          <motion.div
            initial={reduced ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-self-end gap-7 text-white/90"
          >
            <button
              onClick={() => setLocale(locale === "en" ? "vi" : "en")}
              aria-label="Change language"
              className="text-[11px] font-semibold tracking-[.08em] text-gold"
            >
              {locale === "en" ? "VI" : "EN"}
            </button>
            <a
              href="#collection"
              className={`${headerLora.className} group hidden items-center gap-3 text-[13px] font-semibold text-gold transition hover:text-[#f0c781] sm:inline-flex`}
            >
              Explore Instruments
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </motion.div>
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
            {text.eyebrow}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 65, delay: 0.2 }}
            className="mt-5 font-display text-[3.6rem] leading-[.91] tracking-tight sm:text-7xl"
          >
            {text.before}
            <br />
            <i className="text-gold">{text.buy}</i>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mt-6 max-w-[340px] text-sm leading-6 text-muted"
          >
            {text.intro}
          </motion.p>
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.62, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 flex items-center gap-6"
          >
            <motion.a
              whileHover={{ scale: 1.04 }}
              href="#collection"
              className="rounded-full bg-gold px-6 py-3 text-sm font-bold text-[#16100a]"
            >
              {text.shop} <span className="ml-3">›</span>
            </motion.a>
            <button className="flex items-center gap-3 text-sm text-gold">
              <span className="grid h-10 w-10 place-items-center rounded-full border border-gold text-xs">
                ▶
              </span>
              {text.watch}
            </button>
          </motion.div>
          <motion.p
            initial={reduced ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.74, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 text-[10px] font-bold uppercase tracking-[.16em] text-muted"
          >
            {text.hold}
          </motion.p>
        </div>
        <motion.div
          initial={reduced ? false : { opacity: 0, scale: 0.97, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.38, duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none absolute left-[38%] top-[-465px] z-10 hidden h-[1520px] w-[950px] lg:block [mask-image:linear-gradient(to_bottom,transparent_0%,black_15%,black_78%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_15%,black_78%,transparent_100%)]"
        >
          <div className="pointer-events-auto h-full w-full">
            <GuitarScene />
          </div>
        </motion.div>
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
          {strings.map(([number, note, detail], index) => (
            <motion.div
              key={note}
              initial={reduced ? false : { opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.92 + index * 0.06, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex items-center gap-3 text-xs before:absolute before:right-[calc(100%+12px)] before:top-1/2 before:h-px before:w-[190px] before:-translate-y-1/2 before:bg-gradient-to-r before:from-gold/0 before:via-gold/35 before:to-gold/70"
            >
              <span className="grid h-5 w-5 place-items-center rounded-full bg-[#e6c18d] text-[10px] font-bold text-ink">
                {number}
              </span>
              <span className="font-bold text-gold">{note}</span>
              {detail && <span className="text-muted">({detail})</span>}
            </motion.div>
          ))}
        </div>
        <div className="absolute bottom-11 left-[68px] z-20 hidden gap-0 lg:flex">
          {benefits.map(([icon, title, description], index) => (
            <motion.div
              key={title}
              initial={reduced ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.08 + index * 0.07, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="w-[125px] border-r border-white/10 px-4 first:pl-0 last:border-0"
            >
              <div className="text-2xl text-gold">{icon}</div>
              <h3 className="mt-3 text-xs font-bold text-gold">{title}</h3>
              <p className="mt-2 whitespace-pre-line text-xs leading-5 text-muted">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.36, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="absolute bottom-12 right-8 z-20 hidden w-52 rounded-2xl border border-white/10 bg-black/25 p-7 text-center shadow-2xl backdrop-blur-sm lg:block"
        >
          <div className="text-4xl text-gold">☝</div>
          <p className="mt-4 text-xs font-bold uppercase tracking-[.1em] text-gold">
            {text.drag}
            <br />
            the strings
          </p>
          <p className="mt-3 text-xs leading-5 text-muted">{text.dragInfo}</p>
        </motion.div>
        <motion.div
          initial={reduced ? false : { opacity: 0, scale: 0.97, y: 22 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-10 h-[500px] overflow-hidden sm:h-[620px] lg:hidden [mask-image:linear-gradient(to_bottom,transparent_0%,black_28%,black_100%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_28%,black_100%)]"
        >
          <div className="absolute left-1/2 top-[-170px] h-[900px] w-[563px] -translate-x-1/2 sm:top-[-210px] sm:h-[1080px] sm:w-[675px]">
            <GuitarScene />
          </div>
          <div className="pointer-events-none absolute inset-0 z-10 bg-black/20" />
          <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-[#09090a]/70 via-transparent to-[#09090a]/85" />
        </motion.div>
      </div>
    </section>
  );
}
