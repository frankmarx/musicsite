import { type RouteConfig, route } from "@react-router/dev/routes";

export default [
  route("/", "./routes/home.tsx"),
  route("/music", "./routes/music.tsx"),
  route("/about", "./routes/about.tsx"),
  route("/playlists", "./routes/playlists.tsx"),
] satisfies RouteConfig;
