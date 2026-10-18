---
name: sentry-gha-security-review
description: Audit .github/workflows for pwn requests, expression injection, credential theft and supply chain attacks.
---


# Sentry GitHub Actions Security Review

A focused audit of GitHub Actions workflows. After classifying each workflow's triggers, it checks for named vulnerability classes: pwn requests, expression injection, unauthorized command execution, credential escalation and risky config file handling, among others. Attack patterns draw on a published analysis of a 2025 campaign that exploited GitHub Actions. The skill defines scope, a threat model and a confidence scheme, so it reports likely exploits rather than every theoretical weakness. Use it when asked to review workflows, audit CI security or look at .github/workflows for exploitation risk.

## Use it to

- Audit a repository's workflows for pull-request-target and expression injection flaws
- Check whether secrets can reach untrusted code in CI
- Review third-party actions used in a release pipeline
- Classify triggers to decide which workflows deserve closer inspection
- Brief a new maintainer on which workflow triggers need extra scrutiny before they accept outside pull requests

## How to use it

**Claude Code**
1. In a terminal, add the marketplace and install the plugin.
2. $ claude plugin marketplace add getsentry/skills
3. $ claude plugin install sentry-skills@sentry-skills


---

From **God of Skills**: a curated, hand-tested directory of AI skills, prompts, templates and image style guides.
Source: https://godofskills.com/skills/sentry-gha-security-review?ref=claude-skill
