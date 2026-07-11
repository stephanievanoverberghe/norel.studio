export type SocialPlatform = "instagram" | "facebook" | "tiktok";

export interface SocialDestination {
  platform: SocialPlatform;
  label: string;
  handle: string;
  href: string;
}

const normalizeUrl = (value: string | undefined, fallback: string) => {
  try {
    return new URL(value || fallback).origin;
  } catch {
    return fallback;
  }
};

const siteUrl = normalizeUrl(process.env.NEXT_PUBLIC_SITE_URL, "https://norel.studio");
const futureSiteUrl = normalizeUrl(process.env.NEXT_PUBLIC_NOREL_ART_URL, "https://norel-art.fr");

export const siteConfig = {
  name: "Norel Art",
  title: "Norel Art — Artiste peintre contemporaine",
  description:
    "Découvrez l’univers de Norel Art : peintures contemporaines, portraits sur mesure, fresques murales et actualités de l’artiste.",
  url: siteUrl,
  futureSiteUrl,
  futureSiteLive: process.env.NEXT_PUBLIC_NOREL_ART_LIVE === "true",
  allowIndexing: process.env.NEXT_PUBLIC_ALLOW_INDEXING !== "false",
  locale: "fr-FR",
  contact: {
    email: "norel.art.dk@gmail.com",
    phoneDisplay: "07 68 34 73 16",
    phoneHref: "+33768347316",
    location: "Hauts-de-France, France",
  },
  social: [
    {
      platform: "instagram",
      label: "Instagram",
      handle: "@norel_art",
      href: "https://www.instagram.com/norel_art/",
    },
    {
      platform: "facebook",
      label: "Facebook",
      handle: "Page officielle",
      href: "https://www.facebook.com/profile.php?id=100063555158117",
    },
    {
      platform: "tiktok",
      label: "TikTok",
      handle: "@norelriotgrrl",
      href: "https://www.tiktok.com/@norelriotgrrl",
    },
  ] satisfies SocialDestination[],
} as const;

export function getTrackedFutureSiteUrl() {
  const url = new URL(siteConfig.futureSiteUrl);
  url.searchParams.set("utm_source", "norel.studio");
  url.searchParams.set("utm_medium", "redirect");
  url.searchParams.set("utm_campaign", "launch");
  return url.toString();
}
