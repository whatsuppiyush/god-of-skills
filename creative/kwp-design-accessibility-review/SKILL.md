---
name: kwp-design-accessibility-review
description: Audit a design or page against WCAG 2.1 AA: contrast, keyboard access, touch targets and screen readers.
---


# Knowledge Work: Accessibility Review

Runs a WCAG 2.1 AA review organised by the four principles of perceivable, operable, understandable and robust. A quick reference lists the main checks, then a list of common issues, among them insufficient color contrast, missing form labels, no keyboard access, missing alt text, focus traps in modals, missing landmarks, auto-playing media and time limits without extension. A testing approach follows, and the output is an audit with a summary and findings. It is triggered with /accessibility-review or requests such as is this accessible, and belongs to Anthropic's design plugin, aimed at the check before design handoff.

## Use it to

- Audit a design file for contrast and touch target problems before handoff
- Check a modal flow for focus traps and keyboard access
- List accessibility findings with severity for a developer
- Review a page's forms for missing labels

## How to use it

**Claude Code**
1. In a terminal, add the marketplace and install the plugin that holds this skill.
2. $ claude plugin marketplace add anthropics/knowledge-work-plugins
3. $ claude plugin install design@knowledge-work-plugins


---

From **God of Skills**: a curated, hand-tested directory of AI skills, prompts, templates and image style guides.
Source: https://godofskills.com/skills/kwp-design-accessibility-review?ref=claude-skill
