"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@/i18n/navigation";

const SLIDES = [
  "/images/img-1.jpg",
  "/images/img-3.jpg",
  "/images/img-6.jpg",
  "/images/img-7.jpg",
] as const;

const DURATION = 6000;

export default function Hero() {
  const t = useTranslations("hero");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % SLIDES.length),
      DURATION,
    );
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-ink text-cream">
      {/* Slider */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false} mode="sync">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.6, ease: [0.45, 0, 0.15, 1] }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 hero-kenburns">
              <Image
                src={SLIDES[index]}
                alt=""
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </motion.div>
        </AnimatePresence>
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/25 to-ink/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/50 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        <div className="flex-1 flex items-center">
          <div className="mx-auto max-w-7xl w-full px-6 lg:px-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex items-center gap-5"
            >
              <span className="block h-px w-14 bg-olive" aria-hidden />
              <p className="text-sm md:text-base uppercase tracking-[0.38em] text-olive font-light">
                {t("eyebrow")}
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.4, delay: 0.8 }}
              className="mt-6 font-display text-[clamp(3.5rem,10vw,8.5rem)] leading-[0.95] text-cream text-balance"
            >
              <motion.span
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
                className="block font-display-italic"
              >
                {t("title")}
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.2 }}
              className="mt-4 font-display-italic text-xl md:text-2xl text-cream/85"
            >
              — {t("subtitle")}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.4 }}
              className="mt-8 max-w-xl text-base md:text-lg font-light text-cream/80 leading-relaxed text-balance"
            >
              {t("tagline")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.6 }}
              className="mt-12 flex flex-wrap items-center gap-4"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 bg-cream text-ink px-8 py-4 text-xs uppercase tracking-[0.22em] font-medium hover:bg-olive transition-colors duration-500"
              >
                {t("cta_reserve")}
                <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="/menu"
                className="group inline-flex items-center gap-3 border border-cream/60 text-cream px-8 py-4 text-xs uppercase tracking-[0.22em] font-light hover:bg-cream hover:text-ink transition-colors duration-500"
              >
                {t("cta_menu")}
                <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">→</span>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Bottom bar: slide indicators + scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="relative z-10 pb-10"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-end justify-between gap-6">
            <div className="flex gap-3">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Slide ${i + 1}`}
                  className="h-px w-12 bg-cream/30 relative overflow-hidden cursor-pointer"
                >
                  <span
                    className={`absolute inset-y-0 left-0 bg-cream transition-all ${
                      i === index ? "w-full" : "w-0"
                    }`}
                    style={{
                      transition: i === index ? `width ${DURATION}ms linear` : "width 0.4s",
                    }}
                  />
                </button>
              ))}
            </div>
            <div className="hidden md:flex items-center gap-4 text-[0.7rem] uppercase tracking-[0.3em] text-cream/70 font-light">
              <span>Scroll</span>
              <span className="block h-10 w-px bg-cream/40" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
