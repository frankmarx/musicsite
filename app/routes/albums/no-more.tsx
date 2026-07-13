import { AlbumPage } from "../../components/AlbumPage";
import type { Route } from "./+types/no-more";

export function meta({}: Route.MetaArgs) {
  return [{ title: "No More - Gus" }];
}
import data from "../../assets/data/song-master.json";

const songs = data["no-more"];

const links = [
  {
    url: "https://open.spotify.com/track/5hnmWKxgSlsPuSoxPUIfDx?si=728ae9295cdd4c50",
    link_type: "Spotify",
    imgSrc: "/media/logos/spotify.png",
    imgAlt: "Spotify"
  },
  {
    url: "https://music.apple.com/us/song/no-more/1881240580",
    link_type: "Apple Music",
    imgSrc: "/media/logos/applemusic.png",
    imgAlt: "Apple Music"
  },
  {
    url: "https://www.youtube.com/watch?v=SPhBj_3DswQ",
    link_type: "YouTube",
    imgSrc: "/media/logos/youtube.png",
    imgAlt: "Youtube"
  },
  {
    url: "https://www.pandora.com/artist/gus/no-more/no-more/TRgr6VZqwjcmdm2",
    link_type: "Pandora",
    imgSrc: "/media/logos/pandora.png",
    imgAlt: "Pandora"
  }
];

export default function Nomore() {
  return (
    <AlbumPage
      albumTitle="No More"
      albumArt="/media/album-art/no more.jpeg"
      songs={songs}
      links={links}
    />
  );
}
