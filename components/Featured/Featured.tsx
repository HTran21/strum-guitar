"use client";
import { motion } from "framer-motion";
const instruments = [
  {
    name: "The Ember",
    type: "Acoustic Guitar",
    price: "$1,249",
    tone: "from-[#7c3d1f] to-[#160f0b]",
    description: "All-solid mahogany warmth, voiced for the room.",
  },
  {
    name: "Nova 61",
    type: "Electric Guitar",
    price: "$1,599",
    tone: "from-[#b98241] to-[#20150e]",
    description: "A fast, articulate modern classic.",
  },
  {
    name: "Luna Nylon",
    type: "Classical Guitar",
    price: "$1,089",
    tone: "from-[#d9a966] to-[#2a1b11]",
    description: "Cedar clarity with a hand-finished feel.",
  },
  {
    name: "Tide",
    type: "Ukulele",
    price: "$549",
    tone: "from-[#65503e] to-[#16120f]",
    description: "A small instrument with a generous voice.",
  },
];
export function Featured() {
  return (
    <section id="collection" className="section">
      <div className="mb-12 flex flex-wrap items-end justify-between gap-5">
        <div>
          <p className="eyebrow">The collection</p>
          <h2 className="mt-3 font-display text-5xl md:text-6xl">
            Made for your <i className="text-gold">sound.</i>
          </h2>
        </div>
        <a className="text-sm text-gold" href="#sounds">
          View all instruments →
        </a>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {instruments.map((item, index) => (
          <motion.article
            key={item.name}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            whileHover={{ y: -8 }}
            className="group overflow-hidden rounded-3xl bg-surface"
          >
            <div
              className={`relative h-64 overflow-hidden bg-gradient-to-br ${item.tone}`}
            >
              <div className="absolute left-1/2 top-1/2 h-40 w-24 -translate-x-1/2 -translate-y-1/2 rounded-[48%] border-[7px] border-[#2d160d] bg-[#9d592d] shadow-2xl before:absolute before:left-1/2 before:top-[-85px] before:h-24 before:w-4 before:-translate-x-1/2 before:bg-[#32190d] after:absolute after:left-1/2 after:top-1/2 after:h-9 after:w-9 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-[#150d09]" />
              <span className="absolute bottom-4 left-4 text-xs uppercase tracking-widest text-white/60">
                {item.type}
              </span>
            </div>
            <div className="p-5">
              <div className="flex justify-between gap-2">
                <h3 className="font-display text-2xl">{item.name}</h3>
                <span className="text-gold">{item.price}</span>
              </div>
              <p className="mt-3 min-h-11 text-sm leading-5 text-muted">
                {item.description}
              </p>
              <button className="mt-5 text-sm font-bold text-cream transition group-hover:text-gold">
                View Details <span className="ml-2">→</span>
              </button>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
