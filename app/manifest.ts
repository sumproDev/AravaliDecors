import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Aravali Marbles",
    short_name: "Aravali",
    description:
      "Tiles, pipes, sanitaryware, plywood, tanks, adhesives, composite granite and interior design services in Purnea.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#c71920",
    icons: [
      {
        src: "/logo.jpeg",
        sizes: "512x512",
        type: "image/jpeg",
      },
    ],
  };
}
