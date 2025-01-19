import Image from "next/image";

const SectionHero = () => {
  return (
    <section className="p-10 flex flex-wrap justify-center h-[400px] bg-[url:theme('backgroundImage.hero-image')] bg-bottom bg-col bg-no-repeat bg-cover text-foregroundTertiary relative">
      <div className="absolute opacity-50 -z-10 top-0 w-full h-full">
        <Image src="/grass.jpg" alt="" fill objectFit="cover" />
      </div>
      <div className="text-[2.5rem] leading-snug text-center mt-10">
        Encontre aqui os melhores
        <strong className="text-primary"> amigurumis </strong>
        feitos à mão e encomende o seu!
      </div>
    </section>
  );
};

export default SectionHero;
