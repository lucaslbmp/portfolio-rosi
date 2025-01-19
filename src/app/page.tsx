import Header from "@/components/header";
import SectionAbout from "./components/section-about";
import SectionHero from "./components/section-hero";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <SectionHero />
      <SectionAbout />
    </div>
  );
}
