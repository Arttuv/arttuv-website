# Based on Astro Starter Kit: Minimal

Folder structure as follows:

```
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                                     |
| :------------------------ | :--------------------------------------------------------- |
| `npm install`             | Installs dependencies                                      |
| `npm run dev`             | Starts local dev server at `localhost:4321`                 |
| `npm run build`           | Build the production site to `./dist/`                     |
| `npm run preview`         | Preview the production build locally before deploying      |
| `npm run astro ...`       | Run Astro CLI commands like `astro add`, `astro check`     |
| `npm run fetch-mastodon`  | Fetch your public Mastodon statuses from all configured Mastodon sources into local JSON |
| `npm run sync-marginalia-source` | Rebuild the generic marginalia source file from all cached Mastodon data |
| `npm run build-marginalia`| Build marginalia files from Mastodon statuses              |
| `npm run test:links`      | Check all internal links in the built site for broken URLs |

### Development

- **`npm run dev`** / **`npm run start`** — Start the Astro dev server with hot reload. Use during development.
- **`npm run build`** — Generate the production static site into `./dist/`. Run before deploying.
- **`npm run preview`** — Serve the built `./dist/` folder locally. Use to verify the production build looks correct before pushing.

### Content management

- **`npm run fetch-mastodon`** — Runs `src/fetch-mastodon.js` to fetch your own public Mastodon statuses from every source listed in `src/mastodon-sources.js` into `src/external-data/` and refresh the generic marginalia source file.
- **`npm run sync-marginalia-source`** — Runs `src/sync-marginalia-source.js` to rebuild `src/external-data/marginalia-source.json` from the cached Mastodon data for every source listed in `src/mastodon-sources.js` without making network requests.
- **`npm run build-marginalia`** — Runs `src/build-marginalia.js` to generate `src/content/marginalia/` entries from the generic marginalia source file.

The file `src/external-data/marginalia-source.json` is the source-agnostic import format consumed by the marginalia generator. Mastodon is currently one adapter that writes to it, but future sources can target the same format. Multiple Mastodon instances can now contribute to the same normalized source file.

### Testing

- **`npm run test:links`** — Runs `tests/check-links.js` against the built site to find broken internal links. Run after `npm run build` to validate all links.

## Want to learn more?

[Astro documentation](https://docs.astro.build).
