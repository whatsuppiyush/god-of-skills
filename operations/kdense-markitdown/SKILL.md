---
name: kdense-markitdown
description: Convert Office, PDF and data files and selected URIs to Markdown with Microsoft MarkItDown for LLM ingestion.
---


# K-Dense MarkItDown

Wraps Microsoft's MarkItDown utility, which turns common documents into structure-preserving Markdown meant for indexing, search, analysis and LLM or RAG ingestion rather than high-fidelity reproduction. The skill helps choose the right conversion path and covers installation, the command line, trusted local files and binary streams. Operating rules say to use the narrowest method, treat converted text as untrusted, keep local and external processing separate and leave plugins opt-in. It also describes batch workflows, vision OCR, Azure extraction and the official MCP server, and targets a specific recent release.

## Use it to

- Convert a folder of Office documents to Markdown for a search index
- Ingest PDFs and slides into a retrieval pipeline
- Keep sensitive files local while still converting them
- Decide when OCR or Azure extraction is worth enabling
- Compare the converted Markdown of a messy slide deck against the original before indexing it for retrieval

## How to use it

**Claude Code**
1. Install with the skills CLI.
2. $ npx skills add K-Dense-AI/scientific-agent-skills


---

From **God of Skills**: a curated, hand-tested directory of AI skills, prompts, templates and image style guides.
Source: https://godofskills.com/skills/kdense-markitdown?ref=claude-skill
