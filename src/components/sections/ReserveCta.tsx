import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import Reveal from "@/components/ui/Reveal";

export default function ReserveCta() {
  const t = useTranslations();
  return (
    <section className="relative py-28 lg:py-40 overflow-hidden">
      <Image
        src="/images/img-3.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover -z-10"
      />
      <div className="absolute inset-0 bg-ink/70 -z-10" />

      <div className="relative mx-auto max-w-4xl px-6 lg:px-10 text-center text-cream">
        <Reveal>
          <p className="text-[0.72rem] uppercase tracking-[0.4em] text-olive font-light">
            {t("reserveCta.eyebrow")}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 font-display-italic text-5xl lg:text-7xl leading-[0.95]">
            {t("reserveCta.title")}
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-xl mx-auto text-base md:text-lg font-light text-cream/80 text-balance">
            {t("reserveCta.body")}
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${t("contact.phone").replace(/\s/g, "")}`}
              className="inline-flex items-center gap-3 bg-cream text-ink px-8 py-4 text-xs uppercase tracking-[0.22em] font-medium hover:bg-olive transition-colors duration-500"
            >
              {t("contact.cta_call")} — {t("contact.phone")}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 border border-cream/60 text-cream px-8 py-4 text-xs uppercase tracking-[0.22em] font-light hover:bg-cream hover:text-ink transition-colors duration-500"
            >
              {t("contact.cta_email")}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
