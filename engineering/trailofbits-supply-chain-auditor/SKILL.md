---
name: trailofbits-supply-chain-auditor
description: Audit npm, PyPI and Go dependencies for advisories, abandoned upstreams, publisher concentration and install scripts.
---


# Trail of Bits Supply Chain Risk Auditor

Generates a supply-chain risk report for a project's direct dependencies, plus an advisory sweep of everything its lockfile resolves. Two deterministic scripts do the measuring, covering version-matched advisories, abandoned or archived upstreams, npm publisher concentration and install-time script execution, and the model's job is the judgment they refuse to automate. The skill explains why measuring is left to scripts, lists a workflow, notes how to read the report and style rules for added commentary, and includes rationalizations to reject and when not to use it.

## Use it to

- Audit a lockfile for known advisories matched to the exact versions in use
- Find direct dependencies whose upstream has been archived or abandoned
- Spot packages with a single npm publisher before adopting them
- Review which dependencies run install-time scripts
- Attach the generated report to a dependency upgrade proposal so reviewers can see the risk profile

## How to use it

**Claude Code**
1. Inside Claude Code, add the Trail of Bits marketplace.
2. /plugin marketplace add trailofbits/skills
3. Install the supply-chain-risk-auditor plugin.
4. /plugin install supply-chain-risk-auditor@trailofbits


---

From **God of Skills**: a curated, hand-tested directory of AI skills, prompts, templates and image style guides.
Source: https://godofskills.com/skills/trailofbits-supply-chain-auditor?ref=claude-skill
