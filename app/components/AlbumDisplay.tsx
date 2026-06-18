import { Link } from "react-router";

interface AlbumDisplayProps {
  side: "left" | "right";
  id: string;
  artSrc: string;
  display: string;
  album_display: string;
  tracklist: string[];
  link: string;
}

export function AlbumDisplay({
  side,
  id,
  artSrc,
  display,
  album_display,
  tracklist,
  link,
}: AlbumDisplayProps) {
  return (
    <div className={`album ${side}`} id={id}>
      <div className="album-art">
        <img src={artSrc} alt={album_display} />
      </div>
      <div className="album-info">
        <h3>{display}</h3>
        <div className="tracklist">
          <p>
            {tracklist.map((track, index) => (
              <span key={index}>
                {track}
                {index < tracklist.length - 1 && <br />}
              </span>
            ))}
          </p>
        </div>
      </div>
      <Link to={link} className="album-title">
        <h2>{album_display}</h2>
      </Link>
    </div>
  );
}
