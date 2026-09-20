import type { MetadataRoute } from "next";
import { SITE } from "@/content/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: SITE.shortName,
    description: SITE.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
      { src: "/logo-mark-192.png", sizes: "192x192", type: "image/png" },
      { src: "/logo-mark.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
