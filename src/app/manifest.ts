import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "Norel",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#050a12",
    theme_color: "#050a12",
    lang: "fr",
  };
}
