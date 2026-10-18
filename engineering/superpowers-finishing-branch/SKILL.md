---
name: superpowers-finishing-branch
description: Verify tests, detect the environment and present clear merge, PR, keep or discard options when work is done.
---


# Superpowers Finishing a Branch

A closing checklist for a development branch. It runs the project's full test suite first and stops if anything fails, because the menu of options only appears after a green run. It then detects the environment, works out the base branch, and offers a short list of choices: merge locally, push and open a pull request, keep the branch as it is, or discard the work. Discarding requires an explicit request from the human partner. After the chosen action it cleans up, including any worktree. The result is a repeatable end to every task instead of an improvised one.

## Use it to

- End a feature session with a consistent verify, choose and clean-up routine
- Open a pull request only after the full suite is confirmed passing
- Keep a half-finished branch intact while still tidying the workspace
- Discard abandoned work safely, with an explicit confirmation step

## How to use it

**Claude Code**
1. Inside Claude Code, install from the official marketplace. The plugin bundles all Superpowers skills.
2. /plugin install superpowers@claude-plugins-official


---

From **God of Skills**: a curated, hand-tested directory of AI skills, prompts, templates and image style guides.
Source: https://godofskills.com/skills/superpowers-finishing-branch?ref=claude-skill
