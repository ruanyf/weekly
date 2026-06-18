# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Shape

This is a static Markdown archive for `科技爱好者周刊`. There is no application runtime, package manager config, build pipeline, or test harness in the repository.

- `README.md` is the chronological index, grouped by year and month, linking each newsletter issue.
- `docs/issue-<number>.md` are weekly newsletter issues. Current recent issues use Chinese Markdown with a title, intro, `## 封面图`, feature sections, and recurring sections such as `文章`, `工具`, `AI 相关`, `资源`, `图片`, `文摘`, `言论`, and `往年回顾`.
- `docs/free-software.md`, `docs/free-photos.md`, and `docs/free-music.md` are standalone curated resource pages.
- `context/index.md` currently contains only a placeholder project context index.

## Common Commands

Use shell checks instead of build/test commands:

```bash
# Check repository state
git status --short

# List tracked Markdown files
git ls-files '*.md'

# Find issue headings
/usr/bin/grep -n '^## ' docs/issue-400.md

# Verify README links to an issue
/usr/bin/grep -n 'docs/issue-400.md' README.md

# Find all references to a URL or title
/usr/bin/grep -R "search text" README.md docs context
```

There is no single-test command because there are no tests. For Markdown-only edits, verify by checking the changed file, the `README.md` index link if an issue was added, and `git diff --check` for whitespace problems.

## Editing Notes

- Keep issue numbering and `README.md` ordering consistent: newest issues appear first within each month/year group.
- Follow the formatting of nearby issues rather than normalizing older issues; early issues have different section names and image hosts.
- Preserve Chinese punctuation, link text, attribution style, and image Markdown conventions used in the surrounding issue.
- Do not add generated build artifacts or dependency files unless the repository actually gains a toolchain.
