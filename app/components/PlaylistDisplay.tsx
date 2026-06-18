import { Link } from "react-router";

interface PlaylistDisplayProps {
  side: "left" | "right";
  id: string;
  artSrc: string;
  display: string;
  link: string;
}

export function PlaylistDisplay({
  side,
  id,
  artSrc,
  display,
  link,
}: PlaylistDisplayProps) {
  return (
    <div className={`album ${side}`} id={id}>
      <div className="album-art">
        <img src={artSrc} alt={display} />
      </div>
      <Link to={link} className="album-title">
        <h2>{display}</h2>
      </Link>
    </div>
  );
}
