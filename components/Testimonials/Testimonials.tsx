"use client";
import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";
export function Testimonials() {
  const { t } = useLanguage();
  const reduced = useReducedMotion();
  const copy = t.stories;
  return (
    <section id="stories" className="section">
      <motion.div
        initial={reduced ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="eyebrow text-center">{copy.eyebrow}</p>
        <h2 className="mt-3 text-center font-display text-5xl md:text-6xl">
          {copy.before}
          <i className="text-gold">{copy.accent}</i>
        </h2>
      </motion.div>
      <div className="mt-14 grid gap-4 md:grid-cols-3">
        {copy.items.map(([quote, name, role], index) => (
          <motion.figure
            key={name}
            initial={reduced ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              delay: index * 0.09,
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`flex min-h-64 flex-col justify-between rounded-2xl border p-7 transition-colors hover:border-gold/30 ${index === 1 ? "border-gold/40 bg-[#191714] md:-translate-y-4" : "border-white/10 bg-[#141416]"}`}
          >
            <blockquote className="font-display text-2xl leading-8">
              “{quote}”
            </blockquote>
            <figcaption className="mt-8">
              <div className="text-sm font-bold">{name}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-muted">
                {role}
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
