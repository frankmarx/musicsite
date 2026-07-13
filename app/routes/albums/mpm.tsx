import { AlbumPage } from "../../components/AlbumPage";
import type { Route } from "./+types/mpm";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Mono Polar Mind - Marty Marx" }];
}
import data from "../../assets/data/song-master.json";

const songs = data.mpm;

const links = [
  {
    url: "https://open.spotify.com/album/4m47k580H862ZkUuL3HkM4?si=1n378-ZgQ0uR3X9Gg0IeYQ",
    link_type: "Spotify",
    imgSrc: "/media/logos/spotify.png",
    imgAlt: "Spotify"
  },
  {
    url: "https://music.apple.com/ca/album/mono-polar-mind/1795420951",
    link_type: "Apple Music",
    imgSrc: "/media/logos/applemusic.png",
    imgAlt: "Apple Music"
  },
  {
    url: "https://www.youtube.com/playlist?list=OLAK5uy_m5VjV2x2x9yL-0nK2Tz_W1gGjK6gZ_U7o",
    link_type: "YouTube",
    imgSrc: "/media/logos/youtube.png",
    imgAlt: "YouTube"
  },
  {
    url: "https://www.pandora.com/artist/marty-marx/mono-polar-mind/AL5dt4Pfl9krZrc",
    link_type: "Pandora",
    imgSrc: "/media/logos/pandora.png",
    imgAlt: "Pandora"
  }
];

export default function Mpm() {
  return (
    <AlbumPage
      albumTitle="Mono Polar Mind"
      albumArt="/media/album-art/Mono Polar Mind.jpg"
      songs={songs}
      links={links}
    />
  );
}
