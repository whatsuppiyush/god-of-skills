---
name: kwp-sales-call-prep
description: Build a pre-call brief with attendees, account history, transcripts, open opportunity status and discovery questions.
---


# Knowledge Work: Sales Call Prep

Anthropic's sales plugin skill for the hour before a meeting. It finds the event on a connected calendar, pulls attendees, identifies the customer from attendee domains, then gathers account history, prior call transcripts and open opportunity status from connected systems. If no calendar is connected it falls back to an uploaded export or simply asks for account and time. The call plan states an objective, three to five stage-appropriate discovery questions drawn from unanswered items in earlier calls, likely objections and what to bring. Rules require citing every value read and distinguishing blank from not queried.

## Use it to

- Get a one-page brief before a customer meeting from calendar and CRM
- Prepare discovery questions that build on unanswered items from the last call
- List likely objections filtered to the ones plausible for this account
- Find out what was promised in earlier threads before you dial in

## How to use it

**Claude Code**
1. In a terminal, add the marketplace and install the plugin that holds this skill.
2. $ claude plugin marketplace add anthropics/knowledge-work-plugins
3. $ claude plugin install sales@knowledge-work-plugins


---

From **God of Skills**: a curated, hand-tested directory of AI skills, prompts, templates and image style guides.
Source: https://godofskills.com/skills/kwp-sales-call-prep?ref=claude-skill
