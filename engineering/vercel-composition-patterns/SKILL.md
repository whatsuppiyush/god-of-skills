---
name: vercel-composition-patterns
description: Compound components, lifted state and composed internals to avoid boolean-prop sprawl in React.
---


# Vercel React Composition Patterns

A short guide to component architecture that stays flexible as it grows. It argues against stacking boolean props and favours compound components, lifting state and composing internals, patterns that are easier for both people and AI agents to read and extend. Rules are ranked by priority across component architecture, state management, implementation patterns and React 19 APIs. It is meant to be applied when building reusable components or refactoring components whose props keep multiplying. A full compiled document is available for deeper reference alongside the quick list.

## Use it to

- Refactor a button or card with many boolean flags into composed parts
- Design a compound component API for a reusable dropdown
- Decide where state should live in a component tree
- Update components to use React 19 patterns
- Explain to a junior engineer why a prop-heavy component should become a compound component

## How to use it

**Claude Code**
1. Install with the skills CLI. The repository README documents adding the whole set.
2. $ npx skills add vercel-labs/agent-skills
3. Pick vercel-composition-patterns when prompted, or pass --skill vercel-composition-patterns.


---

From **God of Skills**: a curated, hand-tested directory of AI skills, prompts, templates and image style guides.
Source: https://godofskills.com/skills/vercel-composition-patterns?ref=claude-skill
