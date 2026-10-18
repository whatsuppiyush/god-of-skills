---
name: anthropic-mcp-builder
description: A four-phase guide to building MCP servers in Python or TypeScript, ending with evaluation questions.
---


# Anthropic MCP Builder

Walks through building an MCP server in four phases: research and planning, implementation, review and testing, and writing evaluations. Planning covers a real design tension, whether to expose broad API coverage or a few workflow-shaped tools, plus naming conventions such as consistent prefixes like github_create_issue. Implementation guidance exists for both FastMCP in Python and the Node and TypeScript SDK, with reference files loaded as needed. The final phase has the model write evaluation questions so the server is measured by whether an agent can finish realistic tasks with it, not just whether tools respond.

## Use it to

- Wrap an internal REST API as an MCP server an agent can use reliably
- Choose between exhaustive endpoint tools and a smaller set of task-level tools
- Generate evaluation questions that check an MCP server against realistic agent tasks
- Review an existing server's tool names and descriptions for discoverability

## How to use it

**Claude Code**
1. Inside Claude Code, register the repository as a plugin marketplace.
2. /plugin marketplace add anthropics/skills
3. Install the plugin that bundles it (example-skills).
4. /plugin install example-skills@anthropic-agent-skills


---

From **God of Skills**: a curated, hand-tested directory of AI skills, prompts, templates and image style guides.
Source: https://godofskills.com/skills/anthropic-mcp-builder?ref=claude-skill
