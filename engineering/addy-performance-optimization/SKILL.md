---
name: addy-performance-optimization
description: Measure first, find the bottleneck, fix it, verify the gain, and guard against regressions.
---


# Agent Skills: Performance Optimization

Opposes guesswork. The workflow starts by measuring, locating the real bottleneck, fixing that one thing, verifying the improvement and keeping or reverting the change, then adding a guard against regression. It lists Core Web Vitals targets and where to start measuring across the frontend, backend, queries and databases. Use it when a spec has load-time budgets, when you suspect a regression, when an N+1 query pattern appears or when profiling shows a hotspot. A common-rationalizations list pushes back on skipping measurement, and red flags mark premature optimization before it adds complexity.

## Use it to

- Profile a slow page and identify the largest contributor before changing code
- Fix an N+1 query pattern and prove the speedup with a measurement
- Set performance budgets for Core Web Vitals and check them in CI
- Revert an optimization that added complexity without a measurable gain

## How to use it

**Claude Code**
1. Inside Claude Code, add the marketplace and install the plugin.
2. /plugin marketplace add addyosmani/agent-skills
3. /plugin install agent-skills@addy-agent-skills
4. Or install only this skill with the skills CLI.
5. $ npx skills add addyosmani/agent-skills --skill performance-optimization


---

From **God of Skills**: a curated, hand-tested directory of AI skills, prompts, templates and image style guides.
Source: https://godofskills.com/skills/addy-performance-optimization?ref=claude-skill
