## Quick orientation

This is a Next.js (App Router) portfolio template that uses Once UI and MDX. Key places to look first:

- Project config & content: `src/resources/once-ui.config.ts` and `src/resources/content.tsx` (site-level toggles, routes, protectedRoutes, theme tokens).
- Pages / content: add or edit MDX pages in `src/app/blog/posts` and `src/app/work/projects` (pageExtensions include `.mdx`).
- App entry & layout: `src/app/layout.tsx` (server component, generates metadata and inlines theme init script).
- Client glue / UI primitives: `src/components/Providers.tsx` (wraps Once UI providers), `src/components/RouteGuard.tsx` (client-side route gating/password flow).
- API handlers (app dir): `src/app/api/*` — e.g. `authenticate/route.ts` and `check-auth/route.ts` implement simple cookie-based protection used by `RouteGuard`.

## Architecture & how things flow (why)

- The app uses Next.js App Router. `layout.tsx` is an async server component that renders the global shell and calls `generateMetadata`.
- UI theming and tokens come from `src/resources/once-ui.config.ts`. `layout.tsx` serializes a small theme-init script (so server defaults are applied quickly) and `Providers.tsx` applies runtime Theme/Data providers on the client.
- Content is MDX-centric: markdown + React is expected inside `src/app/blog/posts` and `src/app/work/projects`. The site builds pages from those MDX files and the configuration in `src/resources`.
- Route protection: protected routes are declared in `protectedRoutes` inside `once-ui.config.ts`. `RouteGuard.tsx` checks the route and, when required, calls `/api/check-auth`. Password verification hits `/api/authenticate` which reads the `PAGE_ACCESS_PASSWORD` env var and sets a cookie `authToken=authenticated`.

## Build / dev / common commands

- Install: `npm install` (project expects Node >= 18.17 per README).
- Dev: `npm run dev` (runs `next dev`).
- Build: `npm run build` (runs `next build`).
- Export (static): `npm run export` (runs `next export`).
- Start (production): `npm run start` (runs `next start`).
- Lint: `npm run lint` (runs `next lint`).
- Formatter: `npm run biome-write` (runs Biome formatter via `npx @biomejs/biome format --write .`).

When making changes that touch fonts or images for OG generation, note there are app routes under `src/app/api/og/*` that use `next/og` and fetch fonts at runtime.

## Repo-specific conventions & patterns

- MDX is an accepted page format (see `next.config.mjs` pageExtensions and `@next/mdx` config). When adding content use `.mdx` files placed in the appropriate folder.
- `src/resources/once-ui.config.ts` is the single place for site-level toggles (routes, display options, theme tokens). Prefer editing values here rather than scattering config across components.
- Server vs client components: files that include the `"use client"` directive (for example `src/components/Providers.tsx` and `src/components/RouteGuard.tsx`) run on the client — be mindful when importing browser-only APIs (like localStorage or next/navigation hooks) only from client components.
- Protected routes: to enable a password-protected page, add the path to `protectedRoutes` and set `PAGE_ACCESS_PASSWORD` in environment variables. The API route relies on that exact env var name.
- Icons: the icon set is declared in `src/resources/icons.ts` and injected by `Providers.tsx` via `IconProvider`.

## Examples (copyable snippets)

- Add a new project page:

  1. Create `src/app/work/projects/my-new-project.mdx`.
  2. Add frontmatter and MDX content following existing `*.mdx` examples in `src/app/work/projects`.

- Enable password protection for a page:

  1. In `src/resources/once-ui.config.ts` add the page path to `protectedRoutes`:

     protectedRoutes: { "/work/my-secret": true }

  2. Set environment variable `PAGE_ACCESS_PASSWORD` (e.g., in Vercel or local `.env`) to the desired password.

## Integration points / external deps to be aware of

- Once UI (`@once-ui-system/core`) — many components and theming tokens come from this package; changing tokens in `once-ui.config.ts` modifies appearance globally.
- MDX (`@next/mdx`, `next-mdx-remote`) — pay attention to how MDX is loaded (pageExtensions). Keep imports compatible with server/client React rules.
- OG generation uses `next/og` and fetches fonts at runtime; heavy changes may affect build/runtime requirements.

## Small contract for agents

- Inputs: edits to `src/resources/*`, `.mdx` files under `src/app/blog/posts` or `src/app/work/projects`, or components in `src/components`.
- Outputs: updated React/MDX pages, preserved generateMetadata behavior, correct cookie-based auth flow when changing `RouteGuard` or auth APIs.
- Error modes to watch: missing `PAGE_ACCESS_PASSWORD` will make `/api/authenticate` return 500; editing server components to import browser APIs breaks builds.

## Quick file map (most relevant)

- `src/resources/once-ui.config.ts` — site config, routes, protectedRoutes, fonts, theme tokens.
- `src/resources/content.tsx` — content data (person, home, social, etc.).
- `src/app/layout.tsx` — global layout, metadata and theme init script.
- `src/components/Providers.tsx` — Once UI providers (client).
- `src/components/RouteGuard.tsx` — route gating + password flow (client).
- `src/app/api/authenticate/route.ts` and `src/app/api/check-auth/route.ts` — cookie-based auth handlers.

---

If you'd like I can:

- Expand this with examples for editing specific MDX frontmatter fields used by the templates.
- Add quick unit or integration test suggestions (there are currently no tests in the repo).
- Add CI/PR checklist entries (lint, build) to the README or a contributing doc.

Please tell me which of these you'd like next or any unclear/omitted bits to include.
