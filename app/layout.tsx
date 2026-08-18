import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";
export const metadata: Metadata = {
  title: "Strum Studio — Hear Before You Buy",
  description: "Instruments with a voice of their own.",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning><LanguageProvider>{children}</LanguageProvider></body>
    </html>
  );
}
