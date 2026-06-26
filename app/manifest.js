export default function manifest() {
  return {
    name: "Hossain Mahmud Portfolio",
    short_name: "Hossain Mahmud",
    description:
      "Official portfolio of Hossain Mahmud, software developer from Bangladesh.",
    start_url: "/",
    display: "standalone",
    background_color: "#1c1c22",
    theme_color: "#00ff99",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "16x16 32x32 48x48",
        type: "image/x-icon",
      },
      {
        src: "/assets/photo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
