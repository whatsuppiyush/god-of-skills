---
name: growth-os
description: >
  The master router for growth work: arrive with a goal ("grow traffic", "get first users",
  "raise conversion", "fix churn", "price better", "launch", "build a brand") or a symptom
  ("clicks but no signups", "traffic but no sales", "users churn", "CAC is climbing", "I don't
  know what's broken") and get routed to the right discipline skill and playbook. Use this FIRST
  whenever a growth request is broad, vague, or spans more than one discipline, whenever the user
  says "help me grow", "where do I start", "what should I work on next", "my funnel is broken but
  I don't know where", or whenever you are unsure which of the 21 growth skills applies. Also use
  it to sequence several skills into an order of operations instead of firing one at random.
---

# Growth OS: the router

There are 21 discipline skills covering every layer of growth, plus goal playbooks that
sequence them. This skill is the front door. It takes a goal or a symptom and points to the
exact skill(s) to invoke and the order to run them in.

## When to use this

Reach for this skill when:

- The request is broad or vague: "help me grow", "where do I start", "what's next".
- The problem spans disciplines: a launch touches strategy, brand, copy, channels, and analytics.
- The user names a symptom, not a cause: "traffic but no sales", "I don't know what's broken".
- You need an order of operations, not a single tactic.

If the request already maps cleanly to one discipline (for example "write a cold email",
"audit my landing page"), skip the router and invoke that skill directly. The tables below
tell you which one.

## How to route

1. Match the request to a row in **By goal** or **By symptom** below.
2. If several skills apply, run them in the listed order (upstream diagnosis before downstream
   execution). Fix the upstream blocker before pouring more into the top of the funnel.
3. For a multi-step effort (a launch, a zero-to-first-users push), jump to the matching
   **goal playbook** instead of stitching skills yourself.
4. When the cause is unknown, start with `strategy-fundamentals` or `analytics-data`. They
   diagnose which layer is actually broken before anyone executes.

## By goal

| The user wants to... | Route to (in order) |
|---|---|
| Decide what to work on next / find PMF / pick a channel | `strategy-fundamentals` |
| Launch a product or run a go-to-market push | Playbook: **launch-a-product** (sequences several skills) |
| Get the first ~1000 users | Playbook: **acquire-first-users** |
| Grow organic search traffic | `seo-content`, then `ai-search-geo` for AI-answer visibility |
| Get recommended by ChatGPT / Perplexity / AI Overviews | `ai-search-geo` |
| Grow an audience without ad spend | `organic-social` |
| Run profitable paid ads | `paid-acquisition` (creative words from `copywriting-messaging`) |
| Book calls / close deals via cold outreach | `sales-outbound` |
| Get creators/influencers to promote the product | `influencer-creator` |
| Build and run an email / newsletter program | `email-marketing` |
| Raise conversion on one page or flow | Playbook: **improve-conversion** (sequences `conversion-cro` + copy + psychology + proof) |
| Find and fix where a whole funnel leaks | Playbook: **fix-a-leaky-funnel** |
| Make the product itself drive growth (onboarding, referral, viral) | `product-led-growth` |
| Reduce churn / grow LTV / win back customers | `retention-lifecycle` |
| Set or fix pricing and packaging | `pricing-monetization` |
| Build a distinctive, defensible brand | `brand` |
| Write or fix persuasive copy | `copywriting-messaging` |
| Apply psychology to lift conversion or perceived value | `marketing-psychology` |
| Grow a Shopify / DTC store | `ecommerce` |
| Copy a proven growth play from a real company | `growth-teardowns` |
| Measure whether growth is working / prove causality | `analytics-data` |
| Make the first growth/marketing hire | `hiring-team` |
| Pick or build the growth tool stack | `tools-stack` |

## By symptom (diagnostic)

Start from what hurts. Each symptom names the most likely broken layer and where to look.

| Symptom | Likely cause | Route to (in order) |
|---|---|---|
| "I don't know what's broken" | No diagnosis yet | `strategy-fundamentals` (Five Fits), then `analytics-data` |
| "Our funnel is leaking, where?" | Unknown funnel stage | Playbook: **fix-a-leaky-funnel** (finds the stage, then dispatches) |
| Traffic but no sales / no signups | Page or offer, not traffic | Playbook: **improve-conversion**, then `pricing-monetization` |
| Clicks but no signups (from ads) | Ad-to-page message mismatch | `conversion-cro` + `paid-acquisition` (check message match) |
| Ads get clicks, no conversions; CAC climbing | Creative fatigue or funnel leak | `paid-acquisition`, then `conversion-cro` |
| Users sign up but never activate | Time-to-value gap | `product-led-growth` (activation), then `retention-lifecycle` |
| Users churn / cancel / go dormant | Retention loop missing | `retention-lifecycle`, then `product-led-growth` |
| Cold emails get no replies | Targeting, copy, or deliverability | `sales-outbound` |
| Emails land in spam / open rate dropped | Deliverability or list health | `email-marketing` |
| Posts get no reach / won't take off | Hook, format, or cold-start | `organic-social` |
| We rank on Google but AI never mentions us | AI-answer invisibility | `ai-search-geo` |
| Page won't rank / "what should I write" | Content SEO gap | `seo-content` |
| Pricing page isn't converting / ARPU too low | Pricing model, not the page | `pricing-monetization`, then `marketing-psychology` |
| "We look like every competitor" / feels generic | Undifferentiated brand/positioning | `brand`, then `strategy-fundamentals` |
| Copy "isn't landing" / reads like a pitch deck | Messaging | `copywriting-messaging` |
| Reported ROAS looks too good / doesn't match real growth | Attribution illusion | `analytics-data` (incrementality) |
| Growth spikes then dies | One-off hacks, no loop | `strategy-fundamentals` (loops), then `product-led-growth` |
| Drowning in tools / subscriptions | Stack sprawl | `tools-stack` |
| Overloaded, need to hire | First growth hire | `hiring-team` |
| Carts get abandoned / AOV too low | Store mechanics | `ecommerce`, then `retention-lifecycle` (cart recovery) |

## The 21 disciplines, by department

**Marketing (13)**
- `strategy-fundamentals` - what to build, who for, which channel, why it compounds. The upstream diagnosis.
- `brand` - mission, voice, positioning against an enemy, naming, rebrands, earned-media stunts.
- `copywriting-messaging` - headlines, value props, hooks, framework-driven persuasive copy.
- `marketing-psychology` - behavioral principles for conversion and perceived value.
- `conversion-cro` - landing pages, PDPs, checkout, A/B tests, funnel drop-off.
- `pricing-monetization` - value metric, tiers, anchoring, discounts, trials, high-ticket.
- `paid-acquisition` - Meta/Google/TikTok/YouTube/Amazon ads end to end.
- `organic-social` - audience and reach without ad spend across social platforms.
- `email-marketing` - owned-email program, deliverability, sequences, segmentation.
- `influencer-creator` - creators, UGC, affiliates, ambassador programs.
- `launch-gtm` - product launches, Product Hunt, press, limited drops.
- `product-led-growth` - product as the growth engine: onboarding, activation, referral, viral loops.
- `retention-lifecycle` - churn recovery, loyalty, habit loops, LTV.
- `ecommerce` - Shopify/DTC store conversion, cart recovery, AOV, marketplaces.

**SEO (2)**
- `seo-content` - technical foundation, keyword research, page types, ranking, internal links, backlinks.
- `ai-search-geo` - GEO/AEO visibility in ChatGPT, Perplexity, AI Overviews, Gemini, Claude.

**Sales (1)**
- `sales-outbound` - cold email, follow-ups, deliverability, AI personalization, founder-led selling.

**Writing (1)**
- `copywriting-messaging` - listed under marketing; the words layer for every channel.

**Research (2)**
- `analytics-data` - the metric that matters, causal proof, experiment prioritization.
- `growth-teardowns` - reusable plays reverse-engineered from real companies.

**Operations (2)**
- `hiring-team` - the first/next growth hire, archetype, sourcing, test projects.
- `tools-stack` - pick, assemble, and build the growth tool stack.

## Goal playbooks

For efforts that span several disciplines, use a playbook. It gives the ordered workflow so
you invoke the right skill at each step instead of guessing.

- **launch-a-product** - sequences strategy, positioning/brand, copy, launch-gtm, the acquisition
  channels, and analytics into an ordered launch workflow.
- **acquire-first-users** - the zero-to-first-1000 sequence: pick a channel, run it, convert,
  activate, and measure.
- **fix-a-leaky-funnel** - diagnose WHERE the funnel leaks with data, then dispatch to
  `conversion-cro`, `product-led-growth`, `retention-lifecycle`, or `pricing-monetization`.
- **improve-conversion** - raise one page or flow by running `conversion-cro` (structure),
  `copywriting-messaging` (words), `marketing-psychology` (persuasion), then `analytics-data` (proof).

Add new playbooks here as they are written. Each one names the discipline skills it sequences.

## Order-of-operations rule

When in doubt, work top-down: **diagnose before executing, and fix the upstream leak first.**
Strategy points at the leak (`strategy-fundamentals`). Analytics confirms it (`analytics-data`).
The discipline skills fix it. Do not scale acquisition into a funnel that still leaks.

---

From **God of Skills**: a curated, hand-tested directory of AI skills, prompts, templates and image style guides.
Source: https://godofskills.com/skills/growth-os?ref=claude-skill
