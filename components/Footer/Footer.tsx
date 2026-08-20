"use client";
import { motion, useReducedMotion } from "framer-motion";
import { FormEvent, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
export function Footer() {
  const { t } = useLanguage();
  const reduced = useReducedMotion();
  const copy = t.footer;
  const [sent, setSent] = useState(false);
  const reveal = (index: number) => ({
    initial: reduced ? false : { opacity: 0, y: 14 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: {
      delay: index * 0.07,
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  });
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }
  return (
    <footer id="about" className="border-t border-white/10 bg-[#080809]">
      <div className="section grid gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_.7fr_.8fr_1.2fr]">
        <motion.div {...reveal(0)}>
          <a className="font-display text-3xl" href="#top">
            STRUM <span className="text-gold">STUDIO</span>
          </a>
          <p className="mt-5 max-w-sm leading-7 text-muted">
            {copy.description}
          </p>
          <p className="mt-7 text-sm leading-6 text-muted">
            hello@strumstudio.example
            <br />
            +1 212 555 0148
          </p>
        </motion.div>
        <motion.div {...reveal(1)}>
          <p className="eyebrow">{copy.shop}</p>
          <div className="mt-4 space-y-3 text-sm text-muted">
            {copy.shopLinks.map((item) => (
              <a
                key={item}
                href="#collection"
                className="block transition hover:text-gold"
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
        <motion.div {...reveal(2)}>
          <p className="eyebrow">{copy.support}</p>
          <div className="mt-4 space-y-3 text-sm text-muted">
            {copy.supportLinks.map((item) => (
              <a
                key={item}
                href="#about"
                className="block transition hover:text-gold"
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
        <motion.div {...reveal(3)}>
          <p className="eyebrow">{copy.notes}</p>
          <h2 className="mt-3 font-display text-3xl">{copy.title}</h2>
          <form
            onSubmit={submit}
            className="mt-5 flex rounded-full border border-white/15 p-1"
          >
            <label className="sr-only" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder={copy.email}
              className="min-w-0 flex-1 bg-transparent px-4 text-sm outline-none placeholder:text-muted"
            />
            <button className="rounded-full bg-gold px-5 py-2 text-sm font-bold text-ink">
              {sent ? copy.thanks : copy.subscribe}
            </button>
          </form>
          <div className="mt-7 flex gap-5 text-xs uppercase tracking-[.15em] text-muted">
            <a href="#top">Instagram</a>
            <a href="#top">YouTube</a>
            <a href="#top">Spotify</a>
          </div>
        </motion.div>
      </div>
      <div className="border-t border-white/10 px-6 py-5 text-center text-xs text-muted">
        © 2026 STRUM STUDIO · {copy.copyright}
      </div>
    </footer>
  );
}
