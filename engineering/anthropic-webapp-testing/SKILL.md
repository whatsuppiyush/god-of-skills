---
name: anthropic-webapp-testing
description: Test and debug local web apps with Playwright scripts, a server-lifecycle helper and screenshot capture.
---


# Anthropic Webapp Testing

Drives local web apps with native Python Playwright scripts. A helper called with_server.py starts and stops one or more dev servers around a test run, and the instructions say to run helper scripts with --help before reading their source. A decision tree separates static HTML, where selectors can be read from the file, from dynamic apps that need a reconnaissance step first: load the page, wait for network idle, capture a screenshot and inspect the DOM, then act on the discovered selectors. It also covers browser console logs, common pitfalls and best practices for reliable runs.

## Use it to

- Verify a frontend change in a real browser and capture a screenshot as evidence
- Reproduce a UI bug by scripting the clicks and reading console output
- Run a frontend and its API together for a test, then shut both down cleanly
- Check a form flow end to end after refactoring the component

## How to use it

**Claude Code**
1. Inside Claude Code, register the repository as a plugin marketplace.
2. /plugin marketplace add anthropics/skills
3. Install the plugin that bundles it (example-skills).
4. /plugin install example-skills@anthropic-agent-skills


---

From **God of Skills**: a curated, hand-tested directory of AI skills, prompts, templates and image style guides.
Source: https://godofskills.com/skills/anthropic-webapp-testing?ref=claude-skill
