import { describe, expect, test } from "bun:test";
import { SITE_URL, siteUrl } from "./site";
import { sitemapXML } from "./sitemap";

describe("Official search domain", () => {
  test("uses the user's chosen domain for every page", () => {
    expect(SITE_URL).toBe("https://fritesetfrangins.com");
    expect(siteUrl("/food-truck")).toBe("https://fritesetfrangins.com/food-truck");
    expect(siteUrl("/")).toBe("https://fritesetfrangins.com/");
  });
  test("sitemap entries use the official domain without invented modification dates", () => {
    const xml = sitemapXML(SITE_URL, [{ path: "/" }, { path: "/food-truck" }]);
    expect(xml).toContain("<loc>https://fritesetfrangins.com/</loc>");
    expect(xml).toContain("<loc>https://fritesetfrangins.com/food-truck</loc>");
    expect(xml).not.toContain("<lastmod>");
  });
});