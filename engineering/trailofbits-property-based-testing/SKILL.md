---
name: trailofbits-property-based-testing
description: Write and debug property tests with Hypothesis, fast-check, proptest, jqwik, rapid and Echidna or Medusa.
---


# Trail of Bits Property-Based Testing

Shifts tests from hand-picked examples to rules over a whole input domain. It targets code with an algebraic shape, such as encode and decode pairs, parsers, normalizers, validators and numeric routines, and covers Hypothesis, fast-check, proptest, jqwik, rapid and Solidity invariants with Echidna or Medusa. It supplies a property catalog, describes the two ways a property test ends up asserting nothing, and explains how to introduce property-based testing into a project that has none. An example test asserts a point, while a property asserts a rule and lets the generator hunt for the counterexample.

## Use it to

- Add round-trip properties for a serializer and its parser
- Replace a long list of example tests with a property and a generator
- Find out why an existing property test never fails
- Introduce property-based testing into a repo that has none

## How to use it

**Claude Code**
1. Inside Claude Code, add the Trail of Bits marketplace.
2. /plugin marketplace add trailofbits/skills
3. Install the property-based-testing plugin.
4. /plugin install property-based-testing@trailofbits


---

From **God of Skills**: a curated, hand-tested directory of AI skills, prompts, templates and image style guides.
Source: https://godofskills.com/skills/trailofbits-property-based-testing?ref=claude-skill
