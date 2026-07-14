import type { Route } from "./+types/about";
import { Carousel } from "../components/Carousel";
import { CarouselPicture } from "../components/CarouselPicture";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About - Gus" },
    { name: "description", content: "About Gus Marx" },
  ];
}

export default function About() {
  return (
    <div id="about-body">
      <Carousel>
        <CarouselPicture src="/media/carouselpics/0O4A1815.jpeg" />
        <CarouselPicture src="/media/carouselpics/0O4A2261.jpeg" />
        <CarouselPicture src="/media/carouselpics/000118690034.jpeg" />
        <CarouselPicture src="/media/carouselpics/000118690033.jpeg" />
        <CarouselPicture src="/media/carouselpics/000120110026.jpeg" />
        <CarouselPicture src="/media/carouselpics/000120110038.jpeg" />
        <CarouselPicture src="/media/carouselpics/0O4A2637.jpeg" />
        <CarouselPicture src="/media/carouselpics/0O4A3184.jpeg" />
        <CarouselPicture src="/media/carouselpics/0O4A3458-2.jpeg" />
        <CarouselPicture src="/media/carouselpics/Pro-Capture One 0130.jpeg" />
        <CarouselPicture src="/media/carouselpics/112F2B5D-729C-46E3-B378-D1C96CB4EAEDIMG_0421.jpeg" />
        <CarouselPicture src="/media/carouselpics/Pro-Capture One 0138.jpeg" />
      </Carousel>
      <div className="about-info">
        <p>
          Gus Marx, age 27, is a producer, singer, and songwriter from Connecticut. He began
          writing music in 2019 and released his first LP in 2022 titled Paradise. As a producer,
          Gus has collaborated with other artists, while releasing an EP and most recently, his
          album Idol. With influences from Pop, Funk, Hip Hop, and Rock, using guitars, drums,
          keyboards, samples, a flute, and synthesizers, Gus records all his music at home.
        </p>
      </div>
      <footer>
        <nav>
          <ul>
            <li id="contact-info">Contact: gusmarxmusic@gmail.com</li>
          </ul>
        </nav>
      </footer>
    </div>
  );
}
