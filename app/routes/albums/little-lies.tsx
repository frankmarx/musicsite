import { AlbumPage } from "../../components/AlbumPage";
import type { Route } from "./+types/little-lies";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Little Lies - Gus" }];
}

const songs = [
  {
    title: "Little Lies",
    length: "",
    lyrics: [
      "The end",
      "And all I can see are your eyes",
      "Let me in and love me one night",
      "Let me hold you for the last time",
      "",
      "She smiles",
      "When I smile",
      "That’s not good for me",
      "Cause then it’s all for me",
      "",
      "Don’t waste your love",
      "On someone you can’t touch",
      "Don’t wait too long to love",
      "I might sit back",
      "Convinced that",
      "It was all a mishap",
      "And you loved me for the night",
      "Just to say goodbye at the end",
      "So don’t waste your empathy",
      "On all my uncertainty",
      "Not knowing is killing me",
      "",
      "So you’ll be fine",
      "If I keep quiet",
      "And you don’t mind",
      "Little lies",
      "",
      "She smiles (And she smiles)",
      "When I smile (When I smile)",
      "That’s not good for me (Not good for me)",
      "Cause then it’s all for me",
      "",
      "Maybe I should let you go",
      "I wish that I had control",
      "Don’t pull me in and tease me with your touch",
      "When all I really want is love",
      "And maybe someone I can trust",
      "",
      "So you’ll be fine",
      "If I keep quiet",
      "And you don’t mind",
      "Little lies",
    ],
  },
];

const links = [
  {
    url: "https://open.spotify.com/track/3zpafuUC8Ci1xNtXSr1l8d?si=723cf401a0a542d6",
    link_type: "Spotify",
    imgSrc: "/media/logos/spotify.png",
    imgAlt: "Spotify",
  },
  {
    url: "https://music.apple.com/au/song/little-lies/6824014543",
    link_type: "Apple Music",
    imgSrc: "/media/logos/applemusic.png",
    imgAlt: "Apple Music",
  },
  {
    url: "https://www.youtube.com/watch?v=-lVFobPj0gQ",
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

export default function LittleLies() {
  return (
    <AlbumPage
      albumTitle="Little Lies"
      albumArt="/media/album-art/little-lies.jpeg"
      songs={songs}
      links={links}
    />
  );
}
