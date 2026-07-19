---
name: seo-cluster-builder
description: One seed keyword into a full hub-and-spoke content map with an internal-link matrix.
---


# SEO Cluster Builder

Give it a single seed keyword and it expands the topic space, groups keywords by real SERP overlap (not string similarity), and returns a hub-and-spoke plan with a ready internal-link matrix. Built to run as a SKILL.md skill inside Claude Code.

## Use it to

- Plan a content cluster before writing a single post
- Find the pillar page and its supporting spokes
- Get an internal-link matrix you can hand to a writer

## How to use it

**Claude Code**
1. Save the SKILL.md into .claude/skills/seo-cluster-builder/
2. Start Claude Code in your repo
3. Ask: “build a content cluster for <keyword>”

**Cursor**
1. Drop the skill file into your rules directory
2. Reference it in the chat prompt

## SKILL.md

```
# SEO Cluster Builder

(Full SKILL.md content shown here — free entry.)
```

## Example output

```
Pillar: “programmatic SEO”
  ├─ spoke: what is programmatic SEO
  ├─ spoke: programmatic SEO examples
  ├─ spoke: programmatic SEO vs traditional SEO
  └─ spoke: how to avoid thin pages
Internal links: pillar ⇄ every spoke; spokes cross-link by intent.
```


---

From **God of Skills**: a curated, hand-tested directory of AI skills, prompts, templates and image style guides.
Source: https://godofskills.com/skills/seo-cluster-builder?ref=claude-skill
