---
name: anthropic-docx
description: Create, edit and inspect Word documents, with rendering checks and guardrails for tables, page size and numbering.
---


# Anthropic Docx Skill

Treats a .docx as the zipped XML it is and picks a route by task: write a docx-js script to build a new file, unzip and edit document.xml to change an existing one, or run pandoc to read it. The skill's value is its list of footguns. It warns that docx-js defaults to A4, that tables need widths on both the table and each cell, that SOLID shading renders black, and that bullets must come from a numbering config. It then asks the model to render the result to PDF and look at the pages before handing it back. Tracked changes, comments and .dotx templates are covered.

## Use it to

- Generate a formatted report with a table of contents, headings, page numbers and letterhead from raw notes
- Make tracked-change edits to a contract draft without disturbing the rest of the file's formatting
- Pull comments and tables out of a Word file and reorganise them into a clean summary
- Fill a .dotx template with new content and confirm by rendering that the layout survived

## How to use it

**Claude Code**
1. Inside Claude Code, register the repository as a plugin marketplace.
2. /plugin marketplace add anthropics/skills
3. Install the plugin that bundles it (document-skills).
4. /plugin install document-skills@anthropic-agent-skills


---

From **God of Skills**: a curated, hand-tested directory of AI skills, prompts, templates and image style guides.
Source: https://godofskills.com/skills/anthropic-docx?ref=claude-skill
