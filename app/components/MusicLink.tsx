import { trackMusicLinkClick } from "../lib/metaPixel";

interface MusicLinkProps {
  url: string;
  link_type: string;
  imgSrc: string;
  imgAlt: string;
  className?: string;
  event_name?: string;
  eventName?: string;
}

export function MusicLink({
  url,
  link_type,
  imgSrc,
  imgAlt,
  className,
  event_name,
  eventName,
}: MusicLinkProps) {
  return (
    <a
      href={url}
      className={`listen-button ${link_type.toLowerCase().replace(" ", "-")} ${className || ""}`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackMusicLinkClick(link_type, url, eventName || event_name)}
    >
      <img src={imgSrc} alt={imgAlt} />
      Listen Now
    </a>
  );
}
