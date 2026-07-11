import { describe, expect, it } from "vitest";

import { getTrackedFutureSiteUrl, siteConfig } from "./site";

describe("siteConfig", () => {
  it("expose uniquement des destinations HTTPS", () => {
    expect(new URL(siteConfig.url).protocol).toBe("https:");
    expect(new URL(siteConfig.futureSiteUrl).protocol).toBe("https:");

    for (const destination of siteConfig.social) {
      expect(new URL(destination.href).protocol).toBe("https:");
    }
  });

  it("construit une destination de lancement mesurable", () => {
    const trackedUrl = new URL(getTrackedFutureSiteUrl());

    expect(trackedUrl.origin).toBe(siteConfig.futureSiteUrl);
    expect(trackedUrl.searchParams.get("utm_source")).toBe("norel.studio");
    expect(trackedUrl.searchParams.get("utm_medium")).toBe("redirect");
    expect(trackedUrl.searchParams.get("utm_campaign")).toBe("launch");
  });
});
