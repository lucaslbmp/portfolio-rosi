import Header from "@/components/header";

export default function Home() {
  return (
    <div>
      <Header />
      <section className="p-10 flex flex-wrap justify-center h-[400px] bg-[url:theme('backgroundImage.hero-image'),theme('backgroundImage.linear-gradient')] bg-center bg-no-repeat bg-cover">
        <div className="text-[2.5rem] leading-snug text-center mt-10">
          Encontre aqui os melhores
          <strong className="text-primary"> amigurumis </strong>
          feitos à mão e encomende o seu!
        </div>
      </section>
    </div>
  );
}
