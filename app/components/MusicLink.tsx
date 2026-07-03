import { trackMusicLinkClick } from "../lib/metaPixel";

interface MusicLinkProps {
  url: string;
  link_type: string;
  imgSrc: string;
  imgAlt: string;
  className?: string;
}

export function MusicLink({ url, link_type, imgSrc, imgAlt, className }: MusicLinkProps) {
  return (
    <a
      href={url}
      className={`listen-button ${link_type.toLowerCase().replace(" ", "-")} ${className || ""}`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackMusicLinkClick(link_type, url)}
    >
      <img src={imgSrc} alt={imgAlt} />
      Listen Now
    </a>
  );
}
