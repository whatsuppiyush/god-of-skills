---
name: superpowers-writing-skills
description: Apply test-driven development to skills: watch an agent fail without the skill before you write it.
---


# Superpowers Writing Skills

Treats skill authoring as TDD for process documentation. You write pressure scenarios and run them with subagents, watch the agents fail to follow the behavior without the skill, write the skill, confirm they comply, then close loopholes and repeat. The skill defines what a skill is, when one is worth creating, three types (technique, pattern and reference), the directory structure and the SKILL.md layout. It requires understanding the test-driven development skill first and points to Anthropic's own authoring guidance as a complement. The core principle is that unless you watched an agent fail without it, you do not know the skill teaches anything.

## Use it to

- Draft a new skill and prove it changes agent behavior with pressure tests
- Find the loopholes agents use to rationalise around a discipline-enforcing skill
- Decide whether a piece of guidance deserves to be a skill at all
- Structure a skill's directory and frontmatter so it is discovered reliably

## How to use it

**Claude Code**
1. Inside Claude Code, install from the official marketplace. The plugin bundles all Superpowers skills.
2. /plugin install superpowers@claude-plugins-official


---

From **God of Skills**: a curated, hand-tested directory of AI skills, prompts, templates and image style guides.
Source: https://godofskills.com/skills/superpowers-writing-skills?ref=claude-skill
