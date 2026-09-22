# Making changes to the website

This guide is for editing content on the Villiers High School site — no Astro experience required, just enough comfort editing text in a code editor (e.g. [VS Code](https://code.visualstudio.com/)) and running two or three terminal commands.

## Before you start

```sh
npm install       # only needed once, or after pulling changes that add new packages
npm run dev        # starts a local preview at http://localhost:4321/villiers/
```

Leave `npm run dev` running in a terminal while you edit — the browser tab refreshes automatically every time you save a file.

---

## Common tasks

### Edit text on an existing page

Every page lives in `src/pages/`, and the file path matches the URL. For example:

| Page | File |
| --- | --- |
| Homepage | `src/pages/index.astro` |
| Our School | `src/pages/our-school/index.astro` |
| Admissions | `src/pages/our-school/our-admissions.astro` |
| Sixth Form | `src/pages/our-sixth-form-1.astro` |
| Contact | `src/pages/contact.astro` |
| Term Dates | `src/pages/key-information/term-dates/202627-term-dates.astro` |

Open the file, find the text in question (it reads like HTML with some `{curly brace}` bits for dynamic values), edit it, and save. The dev server will hot-reload.

Don't worry about the `---` fenced block at the top of each file — that's just where images, page data, and component imports are set up. The actual visible content is below it.

### Change a phone number, email address, or social link

These are centralised in one file so you only have to update them once:

```
src/data/site.ts
```

### Add, remove, or reorder a navigation menu item

The entire site menu — desktop dropdowns and the mobile menu — is driven by one file:

```
src/data/nav.ts
```

Each entry looks like:

```ts
{ label: "Uniform", href: "/key-information/uniform", inScope: true }
```

- `label` — the text shown in the menu
- `href` — where it links to
- `children` — an optional array of sub-items, for dropdowns (supports two levels)
- `external: true` — opens the link in a new tab (use this for links to other websites)
- `inScope: true` — marks that this page has been fully rebuilt. **Leave this off** for a link that doesn't have a real page yet — visitors will see a "this page is still being migrated" notice with a link back to the current live site instead of a broken link.

### Add a brand new page

1. Create a new `.astro` file under `src/pages/` — the file's path becomes its URL. For example, `src/pages/our-school/catering.astro` becomes `/our-school/catering`.
2. The easiest way is to copy an existing similar page (e.g. `src/pages/our-school/history-of-villiers.astro` for a simple text page, or `src/pages/key-information/uniform.astro` for a very short one) and edit its content.
3. Every page should start with `<BaseLayout title="..." description="...">` and end with `</BaseLayout>` — this gives it the shared header, footer, and page styling.
4. Add an entry for it in `src/data/nav.ts` with `inScope: true` so it's linked from the menu instead of falling through to the "coming soon" placeholder.

### Add or replace an image

1. Add the image file to `public/images/` (create a subfolder if it's a new category, following the existing pattern — `public/images/campus/`, `public/images/awards/`).
2. Reference it in a page or component as `/images/your-folder/your-file.jpg` — **do not** add the `/villiers` prefix yourself, that's handled automatically.
3. Keep photos reasonably sized (aim for under ~300KB each) so pages load quickly — most image editors and [Squoosh](https://squoosh.app/) can compress a photo without a visible quality loss.

### Add or replace a PDF / document

1. Add the file to `public/documents/`.
2. Link to it with a `DownloadLink` component (see `src/pages/key-information/uniform.astro` for an example) or a plain link to `/documents/your-file.pdf`.

### A note on internal links

Whenever you write a link to another page on this site, use a root-relative path starting with `/` — e.g. `href="/contact"` — and pass it through a component that already handles the site's URL prefix (`Card`, `CTA`, `DownloadLink`, `Hero`, or the nav files) wherever possible. If you're writing a one-off `<a href="/...">` directly in a page, wrap it with the `url()` helper:

```astro
---
import { url } from "../lib/url";
---
<a href={url("/our-school")}>Our School</a>
```

This makes sure the link still works once the site is live at `https://<your-org>.github.io/villiers/` (or a custom domain, if one gets set up later — see `astro.config.mjs`). Links to *other* websites (`https://...`), email (`mailto:`) and phone (`tel:`) links don't need this — only links to pages within this site.

---

## Publishing your changes

### One-time setup (already done if this repo was created from this project)

1. Push this repository to GitHub.
2. In the repo, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Confirm `astro.config.mjs` has `base: '/<your-repo-name>'` matching the actual repo name (it's currently set to `/villiers` — update this if the GitHub repo is named something else).

### Every time after that

```sh
git add .
git commit -m "Describe what you changed"
git push
```

Pushing to the `main` branch automatically builds and deploys the site via `.github/workflows/deploy.yml` — check the **Actions** tab on GitHub to watch progress. The live site updates a minute or two after the workflow finishes.

You can also trigger a deploy manually from the **Actions** tab without pushing new code, using "Run workflow".
