"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";

const stories = [
  { quote: "It feels like someone finally designed an instrument around the way I listen.", name: "Maya Ellis", role: "Singer-songwriter" },
  { quote: "The detail is honest. One chord and you can tell where the wood came from.", name: "Jon Bell", role: "Session guitarist" },
  { quote: "Strum Studio makes choosing a guitar feel personal again.", name: "Ana Ribeiro", role: "Composer" },
];

export function Testimonials() {
  const { locale } = useLanguage();
  const reduced = useReducedMotion();
  const vi = locale === "vi";
  return <section id="stories" className="section"><motion.div initial={reduced ? false : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: .6, ease: [.22, 1, .36, 1] }}><p className="eyebrow text-center">{vi ? "ĐƯỢC CHƠI BỞI NHỮNG NGƯỜI YÊU ÂM NHẠC" : "PLAYED BY PEOPLE WHO CARE"}</p><h2 className="mt-3 text-center font-display text-5xl md:text-6xl">{vi ? "Những người bạn " : "In good "}<i className="text-gold">{vi ? "đồng điệu." : "company."}</i></h2></motion.div><div className="mt-14 grid gap-4 md:grid-cols-3">{stories.map((story, index) => <motion.figure key={story.name} initial={reduced ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ delay: index * .09, duration: .55, ease: [.22, 1, .36, 1] }} className={`flex min-h-64 flex-col justify-between rounded-2xl border p-7 transition-colors hover:border-gold/30 ${index === 1 ? "border-gold/40 bg-[#191714] md:-translate-y-4" : "border-white/10 bg-[#141416]"}`}><blockquote className="font-display text-2xl leading-8">“{story.quote}”</blockquote><figcaption className="mt-8"><div className="text-sm font-bold">{story.name}</div><div className="mt-1 text-xs uppercase tracking-wider text-muted">{story.role}</div></figcaption></motion.figure>)}</div></section>;
}
