---
name: addy-documentation-adrs
description: Record the why behind decisions with architecture decision records and context future engineers need.
---


# Agent Skills: Documentation and ADRs

Argues that the most valuable documentation records why, not what. Its main tool is the Architecture Decision Record, with a template covering status, date, context, decision, alternatives considered and consequences, plus an ADR lifecycle. It says when an ADR is warranted and tells the agent to match the repo's existing convention first. Beyond ADRs it applies when changing public APIs, shipping features or capturing context that later engineers and agents will need. The result is a decision trail that explains why the codebase looks the way it does.

## Use it to

- Write an ADR for choosing one database over two alternatives
- Update docs when a public API changes
- Capture the constraints behind a design so future agents do not undo it
- Retire or supersede an old decision record with a clear status
- Backfill a short ADR for an old decision that new engineers keep questioning

## How to use it

**Claude Code**
1. Inside Claude Code, add the marketplace and install the plugin.
2. /plugin marketplace add addyosmani/agent-skills
3. /plugin install agent-skills@addy-agent-skills
4. Or install only this skill with the skills CLI.
5. $ npx skills add addyosmani/agent-skills --skill documentation-and-adrs


---

From **God of Skills**: a curated, hand-tested directory of AI skills, prompts, templates and image style guides.
Source: https://godofskills.com/skills/addy-documentation-adrs?ref=claude-skill
