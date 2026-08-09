---
name: seo-content-brief
description: Competitive briefs with per-section word counts, entities to cover, and a title/meta set.
---


# SEO Content Brief Builder

Give it a target keyword and it studies what ranks, then writes a brief a writer can execute: per-section word counts, entities and questions to cover, and a title/meta set.

## Use it to

- Hand a writer a brief that will actually rank
- Reverse-engineer what the top results cover
- Standardise briefs across a content team

## How to use it

**Claude Code**
1. Save into .claude/skills/
2. Ask: “brief for <keyword>”

## SKILL.md

```
---
name: seo-content-brief
description: >-
  Turn a target keyword into a fill-in brief a writer can execute: search intent, target and
  per-section word counts, the H2/H3 outline, entities and questions to cover, internal and
  external link suggestions, and a title tag plus meta description set. Use whenever the user
  says "write a content brief", "content brief for X", "SEO brief", "outline for this
  keyword", "what should this article cover", or is about to commission or write a page and
  wants it built to outrank the current top 10. Reach for it before drafting any SEO article
  or landing page. Output is a ready-to-hand-off brief template.
---

# SEO Content Brief

Study what already ranks for a keyword, then write a brief that tells a writer exactly what to
produce to beat it. The brief is derived from evidence (the current top 10 results), not from
imagination: word counts come from what ranks, the outline comes from the coverage patterns
across competitors plus the gaps, and the questions come from what searchers actually ask.

## When to use this

- About to write or commission an SEO article, guide, or landing page.
- A writer needs direction beyond "write about X".
- Trigger phrases: "content brief", "SEO brief", "outline for", "what should this cover",
  "brief for this keyword".

## Workflow

### 1. Read the top 10 ranking pages

Pull the current top 10 organic results for the target keyword and study them, not just skim.
For each, note: page type (guide, listicle, product, comparison), rough word count, the H2/H3
headings, and what it covers well or badly. This is the bar you have to clear.

### 2. Determine search intent

From the shape of the top 10, name the dominant intent so the page matches it. If the SERP is
how-to guides, an informational deep-dive wins; if it is listicles, a ranked list wins; if it
is product pages, a commercial page wins. A well-written page that fights the SERP's intent
does not rank. State the intent and the winning page type explicitly.

### 3. Set target and per-section word counts

Take the median word count of the relevant top-10 pages (ignore outliers and off-intent
pages) and aim slightly above it, only if the extra words add substance. Longer is not better;
matching intent thoroughly is. Then split the target across sections so the writer knows the
weight of each part (intro, each H2 block, conclusion). This prevents a bloated intro and a
starved core.

### 4. Build the H2/H3 outline

Merge the heading structures of the top competitors into a superset, then add what they all
miss. Every H2 should map to a sub-intent or question a searcher has. Order them the way a
reader wants the information, usually: what/why up top, how in the middle, edge cases and FAQ
toward the end. Mark which headings are table-stakes (everyone covers them) versus your
differentiation (the gap you fill).

### 5. List entities, questions, and subtopics to cover

Give the writer the concrete things the page must mention to read as authoritative:

- **Entities:** the specific tools, concepts, people, standards, and terms that ranking pages
  reference. Search engines expect a real article on this topic to name these.
- **Questions:** the People Also Ask questions for the keyword plus related questions from the
  SERP. Each is a candidate H2 or FAQ item.
- **Subtopics and gaps:** what the top 10 under-cover or get wrong; this is your edge.

### 6. Suggest internal and external links

- **Internal:** 3 to 6 existing pages on the site this article should link to, with suggested
  anchor text, to build topical connection and pass equity.
- **External:** 2 to 4 authoritative, non-competitor sources to cite (studies, docs,
  primary data). Citing real sources raises trust and is easy for the writer to skip without
  a prompt.

### 7. Write the title tag and meta description

Provide a title tag (aim ~55 to 60 characters, keyword near the front, a reason to click) and
a meta description (~150 to 155 characters, keyword plus the benefit and an implied CTA).
Offer one primary and one alternate of each.

## OUTPUT TEMPLATE

```markdown
# Content Brief: <target keyword>

Primary keyword: <keyword>
Secondary keywords: <kw>, <kw>, <kw>
Search intent: <informational / commercial / transactional> - winning page type: <type>
Target word count: <N> (competitor median <M>)

## Section word budget
- Intro: <N> words
- <H2 title>: <N> words
- <H2 title>: <N> words
- Conclusion / CTA: <N> words

## Outline
## <H2 #1>            [table-stakes | differentiation]
   ### <H3>
   ### <H3>
## <H2 #2>
## <H2 #3>
...
## FAQ
   - <PAA question>
   - <PAA question>

## Must cover
- Entities: <entity>, <entity>, <entity>, ...
- Questions (from PAA): <q>, <q>, <q>
- Subtopics competitors miss (your edge): <gap>, <gap>

## Links
Internal:
- -> <page> (anchor: "<anchor text>")
- -> <page> (anchor: "<anchor text>")
External (cite):
- <authoritative source> for <the stat/claim>

## Metadata
Title tag (A): <~57 chars>
Title tag (B): <alternate>
Meta description (A): <~155 chars, keyword + benefit + implied CTA>
Meta description (B): <alternate>
```

## Worked example

Target keyword: **how to do a backlink audit**.

The top 10 are all how-to guides (intent = informational, page type = step-by-step guide),
median ~1,900 words. Brief sets target at 2,100 words. The merged outline yields H2s: what a
backlink audit is, when to run one, the step-by-step process, tools you can use, what to do
with toxic links, how often to repeat it, plus an FAQ. The differentiation gap: every
competitor lists tools but none shows a decision rule for disavow-versus-ignore, so that
becomes a flagged differentiation H2.

Must-cover entities: referring domains, anchor text distribution, disavow file, DR/DA, toxic
links, Google Search Console. PAA questions ("Is a backlink audit worth it?", "How do you
find bad backlinks?") become FAQ items. Internal links point to the site's disavow guide and
its anchor-text article; external cites go to primary Search Console documentation.

Title tag: "How to Do a Backlink Audit (Step-by-Step, 2026)". Meta: "Run a backlink audit in
7 steps: find toxic links, read your anchor profile, and decide what to disavow. A repeatable
process, no guesswork."
```


---

From **God of Skills**: a curated, hand-tested directory of AI skills, prompts, templates and image style guides.
Source: https://godofskills.com/skills/seo-content-brief?ref=claude-skill
