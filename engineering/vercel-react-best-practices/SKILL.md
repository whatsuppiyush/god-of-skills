---
name: vercel-react-best-practices
description: Seventy performance rules for React and Next.js, ranked from eliminating waterfalls to micro-optimizations.
---


# Vercel React Best Practices

Vercel Engineering's performance guide, packaged for agents. It holds 70 rules across eight categories, ordered by impact: eliminating waterfalls and bundle size are critical, server-side performance and client-side data fetching come next, then re-render optimization, rendering performance and JavaScript performance. The skill is meant to be consulted while writing, reviewing or refactoring React and Next.js code involving components, pages, data fetching or bundle optimization. A quick reference lists the rules per category so the agent can apply the highest-impact ones first rather than polishing details.

## Use it to

- Review a Next.js page for request waterfalls and unnecessary client bundles
- Refactor a data-fetching component using the highest-priority rules first
- Check a pull request against Vercel's rule categories
- Reduce bundle size by applying the skill's critical guidance
- Prioritise a performance backlog by working through the rule categories from critical to low impact

## How to use it

**Claude Code**
1. Install with the skills CLI. The repository README documents adding the whole set.
2. $ npx skills add vercel-labs/agent-skills
3. Pick vercel-react-best-practices when prompted, or pass --skill vercel-react-best-practices.


---

From **God of Skills**: a curated, hand-tested directory of AI skills, prompts, templates and image style guides.
Source: https://godofskills.com/skills/vercel-react-best-practices?ref=claude-skill
