# God of Skills — open skills library

> 52 hand-tested AI skills, prompts, templates and image style guides for Claude, ChatGPT,
> Cursor and 30+ agent tools. Free and open. Organised by department, like a company.

Full searchable directory, with examples and copy-paste recipes: **https://godofskills.com**

Every folder holds a `SKILL.md` — the same file agents load as a skill. Drop one into a project,
or wire the whole library over MCP and let your agent pull skills on demand.

## Install one skill (Claude Code)

```bash
mkdir -p .claude/skills/<name> && \
  curl -sL https://godofskills.com/r/skills/<name>.md -o .claude/skills/<name>/SKILL.md
```

## Or add the whole library as an MCP server

```bash
claude mcp add --transport http godofskills https://godofskills.com/mcp
```

Then ask your agent for any skill by name. Works with any MCP client.

## Departments

### Paid Ads

- [**Paid acquisition**](paid-ads/paid-acquisition/SKILL.md) — Run profitable paid advertising end to end: strategy, creative, targeting, testing, and measurement across Meta/Facebook, Google, TikTok, YouTube… · [page](https://godofskills.com/skills/paid-acquisition)
- [**Ad Maker**](paid-ads/ad-maker/SKILL.md) — Scroll-stopping ad creative for any product: hooks, full scripts, UGC briefs, storyboards, and angle matrices, native to each platform. · [page](https://godofskills.com/skills/ad-maker)

### Workflow Automation

- [**Acquire first users: the playbook**](workflow-automation/acquire-first-users/SKILL.md) — The ordered playbook for getting from zero to your first ~1000 users. · [page](https://godofskills.com/skills/acquire-first-users)
- [**Fix a leaky funnel**](workflow-automation/fix-a-leaky-funnel/SKILL.md) — Diagnose WHERE a growth funnel leaks, then route to the exact discipline that plugs it, instead of guessing. · [page](https://godofskills.com/skills/fix-a-leaky-funnel)
- [**Growth OS: the router**](workflow-automation/growth-os/SKILL.md) — The master router for growth work: arrive with a goal ("grow traffic", "get first users", "raise conversion", "fix churn", "price better", "launch"… · [page](https://godofskills.com/skills/growth-os)
- [**Improve conversion**](workflow-automation/improve-conversion/SKILL.md) — Raise the conversion rate of a specific page or flow by running four disciplines in the right order: structure, words, persuasion, then proof. · [page](https://godofskills.com/skills/improve-conversion)
- [**Launch a product: the playbook**](workflow-automation/launch-a-product/SKILL.md) — The ordered playbook for launching a product or running a go-to-market push. · [page](https://godofskills.com/skills/launch-a-product)
- [**Pricing and monetization review**](workflow-automation/pricing-and-monetization-review/SKILL.md) — Audit and fix how you charge and how you present it, in one ordered pass: model and tiers first, then display psychology, then the pricing page, then… · [page](https://godofskills.com/skills/pricing-and-monetization-review)
- [**Founder CRM (Notion)**](workflow-automation/founder-crm-notion/SKILL.md) — A ready Notion CRM wired for AI enrichment, drop a name, the linked prompt fills the row. · [page](https://godofskills.com/skills/founder-crm-notion)
- [**Meeting Notes → Actions**](workflow-automation/meeting-notes-to-actions/SKILL.md) — Paste a transcript, get owners, decisions, and dated action items, nothing invented. · [page](https://godofskills.com/prompts/meeting-notes-to-actions)

### Brand

- [**Brand**](brand/brand/SKILL.md) — Build a distinctive, defensible brand: mission and story, a codified voice, positioning against an enemy, a scored name, warmth/competence perception… · [page](https://godofskills.com/skills/brand)

### Conversion & CRO

- [**Conversion Rate Optimization (CRO)**](conversion-and-cro/conversion-cro/SKILL.md) — Conversion rate optimization for landing pages, product pages, and checkout flows. · [page](https://godofskills.com/skills/conversion-cro)
- [**Landing Page Teardown**](conversion-and-cro/landing-page-teardown/SKILL.md) — Paste a URL, get a conversion audit: hierarchy, hook, objections, CTA, scored 0-100. · [page](https://godofskills.com/prompts/landing-page-teardown)

### Ecommerce

- [**Ecommerce and DTC Growth**](ecommerce/ecommerce/SKILL.md) — Ecommerce and DTC store growth: store conversion, cart recovery, average order value, promotions, marketplace listings, and shipping. · [page](https://godofskills.com/skills/ecommerce)

### Email Marketing

- [**Email Marketing**](email-marketing/email-marketing/SKILL.md) — The playbook for owned-email marketing to an opted-in list: deliverability, list growth, writing and creative, sequences, segmentation, and the KPIs that… · [page](https://godofskills.com/skills/email-marketing)

### Influencer & Creator

- [**Influencer & Creator Marketing**](influencer-and-creator/influencer-creator/SKILL.md) — Find, vet, pay, brief, and scale creators, influencers, and affiliates to produce authentic third-party content that sells. · [page](https://godofskills.com/skills/influencer-creator)

### Launch & GTM

- [**Launch and Go-to-Market**](launch-and-gtm/launch-gtm/SKILL.md) — Plan and run a product launch or go-to-market push: pick your first-users channel, run a Product Hunt launch, earn press, manufacture scarcity for a… · [page](https://godofskills.com/skills/launch-gtm)
- [**Product Hunt Launch Planner**](launch-and-gtm/product-hunt-launch/SKILL.md) — Turn a launch date into a T-30 → T+7 plan: listing craft, an hour-by-hour runbook, the pinned first comment, and hunter outreach. · [page](https://godofskills.com/skills/product-hunt-launch)

### Marketing Psychology

- [**Marketing Psychology**](marketing-psychology/marketing-psychology/SKILL.md) — Apply behavioral-science and consumer-psychology principles to marketing decisions: pricing displays, ad creative, copy framing, social proof, attention… · [page](https://godofskills.com/skills/marketing-psychology)

### Social Media

- [**Organic Social**](social-media/organic-social/SKILL.md) — Grow an audience and earn reach on social platforms without ad spend. · [page](https://godofskills.com/skills/organic-social)
- [**Reddit Marketing (No Bans)**](social-media/reddit-marketing/SKILL.md) — Market on Reddit without getting banned: find the right subreddits, decode each sub's rules live, and plan value-first posts. · [page](https://godofskills.com/skills/reddit-marketing)

### Pricing & Monetisation

- [**Pricing & Monetization**](pricing-and-monetisation/pricing-monetization/SKILL.md) — The playbook for what you charge and how you present it: value metric, tiers, anchoring, display psychology, discounts and promos, add-ons, trial models… · [page](https://godofskills.com/skills/pricing-monetization)

### Product-Led Growth

- [**Product-Led Growth**](product-led-growth/product-led-growth/SKILL.md) — The discipline of making the product itself the primary driver of acquisition, activation, and retention. · [page](https://godofskills.com/skills/product-led-growth)

### Retention & Lifecycle

- [**Retention & lifecycle**](retention-and-lifecycle/retention-lifecycle/SKILL.md) — The keep-and-grow-customers discipline: activation, onboarding, churn and failed-payment recovery, loyalty, referral, gamified habit loops… · [page](https://godofskills.com/skills/retention-lifecycle)

### Strategy

- [**Strategy Fundamentals**](strategy/strategy-fundamentals/SKILL.md) — The upstream growth-strategy layer: decide WHAT to build, WHO for, WHICH channel, and WHY it compounds, before spending a dollar on execution. · [page](https://godofskills.com/skills/strategy-fundamentals)

### Hiring & Team

- [**Hiring the Growth Team**](hiring-and-team/hiring-team/SKILL.md) — Make your first (or next) marketing/growth hire: decide the archetype, source candidates on the right boards, and screen with a paid role-specific test… · [page](https://godofskills.com/skills/hiring-team)

### Tools & Stack

- [**Tools & Stack**](tools-and-stack/tools-stack/SKILL.md) — Pick, assemble, and build the marketing/growth tool stack: AI image & video generators, UGC ad production, AI content workflows, keyword/community… · [page](https://godofskills.com/skills/tools-stack)

### Analysis

- [**Analytics & Data**](analysis/analytics-data/SKILL.md) — The discipline of measuring growth honestly: finding the metric that matters, proving a change actually caused a result, and prioritizing what to test… · [page](https://godofskills.com/skills/analytics-data)

### Competitive Intel

- [**Growth Teardowns**](competitive-intel/growth-teardowns/SKILL.md) — Reusable growth and conversion plays reverse-engineered from real company teardowns (Ahrefs, Zapier, ClickUp, Segment, Customer.io, Amazon, Lovable… · [page](https://godofskills.com/skills/growth-teardowns)

### Outbound

- [**Sales outbound**](outbound/sales-outbound/SKILL.md) — The cold-outbound discipline: turn a stranger list into booked calls and closed deals with researched cold email, follow-ups, deliverability… · [page](https://godofskills.com/skills/sales-outbound)

### AI Search & GEO

- [**AI Search / GEO**](ai-search-and-geo/ai-search-geo/SKILL.md) — Get recommended by AI search (ChatGPT, Perplexity, Google AI Overviews, Gemini, Claude) using GEO / AEO: audit per-model visibility, structure content so… · [page](https://godofskills.com/skills/ai-search-geo)

### SEO

- [**Content-Led SEO**](seo/seo-content/SKILL.md) — The full content-led SEO discipline: technical foundation, keyword research, SERP-driven page types, writing pages that outrank competitors, internal… · [page](https://godofskills.com/skills/seo-content)
- [**SEO Cluster Builder**](seo/seo-cluster-builder/SKILL.md) — One seed keyword into a full hub-and-spoke content map with an internal-link matrix. · [page](https://godofskills.com/skills/seo-cluster-builder)
- [**SEO Content Brief Builder**](seo/seo-content-brief/SKILL.md) — Competitive briefs with per-section word counts, entities to cover, and a title/meta set. · [page](https://godofskills.com/skills/seo-content-brief)
- [**Backlink Hunter**](seo/backlink-hunter/SKILL.md) — Hunt every place a site can earn a link (directories, listicles, competitor gaps), then rank it into a submission plan with exact URLs. · [page](https://godofskills.com/skills/backlink-hunter)

### Copywriting & Messaging

- [**Copywriting & Messaging**](copywriting-and-messaging/copywriting-messaging/SKILL.md) — Write and diagnose persuasive marketing copy: headlines, value props, landing pages, ad hooks, product descriptions, and brand narrative. · [page](https://godofskills.com/skills/copywriting-messaging)
- [**Brand Voice Codifier**](copywriting-and-messaging/brand-voice-codifier/SKILL.md) — Feed it 10 posts, it writes a reusable voice guide every future prompt can load. · [page](https://godofskills.com/skills/brand-voice-codifier)

### Cold Email & DMs

- [**Cold Email That Books**](cold-email-and-dms/cold-email-that-books/SKILL.md) — A 6-step chain that writes cold emails from a prospect's LinkedIn: hook, proof, one ask. · [page](https://godofskills.com/prompts/cold-email-that-books)
- [**X Cold Outreach (DMs)**](cold-email-and-dms/cold-dm/SKILL.md) — Run cold outreach on X: find DM-able leads, draft personalized first-DMs from each profile, and send paced, cost-transparent campaigns. · [page](https://godofskills.com/skills/cold-dm)

### Docs & Changelogs

- [**Changelog Writer**](docs-and-changelogs/changelog-writer/SKILL.md) — Reads merged PRs and drafts a human changelog grouped by feature / fix / chore. · [page](https://godofskills.com/skills/changelog-writer)

### Art & Photography

- [**AI Photography: The DSLR Style Guide**](art-and-photography/ai-dslr-photography/SKILL.md) — The camera, lens, film-stock and lighting vocabulary that turns flat AI images into photographs that look real. · [page](https://godofskills.com/playbooks/ai-dslr-photography)
- [**AI Art Styles: The Reference**](art-and-photography/ai-art-styles/SKILL.md) — One subject rendered across 20 art movements, each with the exact prompt, so you can see what every style actually does. · [page](https://godofskills.com/playbooks/ai-art-styles)
- [**AI Product Photography: Setups & Mockups**](art-and-photography/ai-product-photography/SKILL.md) — One product across 16 studio setups, surfaces and lighting, each with the prompt, so you can shoot any product without a studio. · [page](https://godofskills.com/playbooks/ai-product-photography)
- [**AI Anime & Illustration Styles**](art-and-photography/ai-anime-styles/SKILL.md) — One character across 16 anime and manga sub-styles, each with the prompt, from Ghibli to webtoon to noir manga. · [page](https://godofskills.com/playbooks/ai-anime-styles)
- [**AI Food Photography**](art-and-photography/ai-food-photography/SKILL.md) — 12 food-photography styles, from dark-and-moody to bright-and-airy to flat-lay, each with the prompt. · [page](https://godofskills.com/playbooks/ai-food-photography)
- [**AI Interior Design Styles**](art-and-photography/ai-interior-design/SKILL.md) — One living room across 14 interior-design styles, each with the prompt, from Scandinavian to japandi to maximalist. · [page](https://godofskills.com/playbooks/ai-interior-design)
- [**AI Portrait Styles**](art-and-photography/ai-portrait-styles/SKILL.md) — 16 kinds of portrait, from corporate headshot to editorial to cinematic, each with the prompt. · [page](https://godofskills.com/playbooks/ai-portrait-styles)
- [**AI Fashion Photography**](art-and-photography/ai-fashion-photography/SKILL.md) — One model across 14 fashion-photography styles, from runway to streetwear to haute couture, each with the prompt. · [page](https://godofskills.com/playbooks/ai-fashion-photography)
- [**AI Film Stock Emulation**](art-and-photography/ai-film-stock-emulation/SKILL.md) — One portrait across 14 film stocks, so you can see exactly what each film's colour does, each with the prompt. · [page](https://godofskills.com/playbooks/ai-film-stock-emulation)
- [**AI Image Controls, Compared**](art-and-photography/ai-image-controls-compared/SKILL.md) — The same handful of dials (aspect ratio, style strength, seed, reference images) mapped across every major image model. · [page](https://godofskills.com/playbooks/ai-image-controls-compared)
- [**Consistent Characters Across AI Images**](art-and-photography/ai-consistent-characters/SKILL.md) — How to keep the same character across multiple AI images, using today's methods, not the obsolete Midjourney trick. · [page](https://godofskills.com/playbooks/ai-consistent-characters)
- [**Blending & Reference Images**](art-and-photography/ai-blending-reference-images/SKILL.md) — How to combine two images or ideas into one, using multi-image reference input, the modern replacement for photobashing. · [page](https://godofskills.com/playbooks/ai-blending-reference-images)

---

⭐ If this is useful, star the repo — it helps other people find it.

Generated from https://godofskills.com — do not hand-edit; edit the source and re-run the generator.
