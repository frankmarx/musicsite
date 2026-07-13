import { AlbumPage } from "../../components/AlbumPage";
import type { Route } from "./+types/forgotten";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Forgotten - Gus" }];
}
import data from "../../assets/data/song-master.json";

const songs = data.forgotten;

const links = [
  {
    url: "https://open.spotify.com/album/5cAtIHF6Ep1fpdidc1b705?si=LTSedP_yTLK6PhW3v589Aw",
    link_type: "Spotify",
    imgSrc: "/media/logos/spotify.png",
    imgAlt: "Spotify"
  },
  {
    url: "https://music.apple.com/ae/album/forgotten-single/1813690536",
    link_type: "Apple Music",
    imgSrc: "/media/logos/applemusic.png",
    imgAlt: "Apple Music"
  },
  {
    url: "https://www.youtube.com/watch?v=L9bRiiyGbVw&ab_channel=Gus",
    link_type: "YouTube",
    imgSrc: "/media/logos/youtube.png",
    imgAlt: "YouTube"
  },
  {
    url: "https://www.pandora.com/artist/gus/forgotten/forgotten/TRgr6VZqwjcmdm2",
    link_type: "Pandora",
    imgSrc: "/media/logos/pandora.png",
    imgAlt: "Pandora"
  }
];

export default function Forgotten() {
  return (
    <AlbumPage
      albumTitle="Forgotten"
      albumArt="/media/album-art/Forgotten.jpeg"
      songs={songs}
      links={links}
    />
  );
}
