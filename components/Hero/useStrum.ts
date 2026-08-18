"use client";
import { useCallback, useRef, useState } from "react";
import { playNote } from "@/lib/audio";
import { STRING_NOTES } from "@/lib/notes";
type Point = { x: number; y: number };
type Segment = { from: Point; to: Point };
// E4 to E2: light strings sit to the right; the thick low E is far left.
export const STRING_SEGMENTS: Segment[] = [
  { from: { x: 528, y: 76 }, to: { x: 544, y: 1214 } },
  { from: { x: 520, y: 76 }, to: { x: 527, y: 1214 } },
  { from: { x: 506, y: 76 }, to: { x: 510, y: 1214 } },
  { from: { x: 492, y: 76 }, to: { x: 492, y: 1214 } },
  { from: { x: 480, y: 76 }, to: { x: 475, y: 1214 } },
  { from: { x: 470, y: 76 }, to: { x: 457, y: 1214 } },
];
function intersection(a: Point, b: Point, segment: Segment) {
  const rx = b.x - a.x,
    ry = b.y - a.y,
    sx = segment.to.x - segment.from.x,
    sy = segment.to.y - segment.from.y,
    cross = rx * sy - ry * sx;
  if (Math.abs(cross) < 0.001) return null;
  const qx = segment.from.x - a.x,
    qy = segment.from.y - a.y,
    t = (qx * sy - qy * sx) / cross,
    u = (qx * ry - qy * rx) / cross;
  return t >= 0 && t <= 1 && u >= 0 && u <= 1 ? t : null;
}
export function useStrum() {
  const pressed = useRef(false),
    previous = useRef<Point | null>(null);
  const [active, setActive] = useState<number | null>(null);
  const strike = useCallback((index: number) => {
    setActive(index);
    void playNote(STRING_NOTES[index]);
    window.setTimeout(
      () => setActive((current) => (current === index ? null : current)),
      420,
    );
  }, []);
  const begin = useCallback((point: Point) => {
    pressed.current = true;
    previous.current = point;
  }, []);
  const move = useCallback(
    (point: Point) => {
      const from = previous.current;
      previous.current = point;
      if (!pressed.current || !from) return;
      STRING_SEGMENTS.map((segment, index) => ({
        index,
        position: intersection(from, point, segment),
      }))
        .filter(
          (hit): hit is { index: number; position: number } =>
            hit.position !== null,
        )
        .sort((a, b) => a.position - b.position)
        .forEach((hit) => strike(hit.index));
    },
    [strike],
  );
  const end = useCallback(() => {
    pressed.current = false;
    previous.current = null;
  }, []);
  return { begin, move, end, active };
}
