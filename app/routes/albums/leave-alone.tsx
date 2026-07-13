import { AlbumPage } from "../../components/AlbumPage";
import type { Route } from "./+types/leave-alone";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Leave Alone - Gus" }];
}
import data from "../../assets/data/song-master.json";

const songs = data.singles.filter((song) => song.title === "Leave Alone");

const links = [
  {
    url: "https://open.spotify.com/album/6lEaQYsyl9osOcgFvVXx5d",
    link_type: "Spotify",
    imgSrc: "/media/logos/spotify.png",
    imgAlt: "Spotify"
  },
  {
    url: "https://music.apple.com/ca/album/leave-alone-single/1559586292",
    link_type: "Apple Music",
    imgSrc: "/media/logos/applemusic.png",
    imgAlt: "Apple Music"
  },
  {
    url: "https://www.youtube.com/watch?v=4B4W2dkJ2l4&list=OLAK5uy_l-9sCCjtP5RFt36iuW_G4vVCN3kxtsbFc&ab_channel=Gus-Topic",
    link_type: "YouTube",
    imgSrc: "/media/logos/youtube.png",
    imgAlt: "YouTube"
  },
  {
    url: "https://www.pandora.com/artist/gus/leave-alone-single/ALVhxkkzmKZXJtc",
    link_type: "Pandora",
    imgSrc: "/media/logos/pandora.png",
    imgAlt: "Pandora"
  }
];

export default function LeaveAlone() {
  return (
    <AlbumPage
      albumTitle="Leave Alone"
      albumArt="/media/album-art/Leave Alone.jpeg"
      songs={songs}
      links={links}
    />
  );
}
