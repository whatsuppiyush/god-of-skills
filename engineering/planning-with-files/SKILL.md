---
name: planning-with-files
description: Keep task_plan.md, findings.md and progress.md on disk so long agent tasks survive resets and context drift.
---


# Planning with Files

A Manus-style pattern that uses persistent markdown files as working memory on disk. Three files, task_plan.md, findings.md and progress.md, hold the plan, discoveries and progress, and lifecycle hooks inject selected planning context. Before continuing, the agent restores project state by resolving which plan the task owns and checking the git diff. Critical rules include creating the plan first, a two-action rule, reading before deciding, updating after acting and logging every error, never repeating a failure, with a three-strike error protocol. Translations exist in several languages and many agent hosts are supported.

## Use it to

- Keep a multi-hour coding task on track across context resets
- Record findings as you research so they are not lost to compaction
- Recover a session's plan and progress after clearing the conversation
- Stop an agent from repeating the same failing approach

## How to use it

**Claude Code**
1. Install globally with the skills CLI.
2. $ npx skills add OthmanAdi/planning-with-files --skill planning-with-files -g


---

From **God of Skills**: a curated, hand-tested directory of AI skills, prompts, templates and image style guides.
Source: https://godofskills.com/skills/planning-with-files?ref=claude-skill
