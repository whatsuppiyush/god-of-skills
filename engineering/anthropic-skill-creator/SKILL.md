---
name: anthropic-skill-creator
description: Create, test and tune SKILL.md skills, including eval runs and trigger-description optimization.
---


# Anthropic Skill Creator

Covers the whole life of a skill. It interviews you to capture intent, drafts the SKILL.md, then runs test prompts against Claude with and without the skill so the difference is visible. A bundled review viewer shows outputs side by side next to quantitative metrics, and the skill can benchmark variance across runs. After feedback it rewrites and repeats at larger scale. A separate step tunes the frontmatter description so the skill triggers when it should and stays quiet when it should not. The long text also gives writing guidance on structure and style.

## Use it to

- Turn a workflow you keep repeating into a reusable skill with tests
- Compare a skill's output against a baseline run to prove it helps
- Rewrite a vague skill description so Claude loads it at the right moments
- Benchmark a revised skill across repeated runs to see whether results are stable

## How to use it

**Claude Code**
1. Inside Claude Code, register the repository as a plugin marketplace.
2. /plugin marketplace add anthropics/skills
3. Install the plugin that bundles it (example-skills).
4. /plugin install example-skills@anthropic-agent-skills


---

From **God of Skills**: a curated, hand-tested directory of AI skills, prompts, templates and image style guides.
Source: https://godofskills.com/skills/anthropic-skill-creator?ref=claude-skill
