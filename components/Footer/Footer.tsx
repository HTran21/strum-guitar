"use client";
import { FormEvent, useState } from "react";
export function Footer() {
  const [sent, setSent] = useState(false);
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }
  return (
    <footer className="border-t border-white/10 bg-[#080809]">
      <div className="section grid gap-12 md:grid-cols-2">
        <div>
          <a className="font-display text-3xl" href="#top">
            STRUM <span className="text-gold">STUDIO</span>
          </a>
          <p className="mt-5 max-w-sm leading-7 text-muted">
            Instruments designed for the moments that make you play one more
            song.
          </p>
          <p className="mt-8 text-sm text-muted">
            hello@strumstudio.example
            <br />
            +1 212 555 0148
          </p>
        </div>
        <div>
          <p className="eyebrow">Studio notes</p>
          <h2 className="mt-3 font-display text-3xl">
            A little closer to the music.
          </h2>
          <form
            onSubmit={submit}
            className="mt-5 flex max-w-md rounded-full border border-white/15 p-1"
          >
            <label className="sr-only" htmlFor="email">
              Email address
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="Email address"
              className="min-w-0 flex-1 bg-transparent px-4 text-sm outline-none placeholder:text-muted"
            />
            <button className="rounded-full bg-gold px-5 py-2 text-sm font-bold text-ink">
              {sent ? "Thank you" : "Subscribe"}
            </button>
          </form>
          <div className="mt-10 flex gap-5 text-xs uppercase tracking-[.15em] text-muted">
            <a href="#top">Instagram</a>
            <a href="#top">YouTube</a>
            <a href="#top">Spotify</a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-5 text-center text-xs text-muted">
        © 2026 Strum Studio. Crafted for the next note.
      </div>
    </footer>
  );
}
