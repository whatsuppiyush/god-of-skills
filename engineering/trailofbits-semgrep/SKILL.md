---
name: trailofbits-semgrep
description: Run Semgrep with language detection, parallel scans and merged SARIF output, with telemetry kept off.
---


# Trail of Bits Semgrep Scan

Orchestrates a Semgrep scan end to end. The first rule is to pass --metrics=off on every command, because Semgrep sends telemetry by default and even the auto config phones home, which matters during an audit. The skill detects languages, runs scans in parallel and merges the results into one SARIF file in a defined output directory. It lists prerequisites, scan modes, an orchestration architecture and a reference index, and it says when not to use it. A set of rationalizations to reject guards against skipping steps. It also describes running the same job as a workflow.

## Use it to

- Run a multi-language Semgrep scan without leaking telemetry during a client audit
- Merge parallel scan results into a single SARIF file for triage
- Choose a scan mode based on how deep the review needs to go
- Set up the prerequisites for a repeatable Semgrep scan

## How to use it

**Claude Code**
1. Inside Claude Code, add the Trail of Bits marketplace.
2. /plugin marketplace add trailofbits/skills
3. Install the static-analysis plugin.
4. /plugin install static-analysis@trailofbits


---

From **God of Skills**: a curated, hand-tested directory of AI skills, prompts, templates and image style guides.
Source: https://godofskills.com/skills/trailofbits-semgrep?ref=claude-skill
