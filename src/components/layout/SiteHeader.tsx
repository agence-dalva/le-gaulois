"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Link, usePathname } from "@/i18n/navigation";
import LanguageSwitcher from "./LanguageSwitcher";

export default function SiteHeader() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const links = [
    { href: "/", label: t("home") },
    { href: "/restaurant", label: t("restaurant") },
    { href: "/menu", label: t("menu") },
    { href: "/contact", label: t("contact") },
  ] as const;

  const isHome = pathname === "/";
  const transparent = isHome && !scrolled && !open;

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-[background,backdrop-filter,border-color] duration-500 ${
        transparent
          ? "bg-transparent border-b border-transparent"
          : "bg-cream/85 backdrop-blur-md border-b border-line/60"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 lg:h-24 grid grid-cols-[auto_1fr_auto] lg:flex items-center lg:justify-between gap-4">
        {/* Mobile burger (left) */}
        <button
          type="button"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 cursor-pointer transition-colors justify-self-start ${
            transparent ? "text-white" : "text-ink"
          }`}
        >
          <span
            className={`block h-px w-6 bg-current transition-transform duration-300 ${
              open ? "translate-y-1.5 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-current transition-opacity duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-px w-6 bg-current transition-transform duration-300 ${
              open ? "-translate-y-1.5 -rotate-45" : ""
            }`}
          />
        </button>

        {/* Logo (centered on mobile, left on desktop) */}
        <Link
          href="/"
          aria-label="Le Gaulois — Accueil"
          className={`font-display-italic text-2xl lg:text-3xl tracking-tight transition-colors duration-500 justify-self-center lg:justify-self-start ${
            transparent ? "text-white" : "text-ink"
          }`}
        >
          Le Gaulois
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              data-active={pathname === l.href}
              className={`nav-link text-[0.78rem] uppercase tracking-[0.22em] font-light transition-colors duration-500 ${
                transparent ? "text-white/90 hover:text-white" : "text-ink-soft hover:text-ink"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Desktop right cluster */}
        <div className="hidden lg:flex items-center gap-6">
          <LanguageSwitcher invert={transparent} />
          <Link
            href="/contact"
            className={`text-[0.78rem] uppercase tracking-[0.22em] font-light px-5 py-2.5 border transition-colors duration-500 ${
              transparent
                ? "border-white/60 text-white hover:bg-white hover:text-ink"
                : "border-ink text-ink hover:bg-ink hover:text-cream"
            }`}
          >
            {t("reserve")}
          </Link>
        </div>

        {/* Mobile language switcher (right) */}
        <div className="lg:hidden justify-self-end">
          <LanguageSwitcher invert={transparent} />
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 top-20 bg-cream z-40"
          >
            <nav className="flex flex-col px-8 pt-10 gap-8">
              {links.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                >
                  <Link
                    href={l.href}
                    className="font-display text-4xl text-ink"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.4 }}
                className="pt-6 border-t border-line flex items-center justify-between"
              >
                <LanguageSwitcher />
                <Link
                  href="/contact"
                  className="text-xs uppercase tracking-[0.22em] px-5 py-3 border border-ink text-ink"
                >
                  {t("reserve")}
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
