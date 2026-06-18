import { AlbumPage } from "../../components/AlbumPage";
import data from "../../assets/data/song-master.json";

const songs = data.news;

const links = [
  {
    url: "https://open.spotify.com/album/3bKef3jSTazhxrzIHZ6O3o",
    link_type: "Spotify",
    imgSrc: "/media/logos/spotify.png",
    imgAlt: "Spotify"
  },
  {
    url: "https://music.apple.com/ca/album/news-ep/1513983073",
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
    url: "https://www.pandora.com/artist/gus/news/ALJzcr9X6nkklvV",
    link_type: "Pandora",
    imgSrc: "/media/logos/pandora.png",
    imgAlt: "Pandora"
  }
];

export default function News() {
  return (
    <AlbumPage
      albumTitle="News"
      albumArt="/media/album-art/News.jpeg"
      songs={songs}
      links={links}
    />
  );
}
