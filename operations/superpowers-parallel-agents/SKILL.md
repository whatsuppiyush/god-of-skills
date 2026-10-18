---
name: superpowers-parallel-agents
description: Split two or more independent problems across subagents that run concurrently with isolated context.
---


# Superpowers Parallel Agents

Teaches when and how to fan work out to several agents at once. The test is independence: multiple failures in different test files or subsystems that share no state can each get their own agent, while related failures belong to a single investigator. The pattern has four steps, identify independent domains, write a focused task for each, dispatch them together, then review and integrate the results. Each agent receives precisely crafted context instead of the session's history. It also lists common mistakes and, just as usefully, the situations where parallel dispatch is the wrong call.

## Use it to

- Investigate failures in several unrelated test files at the same time
- Hand each subsystem bug to its own agent and merge the findings afterwards
- Write agent task prompts that carry only the context needed
- Decide quickly whether a batch of problems is independent enough to parallelise

## How to use it

**Claude Code**
1. Inside Claude Code, install from the official marketplace. The plugin bundles all Superpowers skills.
2. /plugin install superpowers@claude-plugins-official


---

From **God of Skills**: a curated, hand-tested directory of AI skills, prompts, templates and image style guides.
Source: https://godofskills.com/skills/superpowers-parallel-agents?ref=claude-skill
