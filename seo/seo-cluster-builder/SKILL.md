---
name: seo-cluster-builder
description: >-
  Turn ONE seed keyword into a full hub-and-spoke content plan grouped by real SERP
  overlap, not string similarity. Use whenever the user says "build a topic cluster",
  "content cluster", "pillar page", "hub and spoke", "content architecture", "group my
  keywords", "what pages should I write around X", or hands over a seed keyword and wants a
  content plan. Reach for it before anyone starts writing a batch of articles, when a blog
  has lots of overlapping posts cannibalizing each other, or when planning a new topic
  section from scratch. Returns a pillar page plus supporting spokes, each with intent and a
  target keyword, and a ready internal-link matrix.
---

# SEO Cluster Builder

Expand a single seed keyword into a topic map, group the keywords by who actually ranks for
them (SERP overlap), and hand back a hub-and-spoke plan a writer can execute. The grouping
step is the whole point: two keywords belong in the same cluster only when Google returns
largely the same pages for both, because that is Google telling you it treats them as one
intent. String similarity ("email marketing" vs "email marketing software") lies constantly;
SERP overlap does not.

## When to use this

- The user gives you a seed keyword and wants to know what to write.
- A blog has many thin, overlapping posts and needs consolidation into pillars.
- Planning a new content section and you want structure before drafting.
- Trigger phrases: "topic cluster", "content cluster", "pillar page", "hub and spoke",
  "keyword grouping", "content architecture", "what should I write around X".

## Workflow

### 1. Expand the topic space from the seed

Start with the seed keyword and generate 40 to 80 candidate keywords across intent types:

- **Autocomplete and modifiers.** Prefix and suffix the seed with how, what, best, vs,
  for, without, template, examples, tool, checklist, and question words.
- **People Also Ask and related searches.** Pull the questions and "related" chips from the
  live SERP for the seed.
- **Sub-topics and entities.** List the concepts a thorough guide on the seed must cover;
  each is a candidate spoke.
- **Buyer-stage variants.** Add awareness ("what is X"), consideration ("X vs Y", "best X"),
  and decision ("X pricing", "X for [use case]") phrasings.

Deduplicate obvious repeats. Keep near-duplicates for now; step 3 merges them by evidence.

### 2. Pull the top 10 ranking URLs for each candidate

For every candidate keyword, record the top 10 organic results (URLs only, ignore ads and
map packs). This is your raw signal. If you have a SERP tool or API, batch it; if you are
working by hand, sample the 15 to 25 highest-priority candidates rather than all of them.

Store as a simple map: `keyword -> [url1, url2, ... url10]`.

### 3. Group by SERP overlap, not string similarity

Compare each pair of keywords by how many of their top-10 URLs match. Use the overlap count
as the grouping rule:

- **6+ shared URLs (of 10):** same intent. Merge into one page. Do not write two articles;
  Google will only rank one and they will cannibalize.
- **3 to 5 shared URLs:** related, same cluster, separate spoke. They support each other and
  should interlink.
- **0 to 2 shared URLs:** different intent. Different cluster, or a different pillar entirely.

Walk the keywords greedily: pick the highest-volume unassigned keyword as a cluster seed,
pull in every keyword with 3+ overlap, then repeat with the next unassigned keyword. The
result is a set of clusters where within-cluster overlap is high and cross-cluster overlap is
low.

### 4. Assign intent and pick the pillar

For each cluster, label the dominant intent from what the ranking pages actually are:

- **Informational** if the SERP is guides, definitions, how-tos.
- **Commercial** if it is listicles, "best X", comparison pages.
- **Transactional** if it is product, pricing, or signup pages.

The **pillar** is the broadest informational keyword whose SERP overlaps most of the cluster
(usually the seed or a close variant). Every other keyword becomes a **spoke** targeting one
specific sub-intent. One target keyword per spoke, no overlap between spokes.

### 5. Build the internal-link matrix

Wire the cluster so link equity and topical authority flow:

- **Pillar <-> every spoke:** the pillar links down to each spoke in its body; each spoke
  links back up to the pillar. Bidirectional, always.
- **Spoke <-> spoke by shared intent:** link two spokes only when they share 3+ SERP URLs or
  a reader on one would plausibly want the other. Do not link every spoke to every spoke;
  that dilutes signal and looks spammy.
- Use descriptive anchor text matching the destination's target keyword, not "click here".

### 6. Thin-content guardrail

Before finalizing, kill weak spokes:

- If a candidate keyword has no meaningful search demand AND no distinct SERP, fold it into
  the nearest spoke instead of making a page.
- If a spoke cannot support at least ~800 words of genuinely useful, non-repetitive content,
  it is thin. Merge it up into the pillar or a sibling spoke.
- If two spokes would say 70%+ the same thing, they are one page. Merge them.
- Aim for a pillar plus 5 to 12 real spokes, not 40 shallow ones.

## OUTPUT TEMPLATE

```
# Topic Cluster: <seed keyword>

## Pillar
- Page title: <pillar page title>
- Target keyword: <keyword>  | Intent: informational
- Covers: <one-line scope of the hub page>

## Spokes
| # | Page title | Target keyword | Intent | In cluster because (SERP overlap) |
|---|------------|----------------|--------|-----------------------------------|
| 1 | ...        | ...            | info   | 4/10 shared URLs with pillar      |
| 2 | ...        | ...            | commercial | 3/10 shared with spoke 4       |
| ...|

## Internal-link matrix
Pillar -> Spoke 1, Spoke 2, ... (hub links down to all)
Spoke 1 -> Pillar; Spoke 3 (shared intent)
Spoke 2 -> Pillar
Spoke 3 -> Pillar; Spoke 1
...

## Merged / dropped (thin-content guardrail)
- <keyword> merged into <spoke> (>6/10 SERP overlap, same intent)
- <keyword> dropped (no demand, no distinct SERP)
```

## Worked example

Seed: **cold email**.

Expanding gives ~50 candidates. Pulling top-10 URLs and comparing overlap reveals that "cold
email" and "cold emailing" share 8 of 10 URLs, so they merge into the pillar. "Cold email
templates" and "cold email examples" share 5 URLs with each other but only 2 with the pillar,
so they form one spoke, not two. "Cold email subject lines", "cold email open rate", and
"cold email deliverability" each have distinct SERPs (0 to 2 overlap with the pillar) and
become separate spokes. "Best cold email software" is commercial (the SERP is listicles), so
it is a commercial spoke that links to the pillar but not to the informational how-to spokes.

Final plan: 1 pillar ("The complete guide to cold email") + 6 spokes (templates+examples,
subject lines, open rate, deliverability, follow-up sequences, software). The link matrix
wires the pillar to all 6, links deliverability <-> open rate (4/10 overlap), and drops "cold
email meaning" as thin, folding it into the pillar intro.

---

From **God of Skills**: a curated, hand-tested directory of AI skills, prompts, templates and image style guides.
Source: https://godofskills.com/skills/seo-cluster-builder?ref=claude-skill
