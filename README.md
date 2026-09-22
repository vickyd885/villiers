# Villiers High School Website

A modern, mobile-friendly rebuild of the [Villiers High School](https://www.villiers.ealing.sch.uk/) website, built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com), deployed as a static site on GitHub Pages.

## Running locally

```sh
npm install
npm run dev
```

Then open **http://localhost:4321/villiers/** in your browser (the `/villiers/` prefix matches the GitHub Pages project path — see `astro.config.mjs`).

The page live-reloads as you edit files in `src/`.

## Building & previewing a production build

```sh
npm run build      # outputs static files to ./dist/
npm run preview    # serves the built ./dist/ folder, same as it will look live
```

## Making content changes

See [CONTRIBUTING.md](./CONTRIBUTING.md) for a guide to editing pages, navigation, images and documents without needing to know Astro.

## Deploying to GitHub Pages

Every push to `main` automatically builds and deploys via `.github/workflows/deploy.yml`. See [CONTRIBUTING.md](./CONTRIBUTING.md#publishing-your-changes) for the one-time repo setup and the day-to-day publish steps.

## Project structure

```text
src/
├── pages/            # one file per route — this is what defines the site's URLs
├── layouts/          # shared page chrome (BaseLayout wraps every page)
├── components/
│   ├── layout/        # Header, Nav, MobileNav, Footer
│   ├── ui/             # Hero, Card, Callout, DownloadLink, CTA, etc.
│   └── sections/       # larger composed blocks (ValuesGrid, PlaceholderNotice)
├── data/
│   ├── nav.ts          # the entire site navigation tree, in one place
│   └── site.ts          # school name, address, phone, email, social links
├── lib/url.ts         # helper that prefixes internal links with the GitHub Pages base path
└── styles/global.css  # colour palette & design tokens (Tailwind v4 @theme block)

public/
├── images/            # campus photos, award badges, the school logo
└── documents/          # self-hosted PDFs (policies, forms)
```

Pages not yet migrated to the new design (most of "Statutory Information", "Our Students", "Our Staff", etc.) fall through to `src/pages/[...slug].astro`, which shows a "still being migrated" notice and links back to the equivalent page on the current live site — so there are no dead links.