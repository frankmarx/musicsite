import { AlbumPage } from "../../components/AlbumPage";
import type { Route } from "./+types/thinking-ahead";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Thinking Ahead - Gus" }];
}
import data from "../../assets/data/song-master.json";

const songs = data.singles.filter((song) => song.title === "Thinking Ahead");

const links = [
  {
    url: "https://open.spotify.com/album/2KVXc7psEkm7syDxXis8yw",
    link_type: "Spotify",
    imgSrc: "/media/logos/spotify.png",
    imgAlt: "Spotify"
  },
  {
    url: "https://music.apple.com/ca/album/thinking-ahead-single/1573114720",
    link_type: "Apple Music",
    imgSrc: "/media/logos/applemusic.png",
    imgAlt: "Apple Music"
  },
  {
    url: "https://www.youtube.com/channel/UCuhY29iIwlAtS48IG28xPIw",
    link_type: "YouTube",
    imgSrc: "/media/logos/youtube.png",
    imgAlt: "YouTube"
  },
  {
    url: "https://www.pandora.com/artist/gus/thinking-ahead-single/ALnVJpdknbVw9lP",
    link_type: "Pandora",
    imgSrc: "/media/logos/pandora.png",
    imgAlt: "Pandora"
  }
];

export default function ThinkingAhead() {
  return (
    <AlbumPage
      albumTitle="Thinking Ahead"
      albumArt="/media/album-art/thinking-ahead.jpeg"
      songs={songs}
      links={links}
    />
  );
}
