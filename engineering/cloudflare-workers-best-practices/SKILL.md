---
name: cloudflare-workers-best-practices
description: Production checks for Workers: compatibility dates, observability, streaming and an anti-pattern table to flag.
---


# Cloudflare Workers Best Practices

A review lens for Cloudflare Workers code and config. It tells the model to prefer retrieval over its own memory, because Workers APIs and settings change, and to treat the project's installed versions and Wrangler compatibility settings as the baseline. Core checks are keeping compatibility dates current and enabling observability. A table of anti-patterns to flag includes buffering unbounded bodies, hardcoded secrets, Math.random for tokens, async work without waitUntil, module-level mutable request state and REST calls where a binding exists. It ends with validation steps and a scope note.

## Use it to

- Review a Worker before production for dropped promises and leaked request state
- Replace REST calls to Cloudflare services with the matching bindings
- Check that observability and compatibility dates are configured
- Find secrets that should be Wrangler secrets instead of source
- Add the anti-pattern table to a team checklist for reviewing new Workers before they ship

## How to use it

**Claude Code**
1. Inside Claude Code, add the marketplace and install the Cloudflare plugin.
2. /plugin marketplace add cloudflare/skills
3. /plugin install cloudflare@cloudflare


---

From **God of Skills**: a curated, hand-tested directory of AI skills, prompts, templates and image style guides.
Source: https://godofskills.com/skills/cloudflare-workers-best-practices?ref=claude-skill
