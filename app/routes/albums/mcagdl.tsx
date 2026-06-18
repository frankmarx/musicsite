import { AlbumPage } from "../../components/AlbumPage";
import data from "../../assets/data/song-master.json";

const songs = data.mcagdl;

const links = [
  {
    url: "https://open.spotify.com/track/20luvdi4ELAXptL866C6mC?si=42a58702c7e048a5",
    link_type: "Spotify",
    imgSrc: "/media/logos/spotify.png",
    imgAlt: "Spotify"
  },
  {
    url: "https://music.apple.com/us/song/mr-come-and-go-dr-love/1890189801",
    link_type: "Apple Music",
    imgSrc: "/media/logos/applemusic.png",
    imgAlt: "Apple Music"
  },
  {
    url: "https://www.youtube.com/watch?v=V43QhdyrifQ",
    link_type: "YouTube",
    imgSrc: "/media/logos/youtube.png",
    imgAlt: "YouTube"
  },
  {
    url: "https://www.pandora.com/artist/gus/mr-come-and-go-dr-love/mr-come-and-go-dr-love/TRK7nrbkZ33Z479?part=ug-desktop&corr=203514106890695099",
    link_type: "Pandora",
    imgSrc: "/media/logos/pandora.png",
    imgAlt: "Pandora"
  }
];

export default function Mcagdl() {
  return (
    <AlbumPage
      albumTitle="Mr. Come and Go, Dr. Love"
      albumArt="/media/album-art/mcagdl.jpeg"
      songs={songs}
      links={links}
    />
  );
}
