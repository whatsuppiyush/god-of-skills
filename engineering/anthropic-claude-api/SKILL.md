---
name: anthropic-claude-api
description: Build, debug and migrate apps that call Claude, with current model IDs and per-language SDK guidance.
---


# Anthropic Claude API Skill

A long reference for writing code against the Claude API. It detects the project's language, picks between a single call, a tool-use loop and a managed agent, and requires the official SDK rather than raw HTTP unless the user asks. A standing warning about API drift tells the model its training prior may be stale, and the skill carries a dated table of current models. Language folders hold the real function and package names so the model does not guess signatures. It also scans for other providers' imports before it starts.

## Use it to

- Add a Claude-powered feature to an existing TypeScript or Python service using the correct SDK calls
- Decide whether a task needs a single request, tool use or a full agent loop
- Migrate code from an older model name or deprecated parameter to the current ones
- Debug streaming, caching or token-count problems with guidance tied to the real API

## How to use it

**Claude Code**
1. Inside Claude Code, register the repository as a plugin marketplace.
2. /plugin marketplace add anthropics/skills
3. Install the plugin that bundles it (claude-api).
4. /plugin install claude-api@anthropic-agent-skills


---

From **God of Skills**: a curated, hand-tested directory of AI skills, prompts, templates and image style guides.
Source: https://godofskills.com/skills/anthropic-claude-api?ref=claude-skill
