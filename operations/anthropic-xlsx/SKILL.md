---
name: anthropic-xlsx
description: Create and repair spreadsheets with live formulas, forced recalculation and zero-error checks.
---


# Anthropic XLSX Skill

Anything where a spreadsheet is the input or the output goes through this skill. It insists on real formulas rather than pasted results, so the sheet recalculates when inputs change, and it ships a recalc script that has LibreOffice compute every formula and returns JSON naming any error cells. Rules cover matching an existing file's conventions, documenting assumptions where the reader will see them, and following a user's exact tab and column names. openpyxl handles formatting and formulas, pandas handles bulk data, and markitdown gives a quick look at a sheet. A financial-models section sets color coding for inputs and formulas and number-format conventions.

## Use it to

- Build a three-statement financial model whose totals update when assumptions change
- Clean a malformed CSV export into a proper workbook with consistent headers and types
- Add computed columns and charts to an existing sheet without breaking its input cells
- Audit a workbook for formula errors and fix each one the recalc report flags

## How to use it

**Claude Code**
1. Inside Claude Code, register the repository as a plugin marketplace.
2. /plugin marketplace add anthropics/skills
3. Install the plugin that bundles it (document-skills).
4. /plugin install document-skills@anthropic-agent-skills


---

From **God of Skills**: a curated, hand-tested directory of AI skills, prompts, templates and image style guides.
Source: https://godofskills.com/skills/anthropic-xlsx?ref=claude-skill
