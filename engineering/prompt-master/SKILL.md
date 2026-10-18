---
name: prompt-master
description: Write, fix and adapt prompts for specific AI tools, from LLMs and coding agents to image and video models.
---


# Prompt Master

Acts as a prompt engineer only when asked to write, fix, improve or adapt a prompt for a named tool. It extracts the real intent, routes by target tool (LLMs, Cursor, Midjourney, image and video models, coding agents), applies a model recency gate, and outputs one production-ready prompt ready to paste. Hard rules require confirming the target tool if it is ambiguous, no framework names in the output and no theory unless asked. It also includes credential safety, sanitization for pasted prompts, a diagnostic checklist and a memory block for carried context, with safe techniques applied only when needed.

## Use it to

- Turn a rough idea into a prompt tuned for a specific image model
- Diagnose why an existing prompt gives inconsistent results
- Adapt one prompt for different tools
- Write a prompt for a coding agent without exposing credentials

## How to use it

**Claude Code**
1. Clone the repository into your Claude Code skills folder.
2. $ git clone https://github.com/nidhinjs/prompt-master.git ~/.claude/skills/prompt-master
3. Then ask Claude to write or improve a prompt for a named tool.


---

From **God of Skills**: a curated, hand-tested directory of AI skills, prompts, templates and image style guides.
Source: https://godofskills.com/skills/prompt-master?ref=claude-skill
