---
name: sentry-iterate-pr
description: Loop on a pull request until actionable CI passes and high or medium review feedback is addressed.
---


# Sentry Iterate PR

Automates the tedious loop after a pull request is opened. It identifies the PR, handles review feedback, checks CI status, fixes failures, verifies locally, commits and pushes, then monitors again. It stops at human approval, draft-readiness and merge gates rather than waiting on them, and reports those. It requires an authenticated gh CLI and ships bundled scripts. The scope is deliberate: fix what is actionable, address high and medium feedback, and exit cleanly when only human decisions remain. A fallback section covers cases where the scripts cannot run.

## Use it to

- Get a pull request to green CI without manually chasing each failure
- Address reviewer comments in order of severity and push fixes
- Hand back a clear report when only human approval remains
- Re-run the loop after new commits trigger fresh checks
- Leave a clear note on the pull request listing which feedback was fixed and which needs a person

## How to use it

**Claude Code**
1. In a terminal, add the marketplace and install the plugin.
2. $ claude plugin marketplace add getsentry/skills
3. $ claude plugin install sentry-skills@sentry-skills


---

From **God of Skills**: a curated, hand-tested directory of AI skills, prompts, templates and image style guides.
Source: https://godofskills.com/skills/sentry-iterate-pr?ref=claude-skill
