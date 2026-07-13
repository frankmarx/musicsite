import type { Route } from "./+types/home";
import spotifyLogo from "/media/logos/spotify.png";
import appleMusicLogo from "/media/logos/applemusic.png";
import youtubeLogo from "/media/logos/youtube.png";
import pandoraLogo from "/media/logos/pandora.png";
import { MusicLink } from "../components/MusicLink";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Gus" },
    { name: "description", content: "Producer, Singer, Songwriter" },
  ];
}

export default function Home() {
  return (
    <div id="home-body">
      <div className="home-grid">
        <div className="row" id="guit">
          <img src="/media/portrait_new.jpeg" id="portrait" alt="Gus portrait" />
          <div className="desc">
            <h1>GUS</h1>
            <h2>Producer, Singer, Songwriter</h2>
          </div>
        </div>
          <div className="links">
            <MusicLink url="https://open.spotify.com/artist/2NigsMohfPC7W937PGlhku" link_type="Spotify" imgSrc={spotifyLogo} imgAlt="Spotify" />
            <MusicLink url="https://music.apple.com/ca/artist/gus/1513959770" link_type="Apple Music" imgSrc={appleMusicLogo} imgAlt="Apple Music" />
            <MusicLink url="https://www.youtube.com/channel/UCuhY29iIwlAtS48IG28xPIw" link_type="YouTube" imgSrc={youtubeLogo} imgAlt="YouTube" />
            <MusicLink url="https://www.pandora.com/artist/gus/ARPPvpXmnfV2ZxP" link_type="Pandora" imgSrc={pandoraLogo} imgAlt="Pandora" />
          </div>

      </div>
    </div>
  );
}
