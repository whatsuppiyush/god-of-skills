---
name: addy-spec-driven-development
description: Write a structured specification before any code, then plan and break it into tasks through gated phases.
---


# Agent Skills: Spec-Driven Development

Insists that code starts with a written spec that both the engineer and the agent treat as the shared source of truth. The workflow is gated: a scope check, then specify, then plan, then tasks. The spec template covers objective, tech stack, commands, project structure, code style, testing strategy, boundaries, success criteria and open questions. It applies to new projects, significant features, a PRD that needs drafting, or requirements that are vague or span several subsystems. By forcing unclear requirements into the open first, it reduces the rework that comes from an agent confidently building the wrong thing.

## Use it to

- Turn a vague idea into a spec with success criteria and explicit boundaries
- Draft a PRD with objective, scope and open questions before development
- Break an approved spec into a plan and an ordered task list
- Check whether a large change needs to be split before anyone starts

## How to use it

**Claude Code**
1. Inside Claude Code, add the marketplace and install the plugin.
2. /plugin marketplace add addyosmani/agent-skills
3. /plugin install agent-skills@addy-agent-skills
4. Or install only this skill with the skills CLI.
5. $ npx skills add addyosmani/agent-skills --skill spec-driven-development


---

From **God of Skills**: a curated, hand-tested directory of AI skills, prompts, templates and image style guides.
Source: https://godofskills.com/skills/addy-spec-driven-development?ref=claude-skill
