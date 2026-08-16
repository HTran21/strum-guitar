import type { Config } from "tailwindcss";
export default { content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"], theme: { extend: { colors: { ink: "#0B0B0D", surface: "#141416", gold: "#D4A15D", cream: "#F5F5F5", muted: "#A8A8A8" }, fontFamily: { display: ["Georgia", "serif"] } } }, plugins: [] } satisfies Config;
