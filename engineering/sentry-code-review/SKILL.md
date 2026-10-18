---
name: sentry-code-review
description: Review pull requests the way Sentry engineers do, with checklists for problems, design, tests and tone.
---


# Sentry Code Review

Sentry's internal review guidance as a skill. The checklist is split into identifying problems, assessing design, test coverage and long-term impact, followed by feedback guidelines on tone and when to approve. Common patterns to flag are listed per area: Python and Django, TypeScript and React, and security. References point to deeper material. It is about 370 words, so it loads cheaply and keeps reviews consistent. Use it when reviewing pull requests, examining changes or giving feedback on quality, particularly in codebases that resemble the Python and TypeScript stack it was written for.

## Use it to

- Review a Django change using a checklist of common pitfalls
- Give feedback on a React pull request with a consistent, constructive tone
- Check whether a pull request has adequate test coverage
- Decide when a change is good enough to approve

## How to use it

**Claude Code**
1. In a terminal, add the marketplace and install the plugin.
2. $ claude plugin marketplace add getsentry/skills
3. $ claude plugin install sentry-skills@sentry-skills


---

From **God of Skills**: a curated, hand-tested directory of AI skills, prompts, templates and image style guides.
Source: https://godofskills.com/skills/sentry-code-review?ref=claude-skill
