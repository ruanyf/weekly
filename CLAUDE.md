# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Shape

This repo has two surfaces:

- Root Markdown archive for `科技爱好者周刊`: `README.md` is the chronological index, `docs/issue-<number>.md` are issues, `docs/free-*.md` are standalone resource pages, and `docs/subjects/*.md` are subject indexes.
- `web/` is a small Next.js app (`src/app`) for the Weekly Web prototype. It is JavaScript, uses the App Router, npm/package-lock, ESLint, and UnoCSS through PostCSS.

`context/` holds product/reference material, including PRD/architecture HTML and static prototype pages. Treat it as project context, not runtime source.

## Common Commands

Root has no package manager, build, lint, or test harness. Use shell checks for archive-only edits:

```bash
# Check repository state
git status --short

# List tracked Markdown files
git ls-files '*.md'

# Find headings in an issue
/usr/bin/grep -n '^## ' docs/issue-400.md

# Verify README links to an issue
/usr/bin/grep -n 'docs/issue-400.md' README.md

# Find references to a URL or title
/usr/bin/grep -R "search text" README.md docs context

# Check whitespace in changed files
git diff --check
```

Web app commands live under `web/`:

```bash
cd web && npm run dev      # Next dev server with Turbopack
cd web && npm run build    # production build
cd web && npm run start    # serve production build
cd web && npm run lint     # ESLint
```

There is currently no test script or single-test command in root or `web/`.

## High-Level Architecture

- Markdown archive edits usually touch one `docs/issue-<number>.md` file plus `README.md` when adding a new issue. Keep newest issues first within each month/year group.
- Recent issues use Chinese Markdown with sections such as `## 封面图`, `文章`, `工具`, `AI 相关`, `资源`, `图片`, `文摘`, `言论`, and `往年回顾`; older issues vary, so match nearby files instead of normalizing them.
- The Next app currently has a single route at `web/src/app/page.js`; global app metadata and layout are in `web/src/app/layout.js`.
- Global styling flows through `web/src/app/globals.css`, which imports UnoCSS, and `layout.js`, which imports both the global CSS and `@unocss/reset/tailwind.css`.
- `@/*` resolves to `web/src/*` via `web/jsconfig.json`.
- `web/CLAUDE.md` imports `web/AGENTS.md`, which warns that this is Next.js 16; read the relevant docs in `web/node_modules/next/dist/docs/` before changing Next-specific APIs or conventions.

## Editing Notes

- Preserve Chinese punctuation, link text, attribution style, and image Markdown conventions used in surrounding issues.
- Do not add generated build artifacts or dependency files unless the repo actually gains that toolchain.
