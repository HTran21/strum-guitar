"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
type Locale = "en" | "vi";
const copy = {
  en: {
    nav: ["Guitars", "Ukuleles", "Pianos", "Accessories", "About"],
    eyebrow: "Made to be heard",
    before: "Hear Before",
    buy: "You Buy",
    intro:
      "Put your hand to the strings. Drag across this instrument and let its voice guide your next guitar.",
    shop: "Shop Guitars",
    watch: "Watch Video",
    hold: "Hold + drag on strings to play",
    drag: "Drag across the strings",
    dragInfo: "Hold and drag up or down to play the guitar",
    quality: ["Premium Quality", "Handcrafted\nwith care"],
    wood: ["Solid Wood", "Selected tonewoods\nfor the best sound"],
    setup: ["Lifetime Setup", "Free setup &\nmaintenance"],
    support: ["Expert Support", "We're here for\nyour music"],
    thin: "Thinnest",
    thick: "Thickest",
  },
  vi: {
    nav: ["Guitar", "Ukulele", "Piano", "Phụ kiện", "Về chúng tôi"],
    eyebrow: "Sinh ra để được lắng nghe",
    before: "Nghe Trước",
    buy: "Khi Mua",
    intro:
      "Chạm vào những dây đàn. Kéo qua nhạc cụ này và để âm thanh dẫn lối cho cây đàn tiếp theo của bạn.",
    shop: "Mua Guitar",
    watch: "Xem video",
    hold: "Giữ + kéo trên dây để chơi",
    drag: "Kéo qua các dây đàn",
    dragInfo: "Giữ và kéo lên hoặc xuống để chơi guitar",
    quality: ["Chất lượng cao", "Chế tác\nthủ công"],
    wood: ["Gỗ tuyển chọn", "Gỗ âm thanh\nđược chọn lọc"],
    setup: ["Chỉnh dây trọn đời", "Chỉnh dây &\nbảo dưỡng miễn phí"],
    support: ["Hỗ trợ tận tâm", "Luôn ở đây vì\nâm nhạc của bạn"],
    thin: "Mảnh nhất",
    thick: "Dày nhất",
  },
} as const;
type Copy = {
  nav: readonly string[];
  eyebrow: string;
  before: string;
  buy: string;
  intro: string;
  shop: string;
  watch: string;
  hold: string;
  drag: string;
  dragInfo: string;
  quality: readonly [string, string];
  wood: readonly [string, string];
  setup: readonly [string, string];
  support: readonly [string, string];
  thin: string;
  thick: string;
};
const LanguageContext = createContext<{
  locale: Locale;
  setLocale: (locale: Locale) => void;
  text: Copy;
}>({ locale: "en", setLocale: () => undefined, text: copy.en });
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");
  useEffect(() => {
    const saved = localStorage.getItem("strum-locale") as Locale | null;
    if (saved === "en" || saved === "vi") setLocale(saved);
  }, []);
  const update = (next: Locale) => {
    setLocale(next);
    localStorage.setItem("strum-locale", next);
    document.documentElement.lang = next;
  };
  const value = useMemo(
    () => ({ locale, setLocale: update, text: copy[locale] }),
    [locale],
  );
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
export const useLanguage = () => useContext(LanguageContext);
