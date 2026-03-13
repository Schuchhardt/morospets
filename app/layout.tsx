import type { Metadata } from "next";
import { Montserrat, DM_Sans } from "next/font/google";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://morospets.cl"),
  title: {
    default: "Moro's Pets — Peluquería Canina con Bienestar Animal",
    template: "%s | Moro's Pets",
  },
  description:
    "En Moro's Pets ofrecemos peluquería canina y paseos con enfoque en bienestar animal. Sin bozales, sin amarres, productos naturales. Santiago, Chile.",
  keywords: [
    "peluquería canina",
    "grooming canino",
    "bienestar animal",
    "paseos para perros",
    "peluquería de perros Santiago",
    "baño canino",
    "corte de pelo perros",
    "productos naturales mascotas",
    "cuidado canino",
    "Moro's Pets",
  ],
  authors: [{ name: "Moro's Pets" }],
  creator: "Moro's Pets",
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://morospets.cl",
    siteName: "Moro's Pets",
    title: "Moro's Pets — Peluquería Canina con Bienestar Animal",
    description:
      "En Moro's Pets ofrecemos peluquería canina y paseos con enfoque en bienestar animal. Sin bozales, sin amarres, productos naturales.",
    images: [
      {
        url: "/images/preview.png",
        width: 1200,
        height: 630,
        alt: "Moro's Pets — Peluquería Canina con Bienestar Animal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Moro's Pets — Peluquería Canina con Bienestar Animal",
    description:
      "En Moro's Pets ofrecemos peluquería canina y paseos con enfoque en bienestar animal. Sin bozales, sin amarres, productos naturales.",
    images: ["/images/preview.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://morospets.cl",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${montserrat.variable} ${dmSans.variable}`}>
      <body>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}
