import { describe, expect, it } from "vitest";

import { siteConfig } from "@/config/site";

import { createArtistStructuredData, stringifyStructuredData } from "./structured-data";

describe("artist structured data", () => {
  it("décrit l’artiste et ses profils publics", () => {
    const data = createArtistStructuredData();

    expect(data["@type"]).toBe("Person");
    expect(data.url).toBe(siteConfig.url);
    expect(data.sameAs).toHaveLength(3);
  });

  it("neutralise les chevrons dans le JSON injecté", () => {
    expect(stringifyStructuredData({ value: "</script>" })).not.toContain("<");
  });
});
