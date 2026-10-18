---
name: trailofbits-differential-review
description: Security review of a PR, commit or diff that scales depth to codebase size and calculates blast radius.
---


# Trail of Bits Differential Review

Reviews a change for security impact instead of general style. It is risk-first, concentrating on authentication, cryptography, value transfer and external calls. Depth adapts to codebase size, git blame supplies history for the modified lines, the blast radius is estimated by counting callers, and test coverage of the changed code is checked. The output is a markdown report. A workflow overview and decision tree choose between a quick triage for a small PR and a fuller pass for a large one, and a list of rationalizations the reviewer must not accept keeps it from skimming. Use it for pull requests, commits or any diff.

## Use it to

- Triage a small pull request for security-relevant changes in minutes
- Estimate how many callers a risky function change touches
- Check whether the modified lines of a diff have test coverage
- Produce a markdown security report for a large merge

## How to use it

**Claude Code**
1. Inside Claude Code, add the Trail of Bits marketplace.
2. /plugin marketplace add trailofbits/skills
3. Install the differential-review plugin.
4. /plugin install differential-review@trailofbits


---

From **God of Skills**: a curated, hand-tested directory of AI skills, prompts, templates and image style guides.
Source: https://godofskills.com/skills/trailofbits-differential-review?ref=claude-skill
