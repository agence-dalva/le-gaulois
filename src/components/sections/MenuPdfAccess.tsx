"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "@/components/ui/Reveal";

export default function MenuPdfAccess() {
  const t = useTranslations("menu");
  const [open, setOpen] = useState(false);

  return (
    <section className="relative py-24 lg:py-32 bg-cream">
      <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
        <Reveal>
          <p className="text-[0.72rem] uppercase tracking-[0.4em] text-olive-deep font-light">
            Format original
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 font-display-italic text-4xl lg:text-5xl leading-[1.05] text-ink text-balance">
            Consulter le menu au format PDF
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex items-center gap-3 bg-ink text-cream px-8 py-4 text-xs uppercase tracking-[0.22em] font-medium hover:bg-olive-deep transition-colors duration-500"
            >
              Aperçu
            </button>
            <a
              href="/menu.pdf"
              download
              className="inline-flex items-center gap-3 border border-ink text-ink px-8 py-4 text-xs uppercase tracking-[0.22em] font-light hover:bg-ink hover:text-cream transition-colors duration-500"
            >
              {t("download_pdf")}
            </a>
          </div>
        </Reveal>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-ink/90 backdrop-blur-sm p-4 lg:p-10 flex flex-col"
            onClick={() => setOpen(false)}
          >
            <div className="flex justify-end mb-4">
              <button
                type="button"
                aria-label="Fermer"
                onClick={() => setOpen(false)}
                className="text-cream/80 hover:text-cream text-xs uppercase tracking-[0.22em] font-light flex items-center gap-3"
              >
                Fermer <span className="text-lg">✕</span>
              </button>
            </div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="flex-1 bg-cream overflow-hidden shadow-premium"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src="/menu.pdf#view=FitH"
                className="w-full h-full"
                title="Menu Le Gaulois"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
