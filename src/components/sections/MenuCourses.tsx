import { useTranslations } from "next-intl";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

type Item = { name: string; description: string; price: string };
type Course = { title: string; items: Item[] };

const COURSES_CONFIG = [
  { key: "starters", image: "/images/img-1.jpg", align: "left" as const },
  { key: "mains", image: "/images/img-6.jpg", align: "right" as const },
  { key: "desserts", image: "/images/img-10.jpg", align: "left" as const },
];

export default function MenuCourses() {
  const t = useTranslations("menu");

  return (
    <section className="relative bg-ink text-cream">
      {COURSES_CONFIG.map((conf, idx) => {
        const course = t.raw(conf.key) as Course;
        return (
          <div
            key={conf.key}
            className={`py-24 lg:py-32 ${idx > 0 ? "border-t border-white/10" : ""}`}
          >
            <div
              className={`mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-20 items-start ${
                conf.align === "right" ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <Reveal className="lg:col-span-5 lg:sticky lg:top-32">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={conf.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>

              <div className="lg:col-span-7">
                <Reveal>
                  <p className="text-[0.72rem] uppercase tracking-[0.4em] text-olive font-light">
                    {String(idx + 1).padStart(2, "0")} — {course.title}
                  </p>
                </Reveal>
                <Reveal delay={0.1}>
                  <h2 className="mt-5 font-display-italic text-5xl lg:text-6xl leading-[1] text-cream">
                    {course.title}
                  </h2>
                </Reveal>

                <div className="mt-14 space-y-12">
                  {course.items.map((item, i) => (
                    <Reveal key={item.name} delay={0.05 * i}>
                      <article className="group">
                        <div className="flex items-baseline gap-4">
                          <h3 className="font-display text-2xl lg:text-3xl text-cream">
                            {item.name}
                          </h3>
                          <span className="flex-1 border-b border-dotted border-cream/25" />
                          <span className="font-display text-xl text-olive">
                            {item.price}
                          </span>
                        </div>
                        <p className="mt-3 text-sm lg:text-base font-light text-cream/70 leading-relaxed max-w-xl">
                          {item.description}
                        </p>
                      </article>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 py-16 text-center">
          <Reveal>
            <p className="text-xs font-light text-cream/60 leading-relaxed italic">
              {t("allergies_note")}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
