import { AlbumPage } from "../../components/AlbumPage";
import data from "../../assets/data/song-master.json";

const songs = data["no-more"];

const links = [
  {
    url: "https://open.spotify.com/track/55w36iB6xH5q9j0eG5uUq2",
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
    link_type: "Youtube",
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
