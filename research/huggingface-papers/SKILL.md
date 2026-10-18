---
name: huggingface-papers
description: Read AI papers from Hugging Face paper pages or arXiv IDs as markdown, with linked models, datasets and Spaces.
---


# Hugging Face Paper Pages

Resolves a Hugging Face paper URL, an arXiv URL or a bare ID into readable markdown, then uses the papers API for structured metadata such as authors, linked model checkpoints, datasets, Spaces, the GitHub repo and the project page. It explains how to parse the paper ID, lists the API endpoints, and gives error handling and fallbacks. Trigger it when someone shares a paper link or asks for a summary, explanation or analysis of an AI research paper. The linked artifacts set it apart from a plain PDF reader, since the same page connects the paper to code and models.

## Use it to

- Summarize a paper from its arXiv ID and list the models released with it
- Find the datasets and Spaces linked to a research result
- Compare the claims of a paper with its released code repository
- Fall back cleanly when a paper page has no markdown version

## How to use it

**Claude Code**
1. Inside Claude Code, add the marketplace and install the bootstrap skill.
2. /plugin marketplace add huggingface/skills
3. /plugin install hf-cli@huggingface/skills
4. Then add this skill with the hf CLI.
5. $ hf skills add huggingface-papers


---

From **God of Skills**: a curated, hand-tested directory of AI skills, prompts, templates and image style guides.
Source: https://godofskills.com/skills/huggingface-papers?ref=claude-skill
