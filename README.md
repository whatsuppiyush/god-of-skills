# God of Skills — open skills library

> 212 hand-tested AI skills, prompts, templates and image style guides for Claude, ChatGPT,
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
- [**Marketing Skills: Ad Creative**](marketing/marketingskills-ad-creative/SKILL.md) — Generate and iterate on ad headlines, descriptions and primary text for every major paid platform, checked against specs. · [page](https://godofskills.com/skills/marketingskills-ad-creative)
- [**Marketing Skills: AI SEO**](marketing/marketingskills-ai-seo/SKILL.md) — Make content easy for ChatGPT, Perplexity, Claude, Gemini and AI Overviews to find, extract and cite. · [page](https://godofskills.com/skills/marketingskills-ai-seo)
- [**Marketing Skills: Churn Prevention**](marketing/marketingskills-churn-prevention/SKILL.md) — Design cancel flows, exit surveys, save offers and failed-payment recovery for subscription products. · [page](https://godofskills.com/skills/marketingskills-churn-prevention)
- [**Marketing Skills: Content Strategy**](marketing/marketingskills-content-strategy/SKILL.md) — Decide what to publish by weighing searchable against shareable content, pillars and topic clusters. · [page](https://godofskills.com/skills/marketingskills-content-strategy)
- [**Marketing Skills: Conversion Rate Optimization**](marketing/marketingskills-cro/SKILL.md) — Analyze a landing page across seven conversion factors and return quick wins, high-impact changes and test ideas. · [page](https://godofskills.com/skills/marketingskills-cro)
- [**Marketing Skills: Directory Submissions**](marketing/marketingskills-directory-submissions/SKILL.md) — Plan submissions to startup, SaaS, AI and review directories, with Product Hunt and review-site playbooks. · [page](https://godofskills.com/skills/marketingskills-directory-submissions)
- [**Marketing Skills: Free Tools Strategy**](marketing/marketingskills-free-tools/SKILL.md) — Plan and evaluate calculators, graders and generators built as engineering-as-marketing lead magnets. · [page](https://godofskills.com/skills/marketingskills-free-tools)
- [**Marketing Skills: Launch Strategy**](marketing/marketingskills-launch/SKILL.md) — Plan a product or feature launch with the ORB channel framework and a five-phase rollout. · [page](https://godofskills.com/skills/marketingskills-launch)
- [**Marketing Skills: Lead Magnets**](marketing/marketingskills-lead-magnets/SKILL.md) — Plan lead magnets matched to buyer stage, with gating, landing page and delivery guidance. · [page](https://godofskills.com/skills/marketingskills-lead-magnets)
- [**Marketing Skills: Onboarding CRO**](marketing/marketingskills-onboarding/SKILL.md) — Improve post-signup activation by shortening time to value and fixing empty states and setup checklists. · [page](https://godofskills.com/skills/marketingskills-onboarding)
- [**Marketing Skills: Pricing Strategy**](marketing/marketingskills-pricing/SKILL.md) — Choose value metrics, tiers and an initial price you can learn from, then plan increases and the pricing page. · [page](https://godofskills.com/skills/marketingskills-pricing)
- [**Marketing Skills: Programmatic SEO**](marketing/marketingskills-programmatic-seo/SKILL.md) — Build template-driven pages at scale that have unique value, with twelve playbooks to choose from. · [page](https://godofskills.com/skills/marketingskills-programmatic-seo)
- [**Marketing Skills: Referral and Affiliate Programs**](marketing/marketingskills-referrals/SKILL.md) — Design, launch and measure referral, affiliate and ambassador programs. · [page](https://godofskills.com/skills/marketingskills-referrals)
- [**Marketing Skills: Schema Markup**](marketing/marketingskills-schema/SKILL.md) — Add and validate JSON-LD structured data for rich results, with checks against Google's supported features. · [page](https://godofskills.com/skills/marketingskills-schema)
- [**Marketing Skills: SEO Audit**](marketing/marketingskills-seo-audit/SKILL.md) — Diagnose ranking and traffic problems with a prioritised technical and on-page audit framework. · [page](https://godofskills.com/skills/marketingskills-seo-audit)
- [**Marketing Skills: Influencer Marketing**](marketing/marketingskills-influencer-marketing/SKILL.md) — Find, vet, brief and measure creators and ambassadors across B2C, B2B and sponsored-channel placements. · [page](https://godofskills.com/skills/marketingskills-influencer-marketing)
- [**LinkedIn Skills: Post Writer**](marketing/linkedin-post-writer/SKILL.md) — Draft LinkedIn posts from 20 hook formulas, picked by engagement goal, with a humanizer pass. · [page](https://godofskills.com/skills/linkedin-post-writer)
- [**LinkedIn Skills: Hook Extractor**](marketing/linkedin-hook-extractor/SKILL.md) — Reverse-engineer which hook formula a viral LinkedIn post uses and get a blank template for your topic. · [page](https://godofskills.com/skills/linkedin-hook-extractor)
- [**LinkedIn Skills: Profile Optimizer**](marketing/linkedin-profile-optimizer/SKILL.md) — Audit and rewrite all nine parts of a LinkedIn profile against a 2026 scorecard. · [page](https://godofskills.com/skills/linkedin-profile-optimizer)
- [**LinkedIn Skills: Comment Drafter**](marketing/linkedin-comment-drafter/SKILL.md) — Draft thoughtful comments or reshares for someone else's LinkedIn post from its URL. · [page](https://godofskills.com/skills/linkedin-comment-drafter)
- [**LinkedIn Skills: Content Planner**](marketing/linkedin-content-planner/SKILL.md) — Generate a seven-day LinkedIn plan from a theme, audience and pillars, with daily comment targets. · [page](https://godofskills.com/skills/linkedin-content-planner)
- [**ScrapeCreators Outlier Post Finder**](marketing/scrapecreators-outlier-post-finder/SKILL.md) — Find posts that beat an account's own baseline and explain the repeatable patterns behind them. · [page](https://godofskills.com/skills/scrapecreators-outlier-post-finder)
- [**ScrapeCreators Influencer Prospecting**](marketing/scrapecreators-influencer-prospecting/SKILL.md) — Build scored creator prospect lists from public social data for outreach, sponsorships and seeding. · [page](https://godofskills.com/skills/scrapecreators-influencer-prospecting)
- [**Knowledge Work: Email Sequence**](marketing/kwp-marketing-email-sequence/SKILL.md) — Design and write multi-email sequences with timing, branching, exit conditions and benchmarks. · [page](https://godofskills.com/skills/kwp-marketing-email-sequence)

### Operations

- [**Acquire first users: the playbook**](operations/acquire-first-users/SKILL.md) — The ordered playbook for getting from zero to your first ~1000 users. · [page](https://godofskills.com/skills/acquire-first-users)
- [**Fix a leaky funnel**](operations/fix-a-leaky-funnel/SKILL.md) — Diagnose WHERE a growth funnel leaks, then route to the exact discipline that plugs it, instead of guessing. · [page](https://godofskills.com/skills/fix-a-leaky-funnel)
- [**Growth OS: the router**](operations/growth-os/SKILL.md) — The master router for growth work: arrive with a goal ("grow traffic", "get first users", "raise conversion", "fix churn", "price better", "launch"… · [page](https://godofskills.com/skills/growth-os)
- [**Improve conversion**](operations/improve-conversion/SKILL.md) — Raise the conversion rate of a specific page or flow by running four disciplines in the right order: structure, words, persuasion, then proof. · [page](https://godofskills.com/skills/improve-conversion)
- [**Launch a product: the playbook**](operations/launch-a-product/SKILL.md) — The ordered playbook for launching a product or running a go-to-market push. · [page](https://godofskills.com/skills/launch-a-product)
- [**Pricing and monetization review**](operations/pricing-and-monetization-review/SKILL.md) — Audit and fix how you charge and how you present it, in one ordered pass: model and tiers first, then display psychology, then the pricing page, then… · [page](https://godofskills.com/skills/pricing-and-monetization-review)
- [**Hiring the Growth Team**](operations/hiring-team/SKILL.md) — Make your first (or next) marketing/growth hire: decide the archetype, source candidates on the right boards, and screen with a paid role-specific test… · [page](https://godofskills.com/skills/hiring-team)
- [**Tools & Stack**](operations/tools-stack/SKILL.md) — Pick, assemble, and build the marketing/growth tool stack: AI image & video generators, UGC ad production, AI content workflows, keyword/community… · [page](https://godofskills.com/skills/tools-stack)
- [**Founder CRM (Notion)**](operations/founder-crm-notion/SKILL.md) — Build a one-person Notion CRM: the schema, two views, and one enrichment prompt you run per new contact. · [page](https://godofskills.com/skills/founder-crm-notion)
- [**Meeting Notes → Actions**](operations/meeting-notes-to-actions/SKILL.md) — Paste a transcript, get owners, decisions, and dated action items, nothing invented. · [page](https://godofskills.com/prompts/meeting-notes-to-actions)
- [**Anthropic Docx Skill**](operations/anthropic-docx/SKILL.md) — Create, edit and inspect Word documents, with rendering checks and guardrails for tables, page size and numbering. · [page](https://godofskills.com/skills/anthropic-docx)
- [**Anthropic PDF Skill**](operations/anthropic-pdf/SKILL.md) — Read, merge, split, watermark, encrypt, fill and OCR PDF files with Python and command-line tools. · [page](https://godofskills.com/skills/anthropic-pdf)
- [**Anthropic PPTX Skill**](operations/anthropic-pptx/SKILL.md) — Build and edit PowerPoint decks with pptxgenjs, template editing, speaker notes and a mandatory visual QA loop. · [page](https://godofskills.com/skills/anthropic-pptx)
- [**Anthropic XLSX Skill**](operations/anthropic-xlsx/SKILL.md) — Create and repair spreadsheets with live formulas, forced recalculation and zero-error checks. · [page](https://godofskills.com/skills/anthropic-xlsx)
- [**K-Dense MarkItDown**](operations/kdense-markitdown/SKILL.md) — Convert Office, PDF and data files and selected URIs to Markdown with Microsoft MarkItDown for LLM ingestion. · [page](https://godofskills.com/skills/kdense-markitdown)
- [**Superpowers Brainstorming**](operations/superpowers-brainstorming/SKILL.md) — Find out what the user actually wants through focused questions before any building starts. · [page](https://godofskills.com/skills/superpowers-brainstorming)
- [**Superpowers Parallel Agents**](operations/superpowers-parallel-agents/SKILL.md) — Split two or more independent problems across subagents that run concurrently with isolated context. · [page](https://godofskills.com/skills/superpowers-parallel-agents)
- [**Superpowers Executing Plans**](operations/superpowers-executing-plans/SKILL.md) — Work through a written implementation plan inline, task by task, with a ledger and one final review. · [page](https://godofskills.com/skills/superpowers-executing-plans)
- [**Superpowers Subagent-Driven Development**](operations/superpowers-subagent-development/SKILL.md) — Execute a plan by sending a fresh implementer subagent per task, with task review and a final branch review. · [page](https://godofskills.com/skills/superpowers-subagent-development)
- [**Superpowers Writing Plans**](operations/superpowers-writing-plans/SKILL.md) — Write implementation plans for an engineer with zero context, with exact files, tests and task sizes. · [page](https://godofskills.com/skills/superpowers-writing-plans)
- [**Jira MCP Server (Atlassian)**](operations/jira-mcp/SKILL.md) — Atlassian's hosted server for Jira and Confluence, plus Bitbucket, Compass and Loom, signed in with OAuth. · [page](https://godofskills.com/mcp-servers/jira-mcp)
- [**MCP Atlassian**](operations/mcp-atlassian/SKILL.md) — The popular community server for Jira and Confluence that also works with Server and Data Center installs. · [page](https://godofskills.com/mcp-servers/mcp-atlassian)
- [**Notion MCP Server**](operations/notion-mcp/SKILL.md) — Notion's hosted server: search, read and edit pages and databases under your own Notion permissions. · [page](https://godofskills.com/mcp-servers/notion-mcp)
- [**Linear MCP Server**](operations/linear-mcp/SKILL.md) — Linear's hosted server for finding, creating and updating issues, projects and comments from any agent. · [page](https://godofskills.com/mcp-servers/linear-mcp)
- [**Slack MCP Server**](operations/slack-mcp/SKILL.md) — Slack's own hosted server for searching, reading and posting messages, canvases and lists, approved by your admin. · [page](https://godofskills.com/mcp-servers/slack-mcp)
- [**Slack MCP Server (community)**](operations/slack-mcp-server/SKILL.md) — A community Slack server that runs locally on your own token, with message posting off until you enable it. · [page](https://godofskills.com/mcp-servers/slack-mcp-server)
- [**n8n-MCP**](operations/n8n-mcp/SKILL.md) — A community server that teaches an agent n8n's node catalogue, then lets it build, validate and deploy workflows. · [page](https://godofskills.com/mcp-servers/n8n-mcp)

### Business

- [**Strategy Fundamentals**](business/strategy-fundamentals/SKILL.md) — The upstream growth-strategy layer: decide WHAT to build, WHO for, WHICH channel, and WHY it compounds, before spending a dollar on execution. · [page](https://godofskills.com/skills/strategy-fundamentals)
- [**Stripe Best Practices**](business/stripe-best-practices/SKILL.md) — Route a Stripe integration to the right API and apply critical rules, current API version and sandbox defaults. · [page](https://godofskills.com/skills/stripe-best-practices)
- [**PM Skills: Create PRD**](business/pm-create-prd/SKILL.md) — Draft a lean, decision-ready product requirements document with an eight-section template. · [page](https://godofskills.com/skills/pm-create-prd)
- [**PM Skills: Market Sizing**](business/pm-market-sizing/SKILL.md) — Estimate TAM, SAM and SOM with top-down and bottom-up approaches and growth projections. · [page](https://godofskills.com/skills/pm-market-sizing)
- [**PM Skills: Pre-Mortem**](business/pm-pre-mortem/SKILL.md) — Stress-test a PRD or launch plan by sorting risks into tigers, paper tigers and elephants. · [page](https://godofskills.com/skills/pm-pre-mortem)
- [**Knowledge Work: Campaign Plan**](business/kwp-marketing-campaign-plan/SKILL.md) — Generate a full campaign brief with objectives, audience, messaging, channel strategy and a content calendar. · [page](https://godofskills.com/skills/kwp-marketing-campaign-plan)
- [**Stripe MCP Server**](business/stripe-mcp/SKILL.md) — Stripe's hosted server for reading and writing Stripe data, searching the docs and planning an integration. · [page](https://godofskills.com/mcp-servers/stripe-mcp)

### Data

- [**Analytics & Data**](data/analytics-data/SKILL.md) — The discipline of measuring growth honestly: finding the metric that matters, proving a change actually caused a result, and prioritizing what to test… · [page](https://godofskills.com/skills/analytics-data)
- [**Marketing Skills: Analytics Tracking**](data/marketingskills-analytics/SKILL.md) — Plan and audit tracking for GA4, GTM, UTMs and conversion events so the data answers real decisions. · [page](https://godofskills.com/skills/marketingskills-analytics)
- [**PM Skills: North Star Metric**](data/pm-north-star-metric/SKILL.md) — Define a North Star Metric with three to five input metrics, classified by business game and validated against seven criteria. · [page](https://godofskills.com/skills/pm-north-star-metric)
- [**PM Skills: Cohort Analysis**](data/pm-cohort-analysis/SKILL.md) — Analyze retention curves, feature adoption and engagement trends by user cohort from your data. · [page](https://godofskills.com/skills/pm-cohort-analysis)
- [**K-Dense Exploratory Data Analysis**](data/kdense-exploratory-data-analysis/SKILL.md) — Bounded, local EDA on explicit scientific files with leakage audits and rigorous report scaffolds. · [page](https://godofskills.com/skills/kdense-exploratory-data-analysis)
- [**Knowledge Work: Performance Report**](data/kwp-marketing-performance-report/SKILL.md) — Turn campaign data into an executive-ready report with trends, wins, misses and next-period priorities. · [page](https://godofskills.com/skills/kwp-marketing-performance-report)
- [**Knowledge Work: Statistical Analysis**](data/kwp-data-statistical-analysis/SKILL.md) — Descriptive statistics, trends, outlier detection and hypothesis testing, with cautions on over-claiming. · [page](https://godofskills.com/skills/kwp-data-statistical-analysis)
- [**Knowledge Work: Data Visualization**](data/kwp-data-visualization/SKILL.md) — Choose the right chart and build it in matplotlib, seaborn or plotly with accessible design. · [page](https://godofskills.com/skills/kwp-data-visualization)

### Research

- [**Growth Teardowns**](research/growth-teardowns/SKILL.md) — Reusable growth and conversion plays reverse-engineered from real company teardowns (Ahrefs, Zapier, ClickUp, Segment, Customer.io, Amazon, Lovable… · [page](https://godofskills.com/skills/growth-teardowns)
- [**Marketing Skills: Competitor Profiling**](research/marketingskills-competitor-profiling/SKILL.md) — Turn a list of competitor URLs into structured, comparable profile documents using live scraping and SEO data. · [page](https://godofskills.com/skills/marketingskills-competitor-profiling)
- [**Marketing Skills: Customer Research**](research/marketingskills-customer-research/SKILL.md) — Analyze interviews and reviews, mine online communities, or plan interviews and surveys to build personas. · [page](https://godofskills.com/skills/marketingskills-customer-research)
- [**Hugging Face Paper Pages**](research/huggingface-papers/SKILL.md) — Read AI papers from Hugging Face paper pages or arXiv IDs as markdown, with linked models, datasets and Spaces. · [page](https://godofskills.com/skills/huggingface-papers)
- [**PM Skills: Competitive Battlecard**](research/pm-competitive-battlecard/SKILL.md) — Create a sales-ready battlecard against one named competitor: positioning, features, objections and win/loss patterns. · [page](https://godofskills.com/skills/pm-competitive-battlecard)
- [**ScrapeCreators Comment Mining**](research/scrapecreators-comment-mining/SKILL.md) — Mine public comments for audience questions, objections, buying intent and the exact customer language. · [page](https://godofskills.com/skills/scrapecreators-comment-mining)
- [**ScrapeCreators Ad Library Teardown**](research/scrapecreators-ad-library-teardown/SKILL.md) — Analyze active Meta, Google and LinkedIn ads to extract hooks, offers, CTAs and test ideas. · [page](https://godofskills.com/skills/scrapecreators-ad-library-teardown)
- [**ScrapeCreators Competitor Social Research**](research/scrapecreators-competitor-social-research/SKILL.md) — Compare competitors' social strategies and produce a brief with content gaps and tests. · [page](https://godofskills.com/skills/scrapecreators-competitor-social-research)
- [**K-Dense Literature Review**](research/kdense-literature-review/SKILL.md) — Run systematic, scoping and narrative literature reviews with citation checks and PRISMA-style reporting. · [page](https://godofskills.com/skills/kdense-literature-review)
- [**K-Dense Market Research Reports**](research/kdense-market-research-reports/SKILL.md) — Build evidence-traceable market reports with source and claims ledgers and scenario-based market sizing. · [page](https://godofskills.com/skills/kdense-market-research-reports)
- [**Knowledge Work: Competitive Intelligence**](research/kwp-sales-competitive-intelligence/SKILL.md) — Two modes: an in-deal play against a named rival, and win/loss patterns and battlecards across the book. · [page](https://godofskills.com/skills/kwp-sales-competitive-intelligence)
- [**ChatterAPI MCP Server**](research/chatterapi-mcp/SKILL.md) — Reddit and X search, threads, users and lead finding for any agent, on one key and one credit balance. · [page](https://godofskills.com/mcp-servers/chatterapi-mcp)
- [**Fetch MCP Server**](research/fetch-mcp/SKILL.md) — The reference server for fetching a web page and handing it to the model as markdown. · [page](https://godofskills.com/mcp-servers/fetch-mcp)
- [**Firecrawl MCP Server**](research/firecrawl-mcp/SKILL.md) — Firecrawl's server for web search, scraping pages to markdown or JSON, mapping sites and crawling them. · [page](https://godofskills.com/mcp-servers/firecrawl-mcp)
- [**Exa MCP Server**](research/exa-mcp/SKILL.md) — Exa's hosted server for neural web search and fetching pages as clean markdown, usable without a key. · [page](https://godofskills.com/mcp-servers/exa-mcp)
- [**Brave Search MCP Server**](research/brave-search-mcp/SKILL.md) — Brave's server for web, news, image, video and local search, plus page content sized for grounding a model. · [page](https://godofskills.com/mcp-servers/brave-search-mcp)
- [**Tavily MCP Server**](research/tavily-mcp/SKILL.md) — Tavily's server for real-time search, page extraction, site mapping and crawling, built for agents. · [page](https://godofskills.com/mcp-servers/tavily-mcp)
- [**Apify MCP Server**](research/apify-mcp/SKILL.md) — Apify's server that turns any of thousands of ready-made scrapers in the Apify Store into a tool an agent can call. · [page](https://godofskills.com/mcp-servers/apify-mcp)
- [**Perplexity MCP Server**](research/perplexity-mcp/SKILL.md) — Perplexity's server for web search, quick answers, deep research and reasoning, hosted or run locally. · [page](https://godofskills.com/mcp-servers/perplexity-mcp)

### Sales

- [**Sales outbound**](sales/sales-outbound/SKILL.md) — The cold-outbound discipline: turn a stranger list into booked calls and closed deals with researched cold email, follow-ups, deliverability… · [page](https://godofskills.com/skills/sales-outbound)
- [**Cold Email That Books**](sales/cold-email-that-books/SKILL.md) — A 6-step chain that writes cold emails from a prospect's LinkedIn: hook, proof, one ask. · [page](https://godofskills.com/prompts/cold-email-that-books)
- [**X Cold Outreach (DMs)**](sales/cold-dm/SKILL.md) — Run cold outreach on X: find DM-able leads, draft personalized first-DMs from each profile, and send paced, cost-transparent campaigns. · [page](https://godofskills.com/skills/cold-dm)
- [**Marketing Skills: Cold Email**](sales/marketingskills-cold-email/SKILL.md) — Write B2B cold emails that read like a peer wrote them, plus follow-ups, sending setup and reply handling. · [page](https://godofskills.com/skills/marketingskills-cold-email)
- [**Knowledge Work: Sales Call Prep**](sales/kwp-sales-call-prep/SKILL.md) — Build a pre-call brief with attendees, account history, transcripts, open opportunity status and discovery questions. · [page](https://godofskills.com/skills/kwp-sales-call-prep)
- [**Knowledge Work: Draft Outreach**](sales/kwp-sales-draft-outreach/SKILL.md) — Draft a personalized email or multi-touch sequence, save it as a draft and add the contact to a sequence on request. · [page](https://godofskills.com/skills/kwp-sales-draft-outreach)
- [**Knowledge Work: Account Research**](sales/kwp-sales-account-research/SKILL.md) — Research a target company and contact: overview, recent news, likely priorities and ICP fit, cross-checked with the CRM. · [page](https://godofskills.com/skills/kwp-sales-account-research)

### Content & Writing

- [**Copywriting & Messaging**](writing/copywriting-messaging/SKILL.md) — Write and diagnose persuasive marketing copy: headlines, value props, landing pages, ad hooks, product descriptions, and brand narrative. · [page](https://godofskills.com/skills/copywriting-messaging)
- [**Brand Voice Codifier**](writing/brand-voice-codifier/SKILL.md) — Feed it 10 posts, it writes a reusable voice guide every future prompt can load. · [page](https://godofskills.com/skills/brand-voice-codifier)
- [**Humanizer**](writing/humanizer/SKILL.md) — Remove AI writing patterns from text while keeping its meaning, based on staging, rhythm and inflation tells. · [page](https://godofskills.com/skills/humanizer)
- [**Marketing Skills: Copy Editing**](writing/marketingskills-copy-editing/SKILL.md) — Edit existing marketing copy in seven focused sweeps, from clarity to zero-risk, with panel scoring. · [page](https://godofskills.com/skills/marketingskills-copy-editing)
- [**Marketing Skills: Copywriting**](writing/marketingskills-copywriting/SKILL.md) — Write conversion copy for home, landing, pricing, feature and about pages, with a section on avoiding AI tells. · [page](https://godofskills.com/skills/marketingskills-copywriting)

### Engineering

- [**Changelog Writer**](engineering/changelog-writer/SKILL.md) — Reads merged PRs and drafts a human changelog grouped by feature / fix / chore. · [page](https://godofskills.com/skills/changelog-writer)
- [**Sentry Security Review**](engineering/sentry-security-review/SKILL.md) — Confidence-based security review for injection, XSS, auth and crypto issues, with language and infrastructure guides. · [page](https://godofskills.com/skills/sentry-security-review)
- [**Trail of Bits Differential Review**](engineering/trailofbits-differential-review/SKILL.md) — Security review of a PR, commit or diff that scales depth to codebase size and calculates blast radius. · [page](https://godofskills.com/skills/trailofbits-differential-review)
- [**Trail of Bits Sharp Edges**](engineering/trailofbits-sharp-edges/SKILL.md) — Find footgun APIs, dangerous defaults and misuse-prone configuration that lead developers into insecurity. · [page](https://godofskills.com/skills/trailofbits-sharp-edges)
- [**Superpowers Systematic Debugging**](engineering/superpowers-systematic-debugging/SKILL.md) — A four-phase debugging process built on one rule: no fixes without root-cause investigation first. · [page](https://godofskills.com/skills/superpowers-systematic-debugging)
- [**Superpowers Test-Driven Development**](engineering/superpowers-test-driven-development/SKILL.md) — Enforce red, green, refactor: write the test, watch it fail, then write the minimum code to pass. · [page](https://godofskills.com/skills/superpowers-test-driven-development)
- [**Anthropic Claude API Skill**](engineering/anthropic-claude-api/SKILL.md) — Build, debug and migrate apps that call Claude, with current model IDs and per-language SDK guidance. · [page](https://godofskills.com/skills/anthropic-claude-api)
- [**Anthropic MCP Builder**](engineering/anthropic-mcp-builder/SKILL.md) — A four-phase guide to building MCP servers in Python or TypeScript, ending with evaluation questions. · [page](https://godofskills.com/skills/anthropic-mcp-builder)
- [**Sentry GitHub Actions Security Review**](engineering/sentry-gha-security-review/SKILL.md) — Audit .github/workflows for pwn requests, expression injection, credential theft and supply chain attacks. · [page](https://godofskills.com/skills/sentry-gha-security-review)
- [**Sentry Code Review**](engineering/sentry-code-review/SKILL.md) — Review pull requests the way Sentry engineers do, with checklists for problems, design, tests and tone. · [page](https://godofskills.com/skills/sentry-code-review)
- [**Superpowers Verification Before Completion**](engineering/superpowers-verification/SKILL.md) — Require fresh command output as evidence before claiming that work is finished, fixed or passing. · [page](https://godofskills.com/skills/superpowers-verification)
- [**Anthropic Skill Creator**](engineering/anthropic-skill-creator/SKILL.md) — Create, test and tune SKILL.md skills, including eval runs and trigger-description optimization. · [page](https://godofskills.com/skills/anthropic-skill-creator)
- [**Anthropic Web Artifacts Builder**](engineering/anthropic-web-artifacts-builder/SKILL.md) — Build multi-component claude.ai artifacts in React, Tailwind and shadcn/ui, bundled into one HTML file. · [page](https://godofskills.com/skills/anthropic-web-artifacts-builder)
- [**Anthropic Webapp Testing**](engineering/anthropic-webapp-testing/SKILL.md) — Test and debug local web apps with Playwright scripts, a server-lifecycle helper and screenshot capture. · [page](https://godofskills.com/skills/anthropic-webapp-testing)
- [**Superpowers Finishing a Branch**](engineering/superpowers-finishing-branch/SKILL.md) — Verify tests, detect the environment and present clear merge, PR, keep or discard options when work is done. · [page](https://godofskills.com/skills/superpowers-finishing-branch)
- [**Superpowers Receiving Code Review**](engineering/superpowers-receiving-review/SKILL.md) — Respond to review feedback with verification and reasoned pushback instead of blind agreement. · [page](https://godofskills.com/skills/superpowers-receiving-review)
- [**Superpowers Requesting Code Review**](engineering/superpowers-requesting-review/SKILL.md) — Dispatch a reviewer subagent with a precise diff and context after each task or before merging. · [page](https://godofskills.com/skills/superpowers-requesting-review)
- [**Superpowers Git Worktrees**](engineering/superpowers-git-worktrees/SKILL.md) — Make sure feature work happens in an isolated workspace, using native tools first and git worktree as a fallback. · [page](https://godofskills.com/skills/superpowers-git-worktrees)
- [**Superpowers Writing Skills**](engineering/superpowers-writing-skills/SKILL.md) — Apply test-driven development to skills: watch an agent fail without the skill before you write it. · [page](https://godofskills.com/skills/superpowers-writing-skills)
- [**Agent Skills: Spec-Driven Development**](engineering/addy-spec-driven-development/SKILL.md) — Write a structured specification before any code, then plan and break it into tasks through gated phases. · [page](https://godofskills.com/skills/addy-spec-driven-development)
- [**Agent Skills: Code Review and Quality**](engineering/addy-code-review-quality/SKILL.md) — Review changes along five axes (correctness, readability, architecture, security, performance) before merging. · [page](https://godofskills.com/skills/addy-code-review-quality)
- [**Agent Skills: Debugging and Error Recovery**](engineering/addy-debugging-error-recovery/SKILL.md) — A stop-the-line triage routine for failing tests, broken builds and unexpected runtime errors. · [page](https://godofskills.com/skills/addy-debugging-error-recovery)
- [**Agent Skills: Security and Hardening**](engineering/addy-security-hardening/SKILL.md) — Threat-model first, then apply input validation, auth, session and header controls against the OWASP Top Ten. · [page](https://godofskills.com/skills/addy-security-hardening)
- [**Agent Skills: Performance Optimization**](engineering/addy-performance-optimization/SKILL.md) — Measure first, find the bottleneck, fix it, verify the gain, and guard against regressions. · [page](https://godofskills.com/skills/addy-performance-optimization)
- [**Agent Skills: API and Interface Design**](engineering/addy-api-interface-design/SKILL.md) — Design stable REST, GraphQL and module interfaces that are hard to misuse, contract first. · [page](https://godofskills.com/skills/addy-api-interface-design)
- [**Agent Skills: Git Workflow and Versioning**](engineering/addy-git-workflow/SKILL.md) — Atomic commits, descriptive messages, trunk-based branching and worktrees for fast-moving agent work. · [page](https://godofskills.com/skills/addy-git-workflow)
- [**Agent Skills: Documentation and ADRs**](engineering/addy-documentation-adrs/SKILL.md) — Record the why behind decisions with architecture decision records and context future engineers need. · [page](https://godofskills.com/skills/addy-documentation-adrs)
- [**Agent Skills: Context Engineering**](engineering/addy-context-engineering/SKILL.md) — Give a coding agent the right information at the right time using a five-level context hierarchy. · [page](https://godofskills.com/skills/addy-context-engineering)
- [**Vercel React Best Practices**](engineering/vercel-react-best-practices/SKILL.md) — Seventy performance rules for React and Next.js, ranked from eliminating waterfalls to micro-optimizations. · [page](https://godofskills.com/skills/vercel-react-best-practices)
- [**Vercel React Composition Patterns**](engineering/vercel-composition-patterns/SKILL.md) — Compound components, lifted state and composed internals to avoid boolean-prop sprawl in React. · [page](https://godofskills.com/skills/vercel-composition-patterns)
- [**Sentry Find Bugs**](engineering/sentry-find-bugs/SKILL.md) — Audit local branch changes for bugs and vulnerabilities through five phases ending in a pre-conclusion check. · [page](https://godofskills.com/skills/sentry-find-bugs)
- [**Sentry Iterate PR**](engineering/sentry-iterate-pr/SKILL.md) — Loop on a pull request until actionable CI passes and high or medium review feedback is addressed. · [page](https://godofskills.com/skills/sentry-iterate-pr)
- [**Sentry PR Writer**](engineering/sentry-pr-writer/SKILL.md) — Write reviewer-facing pull request titles and bodies as a cover note, not a changelog or file list. · [page](https://godofskills.com/skills/sentry-pr-writer)
- [**Trail of Bits Semgrep Scan**](engineering/trailofbits-semgrep/SKILL.md) — Run Semgrep with language detection, parallel scans and merged SARIF output, with telemetry kept off. · [page](https://godofskills.com/skills/trailofbits-semgrep)
- [**Trail of Bits Property-Based Testing**](engineering/trailofbits-property-based-testing/SKILL.md) — Write and debug property tests with Hypothesis, fast-check, proptest, jqwik, rapid and Echidna or Medusa. · [page](https://godofskills.com/skills/trailofbits-property-based-testing)
- [**Trail of Bits Variant Analysis**](engineering/trailofbits-variant-analysis/SKILL.md) — After finding one bug, hunt for the other instances of the same root cause across the codebase. · [page](https://godofskills.com/skills/trailofbits-variant-analysis)
- [**Trail of Bits Audit Context Building**](engineering/trailofbits-audit-context/SKILL.md) — Build a grounded understanding of unfamiliar code before any bug hunting begins. · [page](https://godofskills.com/skills/trailofbits-audit-context)
- [**Trail of Bits Supply Chain Risk Auditor**](engineering/trailofbits-supply-chain-auditor/SKILL.md) — Audit npm, PyPI and Go dependencies for advisories, abandoned upstreams, publisher concentration and install scripts. · [page](https://godofskills.com/skills/trailofbits-supply-chain-auditor)
- [**Trail of Bits Mutation Testing**](engineering/trailofbits-mutation-testing/SKILL.md) — Configure mewt or muton campaigns, triage surviving mutants and find bugs exposed by test gaps. · [page](https://godofskills.com/skills/trailofbits-mutation-testing)
- [**Cloudflare Workers Best Practices**](engineering/cloudflare-workers-best-practices/SKILL.md) — Production checks for Workers: compatibility dates, observability, streaming and an anti-pattern table to flag. · [page](https://godofskills.com/skills/cloudflare-workers-best-practices)
- [**Cloudflare Durable Objects**](engineering/cloudflare-durable-objects/SKILL.md) — Build, debug and review Durable Objects for persistent state and coordination, with seven critical rules. · [page](https://godofskills.com/skills/cloudflare-durable-objects)
- [**Cloudflare Agents SDK**](engineering/cloudflare-agents-sdk/SKILL.md) — Build and debug stateful agent apps on Workers with the agents package, routing, chat streaming and React hooks. · [page](https://godofskills.com/skills/cloudflare-agents-sdk)
- [**Cloudflare Web Performance Audit**](engineering/cloudflare-web-perf/SKILL.md) — Audit loading and interaction performance with a DevTools trace, Core Web Vitals, network and codebase analysis. · [page](https://godofskills.com/skills/cloudflare-web-perf)
- [**Supabase Postgres Best Practices**](engineering/supabase-postgres-best-practices/SKILL.md) — Postgres guidance in eight priority categories, from query performance to RLS, for any Postgres host. · [page](https://godofskills.com/skills/supabase-postgres-best-practices)
- [**Hugging Face LLM Trainer**](engineering/huggingface-llm-trainer/SKILL.md) — Fine-tune language and vision models with TRL or Unsloth on Hugging Face Jobs, then convert to GGUF. · [page](https://godofskills.com/skills/huggingface-llm-trainer)
- [**Expo Router Navigation**](engineering/expo-router/SKILL.md) — File-based routing for Expo apps: groups, dynamic routes, native stacks, tabs, modals, sheets and header search. · [page](https://godofskills.com/skills/expo-router)
- [**Gemini API Development**](engineering/gemini-api-dev/SKILL.md) — Write code against the Gemini API with current models, SDKs and rules that override stale training data. · [page](https://godofskills.com/skills/gemini-api-dev)
- [**Knowledge Work: Incident Response**](engineering/kwp-engineering-incident-response/SKILL.md) — Run an incident from triage through communication to a blameless postmortem, with SEV1 to SEV4 levels. · [page](https://godofskills.com/skills/kwp-engineering-incident-response)
- [**Prompt Master**](engineering/prompt-master/SKILL.md) — Write, fix and adapt prompts for specific AI tools, from LLMs and coding agents to image and video models. · [page](https://godofskills.com/skills/prompt-master)
- [**Planning with Files**](engineering/planning-with-files/SKILL.md) — Keep task_plan.md, findings.md and progress.md on disk so long agent tasks survive resets and context drift. · [page](https://godofskills.com/skills/planning-with-files)
- [**GitHub MCP Server**](engineering/github-mcp/SKILL.md) — GitHub's official server for repos, issues, pull requests and Actions, hosted by GitHub or run locally in Docker. · [page](https://godofskills.com/mcp-servers/github-mcp)
- [**Sentry MCP Server**](engineering/sentry-mcp/SKILL.md) — Sentry's hosted server for debugging: issues, stack traces, traces and logs, scoped to a project. · [page](https://godofskills.com/mcp-servers/sentry-mcp)
- [**Cloudflare MCP Servers**](engineering/cloudflare-mcp/SKILL.md) — Cloudflare's hosted servers: one API server for the whole platform, plus focused servers for docs, containers and more. · [page](https://godofskills.com/mcp-servers/cloudflare-mcp)
- [**Supabase MCP Server**](engineering/supabase-mcp/SKILL.md) — Supabase's hosted server for tables, SQL, migrations, logs, edge functions and branches, with a read-only mode. · [page](https://godofskills.com/mcp-servers/supabase-mcp)
- [**Playwright MCP**](engineering/playwright-mcp/SKILL.md) — Microsoft's server for driving a real browser, reading pages as accessibility snapshots rather than screenshots. · [page](https://godofskills.com/mcp-servers/playwright-mcp)
- [**Context7 MCP Server**](engineering/context7-mcp/SKILL.md) — Upstash's server that feeds the agent current, version-specific library docs instead of training-data guesses. · [page](https://godofskills.com/mcp-servers/context7-mcp)
- [**Filesystem MCP Server**](engineering/filesystem-mcp/SKILL.md) — The MCP project's reference server for reading, writing, editing and searching files inside folders you allow. · [page](https://godofskills.com/mcp-servers/filesystem-mcp)
- [**Memory MCP Server**](engineering/memory-mcp/SKILL.md) — The reference server that gives a model persistent memory as a local knowledge graph stored in one file. · [page](https://godofskills.com/mcp-servers/memory-mcp)
- [**Sequential Thinking MCP Server**](engineering/sequential-thinking-mcp/SKILL.md) — A reference server with one tool that makes the model reason in numbered, revisable steps. · [page](https://godofskills.com/mcp-servers/sequential-thinking-mcp)
- [**Git MCP Server**](engineering/git-mcp/SKILL.md) — The reference server for reading and changing local Git repositories: status, diffs, log, commits and branches. · [page](https://godofskills.com/mcp-servers/git-mcp)
- [**Time MCP Server**](engineering/time-mcp/SKILL.md) — The reference server that tells a model the current time in any timezone and converts between zones. · [page](https://godofskills.com/mcp-servers/time-mcp)
- [**Chrome DevTools MCP**](engineering/chrome-devtools-mcp/SKILL.md) — Google's server that lets an agent drive and inspect a live Chrome, with DevTools-grade network, console and performance data. · [page](https://godofskills.com/mcp-servers/chrome-devtools-mcp)
- [**Postgres MCP Pro**](engineering/postgres-mcp/SKILL.md) — A Postgres server that goes past running queries: index tuning, EXPLAIN review and health checks, with a read-only mode. · [page](https://godofskills.com/mcp-servers/postgres-mcp)
- [**MongoDB MCP Server**](engineering/mongodb-mcp/SKILL.md) — MongoDB's server for querying and managing databases, plus Atlas administration, read-only by default in every example. · [page](https://godofskills.com/mcp-servers/mongodb-mcp)
- [**Neon MCP Server**](engineering/neon-mcp/SKILL.md) — Neon's hosted server for serverless Postgres: projects, branches and SQL, with migrations tested on a branch first. · [page](https://godofskills.com/mcp-servers/neon-mcp)
- [**Grafana MCP Server**](engineering/grafana-mcp/SKILL.md) — Grafana Labs' server for dashboards, Prometheus and Loki queries, incidents, alerts and on-call, read-only if you want. · [page](https://godofskills.com/mcp-servers/grafana-mcp)
- [**Desktop Commander MCP**](engineering/desktop-commander-mcp/SKILL.md) — A community server that gives a chat client your terminal and filesystem: long-running processes, search and surgical edits. · [page](https://godofskills.com/mcp-servers/desktop-commander-mcp)
- [**Serena MCP Server**](engineering/serena-mcp/SKILL.md) — A coding toolkit that works on symbols, like an IDE does: find, reference, rename and edit functions across 40+ languages. · [page](https://godofskills.com/mcp-servers/serena-mcp)
- [**Claude Code as an MCP Server**](engineering/claude-code-mcp/SKILL.md) — Run claude mcp serve and Claude Code's own tools (read, edit, shell and more) become an MCP server other apps can use. · [page](https://godofskills.com/mcp-servers/claude-code-mcp)
- [**Azure MCP Server**](engineering/azure-mcp/SKILL.md) — Microsoft's server for dozens of Azure services, from Storage and Cosmos DB to AKS and Monitor, using your existing Azure login. · [page](https://godofskills.com/mcp-servers/azure-mcp)
- [**MCP Toolbox for Databases**](engineering/mcp-toolbox-databases/SKILL.md) — Google's open-source server for connecting agents to Postgres, MySQL, BigQuery, Spanner and many more, prebuilt or custom. · [page](https://godofskills.com/mcp-servers/mcp-toolbox-databases)
- [**Vercel MCP**](engineering/vercel-mcp/SKILL.md) — Vercel's hosted server for projects, deployments and logs, plus domains, env vars and more, signed in with OAuth. · [page](https://godofskills.com/mcp-servers/vercel-mcp)

### Creative

- [**Anthropic Frontend Design**](creative/anthropic-frontend-design/SKILL.md) — A design-lead process for building web UI with a distinct look instead of the generated-page defaults. · [page](https://godofskills.com/skills/anthropic-frontend-design)
- [**Anthropic Canvas Design**](creative/anthropic-canvas-design/SKILL.md) — Create posters and static art by writing a short visual philosophy first, then expressing it as a PNG or PDF. · [page](https://godofskills.com/skills/anthropic-canvas-design)
- [**Anthropic Theme Factory**](creative/anthropic-theme-factory/SKILL.md) — Apply one of ten preset color and font themes to slides, docs or HTML pages, or generate a new theme. · [page](https://godofskills.com/skills/anthropic-theme-factory)
- [**Knowledge Work: Accessibility Review**](creative/kwp-design-accessibility-review/SKILL.md) — Audit a design or page against WCAG 2.1 AA: contrast, keyboard access, touch targets and screen readers. · [page](https://godofskills.com/skills/kwp-design-accessibility-review)
- [**Diagram Design**](creative/diagram-design/SKILL.md) — Create branded, self-contained HTML and SVG diagrams across 45 visual types with an editorial design system. · [page](https://godofskills.com/skills/diagram-design)
- [**Taste Skill**](creative/taste-skill/SKILL.md) — Anti-slop frontend art direction: deals researched directions, enforces house rules and runs a look-and-fix loop. · [page](https://godofskills.com/skills/taste-skill)
- [**Anthropic Algorithmic Art**](creative/anthropic-algorithmic-art/SKILL.md) — Generate p5.js flow fields and particle art with seeded randomness and an interactive parameter viewer. · [page](https://godofskills.com/skills/anthropic-algorithmic-art)
- [**Figma MCP Server**](creative/figma-mcp/SKILL.md) — Figma's own hosted server: hand an agent a frame link and it reads the real layout, variables and components. · [page](https://godofskills.com/mcp-servers/figma-mcp)
- [**Framelink MCP for Figma**](creative/framelink-figma-mcp/SKILL.md) — A community server that reads Figma files through the REST API and trims them to the layout data a model needs. · [page](https://godofskills.com/mcp-servers/framelink-figma-mcp)

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
