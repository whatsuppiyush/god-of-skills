---
name: superpowers-receiving-review
description: Respond to review feedback with verification and reasoned pushback instead of blind agreement.
---


# Superpowers Receiving Code Review

Changes how an agent reacts when someone reviews its code. The agent reads the whole comment, restates the requirement, checks it against the actual codebase, and decides whether it is sound for this project. It then replies with technical acknowledgment or reasoned pushback, and implements one item at a time with a test each. A list of forbidden responses removes performative agreement. Feedback from your human partner and from external reviewers is handled differently, there is a YAGNI check for suggestions that add unneeded polish, and a section covers unclear feedback and when to push back.

## Use it to

- Evaluate a reviewer's suggestion against the real code before changing anything
- Push back politely and with evidence when a comment is technically wrong
- Work through a long list of review comments one item at a time with tests
- Ask a clarifying question instead of guessing at ambiguous feedback

## How to use it

**Claude Code**
1. Inside Claude Code, install from the official marketplace. The plugin bundles all Superpowers skills.
2. /plugin install superpowers@claude-plugins-official


---

From **God of Skills**: a curated, hand-tested directory of AI skills, prompts, templates and image style guides.
Source: https://godofskills.com/skills/superpowers-receiving-review?ref=claude-skill
