import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About - Gus" },
    { name: "description", content: "About Gus Marx" },
  ];
}

export default function About() {
  return (
    <div id="about-body">
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
