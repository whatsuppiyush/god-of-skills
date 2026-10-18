---
name: kdense-exploratory-data-analysis
description: Bounded, local EDA on explicit scientific files with leakage audits and rigorous report scaffolds.
---


# K-Dense Exploratory Data Analysis

Inspects authorized local data before modeling or confirmatory inference. It produces bounded, deterministic aggregate reports from redacted CSV, TSV and JSON profiles, with optional inspection of NumPy, HDF5, FASTA or FASTQ files and basic image metadata. It audits missingness and leakage, tests outlier and transformation sensitivity, and scaffolds a report. A capability matrix states exactly what is supported, and a safe local I/O contract limits what is read. The workflow confirms authorization, builds a manifest before analyzing content, runs the narrowest automated tool, then adds scientific context. Domain formats outside the matrix are not covered.

## Use it to

- Profile a new dataset's missingness and distributions without leaving the machine
- Audit a feature set for target leakage before modeling
- Check how sensitive findings are to outliers and transformations
- Produce a report scaffold for a data exploration phase

## How to use it

**Claude Code**
1. Install with the skills CLI.
2. $ npx skills add K-Dense-AI/scientific-agent-skills


---

From **God of Skills**: a curated, hand-tested directory of AI skills, prompts, templates and image style guides.
Source: https://godofskills.com/skills/kdense-exploratory-data-analysis?ref=claude-skill
