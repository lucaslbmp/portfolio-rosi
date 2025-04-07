const SectionHero = () => {
  return (
    <section
      className="p-5 flex flex-wrap justify-center h-[400px]  text-foregroundTertiary relative md:p-10"
      id="hero"
    >
      <div className="absolute opacity-50 top-0 w-full h-full bg-[url:theme('backgroundImage.hero-bg')] bg-center bg-no-repeat bg-cover"></div>
      <div className="absolute top-0 w-full h-full bg-[url:theme('backgroundImage.hero-image')] bg-bottom bg-col bg-no-repeat bg-cover"></div>
      <div className="text-2xl mt-8 leading-snug text-center z-[1] xs:text-3xl sm:text-4xl md:mt-10 ">
        Encontre aqui os melhores
        <strong className="text-primary"> amigurumis </strong>
        feitos à mão e encomende o seu!
      </div>
    </section>
  );
};

export default SectionHero;
