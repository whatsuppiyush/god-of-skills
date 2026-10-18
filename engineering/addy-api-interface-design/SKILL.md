---
name: addy-api-interface-design
description: Design stable REST, GraphQL and module interfaces that are hard to misuse, contract first.
---


# Agent Skills: API and Interface Design

Guidance for designing interfaces that survive their consumers. Principles include Hyrum's Law, a one-version rule, contract first, consistent error semantics, validation at boundaries, preferring addition over modification and predictable naming, with idempotency keys honoured. Specific REST patterns cover resource design and pagination. It applies beyond HTTP to GraphQL schemas, type contracts between modules, component props and the boundary between frontend and backend. Good interfaces make the right thing easy and the wrong thing hard, which matters more when an agent is generating the calling code.

## Use it to

- Define an API contract and error format before writing handlers
- Review a proposed endpoint for breaking-change risks
- Design pagination and idempotency for a write endpoint
- Set the typed boundary between a frontend and its backend
- Audit an existing API for naming drift and inconsistent error shapes before a v2 release

## How to use it

**Claude Code**
1. Inside Claude Code, add the marketplace and install the plugin.
2. /plugin marketplace add addyosmani/agent-skills
3. /plugin install agent-skills@addy-agent-skills
4. Or install only this skill with the skills CLI.
5. $ npx skills add addyosmani/agent-skills --skill api-and-interface-design


---

From **God of Skills**: a curated, hand-tested directory of AI skills, prompts, templates and image style guides.
Source: https://godofskills.com/skills/addy-api-interface-design?ref=claude-skill
