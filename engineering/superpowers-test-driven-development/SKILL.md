---
name: superpowers-test-driven-development
description: Enforce red, green, refactor: write the test, watch it fail, then write the minimum code to pass.
---


# Superpowers Test-Driven Development

Applies strict red-green-refactor to every feature, bug fix and refactor. The iron law is that code written before a failing test should be deleted, and the skill treats seeing the test fail as the proof that it tests the right thing. Each phase has its own verify step: confirm the test fails for the expected reason, write minimal code to pass, confirm it passes without breaking others, then clean up. It repeats the cycle for each behavior. The framing insists that following the letter of the process is following its spirit, which closes off the usual rationalizations for skipping a step.

## Use it to

- Add a feature with tests that were demonstrated to fail first
- Fix a bug by writing a regression test that reproduces it before touching the code
- Refactor with a safety net of tests that were verified to be meaningful
- Keep an agent from writing large untested implementations and adding tests afterwards

## How to use it

**Claude Code**
1. Inside Claude Code, install from the official marketplace. The plugin bundles all Superpowers skills.
2. /plugin install superpowers@claude-plugins-official


---

From **God of Skills**: a curated, hand-tested directory of AI skills, prompts, templates and image style guides.
Source: https://godofskills.com/skills/superpowers-test-driven-development?ref=claude-skill
