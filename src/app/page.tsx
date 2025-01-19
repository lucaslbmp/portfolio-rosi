import Header from "@/components/header";
import SectionContacts from "./components/section-contacts";
import SectionAbout from "./components/section-about";
import SectionHero from "./components/section-hero";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <SectionHero />
      <SectionAbout />
      <hr className="bg-primary w-[1500px] mx-auto" />
      <SectionContacts />
    </div>
  );
}
