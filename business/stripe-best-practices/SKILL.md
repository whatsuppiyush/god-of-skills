---
name: stripe-best-practices
description: Route a Stripe integration to the right API and apply critical rules, current API version and sandbox defaults.
---


# Stripe Best Practices

Stripe's own guidance for building integrations. A routing table maps what you are building to the recommended API: Checkout Sessions for one-time payments, Setup Intents for saved payment methods, Billing APIs for subscriptions, Metronome for new usage-based billing, Accounts v2 for Connect platforms, Stripe Tax for compliance and Financial Accounts for embedded banking. It states the latest API version and SDK versions, and recommends separate sandboxes for new development. Critical rules and key documentation links follow, with reference files per area such as payments, billing, connect and security.

## Use it to

- Pick the right Stripe API for a checkout, subscription or marketplace
- Set up a sandbox for new integration work
- Check an integration against the skill's critical rules
- Find the right reference for tax, treasury or security questions
- Compare a hand-rolled payment form against the recommended Checkout approach and list what you could delete

## How to use it

**Claude Code**
1. In a terminal, install the Stripe plugin from the official marketplace.
2. $ claude plugin install stripe@claude-plugins-official


---

From **God of Skills**: a curated, hand-tested directory of AI skills, prompts, templates and image style guides.
Source: https://godofskills.com/skills/stripe-best-practices?ref=claude-skill
