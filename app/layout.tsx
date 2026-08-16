import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Strum Studio — Hear Before You Buy",
  description: "Instruments with a voice of their own.",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
