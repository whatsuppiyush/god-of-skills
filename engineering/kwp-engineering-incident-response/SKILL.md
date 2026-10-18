---
name: kwp-engineering-incident-response
description: Run an incident from triage through communication to a blameless postmortem, with SEV1 to SEV4 levels.
---


# Knowledge Work: Incident Response

Manages an incident from detection to postmortem using three modes: new, update and postmortem. A severity table classifies SEV1 (service down, all users affected, immediate all-hands) down to SEV4 (cosmetic, next business day), each with a response time. Communication guidance supports status updates, with a template carrying current status, actions taken, next steps and timeline. After resolution it generates a blameless postmortem from incident data. If no mode is given it asks which phase you are in. It is part of Anthropic's engineering plugin and triggers on phrases such as production is down.

## Use it to

- Classify an alert by severity and set the response expectation
- Post a clear status update in the middle of an outage
- Generate a blameless postmortem from the incident timeline
- Standardise how a team opens and closes incidents
- Run a practice incident with the severity table so the first real one feels familiar

## How to use it

**Claude Code**
1. In a terminal, add the marketplace and install the plugin that holds this skill.
2. $ claude plugin marketplace add anthropics/knowledge-work-plugins
3. $ claude plugin install engineering@knowledge-work-plugins


---

From **God of Skills**: a curated, hand-tested directory of AI skills, prompts, templates and image style guides.
Source: https://godofskills.com/skills/kwp-engineering-incident-response?ref=claude-skill
