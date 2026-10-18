---
name: addy-security-hardening
description: Threat-model first, then apply input validation, auth, session and header controls against the OWASP Top Ten.
---


# Agent Skills: Security and Hardening

Security is treated as a constraint on every feature, not a phase. The process starts with threat modelling, then applies a three-tier boundary system of always-do, ask-first and never-do rules. Hardening controls cover injection, cross-site scripting and access control, authentication and sessions, headers, CORS and responses, and input validation and file uploads. It is meant to be invoked when handling untrusted input, user sessions, data storage or external integrations, or when auditing a login flow against the OWASP Top Ten. It assumes every external input is hostile and every authorization check mandatory.

## Use it to

- Threat-model a new endpoint that accepts user uploads
- Audit a login and session flow against common OWASP failures
- Decide which actions an agent may take alone and which need human approval
- Review CORS, header and error-response settings before release
- Write an agent rules entry that lists the actions in your own codebase that need human approval

## How to use it

**Claude Code**
1. Inside Claude Code, add the marketplace and install the plugin.
2. /plugin marketplace add addyosmani/agent-skills
3. /plugin install agent-skills@addy-agent-skills
4. Or install only this skill with the skills CLI.
5. $ npx skills add addyosmani/agent-skills --skill security-and-hardening


---

From **God of Skills**: a curated, hand-tested directory of AI skills, prompts, templates and image style guides.
Source: https://godofskills.com/skills/addy-security-hardening?ref=claude-skill
