import { useTranslations } from "next-intl";
import Reveal from "@/components/ui/Reveal";

type FormulaOption = { label: string; price: string };
type Formula = { name: string; note: string; options: FormulaOption[] };

export default function MenuFormulas() {
  const t = useTranslations("menu");
  const formulas = t.raw("formulas") as Formula[];

  return (
    <section className="relative py-24 lg:py-32 bg-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-2xl mb-16 lg:mb-20">
          <p className="text-[0.72rem] uppercase tracking-[0.4em] text-olive-deep font-light">
            {t("formulas_title")}
          </p>
          <p className="mt-6 font-display-italic text-xs tracking-wider text-mist">
            {t("subtitle")}
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-px bg-line">
          {formulas.map((f, i) => (
            <Reveal
              key={f.name}
              delay={i * 0.05}
              className="bg-cream p-8 lg:p-12 flex flex-col"
            >
              <h3 className="font-display-italic text-3xl lg:text-4xl text-ink">
                {f.name}
              </h3>
              <p className="mt-4 text-sm font-light text-ink-soft leading-relaxed">
                {f.note}
              </p>
              <div className="mt-8 pt-6 border-t border-line/70 space-y-3">
                {f.options.map((o) => (
                  <div
                    key={o.label}
                    className="flex items-baseline justify-between gap-4"
                  >
                    <span className="text-sm font-light text-ink">{o.label}</span>
                    <span className="flex-1 mx-3 border-b border-dotted border-line/80" />
                    <span className="font-display text-lg text-ink">{o.price}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
