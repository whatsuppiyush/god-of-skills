---
name: superpowers-verification
description: Require fresh command output as evidence before claiming that work is finished, fixed or passing.
---


# Superpowers Verification Before Completion

A short gate against optimistic reporting. The rule is that no completion claim is allowed without fresh verification evidence, meaning the agent must have run the relevant command in the current message and read its output before saying something passes. A gate function describes the steps, and sections list common failures, red flags such as hedged language, the rationalizations agents use to skip the check, and key patterns for tests, builds and requirements. It applies before committing, opening a pull request or telling the user that a task is done, and costs only a few extra commands.

## Use it to

- Stop an agent from saying tests pass without having run them
- Require a build or lint run before a commit or pull request is created
- Check that every stated requirement is actually met before declaring completion
- Add an evidence step to an existing workflow with almost no overhead

## How to use it

**Claude Code**
1. Inside Claude Code, install from the official marketplace. The plugin bundles all Superpowers skills.
2. /plugin install superpowers@claude-plugins-official


---

From **God of Skills**: a curated, hand-tested directory of AI skills, prompts, templates and image style guides.
Source: https://godofskills.com/skills/superpowers-verification?ref=claude-skill
