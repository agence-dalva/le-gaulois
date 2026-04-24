"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import Lightbox from "@/components/ui/Lightbox";

const IMAGES = [
  "/images/img-9.jpg",
  "/images/img-10.jpg",
  "/images/img-6.jpg",
  "/images/img-7.jpg",
  "/images/img-3.jpg",
  "/images/img-1.jpg",
  "/images/img-2.jpg",
  "/images/img-5.jpg",
  "/images/img-8.jpg",
];

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const reduce = useReducedMotion();

  return (
    <section className="relative py-20 lg:py-28 bg-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-2xl mb-14 lg:mb-20">
          <p className="text-[0.72rem] uppercase tracking-[0.4em] text-olive-deep font-light">
            Galerie
          </p>
          <h2 className="mt-6 font-display-italic text-5xl lg:text-6xl leading-[1.05] text-ink">
            L&apos;art de la table
          </h2>
        </Reveal>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
          {IMAGES.map((src, i) => (
            <motion.button
              key={src}
              type="button"
              onClick={() => setOpenIndex(i)}
              aria-label={`Ouvrir l'image ${i + 1}`}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 30, scale: 0.98 }}
              whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.9,
                delay: (i % 3) * 0.08 + Math.floor(i / 3) * 0.05,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="group relative mb-4 block w-full cursor-pointer overflow-hidden break-inside-avoid"
            >
              <Image
                src={src}
                alt=""
                width={900}
                height={900}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="w-full h-auto object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
              />
              <span className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-colors duration-500" />
              <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="w-12 h-12 border border-cream/70 flex items-center justify-center text-cream">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {openIndex !== null && (
          <Lightbox
            images={IMAGES}
            startIndex={openIndex}
            onClose={() => setOpenIndex(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
