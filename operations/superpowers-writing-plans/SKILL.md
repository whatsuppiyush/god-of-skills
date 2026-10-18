---
name: superpowers-writing-plans
description: Write implementation plans for an engineer with zero context, with exact files, tests and task sizes.
---


# Superpowers Writing Plans

Produces plans meant for a capable engineer who has never seen the codebase or the spec. It checks scope first and suggests splitting a spec that covers several independent subsystems. Then it maps the file structure, right-sizes tasks and keeps each step small. Every plan carries a standard header and global constraints, and each task lists exact interfaces and the test to write. Plans are saved to a dated markdown file under docs, unless the user prefers another location. A review-focus section says what to check before handing the plan to an executor, such as the executing-plans or subagent skills.

## Use it to

- Turn an approved spec into a task list a fresh agent can execute without questions
- Split an oversized spec into separate plans per subsystem
- Specify exact files, interfaces and tests for each step
- Prepare a plan document that a reviewer can check before implementation starts

## How to use it

**Claude Code**
1. Inside Claude Code, install from the official marketplace. The plugin bundles all Superpowers skills.
2. /plugin install superpowers@claude-plugins-official


---

From **God of Skills**: a curated, hand-tested directory of AI skills, prompts, templates and image style guides.
Source: https://godofskills.com/skills/superpowers-writing-plans?ref=claude-skill
