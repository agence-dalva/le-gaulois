import { setRequestLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import ReserveCta from "@/components/sections/ReserveCta";
import Gallery from "@/components/sections/Gallery";

export default async function RestaurantPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  return (
    <>
      <PageHeader
        eyebrow={t("intro.eyebrow")}
        title={t("chef.title")}
        image="/images/img-4.jpg"
      />

      <section className="py-24 lg:py-32 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-14 lg:gap-20">
          <div className="lg:col-span-5 lg:sticky lg:top-32 self-start">
            <Reveal>
              <p className="text-[0.72rem] uppercase tracking-[0.4em] text-olive-deep font-light">
                {t("chef.eyebrow")}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-display-italic text-5xl lg:text-6xl leading-[1.05] text-ink">
                {t("chef.title")}
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-10 space-y-3">
                <div className="flex items-center gap-4">
                  <span className="block h-px w-10 bg-olive" />
                  <p className="text-xs uppercase tracking-[0.22em] font-light text-ink">
                    {t("intro.distinction_1")}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="block h-px w-10 bg-olive" />
                  <p className="text-xs uppercase tracking-[0.22em] font-light text-ink">
                    {t("intro.distinction_2")}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 space-y-12">
            <Reveal>
              <p className="font-display-italic text-3xl lg:text-4xl leading-[1.25] text-ink-soft text-balance">
                « {t("intro.body")} »
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-base lg:text-lg font-light leading-relaxed text-ink-soft max-w-2xl">
                {t("chef.body")}
              </p>
            </Reveal>
            <Reveal delay={0.2} className="relative aspect-[16/10] overflow-hidden">
              <Image
                src="/images/img-7.jpg"
                alt=""
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <Gallery />
      <ReserveCta />
    </>
  );
}
