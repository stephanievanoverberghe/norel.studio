import { LinkHub } from "@/components/landing/LinkHub";
import { landingContent } from "@/content/landing";
import { createArtistStructuredData, stringifyStructuredData } from "@/lib/structured-data";

export default function HomePage() {
  const structuredData = createArtistStructuredData();

  return (
    <>
      <a className="skip-link" href="#contenu">
        Aller au contenu
      </a>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: stringifyStructuredData(structuredData) }}
      />
      <main id="contenu">
        <LinkHub content={landingContent} />
      </main>
    </>
  );
}
