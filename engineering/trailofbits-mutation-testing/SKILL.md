---
name: trailofbits-mutation-testing
description: Configure mewt or muton campaigns, triage surviving mutants and find bugs exposed by test gaps.
---


# Trail of Bits Mutation Testing

Routes mutation-testing work to the right workflow and loads the references needed. It covers setting up mewt or muton campaigns, which share identical interfaces, reviewing results, identifying equivalent mutants and investigating real bugs surfaced by surviving mutations. Essential commands and an explanation of what results mean come first, followed by guidance on interpreting mutation types. It tells the model to trust the tool's own help output for flags, since the examples reflect one major version. Use it to find out whether a test suite would catch a change, as opposed to merely covering lines.

## Use it to

- Set up a mutation campaign on a core module
- Triage surviving mutants into real test gaps and equivalent mutants
- Investigate a bug that a surviving mutation exposed
- Decide where to add tests first using mutation results
- Use mutation scores to argue for or against adding more tests to a critical module

## How to use it

**Claude Code**
1. Inside Claude Code, add the Trail of Bits marketplace.
2. /plugin marketplace add trailofbits/skills
3. Install the mutation-testing plugin.
4. /plugin install mutation-testing@trailofbits


---

From **God of Skills**: a curated, hand-tested directory of AI skills, prompts, templates and image style guides.
Source: https://godofskills.com/skills/trailofbits-mutation-testing?ref=claude-skill
