import { siteConfig } from "@/config/site";

export function createArtistStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.url}/#artist`,
    name: siteConfig.name,
    url: siteConfig.url,
    image: `${siteConfig.url}/images/norel-hero.webp`,
    jobTitle: "Artiste peintre contemporaine",
    description: siteConfig.description,
    email: `mailto:${siteConfig.contact.email}`,
    telephone: siteConfig.contact.phoneHref,
    address: {
      "@type": "PostalAddress",
      addressCountry: "FR",
      addressRegion: "Hauts-de-France",
    },
    sameAs: siteConfig.social.map((destination) => destination.href),
  };
}

export function stringifyStructuredData(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
