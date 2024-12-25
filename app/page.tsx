import Carousel from "./components/carousel";
// import Image from "next/image";

export default function Home() {
  const mainSlide = [
    { id: 1, url: "/carousel-1.svg", alt: "Slide 1", },
    { id: 2, url: "/carousel-2.svg", alt: "Slide 2", },
    { id: 3, url: "/carousel-3.svg", alt: "Slide 3", },
  ];
  
  return (
    <div className="flex justify-center min-h-screen font-[family-name:var(--geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full">
        <div className={`carousel w-full h-full bg-black bg-opacity-50`}>
          <Carousel slides={mainSlide}/>
        </div>
        <section id="home" className="h-screen w-full px-8">
          <h2 className="text-4xl font-bold">Home</h2>
          <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec neque in nisi laoreet vehicula. Donec nec felis sit amet
            libero fermentum aliquet. Nullam nec neque in nisi laoreet vehicula. Donec nec felis sit amet libero fermentum aliquet.</p>
        </section>

        <section id="about" className="h-screen w-full px-8">
          <h2 className="text-4xl font-bold">About</h2>
          <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec neque in nisi laoreet vehicula. Donec nec felis sit amet
            libero fermentum aliquet. Nullam nec neque in nisi laoreet vehicula. Donec nec felis sit amet libero fermentum aliquet.</p>
        </section>

        <section id="services" className="h-screen w-full px-8">
          <h2 className="text-4xl font-bold">Services</h2>
          <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec neque in nisi laoreet vehicula. Donec nec felis sit amet
            libero fermentum aliquet. Nullam nec neque in nisi laoreet vehicula. Donec nec felis sit amet libero fermentum aliquet.</p>
        </section>
      </main>
    </div>
  );
}
