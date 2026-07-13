import { AlbumPage } from "../../components/AlbumPage";
import type { Route } from "./+types/heat";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Heat - Gus" }];
}

const songs = [
  {
    title: "Heat",
    length: "",
    lyrics: [
      "How you seem so new ?",
      "How’d I forget everything",
      "I told myself to remember a year ago ?",
      "Summertime with you",
      "Kiss me in the heat",
      "And leave me stranded in a fantasy and blue",
      "",
      "I wake up there you are",
      "Makeup on my arm",
      "I’ve never seen you in the morning",
      "But it feels like you’ve been here before",
      "And I can love you while it’s warm",
      "But I can’t promise anymore",
      "I won’t leave the moment for a moment",
      "Can’t say I never tried",
      "But I can’t say I really tried, tried",
      "",
      "How you seem so new ?",
      "How’d I forget everything",
      "I told myself to remember a year ago ?",
      "Summertime with you",
      "Kiss me in the heat",
      "And leave me stranded in a fantasy and blue",
      "",
      "So cold, so cold",
      "You don’t love me no more",
      "So cold, so cold",
      "Can I love anymore ?",
      "",
      "How you seem so new ?",
      "How’d I forget everything",
      "I told myself to remember a year ago ?",
      "Summertime with you",
      "Kiss me in the heat",
      "And leave me stranded in a fantasy and blue",
    ],
  },
];

const links = [
  {
    url: "https://open.spotify.com/artist/2NigsMohfPC7W937PGlhku",
    link_type: "Spotify",
    imgSrc: "/media/logos/spotify.png",
    imgAlt: "Spotify",
  },
  {
    url: "https://music.apple.com/ca/artist/gus/1513959770",
    link_type: "Apple Music",
    imgSrc: "/media/logos/applemusic.png",
    imgAlt: "Apple Music",
  },
  {
    url: "https://www.youtube.com/channel/UCuhY29iIwlAtS48IG28xPIw",
    link_type: "YouTube",
    imgSrc: "/media/logos/youtube.png",
    imgAlt: "YouTube",
  },
  {
    url: "https://www.pandora.com/artist/gus/ARPPvpXmnfV2ZxP",
    link_type: "Pandora",
    imgSrc: "/media/logos/pandora.png",
    imgAlt: "Pandora",
  },
];

export default function Heat() {
  return (
    <AlbumPage
      albumTitle="Heat"
      albumArt="/media/album-art/heat.jpeg"
      songs={songs}
      links={links}
    />
  );
}
