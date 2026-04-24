import { setRequestLocale, getTranslations } from "next-intl/server";
import PageHeader from "@/components/ui/PageHeader";
import MenuFormulas from "@/components/sections/MenuFormulas";
import MenuCourses from "@/components/sections/MenuCourses";
import MenuPdfAccess from "@/components/sections/MenuPdfAccess";

export default async function MenuPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("menu");

  return (
    <>
      <PageHeader
        eyebrow={t("eyebrow")}
        title={t("title")}
        image="/images/img-8.jpg"
      />
      <MenuFormulas />
      <MenuCourses />
      <MenuPdfAccess />
    </>
  );
}
