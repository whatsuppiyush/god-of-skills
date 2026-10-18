---
name: anthropic-pptx
description: Build and edit PowerPoint decks with pptxgenjs, template editing, speaker notes and a mandatory visual QA loop.
---


# Anthropic PPTX Skill

Covers three routes for slide work: write a pptxgenjs script for a new deck, unzip and edit slide XML to change an existing one or build from a template, and run markitdown to read content. It lists the mistakes that corrupt files, such as hex colors written with a hash, negative shadow offsets and reusing one options object across calls, and sets the 16:9 canvas at 10 by 5.625 inches. Bundled scripts make thumbnail grids, duplicate slides, clean orphaned media and validate the package. A design section on palettes, type and spacing precedes a required content, file and visual QA pass.

## Use it to

- Turn an outline into a branded pitch deck with native charts and speaker notes
- Duplicate and rearrange slides in an existing template while keeping its layouts valid
- Extract all text and notes from a deck to feed a summary or a rewrite
- Run the validation script on a hand-edited file to find broken relationships before opening it in PowerPoint

## How to use it

**Claude Code**
1. Inside Claude Code, register the repository as a plugin marketplace.
2. /plugin marketplace add anthropics/skills
3. Install the plugin that bundles it (document-skills).
4. /plugin install document-skills@anthropic-agent-skills


---

From **God of Skills**: a curated, hand-tested directory of AI skills, prompts, templates and image style guides.
Source: https://godofskills.com/skills/anthropic-pptx?ref=claude-skill
