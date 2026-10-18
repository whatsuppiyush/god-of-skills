---
name: addy-debugging-error-recovery
description: A stop-the-line triage routine for failing tests, broken builds and unexpected runtime errors.
---


# Agent Skills: Debugging and Error Recovery

When something breaks, this skill says to stop adding features and preserve evidence. Its triage checklist has six steps: reproduce, localize, reduce, fix the root cause, guard against recurrence and verify end to end. It then offers specific patterns for test failures, build failures and runtime errors. The emphasis is on finding what broke and why instead of guessing, including for things that worked yesterday. It differs from other debugging skills by its explicit stop-the-line rule and its recurrence step, which asks for a test or guard so the same failure cannot return unnoticed.

## Use it to

- Triage a failing CI build by reproducing locally and narrowing the cause
- Reduce a flaky failure to a minimal case before attempting a fix
- Add a regression guard after fixing a production error
- Work through a runtime exception with a fixed order of checks

## How to use it

**Claude Code**
1. Inside Claude Code, add the marketplace and install the plugin.
2. /plugin marketplace add addyosmani/agent-skills
3. /plugin install agent-skills@addy-agent-skills
4. Or install only this skill with the skills CLI.
5. $ npx skills add addyosmani/agent-skills --skill debugging-and-error-recovery


---

From **God of Skills**: a curated, hand-tested directory of AI skills, prompts, templates and image style guides.
Source: https://godofskills.com/skills/addy-debugging-error-recovery?ref=claude-skill
