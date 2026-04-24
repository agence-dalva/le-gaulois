import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function SiteFooter() {
  const t = useTranslations();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-cream/90">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 grid gap-14 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <p className="font-display-italic text-4xl text-cream">Le Gaulois</p>
          <p className="mt-4 text-[0.95rem] font-light text-cream/70 max-w-md leading-relaxed">
            {t("footer.tagline")}
          </p>
          <p className="mt-10 text-[0.82rem] uppercase tracking-[0.22em] text-olive">
            Gault & Millau · Maître Cuisinier de France
          </p>
        </div>

        <div>
          <p className="text-[0.82rem] uppercase tracking-[0.22em] text-olive mb-5">
            {t("contact.address_title")}
          </p>
          <p className="text-[0.95rem] font-light leading-relaxed whitespace-pre-line text-cream/80">
            {t("contact.address")}
          </p>
          <p className="mt-4 text-[0.95rem] font-light text-cream/80">
            <a href={`tel:${t("contact.phone").replace(/\s/g, "")}`} className="hover:text-white">
              {t("contact.phone")}
            </a>
          </p>
          <p className="text-[0.95rem] font-light text-cream/80">
            <a href={`mailto:${t("contact.email")}`} className="hover:text-white">
              {t("contact.email")}
            </a>
          </p>
        </div>

        <div>
          <p className="text-[0.82rem] uppercase tracking-[0.22em] text-olive mb-5">
            {t("contact.hours_title")}
          </p>
          <p className="text-[0.95rem] font-light text-cream/80">{t("contact.hours_lunch")}</p>
          <p className="text-[0.95rem] font-light text-cream/80">{t("contact.hours_dinner")}</p>
          <p className="mt-3 text-[0.85rem] font-light text-cream/65 leading-relaxed">
            {t("contact.hours_closed")}
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[0.82rem] text-cream/55 font-light">
          <p>© {year} Le Gaulois. {t("footer.rights")}.</p>
          <div className="flex gap-6">
            <Link href="/menu" className="hover:text-cream">{t("nav.menu")}</Link>
            <Link href="/contact" className="hover:text-cream">{t("nav.contact")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
