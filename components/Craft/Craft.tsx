"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";

export function Craft() {
  const { t } = useLanguage();
  const reduced = useReducedMotion();
  const copy = t.craft;

  return (
    <section id="craft" className="relative overflow-hidden bg-[#0f0e0d]">
      <div className="section relative">
        <div className="pointer-events-none absolute right-0 top-16 h-[420px] w-[55%] bg-[radial-gradient(ellipse,rgba(212,161,93,.07),transparent_67%)]" />
        <div className="relative grid items-start gap-10 lg:grid-cols-[.45fr_.55fr] lg:gap-5">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="relative z-10 pt-4 lg:pt-12"
          >
            <p className="text-[10px] font-bold tracking-[.24em] text-gold/80">
              {copy.eyebrow}
            </p>
            <h2 className="mt-7 font-display text-[clamp(2.5rem,3.8vw,4.35rem)] leading-[1.02] tracking-tight">
              <span className="block whitespace-nowrap">{copy.one}</span>
              <i className="ml-[.12em] block whitespace-nowrap text-gold">
                {copy.two}
              </i>
            </h2>
            <motion.p
              initial={reduced ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.55 }}
              className="mt-8 max-w-[26rem] text-sm leading-7 text-muted"
            >
              {copy.body}
            </motion.p>
            <motion.a
              initial={reduced ? false : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.5 }}
              href="#collection"
              className="group mt-8 inline-flex items-center gap-3 text-sm font-bold text-gold transition hover:text-[#f0c781]"
            >
              <span>{copy.link}</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </motion.a>
          </motion.div>
          <motion.div
            initial={reduced ? false : { opacity: 0, scale: 0.985, x: 8 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 0.7, 0.2, 1] }}
            className="relative lg:-ml-3"
          >
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#0f0e0d] via-[#0f0e0d]/35 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#0f0e0d] via-[#0f0e0d]/35 to-transparent" />
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/images/craft/luthier.webp"
                alt="Luthier hand-finishing an acoustic guitar"
                className="h-[340px] w-full object-cover object-[68%_center] sm:h-[440px] lg:h-[540px]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
