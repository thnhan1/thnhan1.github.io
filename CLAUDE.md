# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository overview

This is a **Hugo static site** — a personal blog — with a custom theme (`nhanoki`) installed as a git submodule at `themes/nhanoki/`. The theme repo lives at `https://github.com/thnhan1/nhanoki.git`.

## Build & development

- **Dev server:** `hugo server -D` (includes drafts)
- **Production build:** `hugo --gc --minify` (what CI runs)
- **Hugo version:** extended ≥ 0.146.0 required. CI pins to `0.161.1` in `.github/workflows/hugo.yml`.

There are no tests, linting, or package.json — this is a pure Hugo site.

## CI/CD

Push to `main` triggers `.github/workflows/hugo.yml`: checkout with recursive submodules → `hugo --gc --minify` → deploy to GitHub Pages via `actions/deploy-pages@v4`.

## Architecture

### Theme structure

The theme (`themes/nhanoki/`) uses Hugo's **new template system** (`_partials/`, `_markup/`), requiring extended Hugo ≥ 0.146.0.

```
layouts/
  baseof.html          → frame: <head>, <header>, <main>, <newsletter>, <footer>
  home.html            → Latest post, Topics list, Writing archive
  page.html            → single post or static page (title + content + topics)
  section.html         → post list by section (/posts)
  taxonomy.html        → list of all terms in a taxonomy (/topics, /tags)
  term.html            → posts for a single term (/topics/design)
  404.html             → 404 page
  _partials/           → head, header, footer, menu, newsletter, terms
  _markup/             → render-codeblock.html, render-image.html (render hooks)
```

### Asset pipeline

CSS and JS live in `assets/`, processed via Hugo pipes:
- `assets/css/main.css` → built by `layouts/_partials/head/css.html` with `css.Build` (minified + fingerprinted in production)
- `assets/js/main.js` → built by `layouts/_partials/head/js.html` with `js.Build`

Component CSS files (`assets/css/components/*.css`) exist but are **not currently imported** by `main.css`.

### Theme features

- **Dark/light mode:** toggle in header, persisted to `localStorage`, defaults to `prefers-color-scheme`. CSS variables defined in `themes/nhanoki/assets/css/main.css` under `:root` / `.theme-light` / `.theme-dark`. Icons via `static/sun.svg` and `static/moon.svg`.
- **Code blocks:** custom render hook (`_markup/render-codeblock.html`) adds optional `title` bar, line highlighting via `hl_lines`, and a copy-to-clipboard button. Syntax highlighting uses Chroma with the **Dracula** style (configured in `hugo.toml` → `[markup.highlight]`).
- **Image handling:** render hook (`_markup/render-image.html`) resolves relative `./image.jpg` paths to page resources in leaf bundles and adds `loading="lazy"`.
- **Color tokens:** based on the [Flexoki](https://github.com/kepano/flexoki) palette (MIT). CSS classes like `.muted`, `.faint`, `.tag`, `.wrap` follow the Steph Ango design conventions.
- **JavaScript** (`assets/js/main.js`): self-contained vanilla JS — theme toggle + code copy button. No frameworks.

### Content structure

```
content/
  _index.md              → homepage content
  about.md               → /about (static page)
  now.md                 → /now (static page)
  writing/
    _index.md            → /writing section landing
  posts/
    post-name.md         → branch bundle post (no images)
    post-name/
      index.md           → leaf bundle post (with images alongside)
```

### Taxonomies

Two taxonomies defined in `hugo.toml`: `topics` and `tags`. Posts attach topics via `topics = ["design", "tools"]` in front matter. The `home.html` template only surfaces **topics**; `tags` exist but are not featured on the homepage.

### Site config key points

- `hugo.toml` in the project root configures the site; `themes/nhanoki/hugo.toml` is the theme's metadata (`theme.toml` equivalent).
- `[markup.goldmark.renderer].unsafe = true` — raw HTML is allowed in markdown.
- RSS output is enabled for home and sections (`[outputs]`), with custom feed filename via `[outputFormats.RSS]`.

## Posts as leaf bundles

For posts with images, use a **leaf bundle** (directory with `index.md` + image files). The image render hook auto-resolves `./image.jpg` to a page resource. **Do not** place `index.md` directly at `content/posts/` — that would turn the entire posts section into a leaf bundle and hide other posts. Use `_index.md` for section landing pages.

## Front matter

```yaml
---
title: "Post title"
date: 2025-10-20T10:00:00Z
draft: false
topics: ["advice", "tools"]
---
```

Use `<!--more-->` within content to set the summary shown on the homepage.

## Theme submodule

The theme is a git submodule. Changes to theme files inside `themes/nhanoki/` belong to a separate repo. To update theme appearance or behavior, edit files in `themes/nhanoki/` and commit/push from within the submodule.
