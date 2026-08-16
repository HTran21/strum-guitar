# Strum Studio

A premium interactive guitar landing page built with Next.js 15, React 19, React Three Fiber, Framer Motion, and Tone.js.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Drag across the strings in the hero while holding the pointer to strum. Keyboard users can navigate all marketing controls; the 3D strumming gesture is pointer-first by design.

## Production assets

The working demo uses a procedural guitar and a Tone.js synth fallback. Add a licensed `public/models/guitar.glb` and six recorded note files under `public/audio/guitar/` (see the included README files) to use production assets. The sampler picks them up automatically.
