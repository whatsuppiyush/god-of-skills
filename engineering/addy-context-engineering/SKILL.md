---
name: addy-context-engineering
description: Give a coding agent the right information at the right time using a five-level context hierarchy.
---


# Agent Skills: Context Engineering

Treats context as the biggest lever on agent output quality: too little and the agent hallucinates, too much and it loses focus. It describes a hierarchy: rules files with stack, commands, conventions, boundaries and patterns; specs and architecture; relevant source files; error output; and conversation management with restartable session boundaries. The skill applies when starting a session, when output quality degrades, when switching tasks or when configuring rules files for a project. It is a practical guide to what to load, what to leave out and when to start a fresh session.

## Use it to

- Write a project rules file covering stack, commands and conventions
- Decide what to include in context for a task and what to omit
- Reset a degraded session by restarting with a clean, focused context
- Switch between tasks without carrying irrelevant history forward

## How to use it

**Claude Code**
1. Inside Claude Code, add the marketplace and install the plugin.
2. /plugin marketplace add addyosmani/agent-skills
3. /plugin install agent-skills@addy-agent-skills
4. Or install only this skill with the skills CLI.
5. $ npx skills add addyosmani/agent-skills --skill context-engineering


---

From **God of Skills**: a curated, hand-tested directory of AI skills, prompts, templates and image style guides.
Source: https://godofskills.com/skills/addy-context-engineering?ref=claude-skill
