import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test("affiche les liens officiels dans une interface accessible", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/Norel Art/);
  await expect(page.getByRole("heading", { level: 1, name: "L’art du regard, le trait de l’âme." })).toBeVisible();
  const links = page.getByRole("navigation", { name: "Liens Norel Art" });
  await expect(links.getByRole("link")).toHaveCount(3);
  await expect(links.getByRole("link", { name: /Instagram/ })).toHaveAttribute("rel", "noopener noreferrer");
  await expect(page.getByText("Site officiel", { exact: true })).toBeVisible();
  await expect(page.getByText("Bientôt en ligne", { exact: true })).toBeVisible();
  await expect(page.getByRole("link", { name: "Email" })).toHaveAttribute("href", /^mailto:/);

  const accessibility = await new AxeBuilder({ page }).analyze();
  expect(accessibility.violations).toEqual([]);
});

for (const viewport of [
  { width: 320, height: 568 },
  { width: 375, height: 667 },
  { width: 390, height: 844 },
]) {
  test(`tient sans scroll dans ${viewport.width}x${viewport.height}`, async ({ page }) => {
    await page.setViewportSize(viewport);
    await page.goto("/");

    const dimensions = await page.evaluate(() => ({
      clientHeight: document.documentElement.clientHeight,
      clientWidth: document.documentElement.clientWidth,
      scrollHeight: document.documentElement.scrollHeight,
      scrollWidth: document.documentElement.scrollWidth,
    }));

    expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.clientWidth);
    expect(dimensions.scrollHeight).toBeLessThanOrEqual(dimensions.clientHeight);

    const footer = page.getByTestId("link-hub-footer");
    await expect(footer).toBeVisible();
    const footerBox = await footer.boundingBox();
    expect(footerBox).not.toBeNull();
    expect((footerBox?.y ?? 0) + (footerBox?.height ?? 0)).toBeLessThanOrEqual(viewport.height);
  });
}

test("publie les métadonnées SEO essentielles", async ({ page }) => {
  await page.goto("/");

  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", "https://norel.studio");
  await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", /peintures contemporaines/i);
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute("content", /norel-hero\.webp/);
  await expect(page.locator('link[rel="icon"]')).toHaveAttribute("href", /favicon\.ico/);
  const structuredData = await page.locator('script[type="application\/ld\+json"]').textContent();
  expect(structuredData).toContain('"@type":"Person"');
});
