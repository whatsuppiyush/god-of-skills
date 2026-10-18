---
name: addy-git-workflow
description: Atomic commits, descriptive messages, trunk-based branching and worktrees for fast-moving agent work.
---


# Agent Skills: Git Workflow and Versioning

Treats git as a safety net when agents generate code quickly. Principles are commit early and often, keep commits atomic, write descriptive messages, separate concerns and size changes sensibly. It recommends trunk-based development with short feature branches and branch naming, covers working with worktrees for parallel tasks, and describes using commits as save points. It also handles messy situations such as splitting uncommitted work in a dirty tree into clean atomic commits, resolving conflicts, opening or reviewing pull requests and pushing. It is the always-on discipline layer for any code change.

## Use it to

- Split a large uncommitted working tree into clean atomic commits
- Write commit messages that explain why a change was made
- Set up branch naming and a trunk-based flow for an agent-heavy repo
- Run parallel tasks in separate worktrees without conflicts
- Decide when a long-lived branch should be broken up into smaller trunk-friendly changes

## How to use it

**Claude Code**
1. Inside Claude Code, add the marketplace and install the plugin.
2. /plugin marketplace add addyosmani/agent-skills
3. /plugin install agent-skills@addy-agent-skills
4. Or install only this skill with the skills CLI.
5. $ npx skills add addyosmani/agent-skills --skill git-workflow-and-versioning


---

From **God of Skills**: a curated, hand-tested directory of AI skills, prompts, templates and image style guides.
Source: https://godofskills.com/skills/addy-git-workflow?ref=claude-skill
