---
name: superpowers-requesting-review
description: Dispatch a reviewer subagent with a precise diff and context after each task or before merging.
---


# Superpowers Requesting Code Review

Makes review a habit rather than an afterthought. Review is mandatory after each task in subagent-driven development, after a major feature and before merging to main. It is optional when stuck, before a refactor or after a tricky fix. The agent gathers git SHAs, then dispatches a reviewer subagent that gets carefully built context rather than the session history, so its judgement stays fresh. A worked example shows the request, and sections on common rationalizations and red flags counter the urge to skip the step. It is a short skill, a few hundred words, and pairs naturally with the receiving-review skill.

## Use it to

- Get a fresh-context review of a diff before merging into main
- Catch problems after each task instead of at the end of a long feature
- Request a second opinion when stuck on a stubborn bug
- Set a review baseline before starting a risky refactor

## How to use it

**Claude Code**
1. Inside Claude Code, install from the official marketplace. The plugin bundles all Superpowers skills.
2. /plugin install superpowers@claude-plugins-official


---

From **God of Skills**: a curated, hand-tested directory of AI skills, prompts, templates and image style guides.
Source: https://godofskills.com/skills/superpowers-requesting-review?ref=claude-skill
