"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, type PanInfo } from "framer-motion";

type Props = {
  images: string[];
  startIndex: number;
  onClose: () => void;
};

export default function Lightbox({ images, startIndex, onClose }: Props) {
  const [index, setIndex] = useState(startIndex);
  const [direction, setDirection] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const go = useCallback(
    (delta: number) => {
      setDirection(delta);
      setIndex((i) => (i + delta + images.length) % images.length);
    },
    [images.length],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const onDragEnd = (_: unknown, info: PanInfo) => {
    const threshold = 80;
    if (info.offset.x < -threshold) go(1);
    else if (info.offset.x > threshold) go(-1);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[80] bg-ink/95 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
    >
      {/* Top bar */}
      <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-6 lg:px-10 py-5 text-cream/80">
        <p className="text-[0.72rem] uppercase tracking-[0.4em] font-light">
          {String(index + 1).padStart(2, "0")}
          <span className="mx-2 text-cream/40">/</span>
          {String(images.length).padStart(2, "0")}
        </p>
        <button
          type="button"
          onClick={onClose}
          aria-label="Fermer"
          className="group flex items-center gap-3 text-[0.72rem] uppercase tracking-[0.3em] font-light hover:text-cream transition-colors"
        >
          Fermer
          <span className="relative block w-6 h-6">
            <span className="absolute inset-0 flex items-center justify-center before:content-[''] before:block before:w-5 before:h-px before:bg-current before:rotate-45 after:content-[''] after:block after:w-5 after:h-px after:bg-current after:-rotate-45 after:absolute" />
          </span>
        </button>
      </div>

      {/* Image area */}
      <div
        className="absolute inset-0 flex items-center justify-center px-4 md:px-20"
        onTouchStart={(e) => {
          touchStartX.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (touchStartX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchStartX.current;
          if (Math.abs(dx) > 60) go(dx < 0 ? 1 : -1);
          touchStartX.current = null;
        }}
      >
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={index}
            custom={direction}
            initial={{ opacity: 0, x: direction * 40, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: direction * -40, scale: 0.98 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={onDragEnd}
            className="relative w-full max-w-[min(1400px,92vw)] aspect-[3/2] select-none cursor-grab active:cursor-grabbing"
          >
            <Image
              src={images[index]}
              alt=""
              fill
              sizes="92vw"
              priority
              className="object-contain pointer-events-none"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Prev / Next */}
      <button
        type="button"
        onClick={() => go(-1)}
        aria-label="Image précédente"
        className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 items-center justify-center text-cream/70 hover:text-cream border border-cream/20 hover:border-cream/60 transition-all duration-300"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M15 6l-6 6 6 6" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => go(1)}
        aria-label="Image suivante"
        className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 items-center justify-center text-cream/70 hover:text-cream border border-cream/20 hover:border-cream/60 transition-all duration-300"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M9 6l6 6-6 6" />
        </svg>
      </button>

      {/* Thumbnails */}
      <div className="absolute inset-x-0 bottom-0 pb-5 px-6 lg:px-10">
        <div className="flex gap-2 justify-center overflow-x-auto no-scrollbar">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              aria-label={`Image ${i + 1}`}
              className={`relative flex-shrink-0 w-14 h-14 overflow-hidden transition-all duration-300 ${
                i === index ? "opacity-100 ring-1 ring-olive" : "opacity-40 hover:opacity-80"
              }`}
            >
              <Image src={src} alt="" fill sizes="56px" className="object-cover" />
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
