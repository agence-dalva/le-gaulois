"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PageHeader({
  eyebrow,
  title,
  image,
}: {
  eyebrow: string;
  title: string;
  image: string;
}) {
  return (
    <section className="relative h-[70svh] min-h-[460px] bg-ink text-cream overflow-hidden">
      <div className="absolute inset-0 hero-kenburns">
        <Image src={image} alt="" fill priority sizes="100vw" className="object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/30 to-ink/70" />

      <div className="relative h-full flex items-end pb-20">
        <div className="mx-auto max-w-7xl w-full px-6 lg:px-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[0.72rem] uppercase tracking-[0.4em] text-olive font-light"
          >
            {eyebrow}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
            className="mt-6 font-display-italic text-[clamp(3rem,8vw,6.5rem)] leading-[0.95] text-cream"
          >
            {title}
          </motion.h1>
        </div>
      </div>
    </section>
  );
}
