---
name: sentry-pr-writer
description: Write reviewer-facing pull request titles and bodies as a cover note, not a changelog or file list.
---


# Sentry PR Writer

Pull request descriptions are written for the reviewer. The skill says the body should read as a cover note instead of a changelog, a template, a validation log or a file-by-file summary. It starts by inspecting the change, then applies core rules for titles and body shape, adds optional reviewer aids and respects boundaries on what to leave out. Examples show the target. It can create a PR or refresh the title and body of an existing one when the branch changes. The aim is descriptions that tell a reviewer what matters and where to look.

## Use it to

- Write a pull request description that points the reviewer to what matters
- Refresh a stale PR body after more commits land
- Replace a generated file-by-file summary with a short cover note
- Pick a clear, specific pull request title

## How to use it

**Claude Code**
1. In a terminal, add the marketplace and install the plugin.
2. $ claude plugin marketplace add getsentry/skills
3. $ claude plugin install sentry-skills@sentry-skills


---

From **God of Skills**: a curated, hand-tested directory of AI skills, prompts, templates and image style guides.
Source: https://godofskills.com/skills/sentry-pr-writer?ref=claude-skill
