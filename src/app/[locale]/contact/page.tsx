import { setRequestLocale, getTranslations } from "next-intl/server";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contact");

  return (
    <>
      <PageHeader
        eyebrow={t("eyebrow")}
        title={t("title")}
        image="/images/img-9.jpg"
      />

      <section className="py-24 lg:py-32 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-14 lg:gap-20">
          <div className="lg:col-span-5 space-y-12">
            <Reveal>
              <div>
                <p className="text-[0.72rem] uppercase tracking-[0.4em] text-olive-deep font-light">
                  {t("address_title")}
                </p>
                <p className="mt-4 font-display text-2xl lg:text-3xl leading-relaxed whitespace-pre-line text-ink">
                  {t("address")}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div>
                <p className="text-[0.72rem] uppercase tracking-[0.4em] text-olive-deep font-light">
                  {t("phone_title")}
                </p>
                <a
                  href={`tel:${t("phone").replace(/\s/g, "")}`}
                  className="mt-4 block font-display text-2xl lg:text-3xl text-ink hover:text-olive-deep transition-colors"
                >
                  {t("phone")}
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div>
                <p className="text-[0.72rem] uppercase tracking-[0.4em] text-olive-deep font-light">
                  {t("email_title")}
                </p>
                <a
                  href={`mailto:${t("email")}`}
                  className="mt-4 block font-display text-xl lg:text-2xl text-ink hover:text-olive-deep transition-colors break-all"
                >
                  {t("email")}
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div>
                <p className="text-[0.72rem] uppercase tracking-[0.4em] text-olive-deep font-light">
                  {t("hours_title")}
                </p>
                <div className="mt-4 space-y-2 text-base font-light text-ink-soft">
                  <p>{t("hours_lunch")}</p>
                  <p>{t("hours_dinner")}</p>
                  <p className="pt-3 text-sm text-mist">{t("hours_closed")}</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="flex flex-wrap gap-3 pt-4">
                <a
                  href={`tel:${t("phone").replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-3 bg-ink text-cream px-8 py-4 text-xs uppercase tracking-[0.22em] font-medium hover:bg-olive-deep transition-colors duration-500"
                >
                  {t("cta_call")}
                </a>
                <a
                  href={`mailto:${t("email")}`}
                  className="inline-flex items-center gap-3 border border-ink text-ink px-8 py-4 text-xs uppercase tracking-[0.22em] font-light hover:bg-ink hover:text-cream transition-colors duration-500"
                >
                  {t("cta_email")}
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="lg:col-span-7 relative min-h-[420px] lg:min-h-0 overflow-hidden">
            <iframe
              src="https://www.google.com/maps?q=8+Rue+du+G%C3%A9n%C3%A9ral+de+Gaulle,+68870+Bartenheim&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full grayscale contrast-95"
              title="Le Gaulois — Bartenheim"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
