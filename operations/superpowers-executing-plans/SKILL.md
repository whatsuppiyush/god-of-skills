---
name: superpowers-executing-plans
description: Work through a written implementation plan inline, task by task, with a ledger and one final review.
---


# Superpowers Executing Plans

The inline counterpart to subagent execution. Instead of paying for a fresh implementer and reviewer on every task, the agent works the plan itself in the current session and gets one fresh-context review of the whole branch at the end. To keep what the heavier method buys, the brief acts as the spec, a ledger serves as memory, test-driven development gates each task, and the final reviewer supplies the second pair of eyes. The task loop covers taking a task, working its steps, a completion contract and recording progress. It is meant for sessions where a human chose inline execution or no subagent tool exists.

## Use it to

- Carry out a finished plan in one session without spinning up per-task subagents
- Keep a running ledger so work survives a long session or a context reset
- Prove each step with a test that was watched failing and then passing
- Finish a feature with a single broad review of the branch rather than many small ones

## How to use it

**Claude Code**
1. Inside Claude Code, install from the official marketplace. The plugin bundles all Superpowers skills.
2. /plugin install superpowers@claude-plugins-official


---

From **God of Skills**: a curated, hand-tested directory of AI skills, prompts, templates and image style guides.
Source: https://godofskills.com/skills/superpowers-executing-plans?ref=claude-skill
