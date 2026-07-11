import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";

import { siteConfig } from "@/config/site";

import "./globals.css";

const bodyFont = Montserrat({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const headingFont = localFont({
  src: "./fonts/CatchyMager.ttf",
  variable: "--font-heading",
  display: "swap",
});

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#050a12",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  alternates: { canonical: "/" },
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  category: "art",
  creator: siteConfig.name,
  description: siteConfig.description,
  keywords: [
    "Norel Art",
    "artiste peintre française",
    "peinture contemporaine",
    "portrait sur mesure",
    "fresque murale",
    "art Hauts-de-France",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/",
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: "/images/norel-hero.webp",
        width: 1352,
        height: 1387,
        alt: "Peinture contemporaine rouge et noire de Norel Art",
      },
    ],
  },
  publisher: siteConfig.name,
  robots: {
    index: siteConfig.allowIndexing,
    follow: siteConfig.allowIndexing,
    googleBot: {
      index: siteConfig.allowIndexing,
      follow: siteConfig.allowIndexing,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/images/norel-hero.webp"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${bodyFont.variable} ${headingFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
