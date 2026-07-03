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
      <PlaylistDisplay
        side="right"
        id="summer-kisses"
        artSrc="/media/album-art/summer-kisses.png"
        display="Summer Kisses"
        link="/summer-kisses"
      />
    </div>
  );
}
