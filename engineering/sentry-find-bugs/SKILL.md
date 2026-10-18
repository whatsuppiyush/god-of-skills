---
name: sentry-find-bugs
description: Audit local branch changes for bugs and vulnerabilities through five phases ending in a pre-conclusion check.
---


# Sentry Find Bugs

Reviews the current branch's diff in phases. It gathers the full diff against the default branch, maps the attack surface, runs a security checklist on every changed file, verifies findings, and finishes with a pre-conclusion audit before writing the output in a fixed format. Insisting on complete input gathering stops the review from sampling a few files. It is short, around 430 words, and aimed at the moment before opening a pull request, when you want a self-review that covers bugs, security issues and code quality problems in everything you changed.

## Use it to

- Self-review a branch for bugs before opening a pull request
- Map the attack surface of a diff that touches request handling
- Run a security checklist over every changed file
- Verify each suspected bug before listing it as a finding
- Compare what a self-review catches against what a human reviewer later finds in the same branch

## How to use it

**Claude Code**
1. In a terminal, add the marketplace and install the plugin.
2. $ claude plugin marketplace add getsentry/skills
3. $ claude plugin install sentry-skills@sentry-skills


---

From **God of Skills**: a curated, hand-tested directory of AI skills, prompts, templates and image style guides.
Source: https://godofskills.com/skills/sentry-find-bugs?ref=claude-skill
