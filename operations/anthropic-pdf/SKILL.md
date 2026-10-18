---
name: anthropic-pdf
description: Read, merge, split, watermark, encrypt, fill and OCR PDF files with Python and command-line tools.
---


# Anthropic PDF Skill

A working guide to PDF handling that routes each job to the right library. pypdf covers merging, splitting, rotating and password protection, pdfplumber handles text and table extraction, reportlab generates new PDFs, and poppler or qpdf cover command-line cases. Scanned files get an OCR path so the output becomes searchable, and form filling is split into its own reference. Quick-start snippets show the common cases in a few lines each, with a longer reference file for advanced work such as JavaScript libraries. It reads as a practical cookbook rather than a conceptual overview.

## Use it to

- Merge a folder of invoices into one file and stamp a watermark on every page
- Extract the tables from a bank statement PDF into CSV for reconciliation
- Run OCR on scanned contracts so they become searchable and copyable
- Fill out and flatten a government PDF form from structured data

## How to use it

**Claude Code**
1. Inside Claude Code, register the repository as a plugin marketplace.
2. /plugin marketplace add anthropics/skills
3. Install the plugin that bundles it (document-skills).
4. /plugin install document-skills@anthropic-agent-skills


---

From **God of Skills**: a curated, hand-tested directory of AI skills, prompts, templates and image style guides.
Source: https://godofskills.com/skills/anthropic-pdf?ref=claude-skill
