import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Moro's Pets — Peluquería Canina",
    short_name: "Moro's Pets",
    description:
      "Peluquería canina y paseos con enfoque en bienestar animal. Sin bozales, sin amarres, productos naturales.",
    start_url: "/",
    display: "standalone",
    background_color: "#e8e0d4",
    theme_color: "#5a5a3c",
    icons: [
      {
        src: "/images/moros-icon.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
  };
}
