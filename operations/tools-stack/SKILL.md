---
name: tools-stack
description: >-
  Pick, assemble, and build the marketing/growth tool stack: AI image & video generators,
  UGC ad production, AI content workflows, keyword/community monitoring, bespoke build-vs-buy
  tooling, and curated founder stacks. Use whenever the user asks "what tool should I use for X",
  "what's the best AI stack", "how do I make UGC ads at scale", "which SaaS do I need", is
  drowning in subscriptions, wants on-brand AI output, wants to build a tool instead of renting
  it, or needs to catch warm leads across Reddit/Twitter/Upwork/Quora. Reach for it before the
  user buys another subscription or opens another AI tool tab.
---

# Tools & Stack

How to choose, assemble, and build the tooling behind a modern growth motion, so you match tools to jobs instead of over-buying and get on-brand output instead of generic AI slop.

## When to use this

- "What tool should I use for [images / video / content / monitoring]?" or "what's the best AI stack?"
- Assembling a first marketing stack, or auditing an existing one for gaps and over-spend.
- Producing AI imagery, video, or UGC ads at volume and struggling with consistency or throughput.
- Getting generic-sounding AI copy and wanting on-brand, human output.
- Paying $50-150/mo for a SaaS that only half-fits, and wondering whether to build your own.
- Wanting to catch warm sales/content opportunities the moment someone describes your problem online.
- A solo or very lean founder deciding what to adopt across GTM, build, ops, and design.

Trigger phrases: "which tool", "best stack", "AI ad tools", "make UGC ads", "build vs buy", "monitor keywords", "founder stack", "too many subscriptions".

## When NOT to use this (reach for instead)

This skill picks and assembles the tools. The strategy for using them lives elsewhere:

- For how to script, structure, and buy the ads the UGC stack produces, use **paid-acquisition**.
- For the organic-social production and posting motion the AI-visual and content tools feed, use **organic-social** / **content-production**.
- For the warm-outreach or community strategy the monitoring stack surfaces signals for, use **outbound** / **community-led-growth**.
- To decide IF paid, content, or community is even your channel before tooling it, use **strategy-fundamentals**.

## How this works (decision path)

1. **Start from the job, not the tool.** Name the specific output (product shots, 200 ad variants/week, on-brand blog drafts, warm leads) and pick the stack that serves it. One tool for everything is the anti-pattern.
2. **Match tool to use case.** Sora/Midjourney/Veo3 each win a different visual job; Arcads/Creatify/MakeUGC cover UGC generation; Syften/Slack/Twitter-advanced-search cover monitoring. See the play group below.
3. **Solve for consistency and volume, not perfection.** Aim for 80-90% of the ideal at a fraction of the cost; hold brand look with a hero anchor + reused style references. Diversity, not raw volume, is the performance variable for ads.
4. **Build vs buy.** If a need is narrow, stable, and expensive to rent, scaffold a bespoke tool with an AI coding assistant (~$10-20/mo of API cost) instead of a $50-150/mo subscription. Automate the plumbing, keep the voice human.
5. **Measure honestly.** For ad-production stacks, judge with holdout/incremental attribution, not platform-reported ROAS.

## The plays

### AI image & video tools
- **Map AI visual tools to use cases + lock brand consistency** (Sora / Midjourney / Veo3 per job; hero anchor + SREF codes; batch 10-20/week at "close enough")

### UGC ad production
- **Build an AI UGC/video-ad production stack** (Arcads/Creatify/MakeUGC generation, optimization, analysis, competitor intel; lo-fi "ugly" variants; diversity over volume)

### AI content workflows
- **Set up a persistent, on-brand AI content workflow** (brand JSON preload, Claude for human voice, parallel model routing so you run as a router not a typist)

### Research & monitoring
- **Stand up a keyword-monitoring and community-research stack** (Slack alerts, Syften, Twitter `min_faves:` search, Earlybrd, free Reddit research tools; act on warm signals fast)

### Bespoke tool building
- **Build your own marketing tools with AI coding assistants** (scope narrow, build in hours, run on API cost, exclude AI writing to keep thinking human)

### Founder stacks (curated references)
- **Beginner marketing stack + adoption sequence** (CDP → traffic → conversion → email → analytics → optimization → scaling, in priority order so you don't over-tool)
- **Solo / AI-native founder stacks** (GTM, build, ops, design-care picks as a curated menu)

## Key numbers & benchmarks

- **Build vs buy:** a bespoke internal tool takes ~4-8 hours to build and runs on ~$10-20/mo of API cost vs $50-150/mo for the SaaS equivalent.
- **AI visuals:** generate 12+ variations, pick one hero anchor, reuse SREF codes for a coherent set; target 80-90% of the ideal rather than perfection.
- **UGC throughput:** ~10 min per Arcads video (4 credits = 4 videos); top operators ship 200+ ads/week (Savannah Sanchez) to 2,000+/mo (Creative Milkshake).
- **Ad performance:** lo-fi "ugly" ads get ~3x the click rate and 3-5x the conversions of polished ones (Barry Hott, $600M+ spend); AI ads only win when they don't look like AI. Diversity, not volume, is the variable.
- **Case lifts cited:** FULLBEAUTY +45% ROAS / +22% conversion / +36% CTR via Advantage+; Lidl +24% CTR via AdSkate.
- **Monitoring signal:** the Twitter `min_faves:200 [keyword]` operator sorted by Latest filters to tweets with proven traction, not every mention.
- **Content routine:** heavy prompts run 10-90s; fire one at a thinking model and work another model during the wait to cut idle time.

---

## Reference library

Every play above, in full.

### Set up an AI content workflow, a persistent project preloaded with your brand JSON and writing samples, Claude for human-sounding drafts, and parallel model routing

## The strategy
Getting on-brand, human-sounding output from AI isn't about better one-off prompts, it's about persistent context (brand data + your real writing) and a working routine that parallelizes model wait times so you operate as a router, not a typist.

## When to use it
Producing recurring on-brand content or ad copy with LLMs, and wanting output that doesn't read as generic AI.

## How to execute (steps)
1. **Preload a persistent project with brand JSON (issue #254):** create a ChatGPT project that stores your brand data as structured JSON so every future ad request auto-references it, no re-pasting context.
2. **Tool for human-sounding output (issue #268):** prefer Claude (Opus 4 / Sonnet 4) over ChatGPT for voice; load a Claude Project with your real writing samples; inject heavy context/POV before drafting.
3. **Route models in parallel (issue #293, Kevin DePopas):** fire a heavy prompt at ChatGPT thinking mode, switch to Claude/Gemini during the 10-90s wait, review, follow up, and stagger, you become "a router/manager" orchestrating models and cutting the context-switch penalty.

## Notes / caveats / examples
- The JSON brand file is the reusable asset, build it once and every content/ad request inherits your positioning, voice, and constraints.
- Loading real writing samples (not just "write in a friendly tone") is what removes the generic-AI smell.

## → Skill conversion note
Strong skill candidate: a "brand context builder" that generates a structured brand JSON + a voice-sample bundle for an LLM project, plus a parallel-routing routine for running multiple models without idle waiting.

### Map AI image/video tools to use cases (Sora / Midjourney / Veo 3) and lock brand-visual consistency with hero anchors and SREF codes

## The strategy
Don't use one AI tool for everything, each excels at a different job. Map tools to use cases, then solve AI's consistency problem (every generation looks different) by anchoring to a "hero" image and reusing style references.

## When to use it
Producing AI-generated brand imagery and video at volume for ads, social, and web.

## How to execute (steps)
1. **Map tool to use case (issue #261):** Sora → product shots / mood; Midjourney V6+ → social / brand loops; Veo 3 → photorealistic spots / B-roll.
2. **Batch for volume (issue #261):** generate 10-20 variations weekly, accept "close enough," and aim for 80-90% of the ideal result at a fraction of the cost/time.
3. **Lock visual consistency (issue #277):** generate 12+ variations, pick a "hero" anchor image, then use Midjourney SREF codes to hold a consistent vibe across a set. Tools: Midjourney, Sora, Google Nano Banana.
4. **Reuse the anchor + SREF** on every new asset so the brand look stays coherent.

## Notes / caveats / examples
- The "80-90%, close enough" mindset is the unlock for volume, chasing perfection on each asset kills throughput.
- SREF codes + a hero anchor are the practical fix for AI image inconsistency at brand scale.

## → Skill conversion note
Strong skill candidate: an "AI visual tool router" that recommends Sora/Midjourney/Veo3 per asset type and generates a consistency workflow (hero anchor + SREF) for a brand.

### Beginner marketing tool stack and adoption sequence

## The strategy
A curated marketing stack by category, adopted in priority order so beginners don't over-tool. Start with a data foundation and traffic tools, then layer conversion, analytics, optimization, and scaling tools as needs appear.

## When to use it
Choosing a first marketing stack, or auditing an existing one for gaps/over-spend.

## How to execute (steps), adoption sequence
1. Foundation (CDP): mParticle for D2C, Segment for B2B.
2. Traffic generation: Ahrefs (keyword + backlink research) → Clearscope (optimize content for rankings) → Google Ads / Facebook Ads. (Semrush = Ahrefs alternative, stronger on paid.)
3. Conversion: Unbounce (most flexible landing pages, dynamic text replacement + A/B) or Instapage (large template library); Webflow for full sites.
4. Lead capture / email: Customer IO (D2C behavioral automation); HubSpot (all-in-one); Iterable (mid-size, 100k+ list); SendGrid (deliverability/transactional); Mixmax (sales sequences).
5. Analytics: Google Analytics (free baseline) → Amplitude (user-level, generous free tier) → Mixpanel / Heap (auto-capture) as needed.
6. Optimization: Google Optimize (free A/B) → Optimizely (advanced) plus Hotjar (heatmaps/recordings) → FullStory (deeper sessions).
7. Scaling & glue: Buffer → Hootsuite (social scheduling); Intercom (live chat/engagement) or Drift (sales-heavy); Clearbit / People Data Labs (enrichment); Singular / Branch / Rockerbox (attribution); Zapier (connect tools without native integrations).

## Notes / caveats / examples
- Ad management: AdEspresso (FB/IG/Google in one dashboard), Smartly (Snap/Pinterest automation + AI creative).
- Supporting: Stripe/Braintree/Bill.com/Affirm (payments), Airtable/Notion/ClickUp (ops; "ClickUp is half the price of Asana"), Figma/Canva (design).

## → Skill conversion note
A "stack recommender" skill: given company type (B2B/D2C), stage, and budget, output a prioritized tool list per category in the correct adoption order.

### Build your own bespoke marketing tools with AI coding assistants in hours for $10-20/mo instead of paying $50-150/mo for SaaS

## The strategy
AI coding assistants have made it cheap to build the exact internal marketing tool you need, a custom dashboard, tracker, or list-builder, in a few hours, running on API costs rather than a recurring SaaS subscription that only partly fits your workflow.

## When to use it
When an off-the-shelf marketing SaaS is expensive, bloated, or doesn't quite fit, and your need is specific and stable enough to build once.

## How to execute (steps)
1. **Scope a narrow, specific tool** you'd otherwise rent, a daily engagement dashboard, trend tracker, content-pillar rotation, or warm-outreach list builder.
2. **Build it with an AI coding assistant** in ~4-8 hours; run it on ~$10-20/mo of API cost instead of $50-150/mo SaaS.
3. **Wire it to your real signals:** e.g. build warm-outreach lists directly from engagement data you already have.
4. **Deliberately exclude AI writing** from the tool to keep original thinking human, automate the plumbing, not the voice.

## Notes / caveats / examples
- A marketer built "Content Machine 2000" for daily engagement dashboards, trend tracking, content-pillar rotation, and warm-outreach lists from engagement signals, for a fraction of the equivalent SaaS bill.
- Best for stable, well-understood needs; don't rebuild fast-moving tools where a vendor's ongoing updates matter.

## → Skill conversion note
Strong skill candidate: a "build-vs-buy advisor" that estimates the build effort + API cost of a bespoke marketing tool vs the SaaS alternative and scaffolds a spec for the AI coding assistant.

### Reference tool stacks for the solo/AI-native founder, GTM, build, ops, and design-care picks

## The strategy
The lean/solo AI-native operating model (see the strategy-fundamentals card) runs on a specific, small set of tools that cover go-to-market, building, operations, support, and design without a team. Use these as a curated starting stack.

## When to use it
Assembling the toolset for a solo founder or very lean team; deciding what to adopt across GTM, build, ops, and design.

## The stacks
1. **Solo-founder stack (issue #328):**
   - **GTM:** Clay, Taplio, Beehiiv, Instantly, Carrd ($19/yr).
   - **Build:** Cursor, Claude Code, Bolt, v0, ShipFast.
   - **Ops:** Mercury, Puzzle, Fondo, n8n, Clerky.
   - **Support:** Plain.
2. **Design-care stack (issue #332):**
   - **Builders:** Cursor, Claude Code, Lovable, Replit Agent, v0.
   - **Polish / motion:** Jitter, Unicorn Studio, transitions.dev, Remotion.
   - **Design-skill MCPs:** Tasteskill, Impeccable, Emil Design Eng, Mobbin MCP, Figma MCP.
   - **Reference libs:** Mobbin, Refero, bentogrids.com, cta.gallery.

## Notes / caveats / examples
- Design-care tooling has the best ROI in low-design B2B verticals (HR tech, compliance, healthcare admin) where competitors look generic.
- Treat these as a curated menu, not a mandate, adopt what maps to your actual bottleneck.

## → Skill conversion note
Lower skill value (a curated tool directory); could feed a "founder stack recommender" that suggests GTM/build/ops/design tools by stage and budget.

### Stand up a keyword-monitoring and community-research stack to catch warm entry points across Reddit, Twitter, Upwork, and Quora

## The strategy
The warmest sales and content opportunities are people actively describing your problem right now, scattered across forums and social. A monitoring stack surfaces those moments automatically so you can enter the conversation while intent is high.

## When to use it
Doing outbound/warm outreach, community-led growth, or content research where timing matters.

## How to execute (steps)
1. **Set keyword alerts across platforms (issue #137):**
   - **Slack keyword alerts** for your own communities.
   - **Earlybrd.io** for relevant Upwork job posts.
   - **Twitter advanced search**, `min_faves:200 [keyword]` sorted by Latest, to find high-engagement, on-topic tweets.
   - **Syften** to monitor Reddit / Quora / Product Hunt / Upwork in one feed.
2. **Add free Reddit research tools (issue #052):** Subreddit Stats (trending communities), Map of Reddit (where your audience clusters), Reddit Saved (searchable saved archive).
3. **Act on the warm signal fast**, reply, help, or reach out while the person is still in the problem.

## Notes / caveats / examples
- The Twitter `min_faves:` operator filters to tweets with proven traction, not every mention, higher signal.
- Map of Reddit / Subreddit Stats tell you *where* your audience is before you invest in a community.

## → Skill conversion note
Strong skill candidate: a "warm-signal monitor" config generator that sets up keyword alerts per platform (Slack/Syften/Twitter/Earlybrd) for a given product and surfaces high-intent posts to act on.

### Build an AI UGC/video-ad production stack, Arcads/Creatify/MakeUGC for creative, plus optimization and competitor-intel tools, and win on diversity, not volume

## The strategy
AI now lets a small team ship hundreds of ad variations a week. The winning move isn't raw volume, it's creative diversity produced by a stack that spans generation, optimization, analysis, and competitor intel, with lo-fi "ugly" ads deliberately in the mix.

## When to use it
Scaling paid-social creative production (UGC-style video ads) on a lean team.

## How to execute (steps)
1. **Generation (issues #314, #316):** Arcads, Creatify, MakeUGC ($49/mo), Pencil; plus Motion, VidMob, Celtra (18k creatives in 3-5 days), Foreplay, ChatCut, Seedance 2.0, Kling, Veo 3.
2. **Arcads workflow (issue #289):** emotion tags in brackets `[frustrated]` `[excited]`, avatars matched to demo (30-45), newer Audio-driven/Omni-human models, 4-5 variants + B-roll, ~10 min per video (4 credits = 4 videos, gesture clips half a credit).
3. **Optimization / analysis:** AdAmigo ($99/mo autonomous buyer), AdStellar (60-sec builds); Segwise, Replai, Neurons.
4. **Competitor intel:** Panoramata (4M+ ads), Foreplay.
5. **Source cheap real assets (issue #058):** Soona (virtual product shoots, ~2wk), Social Motion Packs (stock video), Billo (UGC, creators apply); Pencil sourced full brand assets for $343.
6. **AI video pipeline for fashion (issue #102):** shoot → DALL-E outfit inpainting → EbSynth frame consistency → DAIN smooth transitions/slow-mo. Use NVIDIA Broadcast eye-contact correction (issue #104) on testimonial/sales videos.

## Notes / caveats / examples
- Benchmarks: Savannah Sanchez ships 200+ ads/week; Creative Milkshake 2,000+/mo. Lo-fi "ugly" ads get ~3x click rate and 3-5x conversions (Barry Hott, $600M+ spend). AI ads only win when they don't look like AI.
- Cases: FULLBEAUTY +45% ROAS / +22% conv / +36% CTR via Advantage+; Lidl +24% CTR via AdSkate. **Diversity, not raw volume, is the performance variable**, measure with holdout/incremental attribution, not platform ROAS.

## → Skill conversion note
Strong skill candidate: a "UGC ad stack planner" that assembles a generation → optimization → analysis → competitor-intel toolset to a budget and enforces a diversity-over-volume production plan (including lo-fi variants).

---

From **God of Skills**: a curated, hand-tested directory of AI skills, prompts, templates and image style guides.
Source: https://godofskills.com/skills/tools-stack?ref=claude-skill
