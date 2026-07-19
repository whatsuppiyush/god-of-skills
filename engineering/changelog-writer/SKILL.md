---
name: changelog-writer
description: >-
  Turn merged pull requests since the last release tag into a human changelog grouped by
  Added / Fixed / Changed / Removed, written in user-facing language, not commit-speak. Use
  whenever the user says "write the changelog", "release notes", "what changed since last
  release", "generate CHANGELOG", "notes for this version", or is about to cut a release and
  needs notes. Reach for it right after a version bump, before publishing a release on GitHub,
  or when a maintainer wants to tell users what is new without hand-reading 40 PR titles.
  Produces a ready CHANGELOG.md section with a one-line summary on top.
---

# Changelog Writer

Read the PRs merged since the last tag, translate each into what a user actually gets, and
group them into a clean changelog. The skill has one job that engineers routinely get wrong:
a changelog is for the person using the software, not for the person who wrote it. "Refactor
auth middleware to use async handler" is a commit message. "Sign-in is now noticeably faster"
is a changelog line. Convert every entry.

## When to use this

- Cutting a release and you need notes for the tag or the release page.
- A maintainer asks "what's in this version?" or "summarize what changed".
- Trigger phrases: "changelog", "release notes", "what changed", "notes for vX", "generate
  CHANGELOG".

## Workflow

### 1. Find the last release and gather the PRs

Determine the previous tag, then list everything merged since:

```bash
# most recent tag
git describe --tags --abbrev=0

# commits since that tag, one line each
git log <last-tag>..HEAD --oneline --no-merges

# richer: merged PRs since the tag, with titles and labels (needs gh)
gh pr list --state merged --base main --limit 200 \
  --json number,title,labels,mergedAt,author \
  --search "merged:>=<date-of-last-tag>"
```

Prefer `gh pr list` when the repo uses PRs: titles and labels are cleaner signal than raw
commits. Fall back to `git log` for squash-merged or PR-less repos. If there is no prior tag,
use the first commit (`git rev-list --max-parents=0 HEAD`) as the start.

### 2. Classify each PR into one bucket

Sort every PR into exactly one of the four Keep a Changelog buckets:

- **Added** - new features, endpoints, options, or capabilities the user did not have before.
- **Changed** - existing behavior that now works differently (defaults, UI, performance,
  renamed things that still exist).
- **Fixed** - bugs that were resolved. What was broken and now works.
- **Removed** - features, options, or endpoints taken away or deprecated-to-gone.

Use labels first (`feature`, `bug`, `enhancement`, `breaking`), the title verb second (add,
fix, remove, update), and the diff as a tiebreaker. Drop pure-internal PRs (test-only, CI,
lint, dependency bumps with no user effect) unless the user asks for a developer changelog.

### 3. Translate each PR title into a user benefit

For every kept PR, rewrite the title as an outcome the user notices. Ask "what can the user
now do, or no longer suffer?" and write that.

- Strip the mechanism, keep the effect. "Add Redis cache to search endpoint" -> "Search
  returns results faster".
- Name the user-facing thing, not the internal module. Say "the export button", not
  "ExportController".
- Lead with the benefit for fixes. "Fix null deref in date parser" -> "Fixed a crash when
  importing files with empty date fields".
- Keep breaking changes loud and specific, with the migration in one clause.
- One line per entry. Reference the PR number in parentheses at the end.

### 4. Order by what users care about

Within each bucket, order by user impact, not merge date: breaking changes and headline
features first, tiny tweaks last. Put the most exciting Added items at the very top of Added.

### 5. Write the one-line summary

Open the section with a single sentence capturing the release's theme, so a reader knows in
five seconds whether to care. Base it on the biggest one or two entries.

## OUTPUT TEMPLATE

```markdown
## [vX.Y.Z] - YYYY-MM-DD

<one-line summary of what this release is mostly about>

### Added
- <new capability, in user terms> (#123)
- <new capability> (#130)

### Changed
- <behavior that now works differently> (#127)

### Fixed
- <what was broken and now works> (#125)
- <bug fix> (#131)

### Removed
- <feature or option taken away, with the replacement if any> (#129)
```

Omit any bucket that has no entries. Keep verbs in past tense (Added implies "we added").

## Worked example

Last tag is `v2.3.0`. `gh pr list` returns 7 merged PRs. Two are CI-only and get dropped. The
rest translate like this:

- "feat: add CSV export to reports (#210)" -> Added: "Export any report to CSV" (#210)
- "feat: dark mode (#214)" -> Added: "Dark mode, toggled from your profile settings" (#214)
- "perf: memoize dashboard queries (#212)" -> Changed: "The dashboard loads faster on large
  accounts" (#212)
- "fix: timezone off-by-one on daily summary (#211)" -> Fixed: "Daily summaries now show the
  correct date for users outside UTC" (#211)
- "chore: drop legacy /v1 export endpoint (#215)" -> Removed: "The old /v1 export endpoint is
  gone; use /v2/export" (#215)

Assembled:

```markdown
## [v2.4.0] - 2026-07-19

Reporting gets a CSV export and dark mode, plus a faster dashboard.

### Added
- Dark mode, toggled from your profile settings (#214)
- Export any report to CSV (#210)

### Changed
- The dashboard loads faster on large accounts (#212)

### Fixed
- Daily summaries now show the correct date for users outside UTC (#211)

### Removed
- The old /v1 export endpoint is gone; use /v2/export (#215)
```

---

From **God of Skills**: a curated, hand-tested directory of AI skills, prompts, templates and image style guides.
Source: https://godofskills.com/skills/changelog-writer?ref=claude-skill
