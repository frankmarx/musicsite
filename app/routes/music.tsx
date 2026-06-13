import { Link } from "react-router";

export default function Music() {
  return (
    <div id="music-page">
      <div className="album left" id="fraud">
        <div className="album-art">
          <img src="/media/album-art/Fraud-new.jpeg" alt="Fraud" />
        </div>
        <div className="album-info">
          <h3>Fraud - Gus</h3>
          <div className="tracklist">
            <p>Fraud</p>
          </div>
        </div>
        <Link to="/albums/fraud" className="album-title"><h2>Fraud</h2></Link>
      </div>
      
      <div className="album right" id="mr-come-and-go-dr-love">
        <div className="album-art">
          <img src="/media/album-art/mcagdl.jpeg" alt="Mr. Come and Go, Dr. Love" />
        </div>
        <div className="album-info">
          <h3>Mr. Come and Go, Dr. Love - Gus</h3>
          <div className="tracklist">
            <p>Mr. Come and Go, Dr. Love</p>
          </div>
        </div>
        <Link to="/albums/mr-come-and-go-dr-love" className="album-title"><h2>Mr. Come and Go, Dr. Love</h2></Link>
      </div>

      <div className="album left" id="no-more">
        <div className="album-art">
          <img src="/media/album-art/no more.jpeg" alt="No More" />
        </div>
        <div className="album-info">
          <h3>No More - Gus</h3>
          <div className="tracklist">
            <p>No More</p>
          </div>
        </div>
        <Link to="/albums/no-more" className="album-title"><h2>No More</h2></Link>
      </div>

      <div className="album right" id="idol">
        <div className="album-art">
          <img src="/media/album-art/Idol.jpeg" alt="Idol" />
        </div>
        <div className="album-info">
          <h3>Idol - Gus</h3>
          <div className="tracklist">
            <p>
              What Do They Know?<br />
              Spectacle<br />
              Blue Love<br />
              Lust<br />
              Forgotten<br />
              Stacy<br />
              Famous<br />
              Style
            </p>
          </div>
        </div>
        <Link to="/albums/idol" className="album-title"><h2>Idol</h2></Link>
      </div>

      <div className="album left" id="paradise">
        <div className="album-art">
          <img src="/media/album-art/Paradise.jpg" alt="Paradise" />
        </div>
        <div className="album-info">
          <h3>Paradise - Gus</h3>
          <div className="tracklist">
            <p>
              Gates<br />
              Boss Man<br />
              Your Place<br />
              The Weather<br />
              Take Me Home<br />
              This Way<br />
              Time to Forget
            </p>
          </div>
        </div>
        <Link to="/albums/paradise" className="album-title"><h2>Paradise</h2></Link>
      </div>

      <div className="album right" id="boredagain">
        <div className="album-art">
          <img src="/media/album-art/Bored Again.jpeg" alt="Bored Again" />
        </div>
        <div className="album-info">
          <h3>Bored Again - Gus</h3>
          <div className="tracklist">
            <p>
              Late Revelation<br />
              Bored Again<br />
              1WithU<br />
              From the Heart
            </p>
          </div>
        </div>
        <Link to="/albums/boredagain" className="album-title"><h2>Bored Again</h2></Link>
      </div>

      <div className="album left" id="singles">
        <div className="album-art">
          <img src="/media/album-art/Thinking Ahead.jpeg" alt="Singles" />
        </div>
        <div className="album-info">
          <h3>Singles - Gus</h3>
          <div className="tracklist">
            <p>
              Leave Alone<br />
              Thinking Ahead
            </p>
          </div>
        </div>
        <Link to="/albums/singles" className="album-title"><h2>Singles</h2></Link>
      </div>

      <div className="album right" id="mono-polar-mind">
        <div className="album-art">
          <img src="/media/album-art/Mono Polar Mind.jpg" alt="Mono Polar Mind" />
        </div>
        <div className="album-info">
          <h3>Mono Polar Mind - Marty Marx</h3>
          <div className="tracklist">
            <p>
              Heaven<br />
              Happy Enough<br />
              Don't Know Where You Are (feat. Gus)<br />
              Meet Me<br />
              Mono Polar Mind<br />
              Very Short Love Song<br />
              My Favorite Waste of Time<br />
              A Moment<br />
              What Pulled Me Through
            </p>
          </div>
        </div>
        <Link to="/albums/mpm" className="album-title"><h2>Mono Polar Mind</h2></Link>
      </div>

      <div className="album left" id="news">
        <div className="album-art">
          <img src="/media/album-art/News.jpeg" alt="News" />
        </div>
        <div className="album-info">
          <h3>News - Gus</h3>
          <div className="tracklist">
            <p>
              Dreaming<br />
              Never Will Know<br />
              Faces<br />
              There With You<br />
              I Wanna Know
            </p>
          </div>
        </div>
        <Link to="/albums/news" className="album-title"><h2>News</h2></Link>
      </div>
    </div>
  );
}
