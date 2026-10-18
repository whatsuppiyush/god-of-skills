---
name: supabase-postgres-best-practices
description: Postgres guidance in eight priority categories, from query performance to RLS, for any Postgres host.
---


# Supabase Postgres Best Practices

Maintained by Supabase but written for Postgres anywhere. It tells the agent to load it before writing or changing anything in a database, from column types and schema design to migrations, indexes and row-level security policies. Rules are grouped by impact in eight categories: query performance, connection management and security with RLS are critical, schema design is high, concurrency and locking medium-high, data access patterns medium, monitoring and diagnostics low-medium and advanced features low. Each category has a filename prefix so rules can be loaded selectively from the references folder.

## Use it to

- Review a migration for missing indexes and unsafe column types
- Write row-level security policies without common mistakes
- Diagnose slow queries using the query-performance rules first
- Tune connection pooling and locking behavior for a busy app
- Check a table design for missing foreign key indexes before the data grows

## How to use it

**Claude Code**
1. In a terminal, add the marketplace and install the Postgres plugin.
2. $ claude plugin marketplace add supabase/agent-skills
3. $ claude plugin install postgres-best-practices@supabase-agent-skills
4. Or use the skills CLI.
5. $ npx skills add supabase/agent-skills --skill supabase-postgres-best-practices


---

From **God of Skills**: a curated, hand-tested directory of AI skills, prompts, templates and image style guides.
Source: https://godofskills.com/skills/supabase-postgres-best-practices?ref=claude-skill
