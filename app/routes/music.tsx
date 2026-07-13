import { AlbumDisplay } from "../components/AlbumDisplay";
import type { Route } from "./+types/music";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Music - Gus" }];
}

export default function Music() {
  return (
    <div id="music-page">
      <AlbumDisplay
        side="left"
        id="heat"
        artSrc="/media/album-art/heat.jpeg"
        display="Heat - Gus"
        album_display="Heat"
        tracklist={["Heat"]}
        link="/albums/heat"
      />

      <AlbumDisplay
        side="right"
        id="mr-come-and-go-dr-love"
        artSrc="/media/album-art/mcagdl.jpeg"
        display="Mr. Come and Go, Dr. Love - Gus"
        album_display="Mr. Come and Go, Dr. Love"
        tracklist={["Mr. Come and Go, Dr. Love"]}
        link="/albums/mr-come-and-go-dr-love"
      />

      <AlbumDisplay
        side="left"
        id="fraud"
        artSrc="/media/album-art/Fraud-new.jpeg"
        display="Fraud - Gus"
        album_display="Fraud"
        tracklist={["Fraud"]}
        link="/albums/fraud"
      />

      <AlbumDisplay
        side="right"
        id="no-more"
        artSrc="/media/album-art/no more.jpeg"
        display="No More - Gus"
        album_display="No More"
        tracklist={["No More"]}
        link="/albums/no-more"
      />

      <AlbumDisplay
        side="left"
        id="idol"
        artSrc="/media/album-art/Idol.jpeg"
        display="Idol - Gus"
        album_display="Idol"
        tracklist={[
          "What Do They Know?",
          "Spectacle",
          "Blue Love",
          "Lust",
          "Forgotten",
          "Stacy",
          "Famous",
          "Style",
        ]}
        link="/albums/idol"
      />

      <AlbumDisplay
        side="right"
        id="paradise"
        artSrc="/media/album-art/Paradise.jpg"
        display="Paradise - Gus"
        album_display="Paradise"
        tracklist={[
          "Gates",
          "Boss Man",
          "Your Place",
          "The Weather",
          "Take Me Home",
          "This Way",
          "Time to Forget",
        ]}
        link="/albums/paradise"
      />

      <AlbumDisplay
        side="left"
        id="boredagain"
        artSrc="/media/album-art/Bored Again.jpeg"
        display="Bored Again - Gus"
        album_display="Bored Again"
        tracklist={["Late Revelation", "Bored Again", "1WithU", "From the Heart"]}
        link="/albums/boredagain"
      />

      <AlbumDisplay
        side="right"
        id="singles"
        artSrc="/media/album-art/Thinking Ahead.jpeg"
        display="Singles - Gus"
        album_display="Singles"
        tracklist={["Leave Alone", "Thinking Ahead"]}
        link="/albums/singles"
      />

      <AlbumDisplay
        side="left"
        id="mono-polar-mind"
        artSrc="/media/album-art/Mono Polar Mind.jpg"
        display="Mono Polar Mind - Marty Marx"
        album_display="Mono Polar Mind"
        tracklist={[
          "Heaven",
          "Happy Enough",
          "Don't Know Where You Are (feat. Gus)",
          "Meet Me",
          "Mono Polar Mind",
          "Very Short Love Song",
          "My Favorite Waste of Time",
          "A Moment",
          "What Pulled Me Through",
        ]}
        link="/albums/mpm"
      />

      <AlbumDisplay
        side="right"
        id="news"
        artSrc="/media/album-art/News.jpeg"
        display="News - Gus"
        album_display="News"
        tracklist={["Dreaming", "Never Will Know", "Faces", "There With You", "I Wanna Know"]}
        link="/albums/news"
      />

    </div>
  );
}
