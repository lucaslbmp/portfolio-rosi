import Title from "@/components/title";
import Image from "next/image";

const SectionAbout = () => {
  return (
    <section className="p-16">
      <Title>Sobre</Title>
      <div className="flex justify-center gap-8 px-[12rem]" id="about">
        <div className="relative mx-auto">
          <Image
            src={"/rosi-profile.jpg"}
            alt="profile-image"
            className="rounded-full"
            width={200}
            height={200}
          />
        </div>

        <div className="flex-[1_1_600px]">
          <h2 className="text-2xl text-foregroundTertiary mb-4">
            Quem sou eu?
          </h2>
          {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            dolorum similique amet sint maxime ab. Id natus alias illum aperiam
            quos quia! Molestiae dolorem itaque vero odit facilis repudiandae
            laudantium illum veritatis mollitia assumenda veniam accusantium
            eligendi velit, sint aperiam!
          </p> */}
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
            nisi cupiditate qui error ipsa voluptates magni. Enim voluptatum
            optio molestias facilis similique minima numquam voluptates ratione,
            repellendus officia reprehenderit id earum ut fugiat fugit! Rerum a
            ut error quisquam aliquam facilis ipsam! Earum sed, possimus vero
            animi voluptate culpa pariatur, quas, sit sunt magnam beatae. Illo
            cum inventore aspernatur accusantium.optio molestias facilis
            similique minima numquam voluptates ratione, repellendus officia
            reprehenderit id earum ut fugiat fugit! Rerum a ut error quisquam
            aliquam facilis ipsam! Earum sed, possimus vero animi voluptate
            culpa pariatur, quas, sit sunt magnam beatae. Illo cum inventore
            aspernatur accusantium.similique minima numquam voluptates ratione,
            repellendus officia reprehenderit id earum ut fugiat fugit! Rerum a
            ut error quisquam aliquam facilis ipsam! Earum sed, possimus vero
            animi voluptate culpa pariatur, quas, sit sunt magnam beatae. Illo
            cum inventore aspernatur accusantium.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
