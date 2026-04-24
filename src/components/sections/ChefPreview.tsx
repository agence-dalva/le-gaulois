import { useTranslations } from "next-intl";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

export default function ChefPreview() {
  const t = useTranslations("chef");

  return (
    <section className="relative py-28 lg:py-40 bg-ink text-cream overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-14 lg:gap-20 items-center">
        <Reveal className="lg:col-span-6 relative aspect-[4/5] overflow-hidden">
          <Image
            src="/images/img-4.jpg"
            alt=""
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </Reveal>

        <div className="lg:col-span-6 lg:pl-10">
          <Reveal>
            <p className="text-[0.72rem] uppercase tracking-[0.4em] text-olive font-light">
              {t("eyebrow")}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display-italic text-5xl lg:text-7xl leading-[0.95] text-cream">
              {t("title")}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 h-px w-16 bg-olive" />
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-10 text-base lg:text-lg font-light leading-relaxed text-cream/80 max-w-lg">
              {t("body")}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
