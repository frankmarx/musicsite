import { Link } from "react-router";

export function Header() {
  return (
    <header>
      <div id="gus-id">
        <img src="/media/portrait_new.jpeg" alt="Gus" />
        <h4>Gus</h4>
      </div>
      <nav>
        <ul>
          <li><Link to="/" id="nav-link">Home</Link></li>
          <li><Link to="/music" id="nav-link">Music</Link></li>
          <li><Link to="/playlists" id="nav-link">Playlists</Link></li>
          <li><Link to="/about" id="nav-link">About</Link></li>
        </ul>
      </nav>
      <div id="header-spacer">
        <p>p</p>
      </div>
    </header>
  );
}
