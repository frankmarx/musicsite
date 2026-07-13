import { AlbumPage } from "../../components/AlbumPage";
import type { Route } from "./+types/idol";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Idol - Gus" }];
}
import data from "../../assets/data/song-master.json";

const songs = data.idol;

const links = [
  {
    url: "https://open.spotify.com/album/36YFGKNX9B95vXtj5wZP70?si=cXbjsC76RQO--OdGMbhTTg",
    link_type: "Spotify",
    imgSrc: "/media/logos/spotify.png",
    imgAlt: "Spotify"
  },
  {
    url: "https://music.apple.com/us/album/idol/1825616142",
    link_type: "Apple Music",
    imgSrc: "/media/logos/applemusic.png",
    imgAlt: "Apple Music",
    className: "large-icon"
  },
  {
    url: "https://www.youtube.com/watch?v=k25TT9lbM24&list=OLAK5uy_npcTUcD_iJS7q_btU-kyi1BrZYIOFh18s",
    link_type: "YouTube",
    imgSrc: "/media/logos/youtube.png",
    imgAlt: "YouTube"
  },
  {
    url: "https://www.pandora.com/artist/gus/idol/AL5dt4Pfl9krZrc",
    link_type: "Pandora",
    imgSrc: "/media/logos/pandora.png",
    imgAlt: "Pandora",
    className: "small-icon"
  }
];

export default function Idol() {
  return (
    <AlbumPage
      albumTitle="Idol"
      albumArt="/media/album-art/Idol.jpeg"
      songs={songs}
      links={links}
    />
  );
}
