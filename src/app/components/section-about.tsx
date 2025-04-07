import Title from "@/components/title";
import Image from "next/image";

const SectionAbout = () => {
  return (
    <section className="p-section">
      <Title>Sobre</Title>
      <div
        className="flex flex-col md:flex-row justify-center gap-8 lg:px-[12rem]"
        id="about"
      >
        <div className="relative mx-auto">
          <Image
            src={"/rosi-profile.jpg"}
            alt="profile-image"
            className="rounded-full "
            width={200}
            height={200}
          />
        </div>

        <div className="md:flex-[1_1_600px]">
          <h2 className="text-2xl text-foregroundTertiary mb-4">
            Quem sou eu?
          </h2>
          <p>
            Olá, sou Rosi Pinheiro, uma pessoa sonhadora, e acredito que a vida
            é feita de momentos simples, mas cheios de significados, e tento
            viver cada um deles com alegria e gratidão. Minha maior paixão é
            criar amigurumis. Há algo muito especial em transformar fios e
            linhas em pequenos personagens cheios de vida e personalidade. Cada
            amigurumi que crio é uma forma de expressar minha criatividade e de
            me conectar com algo que me traz muita paz e satisfação.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
