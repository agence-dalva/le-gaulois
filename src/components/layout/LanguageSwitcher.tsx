"use client";

import { useLocale } from "next-intl";
import { useTransition } from "react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export default function LanguageSwitcher({ invert = false }: { invert?: boolean }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const set = (next: string) => {
    if (next === locale) return;
    startTransition(() => {
      router.replace(pathname, { locale: next as "fr" | "en" });
    });
  };

  return (
    <div
      className={`flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.22em] font-light transition-opacity ${
        isPending ? "opacity-60" : ""
      }`}
    >
      {routing.locales.map((l, i) => (
        <span key={l} className="flex items-center gap-2">
          {i > 0 && (
            <span
              className={`h-3 w-px ${invert ? "bg-white/40" : "bg-line"}`}
              aria-hidden
            />
          )}
          <button
            type="button"
            onClick={() => set(l)}
            aria-label={`Switch to ${l}`}
            className={`cursor-pointer transition-colors ${
              l === locale
                ? invert
                  ? "text-white"
                  : "text-ink"
                : invert
                ? "text-white/60 hover:text-white"
                : "text-mist hover:text-ink"
            }`}
          >
            {l.toUpperCase()}
          </button>
        </span>
      ))}
    </div>
  );
}
