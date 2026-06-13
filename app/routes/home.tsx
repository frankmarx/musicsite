import type { Route } from "./+types/home";
import portrait from "/media/portrait.JPG";
import spotifyLogo from "/media/logos/spotify.png";
import appleMusicLogo from "/media/logos/applemusic.png";
import youtubeLogo from "/media/logos/youtube.png";
import pandoraLogo from "/media/logos/pandora.png";
import instagramLogo from "/media/logos/instagram.png";
import tiktokLogo from "/media/logos/tiktok.png";

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
          <img src={portrait} id="portrait" alt="Gus portrait" />
          <div className="desc">
            <h1>GUS</h1>
            <h2>Producer, Singer, Songwriter</h2>
          </div>
        </div>
        <div className="links">
          <div className="biolink" id="spotify">
            <a href="https://open.spotify.com/artist/2NigsMohfPC7W937PGlhku">
              <img src={spotifyLogo} alt="Spotify" />
            </a>
          </div>
          <div className="biolink" id="apple-music">
            <a href="https://music.apple.com/ca/artist/gus/1513959770">
              <img src={appleMusicLogo} style={{height:90, width:90}} alt="Apple Music" />
            </a>
          </div>
          <div className="biolink" id="youtube">
            <a href="https://www.youtube.com/channel/UCuhY29iIwlAtS48IG28xPIw">
              <img src={youtubeLogo} alt="YouTube" />
            </a>
          </div>
          <div className="biolink" id="pandora">
            <a href="https://www.pandora.com/artist/gus/ARPPvpXmnfV2ZxP">
              <img src={pandoraLogo} style={{height:65, width:65}} alt="Pandora" />
            </a>
          </div>
          <div className="biolink" id="instagram">
            <a href="https://www.instagram.com/yungpeanutgod/">
              <img src={instagramLogo} style={{height:70, width:70}} alt="Instagram" />
            </a>
          </div>
          <div className="biolink" id="tiktok">
            <a href="https://www.tiktok.com/@peanutgus?lang=en">
              <img src={tiktokLogo} style={{height:95, width:95}} alt="TikTok" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
