---
name: cloudflare-web-perf
description: Audit loading and interaction performance with a DevTools trace, Core Web Vitals, network and codebase analysis.
---


# Cloudflare Web Performance Audit

A five-phase performance audit driven by browser tooling. It first verifies that Chrome DevTools MCP tools are available and shows how to configure them, then runs a performance trace, analyses Core Web Vitals, inspects the network and takes an accessibility snapshot. Phase five moves into the codebase: detect the framework and bundler, then look at tree-shaking and dead code. Like the other Cloudflare skills it tells the model to retrieve current numbers and thresholds rather than rely on memory. Use it to audit and diagnose Lighthouse scores and interaction latency.

## Use it to

- Trace a slow page and rank the biggest Core Web Vitals problems
- Inspect the network waterfall for blocking and oversized requests
- Find unused code in a bundle after detecting the framework
- Pair a measured trace with specific code changes
- Re-run the same trace after a fix and report the change in the key vitals

## How to use it

**Claude Code**
1. Inside Claude Code, add the marketplace and install the Cloudflare plugin.
2. /plugin marketplace add cloudflare/skills
3. /plugin install cloudflare@cloudflare


---

From **God of Skills**: a curated, hand-tested directory of AI skills, prompts, templates and image style guides.
Source: https://godofskills.com/skills/cloudflare-web-perf?ref=claude-skill
