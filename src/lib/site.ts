export const SITE_URL = "https://fritesetfrangins.com";

export function siteUrl(path: string) {
  return new URL(path, `${SITE_URL}/`).href;
}