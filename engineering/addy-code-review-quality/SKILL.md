---
name: addy-code-review-quality
description: Review changes along five axes (correctness, readability, architecture, security, performance) before merging.
---


# Agent Skills: Code Review and Quality

A multi-dimensional review process with quality gates. Every change is reviewed on five axes: correctness, readability and simplicity, architecture, security and performance. The approval standard is pragmatic. Approve a change when it clearly improves code health, even if it is not perfect, and do not block on preferences. The skill also covers structural remedies, change sizing and writing change descriptions. It then walks a review process: understand the context, review the tests first, then the implementation. It works on code written by you, another agent or a human, including a pasted diff.

## Use it to

- Review a pull request across all five axes and return graded findings
- Check an agent-written diff before it enters the main branch
- Decide whether an oversized change should be split before review
- Write a change description that tells reviewers what to focus on

## How to use it

**Claude Code**
1. Inside Claude Code, add the marketplace and install the plugin.
2. /plugin marketplace add addyosmani/agent-skills
3. /plugin install agent-skills@addy-agent-skills
4. Or install only this skill with the skills CLI.
5. $ npx skills add addyosmani/agent-skills --skill code-review-and-quality


---

From **God of Skills**: a curated, hand-tested directory of AI skills, prompts, templates and image style guides.
Source: https://godofskills.com/skills/addy-code-review-quality?ref=claude-skill
