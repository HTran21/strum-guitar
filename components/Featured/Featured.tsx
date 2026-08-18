"use client";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
type Category = "guitars" | "pianos" | "ukuleles" | "accessories";
type Product = {
  name: string;
  type: string;
  price: string;
  description: string;
  image: string;
  tone: string;
};
const images = [
  "/images/product_image/Guitar/Guitar_Acoustic.png",
  "/images/product_image/Guitar/Guitar_Electric.png",
  "/images/product_image/Guitar/Guitar_Classic.png",
  "/images/product_image/Guitar/Ukulele.png",
];
const products: Record<Category, Product[]> = {
  guitars: [
    {
      name: "The Ember",
      type: "Acoustic Guitar",
      price: "$1,249",
      description: "All-solid mahogany warmth, voiced for the room.",
      image: images[0],
      tone: "from-[#7c3d1f] to-[#160f0b]",
    },
    {
      name: "Nova 61",
      type: "Electric Guitar",
      price: "$1,599",
      description: "A fast, articulate modern classic.",
      image: images[1],
      tone: "from-[#b98241] to-[#20150e]",
    },
    {
      name: "Luna Nylon",
      type: "Classical Guitar",
      price: "$1,089",
      description: "Cedar clarity with a hand-finished feel.",
      image: images[2],
      tone: "from-[#d9a966] to-[#2a1b11]",
    },
    {
      name: "Orion",
      type: "Acoustic Guitar",
      price: "$1,429",
      description: "A resonant companion for the long song.",
      image: images[0],
      tone: "from-[#5c301a] to-[#16100b]",
    },
  ],
  pianos: [
    {
      name: "Nocturne",
      type: "Grand Piano",
      price: "$3,890",
      description: "Deep resonance for intimate rooms.",
      image: images[1],
      tone: "from-[#262328] to-[#0d0d0e]",
    },
    {
      name: "Studio 88",
      type: "Stage Piano",
      price: "$1,799",
      description: "Warm response with a precise touch.",
      image: images[2],
      tone: "from-[#433b32] to-[#111112]",
    },
    {
      name: "Forma",
      type: "Digital Piano",
      price: "$1,249",
      description: "Minimal form. Immersive tone.",
      image: images[0],
      tone: "from-[#34302d] to-[#0d0d0d]",
    },
    {
      name: "Sonata",
      type: "Upright Piano",
      price: "$2,540",
      description: "A timeless voice for your home.",
      image: images[1],
      tone: "from-[#35241d] to-[#0d0d0d]",
    },
  ],
  ukuleles: [
    {
      name: "Tide",
      type: "Ukulele",
      price: "$549",
      description: "A small instrument with a generous voice.",
      image: images[3],
      tone: "from-[#65503e] to-[#16120f]",
    },
    {
      name: "Coast",
      type: "Concert Ukulele",
      price: "$629",
      description: "Bright, clear and made for travel.",
      image: images[3],
      tone: "from-[#9b6532] to-[#20130b]",
    },
    {
      name: "Sole",
      type: "Tenor Ukulele",
      price: "$699",
      description: "A sunlit low end with easy warmth.",
      image: images[3],
      tone: "from-[#ad7b42] to-[#21150d]",
    },
    {
      name: "Marea",
      type: "Baritone Ukulele",
      price: "$749",
      description: "A deeper current of colour and tone.",
      image: images[3],
      tone: "from-[#604531] to-[#16110d]",
    },
  ],
  accessories: [
    {
      name: "Arc Strap",
      type: "Leather Strap",
      price: "$89",
      description: "Full-grain leather, made to soften over time.",
      image: images[0],
      tone: "from-[#3d2518] to-[#14100e]",
    },
    {
      name: "Tuner One",
      type: "Chromatic Tuner",
      price: "$39",
      description: "Reliable precision in a compact form.",
      image: images[1],
      tone: "from-[#292a29] to-[#111]",
    },
    {
      name: "Capo 02",
      type: "Capo",
      price: "$49",
      description: "Clean pressure. Clear resonance.",
      image: images[2],
      tone: "from-[#44321f] to-[#15110e]",
    },
    {
      name: "Listening Set",
      type: "Headphones",
      price: "$189",
      description: "Hear every harmonic and overtone.",
      image: images[3],
      tone: "from-[#242326] to-[#101011]",
    },
  ],
};
export function Featured() {
  const [category, setCategory] = useState<Category>("guitars");
  const { locale } = useLanguage();
  const reduced = useReducedMotion();
  const vi = locale === "vi";
  const labels: Record<Category, string> = {
    guitars: vi ? "GUITAR" : "GUITARS",
    pianos: vi ? "PIANO" : "PIANOS",
    ukuleles: "UKULELES",
    accessories: vi ? "PHỤ KIỆN" : "ACCESSORIES",
  };
  return (
    <section id="collection" className="section">
      <motion.div
        initial={reduced ? false : { opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mb-9 flex flex-wrap items-end justify-between gap-5"
      >
        <div>
          <p className="eyebrow">{vi ? "BỘ SƯU TẬP" : "THE COLLECTION"}</p>
          <h2 className="mt-3 font-display text-5xl md:text-6xl">
            {vi ? "Dành cho " : "Made for your "}
            <i className="text-gold">{vi ? "âm thanh của bạn." : "sound."}</i>
          </h2>
        </div>
      </motion.div>
      <motion.div
        initial={reduced ? false : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        role="tablist"
        aria-label="Product categories"
        className="mb-8 flex gap-7 overflow-x-auto border-b border-white/10 text-sm tracking-widest"
      >
        {(Object.keys(labels) as Category[]).map((item) => (
          <button
            key={item}
            role="tab"
            aria-selected={category === item}
            onClick={() => setCategory(item)}
            className={`relative shrink-0 pb-4 transition-colors ${category === item ? "text-gold" : "text-muted hover:text-cream"}`}
          >
            {labels[item]}
            {category === item && (
              <motion.span
                layoutId="category-underline"
                className="absolute inset-x-0 bottom-0 h-px bg-gold"
              />
            )}
          </button>
        ))}
      </motion.div>
      <AnimatePresence mode="wait">
        <motion.div
          key={category}
          initial={reduced ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduced ? undefined : { opacity: 0, y: 8 }}
          transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {products[category].map((product, index) => (
            <motion.article
              key={product.name}
              initial={reduced ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.07, duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
              className="group overflow-hidden rounded-2xl border border-white/5 bg-surface transition-colors hover:border-gold/40 hover:bg-[#19191b]"
            >
              <div
                className={`relative h-64 overflow-hidden bg-gradient-to-br ${product.tone}`}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-contain p-5 transition duration-500 group-hover:scale-105 group-hover:-translate-y-1"
                />
                <span className="absolute bottom-4 left-4 text-xs uppercase tracking-widest text-white/60">
                  {product.type}
                </span>
              </div>
              <div className="p-5">
                <div className="flex justify-between gap-2">
                  <h3 className="font-display text-2xl">{product.name}</h3>
                  <span className="text-gold">{product.price}</span>
                </div>
                <p className="mt-3 min-h-11 text-sm leading-5 text-muted">
                  {product.description}
                </p>
                <button className="mt-5 text-sm font-bold text-cream transition hover:text-gold">
                  {vi ? "Xem chi tiết" : "View Details"}{" "}
                  <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
