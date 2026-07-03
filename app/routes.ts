import { type RouteConfig, route } from "@react-router/dev/routes";

export default [
  route("/", "./routes/home.tsx"),
  route("/music", "./routes/music.tsx"),
  route("/about", "./routes/about.tsx"),
  route("/playlists", "./routes/playlists.tsx"),
  route("/i-learned-how-to-spell-psychedelic", "./routes/playlists/psychedelic.tsx"),
  route("/summer-kisses", "./routes/playlists/summer-kisses.tsx"),
  route("/albums/idol", "./routes/albums/idol.tsx"),
  route("/albums/fraud", "./routes/albums/fraud.tsx"),
  route("/albums/forgotten", "./routes/albums/forgotten.tsx"),
  route("/albums/mpm", "./routes/albums/mpm.tsx"),
  route("/albums/mcagdl", "./routes/albums/mcagdl.tsx"),
  route("/albums/mr-come-and-go-dr-love", "./routes/albums/mcagdl.tsx", { id: "albums/mcagdl-alias" }),
  route("/albums/news", "./routes/albums/news.tsx"),
  route("/albums/no-more", "./routes/albums/no-more.tsx"),
  route("/albums/paradise", "./routes/albums/paradise.tsx"),
  route("/albums/leave-alone", "./routes/albums/leave-alone.tsx"),
  route("/albums/thinking-ahead", "./routes/albums/thinking-ahead.tsx"),
  route("/albums/boredagain", "./routes/albums/boredagain.tsx"),
  route("/albums/singles", "./routes/albums/singles.tsx"),
  route("/albums/heat", "./routes/albums/heat.tsx"),
] satisfies RouteConfig;
