import { AlbumPage } from "../../components/AlbumPage";
import type { Route } from "./+types/paradise";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Paradise - Gus" }];
}
import data from "../../assets/data/song-master.json";

const songs = data.paradise;

const links = [
  {
    url: "https://open.spotify.com/album/24MnwEG67WY8YBFqAyjBJK?si=b2EIDARQQpqwV1IBw73G4g",
    link_type: "Spotify",
    imgSrc: "/media/logos/spotify.png",
    imgAlt: "Spotify"
  },
  {
    url: "https://music.apple.com/ca/album/paradise/1664850754",
    link_type: "Apple Music",
    imgSrc: "/media/logos/applemusic.png",
    imgAlt: "Apple Music"
  },
  {
    url: "https://www.youtube.com/watch?v=7v5lzhP6Cxw&list=OLAK5uy_mq8N8S7PUduSW2QvQbfI8Wrvs3dJ3WfUA&ab_channel=Gus-Topic",
    link_type: "YouTube",
    imgSrc: "/media/logos/youtube.png",
    imgAlt: "YouTube"
  },
  {
    url: "https://www.pandora.com/artist/gus/paradise/ALtjXP3rK7dm59V",
    link_type: "Pandora",
    imgSrc: "/media/logos/pandora.png",
    imgAlt: "Pandora"
  }
];

export default function Paradise() {
  return (
    <AlbumPage
      albumTitle="Paradise"
      albumArt="/media/album-art/Paradise.jpg"
      songs={songs}
      links={links}
    />
  );
}
