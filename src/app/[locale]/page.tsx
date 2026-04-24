import { setRequestLocale } from "next-intl/server";
import Hero from "@/components/sections/Hero";
import Intro from "@/components/sections/Intro";
import ChefPreview from "@/components/sections/ChefPreview";
import Gallery from "@/components/sections/Gallery";
import ReserveCta from "@/components/sections/ReserveCta";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <Intro />
      <ChefPreview />
      <Gallery />
      <ReserveCta />
    </>
  );
}
