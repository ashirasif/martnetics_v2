"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  const positionElement = (e: MouseEvent) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    if (!cursorRef.current) return;

    const cursor = cursorRef.current;
    const rect = cursor.getBoundingClientRect();
    const offsetX = rect.width / 2;
    const offsetY = rect.height / 2;

    cursor.style.transform = `translate3d(${mouseX - offsetX}px, ${
      mouseY - offsetY
    }px, 0)`;
  };

  useEffect(() => {
    window.addEventListener("mousemove", positionElement);
    return () => window.removeEventListener("mousemove", positionElement);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none absolute top-0 left-0 z-50 h-8 w-8 rounded-full bg-white/75"
    />
  );
}
