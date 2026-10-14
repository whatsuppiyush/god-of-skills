# God of Skills — open skills library

> 53 hand-tested AI skills, prompts, templates and image style guides for Claude, ChatGPT,
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

### Marketing

- [**Paid acquisition**](marketing/paid-acquisition/SKILL.md) — Run profitable paid advertising end to end: strategy, creative, targeting, testing, and measurement across Meta/Facebook, Google, TikTok, YouTube… · [page](https://godofskills.com/skills/paid-acquisition)
- [**Brand**](marketing/brand/SKILL.md) — Build a distinctive, defensible brand: mission and story, a codified voice, positioning against an enemy, a scored name, warmth/competence perception… · [page](https://godofskills.com/skills/brand)
- [**Conversion Rate Optimization (CRO)**](marketing/conversion-cro/SKILL.md) — Conversion rate optimization for landing pages, product pages, and checkout flows. · [page](https://godofskills.com/skills/conversion-cro)
- [**Ecommerce and DTC Growth**](marketing/ecommerce/SKILL.md) — Ecommerce and DTC store growth: store conversion, cart recovery, average order value, promotions, marketplace listings, and shipping. · [page](https://godofskills.com/skills/ecommerce)
- [**Email Marketing**](marketing/email-marketing/SKILL.md) — The playbook for owned-email marketing to an opted-in list: deliverability, list growth, writing and creative, sequences, segmentation, and the KPIs that… · [page](https://godofskills.com/skills/email-marketing)
- [**Influencer & Creator Marketing**](marketing/influencer-creator/SKILL.md) — Find, vet, pay, brief, and scale creators, influencers, and affiliates to produce authentic third-party content that sells. · [page](https://godofskills.com/skills/influencer-creator)
- [**Launch and Go-to-Market**](marketing/launch-gtm/SKILL.md) — Plan and run a product launch or go-to-market push: pick your first-users channel, run a Product Hunt launch, earn press, manufacture scarcity for a… · [page](https://godofskills.com/skills/launch-gtm)
- [**Marketing Psychology**](marketing/marketing-psychology/SKILL.md) — Apply behavioral-science and consumer-psychology principles to marketing decisions: pricing displays, ad creative, copy framing, social proof, attention… · [page](https://godofskills.com/skills/marketing-psychology)
- [**Organic Social**](marketing/organic-social/SKILL.md) — Grow an audience and earn reach on social platforms without ad spend. · [page](https://godofskills.com/skills/organic-social)
- [**Pricing & Monetization**](marketing/pricing-monetization/SKILL.md) — The playbook for what you charge and how you present it: value metric, tiers, anchoring, display psychology, discounts and promos, add-ons, trial models… · [page](https://godofskills.com/skills/pricing-monetization)
- [**Product-Led Growth**](marketing/product-led-growth/SKILL.md) — The discipline of making the product itself the primary driver of acquisition, activation, and retention. · [page](https://godofskills.com/skills/product-led-growth)
- [**Retention & lifecycle**](marketing/retention-lifecycle/SKILL.md) — The keep-and-grow-customers discipline: activation, onboarding, churn and failed-payment recovery, loyalty, referral, gamified habit loops… · [page](https://godofskills.com/skills/retention-lifecycle)
- [**AI Search / GEO**](marketing/ai-search-geo/SKILL.md) — Get recommended by AI search (ChatGPT, Perplexity, Google AI Overviews, Gemini, Claude) using GEO / AEO: audit per-model visibility, structure content so… · [page](https://godofskills.com/skills/ai-search-geo)
- [**Content-Led SEO**](marketing/seo-content/SKILL.md) — The full content-led SEO discipline: technical foundation, keyword research, SERP-driven page types, writing pages that outrank competitors, internal… · [page](https://godofskills.com/skills/seo-content)
- [**SEO Cluster Builder**](marketing/seo-cluster-builder/SKILL.md) — One seed keyword into a full hub-and-spoke content map with an internal-link matrix. · [page](https://godofskills.com/skills/seo-cluster-builder)
- [**Landing Page Teardown**](marketing/landing-page-teardown/SKILL.md) — Paste a URL, get a conversion audit: hierarchy, hook, objections, CTA, scored 0-100. · [page](https://godofskills.com/prompts/landing-page-teardown)
- [**SEO Content Brief Builder**](marketing/seo-content-brief/SKILL.md) — Competitive briefs with per-section word counts, entities to cover, and a title/meta set. · [page](https://godofskills.com/skills/seo-content-brief)
- [**Backlink Hunter**](marketing/backlink-hunter/SKILL.md) — Hunt every place a site can earn a link (directories, listicles, competitor gaps), then rank it into a submission plan with exact URLs. · [page](https://godofskills.com/skills/backlink-hunter)
- [**Product Hunt Launch Planner**](marketing/product-hunt-launch/SKILL.md) — Turn a launch date into a T-30 → T+7 plan: listing craft, an hour-by-hour runbook, the pinned first comment, and hunter outreach. · [page](https://godofskills.com/skills/product-hunt-launch)
- [**Ad Maker**](marketing/ad-maker/SKILL.md) — Scroll-stopping ad creative for any product: hooks, full scripts, UGC briefs, storyboards, and angle matrices, native to each platform. · [page](https://godofskills.com/skills/ad-maker)
- [**Reddit Marketing (No Bans)**](marketing/reddit-marketing/SKILL.md) — Market on Reddit without getting banned: find the right subreddits, decode each sub's rules live, and plan value-first posts. · [page](https://godofskills.com/skills/reddit-marketing)
- [**ChatterAPI (Reddit + X data)**](marketing/chatterapi/SKILL.md) — Live Reddit and X data for your agent: find people asking for your product, track mentions, check a subreddit's rules and look up accounts, all within a credit budget it sticks to. · [page](https://godofskills.com/skills/chatterapi)

### Operations

- [**Acquire first users: the playbook**](operations/acquire-first-users/SKILL.md) — The ordered playbook for getting from zero to your first ~1000 users. · [page](https://godofskills.com/skills/acquire-first-users)
- [**Fix a leaky funnel**](operations/fix-a-leaky-funnel/SKILL.md) — Diagnose WHERE a growth funnel leaks, then route to the exact discipline that plugs it, instead of guessing. · [page](https://godofskills.com/skills/fix-a-leaky-funnel)
- [**Growth OS: the router**](operations/growth-os/SKILL.md) — The master router for growth work: arrive with a goal ("grow traffic", "get first users", "raise conversion", "fix churn", "price better", "launch"… · [page](https://godofskills.com/skills/growth-os)
- [**Improve conversion**](operations/improve-conversion/SKILL.md) — Raise the conversion rate of a specific page or flow by running four disciplines in the right order: structure, words, persuasion, then proof. · [page](https://godofskills.com/skills/improve-conversion)
- [**Launch a product: the playbook**](operations/launch-a-product/SKILL.md) — The ordered playbook for launching a product or running a go-to-market push. · [page](https://godofskills.com/skills/launch-a-product)
- [**Pricing and monetization review**](operations/pricing-and-monetization-review/SKILL.md) — Audit and fix how you charge and how you present it, in one ordered pass: model and tiers first, then display psychology, then the pricing page, then… · [page](https://godofskills.com/skills/pricing-and-monetization-review)
- [**Hiring the Growth Team**](operations/hiring-team/SKILL.md) — Make your first (or next) marketing/growth hire: decide the archetype, source candidates on the right boards, and screen with a paid role-specific test… · [page](https://godofskills.com/skills/hiring-team)
- [**Tools & Stack**](operations/tools-stack/SKILL.md) — Pick, assemble, and build the marketing/growth tool stack: AI image & video generators, UGC ad production, AI content workflows, keyword/community… · [page](https://godofskills.com/skills/tools-stack)
- [**Founder CRM (Notion)**](operations/founder-crm-notion/SKILL.md) — A ready Notion CRM wired for AI enrichment, drop a name, the linked prompt fills the row. · [page](https://godofskills.com/skills/founder-crm-notion)
- [**Meeting Notes → Actions**](operations/meeting-notes-to-actions/SKILL.md) — Paste a transcript, get owners, decisions, and dated action items, nothing invented. · [page](https://godofskills.com/prompts/meeting-notes-to-actions)

### Business

- [**Strategy Fundamentals**](business/strategy-fundamentals/SKILL.md) — The upstream growth-strategy layer: decide WHAT to build, WHO for, WHICH channel, and WHY it compounds, before spending a dollar on execution. · [page](https://godofskills.com/skills/strategy-fundamentals)

### Data

- [**Analytics & Data**](data/analytics-data/SKILL.md) — The discipline of measuring growth honestly: finding the metric that matters, proving a change actually caused a result, and prioritizing what to test… · [page](https://godofskills.com/skills/analytics-data)

### Research

- [**Growth Teardowns**](research/growth-teardowns/SKILL.md) — Reusable growth and conversion plays reverse-engineered from real company teardowns (Ahrefs, Zapier, ClickUp, Segment, Customer.io, Amazon, Lovable… · [page](https://godofskills.com/skills/growth-teardowns)

### Sales

- [**Sales outbound**](sales/sales-outbound/SKILL.md) — The cold-outbound discipline: turn a stranger list into booked calls and closed deals with researched cold email, follow-ups, deliverability… · [page](https://godofskills.com/skills/sales-outbound)
- [**Cold Email That Books**](sales/cold-email-that-books/SKILL.md) — A 6-step chain that writes cold emails from a prospect's LinkedIn: hook, proof, one ask. · [page](https://godofskills.com/prompts/cold-email-that-books)
- [**X Cold Outreach (DMs)**](sales/cold-dm/SKILL.md) — Run cold outreach on X: find DM-able leads, draft personalized first-DMs from each profile, and send paced, cost-transparent campaigns. · [page](https://godofskills.com/skills/cold-dm)

### Content & Writing

- [**Copywriting & Messaging**](writing/copywriting-messaging/SKILL.md) — Write and diagnose persuasive marketing copy: headlines, value props, landing pages, ad hooks, product descriptions, and brand narrative. · [page](https://godofskills.com/skills/copywriting-messaging)
- [**Brand Voice Codifier**](writing/brand-voice-codifier/SKILL.md) — Feed it 10 posts, it writes a reusable voice guide every future prompt can load. · [page](https://godofskills.com/skills/brand-voice-codifier)

### Engineering

- [**Changelog Writer**](engineering/changelog-writer/SKILL.md) — Reads merged PRs and drafts a human changelog grouped by feature / fix / chore. · [page](https://godofskills.com/skills/changelog-writer)

### Art & Photography

- [**AI Photography: The DSLR Style Guide**](art-and-photography/ai-dslr-photography/SKILL.md) — The camera, lens, film-stock and lighting vocabulary that turns flat AI images into photographs that look real. · [page](https://godofskills.com/guides/ai-dslr-photography)
- [**AI Art Styles: The Reference**](art-and-photography/ai-art-styles/SKILL.md) — One subject rendered across 20 art movements, each with the exact prompt, so you can see what every style actually does. · [page](https://godofskills.com/guides/ai-art-styles)
- [**AI Product Photography: Setups & Mockups**](art-and-photography/ai-product-photography/SKILL.md) — One product across 16 studio setups, surfaces and lighting, each with the prompt, so you can shoot any product without a studio. · [page](https://godofskills.com/guides/ai-product-photography)
- [**AI Anime & Illustration Styles**](art-and-photography/ai-anime-styles/SKILL.md) — One character across 16 anime and manga sub-styles, each with the prompt, from Ghibli to webtoon to noir manga. · [page](https://godofskills.com/guides/ai-anime-styles)
- [**AI Food Photography**](art-and-photography/ai-food-photography/SKILL.md) — 12 food-photography styles, from dark-and-moody to bright-and-airy to flat-lay, each with the prompt. · [page](https://godofskills.com/guides/ai-food-photography)
- [**AI Interior Design Styles**](art-and-photography/ai-interior-design/SKILL.md) — One living room across 14 interior-design styles, each with the prompt, from Scandinavian to japandi to maximalist. · [page](https://godofskills.com/guides/ai-interior-design)
- [**AI Portrait Styles**](art-and-photography/ai-portrait-styles/SKILL.md) — 16 kinds of portrait, from corporate headshot to editorial to cinematic, each with the prompt. · [page](https://godofskills.com/guides/ai-portrait-styles)
- [**AI Fashion Photography**](art-and-photography/ai-fashion-photography/SKILL.md) — One model across 14 fashion-photography styles, from runway to streetwear to haute couture, each with the prompt. · [page](https://godofskills.com/guides/ai-fashion-photography)
- [**AI Film Stock Emulation**](art-and-photography/ai-film-stock-emulation/SKILL.md) — One portrait across 14 film stocks, so you can see exactly what each film's colour does, each with the prompt. · [page](https://godofskills.com/guides/ai-film-stock-emulation)
- [**AI Image Controls, Compared**](art-and-photography/ai-image-controls-compared/SKILL.md) — The same handful of dials (aspect ratio, style strength, seed, reference images) mapped across every major image model. · [page](https://godofskills.com/guides/ai-image-controls-compared)
- [**Consistent Characters Across AI Images**](art-and-photography/ai-consistent-characters/SKILL.md) — How to keep the same character across multiple AI images, using today's methods, not the obsolete Midjourney trick. · [page](https://godofskills.com/guides/ai-consistent-characters)
- [**Blending & Reference Images**](art-and-photography/ai-blending-reference-images/SKILL.md) — How to combine two images or ideas into one, using multi-image reference input, the modern replacement for photobashing. · [page](https://godofskills.com/guides/ai-blending-reference-images)

---

⭐ If this is useful, star the repo — it helps other people find it.

Generated from https://godofskills.com — do not hand-edit; edit the source and re-run the generator.
