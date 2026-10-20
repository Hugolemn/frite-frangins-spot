<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep baseline pointer, pressed and keyboard-focus feedback for all links and controls in the global CSS base layer so interactions remain consistent across pages.
- Use equal-width centered wrapping rows for odd Food-Truck offering counts and a centered last contact card at intermediate widths, so incomplete rows remain balanced.
- Keep external order/contact URLs in one shared module and import them everywhere they appear, so a link changed in one place stays consistent across pages.
- Keep the official search origin in src/lib/site.ts and derive leaf canonical and Open Graph URLs from it, so domain changes remain consistent.
- Derive sitemap URLs from explicit staticData.sitemap route decisions using src/lib/sitemap.ts; omit lastmod unless an authoritative page-specific timestamp exists.
