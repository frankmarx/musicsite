import { PlaylistDisplay } from "../components/PlaylistDisplay";

export default function Playlists() {
  return (
    <div id="playlist-page">
      <PlaylistDisplay
        side="left"
        id="psychedelic"
        artSrc="/media/album-art/psychedelic.jpeg"
        display="I Learned How to Spell Psychedelic"
        link="/i-learned-how-to-spell-psychedelic"
      />
    </div>
  );
}
