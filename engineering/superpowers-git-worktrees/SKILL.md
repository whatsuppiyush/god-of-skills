---
name: superpowers-git-worktrees
description: Make sure feature work happens in an isolated workspace, using native tools first and git worktree as a fallback.
---


# Superpowers Git Worktrees

Makes sure an agent works in isolation before it touches code. Step zero checks whether the session is already inside an isolated workspace by comparing git directories. If not, it prefers the platform's native worktree tools and falls back to manual git worktrees only when none exist. After creation it runs project setup, verifies a clean baseline by running the tests, and reports where the workspace lives. The order is to detect existing isolation, then use native tools, then use git, and never fight the harness. A quick-reference table and a list of rationalizations round it out.

## Use it to

- Start a feature in a separate worktree so the main checkout stays untouched
- Run several agent sessions on the same repo without them overwriting each other
- Confirm a clean test baseline before any change is made
- Set up isolation correctly on a platform with its own worktree tooling

## How to use it

**Claude Code**
1. Inside Claude Code, install from the official marketplace. The plugin bundles all Superpowers skills.
2. /plugin install superpowers@claude-plugins-official


---

From **God of Skills**: a curated, hand-tested directory of AI skills, prompts, templates and image style guides.
Source: https://godofskills.com/skills/superpowers-git-worktrees?ref=claude-skill
