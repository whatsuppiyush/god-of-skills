---
name: trailofbits-sharp-edges
description: Find footgun APIs, dangerous defaults and misuse-prone configuration that lead developers into insecurity.
---


# Trail of Bits Sharp Edges

Evaluates whether APIs, configuration schemas and library designs resist developer misuse, in the spirit of secure by default and the pit of success. It categorises sharp edges: algorithm and mode selection footguns, dangerous defaults, primitive versus semantic APIs, configuration cliffs, silent failures and stringly-typed security. The core principle is that if the easy path leads to insecurity, that is a design flaw. It names agents it can delegate to, lists rationalizations to reject and says when to use or skip it. It fits reviews of cryptographic library ergonomics and any interface other people will call.

## Use it to

- Review a new library API for ways callers can accidentally disable security
- Audit a configuration schema for options that fail open
- Check a cryptographic wrapper for confusing algorithm choices
- Replace stringly-typed security parameters with safer types

## How to use it

**Claude Code**
1. Inside Claude Code, add the Trail of Bits marketplace.
2. /plugin marketplace add trailofbits/skills
3. Install the sharp-edges plugin.
4. /plugin install sharp-edges@trailofbits


---

From **God of Skills**: a curated, hand-tested directory of AI skills, prompts, templates and image style guides.
Source: https://godofskills.com/skills/trailofbits-sharp-edges?ref=claude-skill
