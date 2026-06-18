import { MusicLink } from "../../components/MusicLink";

export default function Psychedelic() {
  return (
    <div className="album-with-lyrics">
      <div className="title-links-and-art centered-art">
        <img src="/media/album-art/psychedelic.jpeg" alt="I Learned How to Spell Psychedelic" />
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
        <MusicLink 
          url="https://open.spotify.com/playlist/1PSknURKHBpcuRCPijf3nq?si=b058445c65474e26" 
          link_type="spotify" 
          imgSrc="/media/logos/spotify.png" 
          imgAlt="Spotify" 
        />
      </div>
    </div>
  );
}
