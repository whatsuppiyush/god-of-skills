---
name: cloudflare-agents-sdk
description: Build and debug stateful agent apps on Workers with the agents package, routing, chat streaming and React hooks.
---


# Cloudflare Agents SDK

Covers building on Cloudflare's agents package. It first verifies the package is installed, then walks through Wrangler configuration, the Agent class, routing, core APIs and the React client. Reference material is grouped into core topics, chat and streaming, and background processing. As with other Cloudflare skills it tells the model its knowledge of the SDK may be outdated and to retrieve the current docs first. It suits developers adding a persistent, stateful agent with real-time connections to a Worker, or debugging one that already exists.

## Use it to

- Scaffold a stateful agent on Workers with the right Wrangler bindings
- Wire a React client to an agent for streaming chat
- Debug routing between requests and agent instances
- Add background processing to an existing agent
- Compare the skill's reference topics with an existing prototype to find missing pieces such as scheduling

## How to use it

**Claude Code**
1. Inside Claude Code, add the marketplace and install the Cloudflare plugin.
2. /plugin marketplace add cloudflare/skills
3. /plugin install cloudflare@cloudflare


---

From **God of Skills**: a curated, hand-tested directory of AI skills, prompts, templates and image style guides.
Source: https://godofskills.com/skills/cloudflare-agents-sdk?ref=claude-skill
