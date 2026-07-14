import { MusicLink } from "../../components/MusicLink";
import type { Route } from "./+types/psychedelic";

export function meta({}: Route.MetaArgs) {
  return [{ title: "I Learned How to Spell Psychedelic - Gus" }];
}

export default function Psychedelic() {
  return (
    <div className="album-with-lyrics">
      <div className="title-links-and-art centered-art">
        <img src="/media/album-art/psychedelic.jpeg" alt="I Learned How to Spell Psychedelic" />
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
        <MusicLink 
          url="https://open.spotify.com/playlist/1PSknURKHBpcuRCPijf3nq?si=b058445c65474e26" 
          link_type="Spotify"
          imgSrc="/media/logos/spotify.png" 
          imgAlt="Spotify"
          event_name="SpotifyPsychedelicPlaylistClick"
        />
      </div>
    </div>
  );
}
