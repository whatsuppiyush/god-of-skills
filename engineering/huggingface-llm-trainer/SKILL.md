---
name: huggingface-llm-trainer
description: Fine-tune language and vision models with TRL or Unsloth on Hugging Face Jobs, then convert to GGUF.
---


# Hugging Face LLM Trainer

Walks through training or fine-tuning a model without local GPUs by running TRL on Hugging Face Jobs infrastructure. Supported methods include SFT, DPO, GRPO and reward modeling, and trained models can be converted to GGUF for local runtimes such as Ollama, LM Studio and llama.cpp. A decision section says when to prefer Unsloth, which the skill describes as using far less VRAM and training faster. Key directives, a prerequisites checklist covering account, authentication and dataset requirements, critical settings and asynchronous job guidelines keep a run from failing halfway. UV scripts with inline dependencies are part of the approach.

## Use it to

- Run a supervised fine-tune on a hosted GPU and save the result to the Hub
- Choose between TRL and Unsloth based on memory limits and speed
- Convert a trained checkpoint to GGUF for local inference
- Check dataset and authentication prerequisites before launching a paid job

## How to use it

**Claude Code**
1. Inside Claude Code, add the marketplace and install the bootstrap skill.
2. /plugin marketplace add huggingface/skills
3. /plugin install hf-cli@huggingface/skills
4. Then add this skill with the hf CLI.
5. $ hf skills add huggingface-llm-trainer


---

From **God of Skills**: a curated, hand-tested directory of AI skills, prompts, templates and image style guides.
Source: https://godofskills.com/skills/huggingface-llm-trainer?ref=claude-skill
