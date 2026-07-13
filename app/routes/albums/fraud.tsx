import { AlbumPage } from "../../components/AlbumPage";
import type { Route } from "./+types/fraud";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Fraud - Gus" }];
}
import data from "../../assets/data/song-master.json";

const songs = data.fraud;

const links = [
  {
    url: "https://open.spotify.com/track/1lWT5eJE4SXAtZhWiDzMAZ?si=1ada650985384d49",
    link_type: "Spotify",
    imgSrc: "/media/logos/spotify.png",
    imgAlt: "Spotify"
  },
  {
    url: "https://music.apple.com/us/song/fraud/6773996053",
    link_type: "Apple Music",
    imgSrc: "/media/logos/applemusic.png",
    imgAlt: "Apple Music"
  },
  {
    url: "https://www.youtube.com/watch?v=2ZI0pJuEN_Y&list=OLAK5uy_k_NoriGSvtdQXyS0OOLdj4yAgIJwbBhLY",
    link_type: "YouTube",
    imgSrc: "/media/logos/youtube.png",
    imgAlt: "YouTube"
  },
  {
    url: "https://www.pandora.com/artist/all-albums/gus/ARPPvpXmnfV2ZxP",
    link_type: "Pandora",
    imgSrc: "/media/logos/pandora.png",
    imgAlt: "Pandora"
  }
];

export default function Fraud() {
  return (
    <AlbumPage
      albumTitle="Fraud"
      albumArt="/media/album-art/Fraud-new.jpeg"
      songs={songs}
      links={links}
    />

  );
}
