import { MusicLink } from "../../components/MusicLink";

export default function SummerKisses() {
  return (
    <div className="album-with-lyrics">
      <div className="title-links-and-art centered-art">
        <img src="/media/album-art/summer-kisses.png" alt="Summer Kisses" />
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
        <MusicLink
          url="https://open.spotify.com/playlist/3C7bIl6otVV2U7x11ZmzTJ?si=4fc4d5ba77df4878"
          link_type="spotify"
          imgSrc="/media/logos/spotify.png"
          imgAlt="Spotify"
        />
      </div>
    </div>
  );
}
