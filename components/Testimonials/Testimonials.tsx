"use client";
import { motion } from "framer-motion";
const quotes = [
  [
    "“It feels like someone finally designed an instrument around the way I listen.”",
    "Maya Ellis",
    "Singer-songwriter",
  ],
  [
    "“The detail is honest. One chord and you can tell where the wood came from.”",
    "Jon Bell",
    "Session guitarist",
  ],
  [
    "“Strum Studio makes choosing a guitar feel personal again.”",
    "Ana Ribeiro",
    "Composer",
  ],
];
export function Testimonials() {
  return (
    <section id="journal" className="section">
      <p className="eyebrow text-center">Played by people who care</p>
      <h2 className="mt-3 text-center font-display text-5xl md:text-6xl">
        In good <i className="text-gold">company.</i>
      </h2>
      <div className="mt-14 grid gap-4 md:grid-cols-3">
        {quotes.map(([quote, name, role], i) => (
          <motion.figure
            key={name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass flex min-h-64 flex-col justify-between rounded-3xl p-7"
          >
            <blockquote className="font-display text-2xl leading-8">
              {quote}
            </blockquote>
            <figcaption>
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
