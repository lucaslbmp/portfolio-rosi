import Header from "@/components/header";
import SectionContacts from "./components/section-contacts";
import SectionAbout from "./components/section-about";
import SectionHero from "./components/section-hero";
import SectionPortfolio from "./components/section-portfolio";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@fortawesome/fontawesome-free/css/all.css";
import prisma from "@/lib/prisma";
import Footer from "@/components/footer";

export default async function Home() {
  const contacts = await prisma.contact.findMany();
  return (
    <div className="relative">
      <Header contacts={contacts} />
      <SectionHero />
      <SectionPortfolio />
      <hr className="bg-primary w-[1500px] mx-auto" />
      <SectionAbout />
      <hr className="bg-primary w-[1500px] mx-auto" />
      <SectionContacts contacts={contacts} />
      <Footer />
    </div>
  );
}
