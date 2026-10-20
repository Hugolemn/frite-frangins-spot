import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { SITE_URL, siteUrl } from "./site";
import { sitemapXML } from "./sitemap";

describe("Official search domain", () => {
  test("uses the user's chosen domain for every page", () => {
    assert.equal(SITE_URL, "https://fritesetfrangins.com");
    assert.equal(siteUrl("/food-truck"), "https://fritesetfrangins.com/food-truck");
    assert.equal(siteUrl("/"), "https://fritesetfrangins.com/");
  });
  test("sitemap entries use the official domain without invented modification dates", () => {
    const xml = sitemapXML(SITE_URL, [{ path: "/" }, { path: "/food-truck" }]);
    assert.ok(xml.includes("<loc>https://fritesetfrangins.com/</loc>"));
    assert.ok(xml.includes("<loc>https://fritesetfrangins.com/food-truck</loc>"));
    assert.ok(!xml.includes("<lastmod>"));
  });
});