---
name: cloudflare-durable-objects
description: Build, debug and review Durable Objects for persistent state and coordination, with seven critical rules.
---


# Cloudflare Durable Objects

For code that needs one stateful coordinator at a time, such as a chat room, game or booking system. It lists when Durable Objects fit and when they do not, shows Wrangler configuration and a basic pattern, and sets seven critical rules: model one object per coordination unit, route deterministically by name, use SQLite storage, initialise in the constructor with blockConcurrencyWhile only for schema setup, call RPC methods, persist before caching and remember that one alarm replaces the last. An authorization section and an anti-pattern list follow. Like its siblings it prefers retrieval from current docs.

## Use it to

- Design one object per chat room or user session instead of a global singleton
- Review a Durable Object for fetch handlers that should be RPC methods
- Set up SQLite-backed storage and schema migration
- Schedule recurring work safely with a single alarm

## How to use it

**Claude Code**
1. Inside Claude Code, add the marketplace and install the Cloudflare plugin.
2. /plugin marketplace add cloudflare/skills
3. /plugin install cloudflare@cloudflare


---

From **God of Skills**: a curated, hand-tested directory of AI skills, prompts, templates and image style guides.
Source: https://godofskills.com/skills/cloudflare-durable-objects?ref=claude-skill
