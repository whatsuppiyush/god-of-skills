---
name: superpowers-subagent-development
description: Execute a plan by sending a fresh implementer subagent per task, with task review and a final branch review.
---


# Superpowers Subagent-Driven Development

A full execution method for plans made of independent tasks. Each task goes to a fresh implementer subagent with isolated context, then to a task review that checks spec compliance and code quality. A fix loop runs when the reviewer objects, and a broad review of the whole branch comes at the end. The model keeps a ledger, narrates at most one short line between tool calls, and does not stop to ask permission between tasks. Instead it records rulings, which are decisions with their reasoning and cost if wrong, so a running plan never stalls on a human. A model-selection section matches the model to each role.

## Use it to

- Run a multi-task implementation plan with minimal human interruption
- Keep implementation and review contexts separate so neither inherits the other's blind spots
- Record decisions as rulings in a ledger you can audit afterwards
- Choose cheaper or stronger models for implementer and reviewer roles

## How to use it

**Claude Code**
1. Inside Claude Code, install from the official marketplace. The plugin bundles all Superpowers skills.
2. /plugin install superpowers@claude-plugins-official


---

From **God of Skills**: a curated, hand-tested directory of AI skills, prompts, templates and image style guides.
Source: https://godofskills.com/skills/superpowers-subagent-development?ref=claude-skill
