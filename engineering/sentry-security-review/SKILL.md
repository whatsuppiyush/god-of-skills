---
name: sentry-security-review
description: Confidence-based security review for injection, XSS, auth and crypto issues, with language and infrastructure guides.
---


# Sentry Security Review

A systematic security code review that reports by confidence level. It separates research from reporting and lists what not to flag, including server-controlled values and patterns a framework already mitigates, which keeps noise down. The process detects context, loads a language guide and optionally an infrastructure guide, researches before flagging, then reports. Reference material is based on the OWASP Cheat Sheet Series. It handles requests such as security review, find vulnerabilities and audit authentication, authorization, cryptography, injection and cross-site scripting issues, and it encourages verifying each candidate before it appears in the report.

## Use it to

- Review a change for injection and XSS with reported confidence levels
- Audit authentication and authorization code against a language-specific guide
- Cut false positives by skipping framework-mitigated patterns
- Triage a list of candidate vulnerabilities before reporting
- Brief a teammate on why a flagged item was dropped, using the skill's explicit do-not-flag rules

## How to use it

**Claude Code**
1. In a terminal, add the marketplace and install the plugin.
2. $ claude plugin marketplace add getsentry/skills
3. $ claude plugin install sentry-skills@sentry-skills


---

From **God of Skills**: a curated, hand-tested directory of AI skills, prompts, templates and image style guides.
Source: https://godofskills.com/skills/sentry-security-review?ref=claude-skill
