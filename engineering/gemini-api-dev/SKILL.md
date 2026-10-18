---
name: gemini-api-dev
description: Write code against the Gemini API with current models, SDKs and rules that override stale training data.
---


# Gemini API Development

Google's skill for building with the Gemini API. It opens with critical rules that override what the model remembers, then lists current models, current agents and current SDKs, with quick starts in Python and JavaScript or TypeScript. Coverage spans text generation, multi-turn chat, multimodal understanding, image, video and speech generation, voice design and replication, streaming, background research tasks, function calling, structured output and migration from older SDKs. Response helpers and stateful conversation patterns are included. It exists so generated code uses today's identifiers instead of deprecated ones.

## Use it to

- Add structured-output generation to a service with the current SDK
- Build a multi-turn chat that keeps state correctly
- Migrate code from an older Gemini SDK to the current one
- Call image or speech generation from a script with correct model names
- Pin the models and SDK versions a project uses and note them in the README

## How to use it

**Claude Code**
1. Inside Claude Code, add the marketplace and install the plugin.
2. /plugin marketplace add google-gemini/gemini-skills
3. /plugin install gemini-skills@gemini-skills
4. Or use the skills CLI.
5. $ npx skills add google-gemini/gemini-skills --skill gemini-api-dev


---

From **God of Skills**: a curated, hand-tested directory of AI skills, prompts, templates and image style guides.
Source: https://godofskills.com/skills/gemini-api-dev?ref=claude-skill
