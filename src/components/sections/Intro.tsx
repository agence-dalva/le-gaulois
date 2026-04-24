import { useTranslations } from "next-intl";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

export default function Intro() {
  const t = useTranslations("intro");

  return (
    <section className="relative py-28 lg:py-40 bg-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-14 lg:gap-20 items-center">
        <div className="lg:col-span-5 lg:sticky lg:top-32">
          <Reveal>
            <p className="text-[0.72rem] uppercase tracking-[0.4em] text-olive-deep font-light">
              {t("eyebrow")}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display-italic text-5xl lg:text-6xl leading-[1.05] text-ink text-balance">
              {t("title")}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 text-base lg:text-lg font-light leading-relaxed text-ink-soft max-w-lg">
              {t("body")}
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-12 space-y-3">
              <div className="flex items-center gap-4">
                <span className="block h-px w-10 bg-olive" />
                <p className="text-xs uppercase tracking-[0.22em] font-light text-ink">
                  {t("distinction_1")}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <span className="block h-px w-10 bg-olive" />
                <p className="text-xs uppercase tracking-[0.22em] font-light text-ink">
                  {t("distinction_2")}
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7 grid grid-cols-6 gap-4">
          <Reveal className="col-span-4 aspect-[4/5] relative overflow-hidden" delay={0.1}>
            <Image
              src="/images/img-2.jpg"
              alt=""
              fill
              sizes="(min-width: 1024px) 40vw, 70vw"
              className="object-cover"
            />
          </Reveal>
          <Reveal className="col-span-2 col-start-5 row-start-1 mt-24 aspect-[3/4] relative overflow-hidden" delay={0.25}>
            <Image
              src="/images/img-5.jpg"
              alt=""
              fill
              sizes="(min-width: 1024px) 20vw, 30vw"
              className="object-cover"
            />
          </Reveal>
          <Reveal className="col-span-3 col-start-3 -mt-8 aspect-[4/3] relative overflow-hidden" delay={0.35}>
            <Image
              src="/images/img-8.jpg"
              alt=""
              fill
              sizes="(min-width: 1024px) 30vw, 50vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
