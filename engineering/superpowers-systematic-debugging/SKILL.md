---
name: superpowers-systematic-debugging
description: A four-phase debugging process built on one rule: no fixes without root-cause investigation first.
---


# Superpowers Systematic Debugging

Built around an iron law: no fixes without root cause investigation first. Until phase one is complete, the agent may not propose a change. The four phases are root cause investigation, pattern analysis, hypothesis and testing, and implementation. The skill calls symptom fixes a failure and includes a red-flags list that tells the model to stop and return to the process when it catches itself guessing. A closing section lists signals from the human partner that mean the agent is doing it wrong. It applies to any bug, failing test or unexpected behavior, before a fix is proposed.

## Use it to

- Stop an agent from patching symptoms and make it trace a failure to its source
- Work a flaky test through reproduction, comparison with working code and a tested hypothesis
- Debug an unexpected production behavior with an explicit evidence trail
- Recognise early that a guess-and-check loop has started and reset it

## How to use it

**Claude Code**
1. Inside Claude Code, install from the official marketplace. The plugin bundles all Superpowers skills.
2. /plugin install superpowers@claude-plugins-official


---

From **God of Skills**: a curated, hand-tested directory of AI skills, prompts, templates and image style guides.
Source: https://godofskills.com/skills/superpowers-systematic-debugging?ref=claude-skill
