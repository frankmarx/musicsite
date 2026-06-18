import { useState } from "react";
import { MusicLink } from "./MusicLink";

interface Song {
  title: string;
  length: string;
  lyrics: string[];
}

interface LinkData {
  url: string;
  link_type: string;
  imgSrc: string;
  imgAlt: string;
  className?: string;
}

interface AlbumPageProps {
  albumTitle: string;
  albumArt: string;
  songs: Song[];
  links: LinkData[];
}

export function AlbumPage({ albumTitle, albumArt, songs, links }: AlbumPageProps) {
  return (
    <div className="album-with-lyrics">
      <div className="title-links-and-art">
        <img src={albumArt} alt={albumTitle} />
        <h2>{albumTitle}</h2>
      </div>

      {songs.map((song, index) => (
        <SongDisplay key={index} {...song} />
      ))}

      <div className="listen-button-container">
        {links.map((link, index) => (
          <MusicLink key={index} {...link} />
        ))}
      </div>
    </div>
  );
}

function SongDisplay({ title, length, lyrics }: Song) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="songs-and-times" onClick={() => setIsOpen(!isOpen)}>
        <p className="song-title">{title}</p>
        <p className="song-length">{length}</p>
      </div>
      <div className="player-and-lyrics" style={{ maxHeight: isOpen ? "2000px" : "0" }}>
        <div className="lyrics">
          {lyrics.map((line, index) => (
            line === "" ? <br key={index} /> : <p key={index}>{line}</p>
          ))}
        </div>
      </div>
    </>
  );
}
