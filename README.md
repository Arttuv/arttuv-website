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
| `npm run comment`         | Create a new comment (interactive prompt)                  |
| `npm run fetch-mastodon`  | Fetch Mastodon data for posts that have a `mastodon` field |
| `npm run build-comments`  | Build comment files from external sources                  |
| `npm run test:links`      | Check all internal links in the built site for broken URLs |

### Development

- **`npm run dev`** / **`npm run start`** — Start the Astro dev server with hot reload. Use during development.
- **`npm run build`** — Generate the production static site into `./dist/`. Run before deploying.
- **`npm run preview`** — Serve the built `./dist/` folder locally. Use to verify the production build looks correct before pushing.

### Content management

- **`npm run comment`** — Runs `src/create-comment.js` to create a new comment markdown file. Use when adding a manual comment to a blog post.
- **`npm run fetch-mastodon`** — Runs `src/fetch-mastodon.js` to fetch Mastodon thread data. Use to pull in replies from Mastodon for posts that have a `mastodon` status ID in their frontmatter.
- **`npm run build-comments`** — Runs `src/build-comments.js` to generate comment files. Use after fetching Mastodon data to build the comment markdown files.

### Testing

- **`npm run test:links`** — Runs `tests/check-links.js` against the built site to find broken internal links. Run after `npm run build` to validate all links.

## Want to learn more?

[Astro documentation](https://docs.astro.build).
