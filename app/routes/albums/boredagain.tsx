import { AlbumPage } from "../../components/AlbumPage";
import type { Route } from "./+types/boredagain";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Bored Again - Gus" }];
}
import data from "../../assets/data/song-master.json";

const songs = data.boredagain;

const links = [
  {
    url: "https://open.spotify.com/album/3TJJ3q5Oa9uKBwmnbZRLyT?si=crcbjHt4SMC4lB9W9vnNbQ",
    link_type: "Spotify",
    imgSrc: "/media/logos/spotify.png",
    imgAlt: "Spotify"
  },
  {
    url: "https://music.apple.com/ca/album/bored-again-ep/1737327927",
    link_type: "Apple Music",
    imgSrc: "/media/logos/applemusic.png",
    imgAlt: "Apple Music"
  },
  {
    url: "https://www.youtube.com/watch?v=YmX_dgttAQ4&list=OLAK5uy_k8nghfbm3yvFOwSO1F4sC2AD0pqkeARN0&ab_channel=Gus-Topic",
    link_type: "YouTube",
    imgSrc: "/media/logos/youtube.png",
    imgAlt: "YouTube"
  },
  {
    url: "https://www.pandora.com/artist/gus/bored-again/ALmhbpfjn2whwK2",
    link_type: "Pandora",
    imgSrc: "/media/logos/pandora.png",
    imgAlt: "Pandora"
  }
];

export default function BoredAgain() {
  return (
    <AlbumPage
      albumTitle="Bored Again"
      albumArt="/media/album-art/Bored Again.jpeg"
      songs={songs}
      links={links}
    />
  );
}
