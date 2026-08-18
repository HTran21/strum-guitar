"use client";
import { PointerEvent, useRef, useState } from "react";
import { motion } from "framer-motion";
import { STRING_SEGMENTS, useStrum } from "./useStrum";
const widths = [1.1, 1.25, 1.45, 1.65, 1.9, 2.2];
export function GuitarScene() {
  const svg = useRef<SVGSVGElement>(null);
  const strum = useStrum();
  const [hovered, setHovered] = useState<number | null>(null);
  function point(event: PointerEvent<SVGSVGElement>) {
    const box = svg.current?.getBoundingClientRect();
    return box
      ? {
          x: ((event.clientX - box.left) / box.width) * 1000,
          y: ((event.clientY - box.top) / box.height) * 1600,
        }
      : { x: 500, y: 800 };
  }
  function down(event: PointerEvent<SVGSVGElement>) {
    event.currentTarget.setPointerCapture(event.pointerId);
    strum.begin(point(event));
  }
  return (
    <div
      className="relative mx-auto h-full w-full select-none overflow-hidden [mask-image:linear-gradient(to_bottom,transparent_0%,black_26%,black_76%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_26%,black_76%,transparent_100%)]"
      aria-label="Interactive acoustic guitar. Hold and drag across the strings to play."
    >
      <img
        src="/images/guitar.png"
        alt="Acoustic guitar"
        draggable={false}
        className="pointer-events-none h-full w-full object-contain"
      />
      <svg
        ref={svg}
        className="absolute inset-0 h-full w-full touch-none"
        viewBox="0 0 1000 1600"
        preserveAspectRatio="xMidYMid meet"
        onPointerDown={down}
        onPointerMove={(event) => strum.move(point(event))}
        onPointerUp={strum.end}
        onPointerCancel={strum.end}
        onPointerLeave={strum.end}
      >
        {STRING_SEGMENTS.map(({ from, to }, index) => {
          const path = `M${from.x} ${from.y} L${to.x} ${to.y}`,
            middleX = (from.x + to.x) / 2,
            middleY = (from.y + to.y) / 2,
            lit = strum.active === index || hovered === index;
          return (
            <g
              key={path}
              onPointerEnter={() => setHovered(index)}
              onPointerLeave={() => setHovered(null)}
            >
              <motion.path
                d={path}
                fill="none"
                stroke={lit ? "#f8dfae" : "#d8c7a6"}
                strokeWidth={widths[index]}
                strokeLinecap="round"
                animate={
                  strum.active === index
                    ? {
                        d: [
                          path,
                          `M${from.x} ${from.y} Q${middleX - 20} ${middleY} ${to.x} ${to.y}`,
                          `M${from.x} ${from.y} Q${middleX + 16} ${middleY} ${to.x} ${to.y}`,
                          path,
                        ],
                      }
                    : { d: path }
                }
                transition={{ duration: 0.4, ease: "easeOut" }}
                style={{
                  filter: lit
                    ? "drop-shadow(0 0 4px rgba(212,161,93,.8))"
                    : undefined,
                }}
              />
              <path
                d={path}
                fill="none"
                stroke="transparent"
                strokeWidth="24"
                pointerEvents="stroke"
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
