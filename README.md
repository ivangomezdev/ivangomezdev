# Iván Gómez — Portfolio

Next.js App Router, React, JavaScript/JSX and regular CSS using BEM. No TypeScript, Tailwind, CSS Modules or icon libraries.

## Development

```sh
npm install
npm run dev
```

## Production

```sh
npm run check
npm run build
```

The application exports to `out/`. Deploy that directory to static hosting or deploy the repository to Vercel. This project uses static export, so `next start` is not the production server; serve `out/` with any static HTTP server.

## Content

- `src/data/projects.js`: project descriptions, tags, public repository links, visibility and website URLs. Private repositories display PRIVATE/PRIVADO instead of a link.
- `src/data/profile.js`: contact, career, clients, education, certificates and CV paths.
- `src/data/translations.js`: Spanish and English interface copy and client/project relationships.
- `public/cv/ivan-gomez-es.pdf` and `public/cv/ivan-gomez-en.pdf`: general downloadable CVs.
- `scripts/generate-cv.py`: generate both general CVs with `python scripts/generate-cv.py`. Requires Python, ReportLab and Node.js. Employment history comes from `src/data/profile.js`.

The home page links to `/work/`, `/about/`, and `/contact/`. Each project has a static detail page under `/work/<id>/`. Language and theme are saved locally. Select a language directly with `?lang=es` or `?lang=en`. Animations respect reduced-motion preferences.

The project captures in `public/images/work/screenshots/` appear in the home mosaic and in the matching projects. `src/data/covers.js` defines the mosaic order and falls back to conceptual artwork for projects without captures. Client relationships and career information were provided by Iván. Source material for the CV was the previous CV and the more recent supplied LinkedIn screenshots. The newer education dates take precedence.

The original CV and verification captures remain in the ignored `artifacts/` directory and are not shipped to hosting.
