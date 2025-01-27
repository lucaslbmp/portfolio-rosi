import Header from "@/components/header";
import SectionContacts from "./components/section-contacts";
import SectionAbout from "./components/section-about";
import SectionHero from "./components/section-hero";
import SectionPortfolio from "./components/section-portfolio";
import { contacts } from "@/data";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@fortawesome/fontawesome-free/css/all.css";

export default function Home() {
  return (
    <div className="relative">
      <Header contacts={contacts} />
      <SectionHero />
      <SectionPortfolio />
      <hr className="bg-primary w-[1500px] mx-auto" />
      <SectionAbout />
      <hr className="bg-primary w-[1500px] mx-auto" />
      <SectionContacts contacts={contacts} />
    </div>
  );
}
