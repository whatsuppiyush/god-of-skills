---
name: paid-acquisition
description: >
  Run profitable paid advertising end to end: strategy, creative, targeting, testing, and
  measurement across Meta/Facebook, Google, TikTok, YouTube, Amazon, and ChatGPT ads. Use
  whenever the user is running or planning paid ads, writing or briefing ad creative, or asks
  about CAC, ROAS, CPA, CPM, CTR, hooks, thumb-stop rate, lookalikes, retargeting, ad fatigue,
  campaign structure, bid strategy, or attribution. Reach for it on symptoms too: "my ads get
  clicks but no conversions", "CAC is climbing", "creative is fatiguing", "which channel should
  I run", "how do I scale spend without wrecking CPA", "my hook isn't stopping the scroll", or
  "Shopify + Meta tracking looks off". Covers new-account setup, live-account audits, creative
  volume systems, and finance-first scaling.
---

# Paid acquisition

A complete system for buying customers profitably. It treats paid as finance-first (model the
economics before touching an ad manager), makes creative the primary lever, and gives you the
per-channel setup, targeting, testing, and measurement plays to run and scale spend.

## When to use this

Reach for this whenever paid advertising is in play:

- **Setting up** a new ad account (Meta, Google, TikTok, YouTube, Amazon, ChatGPT) or cleaning
  up a messy one.
- **Writing or briefing creative:** ad copy, hooks, statics, video, UGC, swipe files.
- **Choosing or configuring targeting:** interests, custom audiences, lookalikes, retargeting.
- **Auditing a live account:** what to pause, keep, or scale; diagnosing rising CAC or fatigue.
- **Scaling spend** without resetting the algorithm or blowing up CPA.
- **Fixing measurement:** broken attribution, incrementality, pipeline tracking.

Trigger phrases: "run Facebook/Google/TikTok ads", "write ad copy", "my ROAS dropped", "ads get
clicks but don't convert", "creative is fatiguing", "which channel", "scale my ads", "build a
lookalike", "set up retargeting", "why is my CAC up", "my hook isn't working".

## When NOT to use this (reach for instead)

- **The words inside the ad** (headlines, angles, voice, the core message): use
  `copywriting-messaging`. This skill tells you what job the copy must do and the frameworks to
  structure it; the sibling skill sharpens the language itself.
- **Whether paid is even your channel:** use `strategy-fundamentals`. Deciding if paid fits your
  economics and stage comes before any campaign build.
- **What happens after the click** (landing pages, checkout, offer, on-page conversion): use
  `conversion-cro`. Ads deliver traffic; CRO converts it.
- **Measuring a change or building the analytics itself** (attribution models, dashboards,
  experiment design): use `analytics-data`. This skill points at the fix; the sibling builds the
  measurement.

## How this works (decision path)

Work top-down. Skipping the strategy layer is the most common way to waste budget.

1. **Model the economics first.** Before any campaign, know CAC ceiling, LTV, margin, and payback. If the math does not close, no creative saves
   it.
2. **Pick and sequence the channel.** Max out your best channel before adding another; test new
   channels one at a time. Match the channel to
   the product (visual/impulse → TikTok/Meta; high-intent search → Google; awareness → YouTube).
3. **Structure the account** for the channel (see the per-channel sub-groups below), sized so each
   test reaches a valid sample.
4. **Diagnose the bottleneck, then build creative.** Find where the funnel actually leaks (funnel /
   product / economics / targeting / messaging), give each ad one job, then produce volume of
   *distinct* concepts → the **Ad creative** plays.
5. **Match message to awareness and channel.** How much you explain depends on audience awareness
   and whether targeting is intent-based or profile-based.
6. **Test, read the numbers, cull, scale.** Judge on CPA/ROAS not CTR, wait for a sample, cut
   losers, manage fatigue, and scale in steps → the **Strategy, testing & measurement** plays.
7. **Fix the signal.** If attribution is broken (especially Shopify + Meta), the algorithm cannot
   optimize.

Two symptom shortcuts:
- **"Clicks but no conversions"** → it is usually post-click (offer/landing → `conversion-cro`) or
  a targeting/awareness mismatch (`ladder-of-product-awareness-targeting.md`), not the ad metric.
  Judge on CPA, not CTR (`references/ad-metrics-and-optimization.md`).
- **"Results are fading"** → separate hook rate from hold rate on video
  (`references/video-ad-diagnostics-and-timing.md`) and check for creative fatigue and staleness
  (`references/ad-metrics-and-optimization.md`).

## The plays

### Ad creative

The biggest performance lever. Great creative delivers up to a 12x ROI multiple, so spend your
effort here, not on bid tweaking.

- **Show the product literally and match the feed** (4 design rules: depict in use, label it, be
  purposeful, match the platform aesthetic)
- **Write copy with four frameworks + survey-mined language** (Problem-Solution-Benefit,
  differentiation, pressing question, audience-matched value props; front-load, hook-close)
- **Match message depth to awareness** (Ladder of Product Awareness; intent vs profile platforms)
- **Pick creative with "one ad, one job"** (diagnose the bottleneck, choose hook + format by funnel
  temperature and category)
- **Stop the scroll with hook devices** (UI-mimicry, phone-ception, text-interrupt, fake podcast,
  format-violating novelty; 1-3s beat)
- **Apply study-backed behavioral rules** (metaphor open, first-person POV, gaze, pacing, price
  placement, dark mode; each with a measured lift)
- **Win trust with authentic, native, "ugly" ads** (Pratfall effect, competitor praise, neutral
  third-party pages, soft-sell then hard-sell)
- **Diagnose and re-edit video** (thumb-stop rate, dropoff-cliff editing, 1/3/5-second timing,
  hook vs hold)
- **Run an AI-accelerated creative pipeline** (Research → Storyboard → Production → Test; keep 20%
  of spend on fresh ads)
- **Run creative as a supply chain** (volume commitment, count distinct ideas not variants, feed
  organic winners into paid)
- **Build a swipe file + AI production workflow** (ad libraries, JSON brand file, AI-video)

### Meta / Facebook

- **Structure the account and budget** (Campaign per product → Ad set per value-prop×audience → Ad
  per copy×image; 3-5k impression floor; 15% experiment / 20% retargeting reserves)
- **Restructure creative-first for the ML/Advantage+ era** (collapse to a 2-campaign architecture,
  80/20 creative-to-media effort, respect GEM ad-dedup, 4 placement cuts)
- **Layer targeting** (demographics → niche interests → behaviors → custom audiences → lookalikes;
  start broad, then exclude weak segments; post-ATT playbook)
- **Build prospecting audiences** (geo tiers, age 22-50 default, niche-not-broad interests,
  lookalike seed size/percent, 3-day + customer exclusions)
- **Micro-target with auto-synced behavioral personas** (CDP/Segment event, trait, and computed
  audiences; split lookalikes by behavior)
- **Sharpen lookalikes** (negative lookalikes to exclude bad customers, high-intent-only seeds,
  partner pixel expansion)
- **Set up retargeting** (four custom audiences, include recent site + video engagers, exclude
  just-visited + converted, fresh complementary creative)
- **Advanced retargeting** (Engagement objective to dodge cost inflation, widen intent signals,
  channel arbitrage, short warm copy)

### Google

- **Pick the campaign type** (Search, Display, Shopping, Video, App, Local, Smart, Performance Max,
  Discovery; goal → type → format)
- **Scale spend without wrecking CAC** (tROAS→tCPA to unlock volume, brand/non-brand split,
  competitor keywords, geo-tiers, 15-20% budget steps, pair PMax with Search)
- **Run Display as an awareness/remarketing complement** (formats, sizes, layered targeting, 80/20
  split, cold-vs-warm creative, measure downstream)

### TikTok

- **Set up the account from scratch** (business account + pixel, conversion events, Custom Mode,
  audiences, campaign → ad group → ad)
- **Target broad and let creative work** (broad targeting, learning-phase math, starting-budget
  formula, benchmarks, product-channel-fit checklist)
- **Brief and produce creative** (hook rules, UGC rationale, 8 swipeable ad formulas, specs)
- **Run the ongoing loop** (3-campaign structure, creative-testing kill/scale rules, controlled
  scaling, retargeting tactics)

### YouTube, Amazon & emerging channels

- **Run YouTube ads** (pick format by goal, layer audience + content targeting, build native
  sound-on video, front-load the hook)
- **Estimate and lower YouTube cost** (CPV ranges, format→bidding-model map, four cost-down levers)
- **Run Amazon PPC with the Inch Up Method** (budget by revenue, start bids low, target-bid CVR
  formula)
- **Treat ChatGPT ads as an early low-competition channel** (be the single recommendation,
  prompt-as-targeting thesis)
- **Launch ChatGPT ads for real** (Context Hints as Persona+Intent+Scope scenarios, minimum-viable
  30-day test, pixel + Conversions API day one)

### Strategy, testing & measurement

- **Run paid finance-first** (model economics → architect the engine → channel mix mapped to P&L →
  scale to pipeline not clicks)
- **Select and sequence channels** (max out the best first, test sequentially with $3-5k, judge on
  CPA/ROAS not cheap CPM, route by intent)
- **Optimize live ads** (wait for a sample, judge CPA over CTR, cut weak siblings, manage fatigue,
  test one variable, always make a new ad)
- **Fix attribution and pick the measurement stack** (repair Shopify+Meta signal loss via a proper
  CAPI path, add incrementality / creative / LP / B2B tools)

## Key numbers & benchmarks

Portable rules of thumb. Treat single-study lifts as ranked hypotheses to test on your own account,
strongest-first, not as laws.

**Samples & thresholds**
- Don't judge an ad until ~3,000 Reach (3,000-5,000 impressions); budget each ad set to clear that
  floor.
- Cut ads whose CTR runs 30-40% below their siblings; kill an ad set when all its ads underperform.
- Ad fatigue: sharply cap frequency short-term, or pause the ad set ~5 weeks then resume.
- Keep 5 or more high-performing ads live per ad set; a 25% swing in CTR can decide viability.

**Structure & budget reserves**
- Reserve ~15% of budget for bi-weekly experiments and ~20% for retargeting; keep ~20% of spend on
  fresh creative always.
- Scale budgets in 15-20% steps (Google) or up to ~25%/week (TikTok) so you don't reset learning.
- A 2-campaign Meta restructure has driven ~32% CPA drops; Meta ML dedupes visually-similar
  creatives, so test 2-3 genuinely different variations per concept, not 50 near-duplicates.

**Creative & video**
- Hook window: the first 1-3 seconds decide watch-through; ~70% of feed video is watched muted, so
  the first-second visual and on-screen text carry it.
- Thumb-stop (hook) rate = 3-Second Video Plays ÷ Impressions; under 10% means remake the hook.
- Cost per result should sit near ~1/3 of LTV. 1/3/5-second video framework: stop the scroll (1s),
  state product/problem (3s), clarity + motivation (5s).
- ≤3 claims per ad; slow pacing for benefit ads, fast for price ads; put price below the product;
  vertical beats horizontal on mobile.
- Authenticity lifts: competitor-praise ad 5.4% CTR vs 3.3% self-promo vs 1.8% third-party; a
  drawback-flagging (Pratfall) ad hit 4x CTR at 4x cheaper CPC.

**Channel benchmarks**
- **Meta:** iOS/ATT opt-in averages ~26%; go broad only with 1,000+ recorded conversions; lookalike
  seed 1,000-5,000 from the most down-funnel event; interest data is ~30% inaccurate.
- **Google:** paid takes ~65% of clicks on high-commercial searches; Display CTR ~0.35%,
  conversion <1%, CPC usually under $1 (high-CPC niches average above $11). A disciplined scale run
  drove ~8x spend growth ($62k → $493k/mo) within ~20% of baseline CPA.
- **TikTok:** CPM $1-5 (~1/10th of Facebook), CPC $0.10-0.20, ecommerce CPA $1-4, blended ROAS
  target 2-4x; needs 50 conversion events/week to exit learning; starting daily budget =
  (target CPA × 50) ÷ 7. UGC is ~9.8x more impactful than influencer content. Best fit: DTC under
  ~$150 AOV and mobile apps.
- **YouTube:** ~$0.10-$0.30 per view/click; cheaper than Search but converts slower (value is
  long-term brand + view-through). Lower CPV with higher quality score, narrower targeting,
  skippable formats, and remarketing.
- **Amazon:** budget ~10% of Amazon revenue to PPC; gather 100+ clicks/keyword before judging;
  target bid = (AOV × CVR) ÷ (1 / target ACOS), e.g. $12 × 10% ÷ (1/0.30) = 36¢.
- **ChatGPT ads:** self-serve at ads.openai.com; starting CPC ~$3-5; write like a knowledgeable
  colleague, not an interruption; run a $50-100/day, 30-day, learning-first test (start bid ~$5,
  not the $3 floor).

**Measurement**
- Shopify's native Meta integration can omit click ID and browser ID, silently throttling
  optimization; fixing the CAPI signal is often the single highest-ROI change on an ecom account.
- Judge on CPA and ROAS (site metrics), not CTR or cheap CPM (ad metrics); wire measurement to
  pipeline, not clicks, and add post-purchase "how did you hear about us?" surveys where attribution
  windows miss view-through (common on YouTube and TikTok).

---

## Reference library

Every play above, in full.

### Write high-converting ad copy using four repeatable frameworks plus a survey-driven value-prop process

## The strategy
Ad copy is engineered, not improvised. Start from real customer language (surveys), turn each value prop and objection into a one-sentence pitch, then structure the copy with one of four proven frameworks. Front-load what the product is, end on a hook, and keep testing to beat your best line, because a swing of ~25% in clickthrough can decide whether paid acquisition is viable at all.

## When to use it
- Writing or refreshing the primary text, headline, and CTA for Meta / Google / paid social ads.
- You have a product but weak, vague, or generic ad copy that isn't converting.
- You need multiple copy angles to feed a creative test.

## How to execute (steps)
1. **Mine customer language via survey.** Ask: how would you describe this product to a friend? What nearly stopped you buying? Which competitors did you consider? Rank the benefits by importance.
2. **Turn every value prop and every objection into a one-sentence pitch.** Each claim must be specific, no vague benefits.
3. **Pick a copy framework:**
   - **Problem, Solution, Benefit**, name the problem, give the solution, spell out the benefit (order is flexible).
   - **Highlight differentiation**, lead with a unique claim (only, biggest, cheapest, fastest, highest-quality, patented), then support it.
   - **Ask a pressing question**, avoid yes/no and "I don't care" questions; target curiosity ("How well does your site rank in search engines?").
   - **Match value props to audience subsets**, segment by demographic/behavior and tailor the appeal (cost / powerful / simple / fast / quality), e.g. "affordable [quality] on a student's budget."
4. **Reorder words so the product explanation comes first**, readers skim the first words. Good: "Looking to rent retail space? Rent locations by day, week, or month." Bad: leading with "Rent by day, week, or month…"
5. **End with a hook**, either make them curious ("Click to see how little we charge to redesign your website") or offer inarguable value ("We're 10x cheaper than your current option. No reason not to switch").
6. **Write the CTA with an action verb matched to funnel stage**, Watch, See, Browse, Play, Sign Up. Avoid "Buy Now" for cold audiences; point to the next step, not the final conversion.
7. **Add social proof copy**, customer count ("Over 5,000 dog lovers rely on us"), marquee logos, app-store rating, or a press quote.
8. **Test and iterate**, run the strongest variants, pause losers, always try to beat your best ad.

## Notes / caveats / examples
- Common failure modes: too little emotional intensity ("twist the knife"), disjointed sentences, vague value props, needless words.
- Benchmark: "Just a 25% difference in clickthrough can make or break paid acquisition for many companies."
- CTA verb examples map to the offer: "Watch" (product in action), "Browse" (inventory), "Play" (first level of a game).

## → Skill conversion note
Becomes a `write-ad-copy` skill: input = product + survey answers/value props + framework choice; output = 3-5 ad variants (primary text, headline, CTA) each front-loaded and hook-closed, with a specificity/emotion self-check.

### Design paid-ad creative that literally shows the product in action and belongs in the feed

## The strategy
Scrolling users decode nothing, they skim. So the creative has to make what you're selling obvious at a glance and still feel native to the channel it runs on. Four design rules force the creative to depict the product in use, label itself, be purposeful with every asset, and match the surrounding aesthetic.

## When to use it
- Briefing or reviewing image/video ad creative before it ships.
- Auditing why an ad with good copy still gets glossed over.
- Building a creative brief for a designer or an AI image tool.

## How to execute (steps)
1. **Rule 1, Literally depict the product in action.**
   - Software → clean dashboard screenshot, not abstract vectors.
   - Service → show it being performed (dog walker walking a dog, not a happy dog + leash).
   - Physical good → show it in use plus a close-up. Don't make people guess what's for sale.
2. **Rule 2, Say what the product is.** Overlay text describing it so ambiguous imagery (a group at dinner) can't be misread. Assume readers decode nothing by default.
3. **Rule 3, Be purposeful.** Every asset, person, product, logo, must depict the product in action or a specific value. Cut the anonymous businessperson smiling at a laptop.
4. **Rule 4, Match the surrounding aesthetic.** Design inside the real channel context:
   - Facebook: screenshot the Newsfeed while designing; match organic story format.
   - Instagram: users see wildly varied content, so it's harder to accidentally stand out, be deliberate.
   - Pinterest: use close-ups of the subject (a plate of steak) rather than a celebrity chef holding a plate.
   - Balance bold imagery with belonging, "content that stands out is glossed over."

## Notes / caveats / examples
- The through-line is anti-abstraction: concrete depiction beats mood/lifestyle imagery for performance ads.
- "Matching aesthetics" is per-platform, the same static can win on one feed and vanish in another.

## → Skill conversion note
Becomes a `brief-ad-creative` skill: input = product type + channel; output = a creative brief enforcing the 4 rules (depict-in-use shot list, overlay text, asset-purpose checklist, channel-native styling notes) ready for a designer or image model.

### Optimize live ads by reading CPA over CTR, cutting weak siblings, and managing ad fatigue

## The strategy
Once ads are running, optimization is a disciplined loop: wait for a real sample, judge on CPA (a site metric) not CTR (an ad metric), prune underperformers within each set, and treat declining CTR as fatigue to be managed, not something that fixes itself. Change one variable per test and always create a new ad so history is preserved.

## When to use it
- Reviewing a live account to decide what to pause, keep, or scale.
- Diagnosing rising costs or falling engagement on a mature ad set.

## How to execute (steps)
1. **Wait for a sample.** Don't judge an ad until ~3,000 Reach (3,000-5,000 impressions).
2. **Track the right columns** in Ads Manager: Amount Spent, Delivery, Reach, Conversions, Cost per Conversion, Unique Outbound Clicks, CPC, Unique Outbound CTR, Frequency, CPM. For video also watch "Video Watches at 50%" and "Video % Watched."
3. **Judge on CPA, not CTR.** Site metrics trump ad metrics. Use CTR only to spot underperformers *within* an ad set, turn off ads whose CTR is **30-40% below their siblings**. (High CTR + low conversion = poor value; low CTR + high conversion = potentially valuable.)
4. **Run breakdown analysis** after 3,000+ Reach: segment by gender, age, device, region; remove demographics with very bad CTR. (FB won't break down by interest/job/behavior, split those into separate ad sets.)
5. **Kill dead ad sets.** When *all* ads in a set underperform after a sufficient sample, turn the whole set off; don't wait for it to recover.
6. **Manage fatigue** (declining CTR): short-term, sharply lower daily budget to cap frequency; medium-term, pause the ad set ~5 weeks then resume (audience fatigue recovers).
7. **Test cleanly.** Change only one component per test (image OR headline OR copy). Create a *new* ad for each major tweak to keep historical performance data; archive everything.
8. **Refresh constantly.** Keep ≥5 high-performing ads per set; make new ads when value props change, seasons/culture shift, new platforms/units launch, new video is ready, audience awareness rises, or a competitor gets popular (lean into differentiation).

## Notes / caveats / examples
- Rule of thumb: "Always try beating your best ads."
- The 30-40%-below-siblings CTR cut and the ~5-week fatigue pause are the two most concrete thresholds here.

## → Skill conversion note
Becomes an `audit-live-ads` skill: input = an Ads Manager export; output = per-ad verdicts (keep/pause/scale) applying the 3k-Reach floor, CPA-first logic, 30-40% sibling-CTR cut, and fatigue-pause recommendations.

### Build an ad swipe-file stack and produce ads with a JSON brand file + AI-video workflow

## The strategy
Good creative starts as *research* (a swipe file of what already works) and ends as *cheap production* (AI + a codified brand file gets you ~95% of the way). This card pairs the inputs, curated ad libraries and swipe-file tools, with two concrete AI production workflows that turn references into near-finished ads.

## When to use it
- You're staring at a blank creative brief and want proven references, not guesses.
- You want to cut per-ad production cost/time while staying on-brand.
- You need broadcast-adjacent video without an agency budget or timeline.

## How to execute (steps)
1. **Build a swipe-file stack.** Use **Foreplay or Atria** to save/board ads. Mine the **Meta, LinkedIn, and Reddit Ad Libraries** by competitor, and check whether an ad is *still live* as an effectiveness signal. Forward scroll-stopping IG ads into Foreplay to log them.
2. **Curate from named databases.** Adfolio (B2B), Ads of the World, Commarts, The Ad Professor (Twitter/X), Marketing Examples.
3. **Run the 5-step JSON-brand-file workflow** (gets ~95% of the way):
   1. Build a **JSON brand file** (hex codes, fonts, value props, trust signals, tone) using GoFullPage screenshots.
   2. **Meta-prompt** GPT: "How would you prompt yourself to recreate this ad?"
   3. Supply **reference imagery** (from your swipe file).
   4. Generate a **rough draft.**
   5. Hand to a **Fiverr/GetAds junior designer** scoped to "match this layout with our real assets."
4. **Run the AI-video workflow (Kalshi model).** Rough script → shot list via **Claude/Gemini** → generate via **Google Veo 3** → select bests → edit → a broadcast-quality NBA-Finals-grade ad in **2 days for ~$2,000 in AI credits.**

## Notes / caveats / examples
- "Still live" is the cheapest effectiveness signal available, a competitor keeping an ad running for months is a proof point.
- The JSON brand file is reusable across every future generation, build it once.
- AI-video credit costs (~$2K/Kalshi ad) scale with length/quality; it's cheap vs a shoot, not free.

## → Skill conversion note
Becomes an `ad-research-to-draft` pipeline: input = brand URL + competitor list; output = a scraped swipe file (with live/dead flags), a generated JSON brand file, and a rough ad draft + designer/AI-video brief.

### Retarget on the Engagement objective, widen your intent signals, and arbitrage warm audiences across cheap channels

## The strategy
Standard retargeting optimizes to Conversions and targets product-page visitors, which inflates costs because you're bidding against everyone else for the same purchase-biased pool. This card is the *advanced* layer on top of `retargeting-campaign-setup`: change the **objective** to Engagement to dodge that inflation, widen the **intent signals** you retarget beyond product pages, and **arbitrage** warm audiences by acquiring on expensive channels then re-serving on cheap ones.

## When to use it
- Retargeting CPMs/CPAs are climbing and the "Conversions" objective feels overpriced.
- You have rich site behavior (FAQ, pricing, return-policy, search) that you're not yet using as intent.
- You run multi-channel and want to lower the cost of touching the same warm user again.

## How to execute (steps)
1. **Switch the objective to Engagement for content readers.** Retarget with the **Engagement objective (not Conversions)** against people who consumed content, gated by real thresholds, e.g. **20s time-on-page and 50% scroll** (or 20+ sec on intermediate content). This spreads impressions to a less purchase-biased audience and can cut costs.
2. **Expand what counts as intent.** Trigger retargeting on signals *beyond* product pages: **return-policy visits, 3+ FAQ clicks, product-photo clicks, pricing-scroll, and site-search use.** Remarket to these people for months and get progressively more salesy over time.
3. **Add overlooked custom-audience sources.** Build a **365-day custom audience of people who DMed your Instagram** (FB Business Manager → "sent a message to your professional account") and mine the recurring DM questions to write the retargeting copy.
4. **Arbitrage channels.** UTM-tag high-intent users from **expensive** channels (LinkedIn, Google), then re-serve them on **cheap** channels (Twitter/X, Display). B2B variant: run a LinkedIn "website visits" campaign to gated content, pixel *both* platforms, then run a Facebook "conversions" campaign against the LinkedIn non-converters, LinkedIn's targeting precision at Facebook's conversion cost.
5. **Shorten warm copy.** For warm audiences, cut copy hard: a one-line Facebook ad drove **64% more clicks than long-form** for warm audiences in a Brainlabs fashion test. Apply short copy to warm audiences only.

## Notes / caveats / examples
- The Engagement-objective move trades some conversion-optimization signal for cheaper reach, measure downstream CPA, not just CPM.
- Channel arbitrage depends on clean UTM tagging and cross-platform pixels firing on the same user.
- Complements, doesn't replace, the 4-custom-audience + fresh-creative structure in `retargeting-campaign-setup`.

## → Skill conversion note
Becomes a `retargeting-signal-mapper`: input = site event taxonomy + channel list; output = an audience matrix (signal → objective → channel to re-serve on) plus short-copy variants for each warm segment.

### Run an AI-accelerated creative pipeline, research, storyboard, produce, test, with 20% of spend always on fresh ads

## The strategy
Creative is the biggest performance lever, and AI collapses the cost of testing it. This is a four-step system, Research → Storyboard → Production → Test & Scale, that is "human-directed" (humans set angle/story/mood; AI executes). The point is volume of *proven* concepts: test dozens of hooks in days, cut losers fast, and always keep a fresh winner queued for when the current one fatigues.

## When to use it
- Standing up a high-velocity creative testing process.
- You need many on-brand ad variants fast and cheap before committing production budget.

## How to execute (steps)
1. **Research**, analyze data first. Identify concepts already converting in your own campaigns and in similar brands *before* ideating. (some teams use a proprietary model trained on $500M+ ad spend; the transferable move is to mine winners first.)
2. **Storyboard with taste**, set the angle, story, and mood, and write a clear hypothesis per concept. Pursue "big swings instead of safe variations."
3. **Production, human-directed**, humans decide direction; AI tools execute. A representative stack: images (Midjourney, Nano Banana, FLUX, Runway, Kling, Pika, Higgsfield, Figma, Photoshop), video (Runway, Kling, Pika), audio (Suno, ElevenLabs), copy/strategy (Claude), general (fal).
4. **Test & scale**, run several variants of each concept against each other; measure on outcomes (ROAS, CPA, CTR), not opinions; cut underperformers; increase budget on winners. "The moment a winner starts to fade, the next proven one is ready."
5. **Format tactics:**
   - Video: "the first second decides whether anyone watches", test dozens of hooks, then build the full video around the winning hook.
   - Static: generate hundreds of on-brand options modeled on winning formats; test the strongest immediately.
   - UGC: start with AI-generated UGC "that feels like a real recommendation, not an ad"; only pay live creators once the concept proves conversion.
6. **Keep 20% of spend always on fresh ads** (from the Videogen case), and restructure campaigns by LTV tier: high-LTV / scalable / test.

## Notes / caveats / examples
- Economics of the approach: "days, not weeks," "a flop only costs a few hours of work," test dozens of concepts "for the price of one."
- This is a standalone/service page, the tactic (AI-directed creative volume + outcome-based culling + 20% fresh) is real, but the specific "Signal" tool is one vendor's proprietary product.

## → Skill conversion note
Becomes a `creative-testing-pipeline` skill: input = product + past winners; output = a storyboard set (angle/story/mood + hypothesis per concept), a hook list to test, and a test plan that culls on ROAS/CPA and reserves 20% spend for fresh creative.

### Run Amazon PPC with the "Inch Up Method", budget by revenue, start bids low, and set target bids from a CVR formula

## The strategy
Amazon PPC is its own channel with its own math. The "Inch Up Method" is a disciplined bidding approach: start bids deliberately low, gather enough click data per keyword, then raise bids toward a *calculated* target instead of guessing, so ACOS stays controlled while you find profitable keywords.

## When to use it
- You sell on Amazon and want a repeatable Sponsored Products bidding process.
- Your ACOS is volatile or you're overbidding on unproven keywords.
- You need a defensible target-bid number rather than gut feel.

## How to execute (steps)
1. **Budget ~10% of Amazon revenue** to PPC as the starting envelope.
2. **Gather enough data per keyword**, aim for **100+ clicks/keyword/month** before judging it.
3. **Start bids at ~10¢ and inch up.** Begin low and raise gradually toward the target, rather than opening high.
4. **Compute the target bid with the formula:** `target bid = (AOV × CVR) ÷ (1 / target ACOS)`. Example: **$12 × 10% ÷ (1 / 0.30) = 36¢.**
5. **Use tooling** like **Ad Badger** to manage bids/keywords at scale.

## Notes / caveats / examples
- Worked example: AOV $12, CVR 10%, target ACOS 30% → target bid **36¢**.
- The 100-clicks-per-keyword threshold is what makes the CVR in the formula trustworthy, don't compute a target bid off 10 clicks.
- Amazon-specific; the logic (data threshold → formula-driven target bid → inch toward it) transfers to other bid-driven marketplaces.

## → Skill conversion note
Becomes an `amazon-ppc-bid-calculator`: input = AOV, CVR, target ACOS, current revenue; output = the budget envelope, per-keyword click threshold, and the calculated target bid with a low-start ramp schedule.

### Fix broken attribution and pick the right measurement/creative-test stack for scaled paid

## The strategy
Post-iOS, the algorithms only optimize as well as the signal you feed them, and off-the-shelf integrations quietly drop that signal. This card covers two things: repairing the most common signal leak (Shopify's native Meta integration), and a tool stack for incrementality measurement, creative/pricing testing, landing pages, and B2B attribution.

## When to use it
- You run Shopify + Meta and suspect attribution/conversion tracking is underreporting.
- You're scaled enough to need real incrementality (not last-click) and want to know which tools to evaluate.
- You need B2B attribution that ties spend to pipeline.

## How to execute (steps)
1. **Replace Shopify's native Meta integration.** The native Conversions API integration **omits the click ID and browser ID**, degrading match quality. Switch to **CAPI Gateway, a direct Facebook CAPI setup, Popsixle, or Elevar** to send complete signal.
2. **Add incrementality/measurement tools.** Recast, **Haus** (ran a 640-experiment Meta study), Prescient AI, Lifesight, measure true lift instead of platform-reported conversions.
3. **Add creative/pricing test tools.** Motion, Marpipe, **Intelligems** (pricing), Atria.
4. **Add landing-page tools.** Replo, Mutiny, and **match landing pages to buyer stage** (send format+intent to PDP vs landing page).
5. **Add B2B attribution tools.** Dreamdata, HockeyStack, Factors.ai, to reconcile ad spend against pipeline.
6. **Analyze hook rate vs hold rate** on creative as part of the measurement loop (see `video-ad-diagnostics-and-timing`).

## Notes / caveats / examples
- The Shopify CAPI fix is often the single highest-ROI change on an ecom account, missing click/browser IDs silently throttle every campaign's optimization.
- This is a *shortlist to evaluate*, not an endorsement, match tools to account size; incrementality platforms need meaningful spend to be worth it.

## → Skill conversion note
Becomes a `measurement-stack-selector`: input = platform (Shopify/other) + spend + B2B/DTC; output = the attribution fix (CAPI path), a shortlisted tool stack per job (incrementality / creative / pricing / LP / B2B), and a signal-quality checklist.

### Win attention and trust with "ugly" native ads, competitor praise, the Pratfall effect, and neutral third-party pages

## The strategy
Polished, self-promotional ads read as ads and get scrolled past or distrusted. A cluster of tactics all exploit the same lever, **authenticity**, to beat both polish and hype: make ads look organic and low-production, admit flaws and even praise competitors, run them through neutral non-brand pages, and seed real customer engagement. Distinct from `ad-creative-design-rules` (which is about clarity/native fit); this card is about *credibility as a conversion lever*.

## When to use it
- Your ads look professional but convert poorly, or CTR is capped.
- You're in a skeptical/high-consideration category where hype backfires.
- You want reusable creative angles that don't require big production budgets.

## How to execute (steps)
1. **Ship deliberately "ugly" ads.** Phone-shot, unedited, IG-story aesthetic, scribbled post-it copy, fourth-wall breaks, so the ad reads as organic content and stops the scroll. Examples: Surreal's billboard screenshots, Wandering Bear's "dad photo," Nuts.com odd close-ups, birddogs' emoji X-vs-Y, Harry's undercover footage. (Follow Barry Hott for the genre.)
2. **Use the Pratfall effect, flag your own downsides.** Playfully highlight a real drawback. Phil Agnew's Reddit ad that flagged the product's drawbacks got **4x CTR and 4x cheaper CPC** vs a benefits ad.
3. **Praise competitors / surface old negative reviews.** A competitor-*praising* Facebook ad hit **5.4% CTR** vs **3.3%** for self-promo and **1.8%** for third-party. Peloton featured critics who'd called it an "overpriced coat rack" later praising it.
4. **Run ads through a neutral third-party page.** Savannah Sanchez's "Savvy Finds" page "nearly always" beat client-brand pages, a non-brand page reduces bias perception and becomes a reusable agency asset.
5. **Sequence soft-sell → hard-sell.** Open with organic-looking benefit ads (Thermacell lifestyle framing; repurpose top organic posts as paid; Instantly showed 4 competing tools before naming its own). Use influencers for the soft-sell, remarketing for the hard-sell.
6. **Ride cultural memes built for tagging.** Design for shareability, Chirps rode the "Karen" meme and got people tagging friends named Sharon in the comments.
7. **Seed ads with real engagement.** Post-purchase email asks "Do you enjoy this?", *yes* → send them to the ad URL with a coupon to like/comment; *no* → route to a 1-question feedback survey. Real comments make the paid ad look organic.

## Notes / caveats / examples
- Comparative CTR data: competitor-praise 5.4% > self-promo 3.3% > third-party 1.8%; Pratfall ad 4x CTR / 4x cheaper CPC.
- "Ugly" and "flaw-flagging" still need the product obvious in-frame (see `ad-creative-design-rules`), authenticity is a wrapper, not an excuse for unclear creative.
- Competitor praise / neutral pages must stay truthful and comply with platform + ad-disclosure rules.

## → Skill conversion note
Becomes an `authentic-ad-angle-generator`: input = product + top competitor + real drawbacks/reviews; output = a batch of ugly-ad concepts, a Pratfall angle, a competitor-praise script, and a neutral-page name idea.

### Apply study-backed behavioral-science rules to ad creative, metaphor, first-person POV, gaze, pacing, and price placement

## The strategy
Beyond "show the product" (see `ad-creative-design-rules`), a body of research assigns *measured lifts* to specific creative choices. This card collects the highest-signal, study-backed rules you can apply directly in a brief, each with the number attached, plus the three neuroscience pillars every ad should satisfy.

## When to use it
- Briefing designers/editors and you want defensible, tested defaults instead of opinion.
- A/B roadmap planning, pick the highest-lift variables to test first.
- Auditing existing creative against evidence rather than taste.

## How to execute (steps)
1. **Open with metaphor + emotion, close with function.** Metaphorical ads are **24% more likely to be recognized a week later** (Bose "leave the noise behind"). Lead with the metaphor/emotion, then close with functional specs.
2. **Use first-person POV of a hand touching the product.** A viewer-perspective hand *meaningfully* touching the product lifts purchase likelihood **16%**, willingness-to-pay **14%**, and favorability **9.4%**. Use in ad creative, PDPs, and social.
3. **Apply the study-backed micro-rules (with lifts):**
   - AI influencers for tech, humans for cosmetics.
   - Put the **price below the product** (floss felt 9% cheaper; liquor +35.2%).
   - **Slow pacing** for benefit ads (+32.8%); **fast** for price ads (+24.7%).
   - **≤3 claims** per ad; fewer featured benefits win (iPod bundle +36.7%).
   - **Video/GIF for hedonic goods** (coffee maker $43.39 via video vs $29.91 static; hotels 81% vs 52% picked premium).
   - **Vertical > horizontal on mobile** (57% vs 43% completion).
   - **Smaller units** ("180 minutes" > "3 hours"; "52 weeks" > "1 year").
   - **Averted gaze for pleasure** (sun hat +30%); **direct gaze for serious** (petition 75.2% vs 53.8%).
   - **Italics for urgency** (3× clicks); **rounded fonts for pleasure** (games +26%, soda +24%).
4. **Satisfy the three neuroscience pillars.** Every creative must hit: **attention** (familiar + unexpected), **long-term memory** (distinctive + structured), **emotional engagement**, the ad has ~**0.3s** to grab attention.
5. **Design for dark mode.** 90%+ of users prefer it: use patterned/textured backgrounds, non-black/white background colors, frames around screenshots, avoid thin fonts, and A/B test inverted colors.

## Notes / caveats / examples
- These are priors, not laws, the pacing/gaze/price rules depend on whether the ad is a *pleasure* (hedonic) or *serious/utilitarian* pitch. Match the rule to the product's emotional register.
- Lifts come from individual studies; treat them as ranked hypotheses to test on your own account, strongest-first.

## → Skill conversion note
Becomes a `creative-science-checklist`: input = product type (hedonic vs utilitarian) + ad goal (benefit vs price); output = the exact rule set (pacing, gaze, price placement, font, format, claim count) to apply, each tagged with its expected lift.

### Structure paid-social accounts as Campaign → Ad Set → Ad and budget for statistically valid tests

## The strategy
A clean three-tier account structure (campaign per product, ad set per value-prop×audience, ad per copy×image) keeps tests isolated and readable. Fund each ad set enough to reach a stable sample, carve out fixed slices of budget for experiments and retargeting, and only scale spend once CPC/CPA hold steady.

## When to use it
- Setting up a new Meta/paid-social account or cleaning up a messy one.
- Deciding how to split budget across products, audiences, and tests.

## How to execute (steps)
1. **Campaign level**, one campaign per product or product category (men's vs. women's jackets; enterprise vs. SMB SaaS).
2. **Ad set level**, one ad set per value-prop × audience-segment combination (young men pitched "quality" vs. middle-aged men pitched "durability").
3. **Ad level**, one ad per unique copy + imagery combination inside the ad set.
4. **Budget each ad set** to reach at least **~3,000-5,000 impressions** so CPC stabilizes before you judge it.
5. **Reserve 15% of total budget** for bi-weekly experiments testing radically different audiences, value props, copy, and imagery.
6. **Reserve ~20% of budget** for retargeting campaigns.
7. **Scale incrementally**, raise budget over time only while CPC/CPA stay consistent and affordable.
8. **Set up prerequisites**, a free Facebook Business Page, and choose the "Conversions" objective (or "App Installs" for mobile).

## Notes / caveats / examples
- Keep ≥5 high-performing ads live per ad set to avoid overexposing the audience.
- Because Facebook can't break down results by interest/job-title/behavior, put each of those into its *own* ad set rather than mixing them.

## → Skill conversion note
Becomes a `plan-ad-account-structure` skill: input = product list + audiences + total budget; output = a campaign/ad-set/ad map with per-ad-set budgets hitting the 3-5k impression floor and the 15%/20% experiment/retargeting reserves pre-allocated.

### Max out your best channel before adding another, test channels sequentially, and stop chasing cheap CPMs

## The strategy
Channel *sprawl* is a common failure: teams spread thin across many platforms and never saturate the one that works. The discipline is the opposite, compute whether your best channel can still profitably absorb more spend, exhaust it, and only then test the next channel one at a time. And stop optimizing to vanity-cheap clicks; expensive clicks often signal a better audience.

## When to use it
- You're deciding whether to add a new paid channel or push harder on the current one.
- You're tempted to copy a competitor's 12-channel spread.
- Someone is buying cheap placements to "save money" and you suspect it's hurting results.

## How to execute (steps)
1. **Max out your best channel first.** Compute **payback period, cash-float capacity, and contribution margin** (which must exceed CAC). One DTC brand abandoned ads at **$60 CAC** when the economics could sustain **$80**, they quit a profitable channel early.
2. **Test channels sequentially, not simultaneously.** Test new channels with **$3-5K budgets**, scale the winner to diminishing returns, *then* add a second. Don't copy Lovable's 12-channel spread.
3. **Stop optimizing to cheap CPM/CPC, judge on CPA and ROAS.** Expensive clicks often signal the platform's confidence in a high-intent audience; cheap traffic frequently isn't paying attention or buying. On Meta, premium placements (feed/Reels/Stories) beat budget ones (Audience Network, right column, Messenger). Audit campaigns for low-quality placements bought to "save money."
4. **Vet sponsorship channels before spending.** For newsletter sponsorships: read the newsletter for **2 weeks**, demand **screenshot-verified** open/click rates, and optimize the placement for **email capture + retargeting** rather than a direct sale.
5. **Route clicks to the right destination by format + intent.** Search/text ads for self-explanatory products → **PDP**; visual (FB/IG) ads for products that need explanation → **landing page.** (Ritual sends FB ads to landing pages and Google search to PDPs.)

## Notes / caveats / examples
- "Max out first" depends on honest unit economics, the $60-vs-$80-CAC example is the whole point: know your sustainable CAC before deciding a channel is tapped.
- This is the tactical companion to `paid-growth-engine-methodology` (the finance-first strategy layer).

## → Skill conversion note
Becomes a `channel-sequencing-advisor`: input = current channel performance + margins/payback; output = a "saturate vs expand" verdict, a sequential test plan with per-channel budgets, and a placement/destination audit.

### Treat ads inside ChatGPT as an early, low-competition paid channel where you can be the only recommendation

## The strategy
Advertising inside ChatGPT is a new paid surface with a structural advantage: because ChatGPT returns one answer instead of ten blue links, a placed ad can be *the* recommendation rather than one option among many. It reaches buyers at the instant they're problem-solving, and right now costs are low and competition thin, an early-mover window. The same finance-first Growth Engine (see paid-growth-engine-methodology) applies; what changes is that targeting is driven by the *prompts* buyers ask.

## When to use it
- Evaluating whether to be an early advertiser on AI-assistant surfaces.
- Extending a paid program into AI-native channels where intent is expressed as prompts.

## How to execute (steps)
1. **Map intent as prompts.** Identify exactly what your buyers ask ChatGPT when they have the problem you solve, this is the targeting unit ("intent & prompt mapping"), analogous to keywords in search.
2. **Aim to be the single recommendation.** Position and message so that when the assistant answers that prompt, your product is the natural one to surface, the value is being the *only* answer, not one of many.
3. **Apply the standard paid engine**, model economics, test performance creative before scaling, wire full-funnel measurement to pipeline (not clicks), and design/test landing pages for the traffic.
4. **Move while it's cheap.** Treat the low-cost, low-competition window as the reason to test now rather than wait.

## Notes / caveats / examples
- The original write-up was a service/sales page, so it omits exact targeting parameters, bid strategies, budget splits, creative formats, and conversion benchmarks. The durable takeaways are the *channel thesis* (single-recommendation, intent-at-moment, early-mover) and *prompt-mapping* as the targeting model. For the concrete self-serve setup and numbers, see `chatgpt-ads-execution-playbook`.
- Vertical note: filed under `paid-acquisition` because it's a paid channel. A dedicated `ai-search-geo` vertical would fit better if we later add *organic* AI-answer visibility (GEO) content, keep this card paid, put GEO there.

## → Skill conversion note
Becomes a `chatgpt-ads-intent-map` skill: input = product + buyer problems; output = a ranked list of buyer prompts to target, single-recommendation positioning angles, and a landing/measurement checklist, flagged as an early-stage channel with unknown benchmarks.

### Launch ChatGPT Ads for real, Context Hints as buyer scenarios, a minimum-viable 30-day test, and pixel/Conversions API from day one

## The strategy
`chatgpt-ads-emerging-channel` is the *thesis* (be the single recommendation, prompt-as-targeting) written before parameters were public. This card is the *execution playbook* now that the self-serve Ads Manager exists at **ads.openai.com**: how to write Context Hints, size a minimum-viable test, and wire measurement, with the actual numbers.

## When to use it
- You've decided to test ChatGPT Ads and need concrete setup, not the channel case.
- You want a small, time-boxed experiment with a clear definition of success.
- You're writing ad copy/targeting for a conversational surface for the first time.

## How to execute (steps)
1. **Treat it as a conversational channel.** Self-serve launched at **ads.openai.com (May 5, 2026)**; starting **CPC $3-5**, CPM fell **$60 → $25**; ChatGPT users convert **~1.5x** other referral channels. Write copy like **"a knowledgeable colleague," not an interruption ad.**
2. **Write Context Hints as buyer scenarios, not keywords.** Formula = **Persona + Intent + Scope**, e.g. *"A founder evaluating CRM for a small remote sales team struggling with pipeline visibility."* Split ad groups by conversation stage (early/mid/late), run **3-4 hint variants**, keep the headline **≤48 characters** with a conversational description.
3. **Wire measurement from day one.** Install the **OAIQ pixel + Conversions API via GTM (Stape)** before spending.
4. **Run a minimum-viable test.** **$50-100/day ($1,500-3,000 over 30 days)**, start bid **$5** (not the $3 floor, which fails delivery), **2+ creatives per group**, run the **full 30 days.** Expect **10-20 clicks/day at $5.**
5. **Define success as learning, not ROAS.** Success = discovering **which problem-states trigger delivery**, not immediate return. Some clients are seeing **CPLs at 30-40% of typical benchmarks.**

## Notes / caveats / examples
- The **$5 start bid** matters, bidding the $3 floor fails delivery, so the "cheapest" bid wastes the test.
- Early-channel benchmarks are unstable; the 30-day, learning-first framing protects you from killing it on week-one ROAS.
- Bonus: strong-delivering Context Hints double as *organic content research*, they reveal high-volume buyer problem-states (see the ai-search-geo cadence card).

## → Skill conversion note
Becomes a `chatgpt-ads-launcher`: input = product + buyer personas; output = Persona+Intent+Scope Context Hints (by conversation stage), ≤48-char headlines, a $50-100/day 30-day test plan, and a pixel/Conversions-API setup checklist.

### Pick the right creative with "one ad, one job", diagnose the bottleneck, then choose hook + format by funnel temperature

## The strategy
Most creative fails because it tries to do everything for everyone. The framework is "one ad, one job": first diagnose *where* the funnel is actually leaking, give the creative a single job, then choose the hook and format from decision trees keyed to funnel temperature and category, instead of guessing.

## When to use it
- Planning a creative test batch and deciding *what* to make, not just how.
- Results are flat and you can't tell if it's a creative, targeting, offer, or product problem.
- You want per-vertical starting priors instead of a blank page.

## How to execute (steps)
1. **Diagnose the bottleneck first.** Locate the real constraint before writing anything: **funnel / product / unit economics / targeting / messaging.** Then give the creative its *one job*, "one ad, one job."
2. **Audit each ad against the 5-question checklist.** Every ad should answer: (1) what problem, (2) what product/brand, (3) why I need it, (4) why trust you, (5) how to buy now. UGC (e.g. Cadence) can hit all five at once. Use this to audit existing ads post-iOS.
3. **Choose the hook by funnel temperature.**
   - **Cold:** Pattern Interrupt / Curiosity Gap / Persona Callout / POV.
   - **Mid:** Us-vs-Them / Contrarian / Listicle.
   - **High-intent:** Social Proof / Authority.
   - **Retargeting:** Social Proof / POV / Problem-Agitate.
   Build **3-4 hook+format combos per temperature.**
4. **Apply category shortcuts (starting priors).** B2B SaaS → Problem-Agitate / Authority / Us-vs-Them; DTC → Pattern Interrupt / POV / Social Proof; Health → Contrarian / Authority / Problem-Agitate; Education → Contrarian / Authority / POV.
5. **Choose format via 3 questions.** Understood in one frame? Clarity vs belief problem? Production capacity? → **clarity = statics, belief = video/UGC.**
6. **Match the hook to the platform's attention window.** IG/TikTok: 0.5-3s bold outcomes ("47 calls booked in 30 days"). LinkedIn: 2-5s process/tutorial. Facebook: 1-2s conversational. YouTube: 5s story hook.
7. **Validate messaging cold before building funnels.** Social lacks search's intent signal, so TOFU/MOFU/BOFU segmentation misleads, launch **5-10 concepts** and find messages converting **1-2% of cold traffic** with working unit economics before building nurture. Keep retargeting simple (reuse best TOFU ads + social-proof variants).

## Notes / caveats / examples
- The category shortcuts are *priors*, not rules, they tell you where to start testing, not what will win.
- "One ad, one job" pairs with `creative-supply-chain-and-volume` (how many to make) and `video-ad-diagnostics-and-timing` (how to read the result).

## → Skill conversion note
Becomes a `creative-brief-planner`: input = category + funnel stage + diagnosed bottleneck; output = the ad's single job, 3-4 hook+format combos, the platform-specific attention beat, and a 5-question QA gate.

### Run creative as an operational supply chain, commit to volume, count distinct ideas not variants, and feed organic winners into paid

## The strategy
At scale, creative is the constraint and the answer is *throughput*, not cleverness. Treat creative like a manufacturing supply chain: a volume commitment, a two-stage pipeline (find resonant concepts, then diversify the winners), and a "feeder" system that pipes organic wins into paid testing. `ai-creative-testing-system` covers the AI-assisted pipeline; this card is the *operating model and volume math* around it.

## When to use it
- You're spending enough ($10K+/mo) that creative fatigue, not budget, caps growth.
- You have organic content (Reels/posts/UGC) that could feed paid but isn't systematized.
- You need to justify creative headcount/output targets with real numbers.

## How to execute (steps)
1. **Commit to volume.** Plan **50-100 variations over 3+ months** (≈20 ads in weeks 1-2), which needs **$10K+/mo spend** to justify and 7-14 day test batches. (Learna tested 10,000+ variations; the point is volume is the strategy.)
2. **Count distinct *ideas*, not variants.** Accounts testing many *meaningfully different* ads got better CPA/ROAS, test **5-10 radically different hooks, not 50 tweaks of one.**
3. **Split the pipeline into two stages.** **Stage 1** = find resonant creative (many distinct concepts). **Stage 2** = scale the winner into diverse assets. Don't blur them.
4. **Run a "Feeder Strategy."** Flag organic wins in Slack for paid testing, one brand went **6.2% → 11.95% CTR and −48% CPC** by feeding organic winners into paid. Target **30+ fresh concepts/month, 5-7 creators/campaign, iPhone shoots on 5-day cycles.**
5. **Script from real customer language.** Draft in ChatGPT/Claude pulling *verbatim* language from customer interviews, Reddit, and TikTok search. Emotional arc: frustration → realization → solution → CTA, under **600 chars / 30s spoken.**
6. **Budget for the real bottleneck: editing.** AI cuts production from 3 weeks to 3 hours, but *editing stays manual*, export to CapCut/After Effects, add captions (sound-off), transitions, music, text. Younger audiences = dynamic; 50+ = minimal.
7. **Invest in creative over dashboard tweaking.** Across 28,000+ brands, great creative delivers up to a **12x ROI multiple** (brand size up to 20x, but uncontrollable). Spend your leverage on emotionally resonant ads, not bid tweaks.

## Notes / caveats / examples
- Volume without *distinct ideas* is waste, the "count ideas not variants" rule prevents 50-variant churn.
- The math (50-100 variations, $10K+/mo, 30+ concepts/mo) is for scaling accounts; smaller accounts scale the ratios down.

## → Skill conversion note
Becomes a `creative-ops-planner`: input = monthly spend + creator/asset capacity; output = a volume target, a Stage-1/Stage-2 split, a Feeder-Strategy workflow, and a scripting prompt seeded with your customer-language sources.

### How to layer Facebook ad targeting, demographics, interests, behaviors, custom + lookalike audiences

## The strategy
Facebook targeting has three built-in layers (demographics, interests, behaviors) plus two audience-data layers (custom audiences from your own data, lookalikes built off them). You start broad, read the performance data, then exclude weak segments to cut CAC, rather than trying to guess a perfect narrow audience up front.

## When to use it
- Setting up a new Meta ad account and deciding how tight to make targeting.
- Costs are rising and you need to trim wasted spend by excluding underperformers.
- Adapting targeting after the iOS 14 / ATT tracking loss.

## How to execute (steps)
1. **Start with demographics, kept broad:** age, gender, location. Location has three modes, "living in," "recently in," "traveling in." Skip Language targeting unless you're reaching a specific language's speakers in a non-native country (it's unreliable).
2. **Add detailed demographics only when relevant:** education, household income (by ZIP), life events (newly engaged with 3/6/12-month windows, newlywed, relocation, new job), parental status by child age, employer/industry/job title.
3. **Layer interests surgically:** pick the narrow subcategory, not the parent (e.g. "Japanese cuisine," not "Food/drink"). Nine interest buckets exist (business, entertainment, family, fitness, food, hobbies, shopping, sports, technology).
4. **Add behaviors only if product-relevant:** e.g. "console gamers" for gaming headsets, "iPhone users" for iPhone cases. Behavior options include purchase behavior (engaged shoppers), travel (commuters, frequent/international travelers, returned 1-2 weeks ago), device brand/OS, and device-tenure buckets.
5. **Build custom audiences** from your own email/customer lists (only permissioned data, never scraped or bought) and Meta data (Page likes, app events, pixel). Use them two ways: **prospecting** (exclude existing customers/subscribers so ads only hit new people) and **retargeting** (site visitors, cart abandoners, video viewers).
6. **Build lookalikes off a seed custom audience:** pick seed → set location → set similarity 1%, 10% (1% = closest match). Good seeds: existing customers, cart abandoners, webinar attendees, newsletter subs, last-month site traffic.
7. **Read performance, then exclude:** identify underperforming demographic/interest segments and exclude them, which can drastically cut CAC.

## Notes / caveats / examples
- **Lookalike seed thresholds:** Facebook needs a minimum 100 people per country; aim for at least **1,000 contacts** for quality results.
- **Lookalikes are the most expensive** targeting option because Facebook's bidding favors narrow segments.
- **iOS 14 / ATT reality:** average tracking opt-in is ~**26%** (39% weighted by app size). Post-ATT playbook: (a) go broad if you sell mass-appeal products AND the account already has **1,000+ recorded conversions**; (b) retarget via lookalikes of site visitors/Page engagers rather than direct retargeting pools (more data available); (c) use interest targeting on media outlets as a proxy for the beliefs/interests that detailed targeting used to cover.
- **Targeting removed Jan 2022:** health causes, sexual orientation, religious groups, political beliefs/social issues/figures.
- **Interest data is ~30% inaccurate** (a negative comment on Harry Potter can register as interest), don't over-trust a single interest signal.
- **Ad-fatigue trick:** "transitional" audiences (life events, birthdays, newly engaged) naturally refresh their membership, so they fatigue slower without new creative.
- Targeting is set at the **ad-set** level; a campaign can hold multiple ad sets each with a different audience.

## → Skill conversion note
Becomes a "Meta targeting builder" prompt: input product + ACR data → output a layered ad-set plan (broad-vs-narrow decision from conversion count, seed-audience list for lookalikes, and an exclusion list to cut CAC).

### Build Facebook prospecting audiences with geo tiers, niche interests, lookalikes, and exclusions

## The strategy
Prospecting targeting is a set of concrete defaults: start in Tier-1 geos, target narrow niche interests (not broad categories), seed lookalikes from your most down-funnel users at the right size, and exclude recent visitors and existing customers so you don't waste spend or over-expose people.

## When to use it
- Configuring targeting for a new Meta prospecting ad set.
- Fixing weak conversion signal from too-broad targeting.

## How to execute (steps)
1. **Geography, start Tier 1.** Tier 1 (most expensive/highest value): US, UK, Canada, Australia, Germany, France, Netherlands, Nordics, Ireland, Israel, Singapore, Spain, Switzerland, NZ, Austria, Finland. Tier 2: Brazil, Belgium, Czechia, Estonia, Hong Kong, Italy, Poland, South Korea, South Africa. Tier 3: India + other emerging markets. Only test Tier 2/3 with proven traction there.
2. **Language.** In non-English-majority countries, explicitly target English speakers. In English-speaking countries, leave language blank to catch non-English UI users who still speak English.
3. **Age/gender.** Don't restrict by gender at first, let data decide. Default age range when not targeting a specific demographic: **22-50**.
4. **Device.** Single-store mobile apps → target only Android or only iPhone. Web products → test mobile separately (many FB users are mobile-only).
5. **Interests, go niche, not broad.** ❌ "Food" → ✅ "BBQ," "Japanese cuisine." Niche interests signal genuine passion; broad ones are weak conversion signals.
6. **Job titles.** Enumerate all title variants (Salesperson, Sales Associate, Sales Manager). Good for B2B; inefficient for B2C (FB job data is sparse).
7. **Behaviors.** Test FB behavioral segments (recent car buyers, charity donors, small-business owners).
8. **Lookalikes.**
   - Seed audience: **min 1,000**, **max ~5,000** people (larger dilutes to average users).
   - Seed from the most down-funnel event available: purchasers > registered users > add-to-cart > site visitors.
   - Don't mix distinct buyer types (e.g. men's and women's apparel) in one seed.
   - Slider default **1%** (~2M people for US). Use **5%** only for very broad-appeal products (food, apparel).
9. **Exclusions.** Build a **3-day exclusion audience** (last 3 days' visitors) to prevent overexposure, and use the conversion pixel to exclude existing customers from prospecting (retarget them separately for repeat sales).

## Notes / caveats / examples
- Interests are the highest-leverage lever: the niche-vs-broad rule is the single biggest signal-quality fix.
- Facebook won't let you break results down by interest/job/behavior, isolate each in its own ad set to learn.

## → Skill conversion note
Becomes a `configure-fb-targeting` skill: input = product + ICP + market; output = a targeting spec (geo tier list, age 22-50 default, niche interest list, lookalike seed+size+% recommendation, exclusion audiences).

### Micro-target Facebook audiences with auto-synced behavioral personas (Segment-style)

## The strategy
Instead of manually exporting CSVs into Facebook Custom/Lookalike audiences, pipe behavioral segments from a CDP (Segment Personas) that auto-sync as a "User-List" and update in real time. This lets you build precise micro-audiences off events, traits, and computed variables, and split lookalikes by behavior instead of dumping all users into one blob.

## When to use it
- Ad costs are rising and broad audiences aren't converting.
- You have a CDP / event tracking (or can add one) and want behavior-based audiences that stay fresh without engineering tickets.
- Your customers behave very differently (multiple segments, price points, industries) so one giant lookalike is too muddy.

## How to execute (steps)
1. **Authorize** Facebook Custom Audiences inside Segment; audiences you build sync as a "User-List" to Facebook and update automatically.
2. **Segment on events (actions):** e.g. viewed a product above a price threshold but never ordered → retarget with checkout reminders; or strict event sequences within a time window (funnel-based). For ecommerce, target cart abandoners with dynamic ads showing the exact items left behind.
3. **Segment on custom traits** collected during forms/signups/sales calls/purchases: industry, employee count, job title, location. Use **Clearbit Enrich** to derive firmographics from just a business email, no extra data collection needed.
4. **Segment on computed traits** calculated on the fly: e.g. a `big_spender` audience (customers over a payment threshold), or B2B "at-risk accounts" = business-tier users with zero logins in a recent period (churn prevention).
5. **Preview Results** to validate the segment logic before activating it as an ad audience.
6. **Split your lookalikes by behavior:** build separate seeds by gender/price point, product category purchased, industry + company size, repeat-purchase frequency, or funnel depth, then create a lookalike per seed.
7. **Retarget by funnel stage** with differentiated messaging: setup-completed vs. one-time buyer vs. churned each get a different next-step ad.

## Notes / caveats / examples
- Ecommerce with distinct segments (e.g. gender + price point) can justify **4+ separate lookalikes** rather than one.
- Core rationale: "Building a giant lookalike off of all your users isn't helpful if your users have very different behaviors."
- The old CSV-upload method doesn't scale, ignores differentiation, and needs constant manual refresh; the auto-sync method fixes all three.

## → Skill conversion note
Becomes a "behavioral audience planner" prompt: input your tracked events + customer traits → output the segment definitions (event/trait/computed), which to retarget vs. seed as lookalikes, and the per-segment ad message.

### Scale Google Ads with bid-strategy switching, brand/non-brand splits, competitor keywords, and geo-tiers

## The strategy
Scaling Google Ads spend without wrecking CAC is a specific set of moves, not just "raise budgets." The playbook: pick the bid strategy that *unlocks* volume for the stage you're in, separate brand from non-brand so you can see true CAC, expand into competitor and tiered-geo demand, and pair demand-capture (Search) with demand-generation (Performance Max).

## When to use it
- You have a working Google Ads account and want to scale spend materially.
- tROAS is throttling your volume and you can't figure out why growth stalled.
- Brand and non-brand are blended and your reported CAC looks artificially good.

## How to execute (steps)
1. **Switch Target ROAS → Target CPA when entering new audiences.** tROAS *throttles volume* in unproven audiences; tCPA opens delivery so the algorithm can find scale.
2. **Split brand vs non-brand campaigns.** This exposes your *true* CAC, brand traffic would have converted anyway and hides the real cost of net-new acquisition.
3. **Bid on competitor keywords.** Capture in-market demand searching for rivals (e.g. Runway, Sora).
4. **Geo-tier your campaigns.** Tier 1 = high-LTV, Tier 2 = scalable, Tier 3 = test, budget and bid each tier to its economics.
5. **Ring-fence creative/asset testing.** Allocate **20% of daily spend** to testing.
6. **Scale budgets in steps.** Raise in **15-20% increments** so the algorithm doesn't reset learning.
7. **Pair PMax with Search.** Performance Max for **demand generation**, Search for **demand capture**, run both, not one.

## Notes / caveats / examples
- **Result:** this playbook drove **8x spend growth ($62K → $493K/mo)** while holding **CPAs within ~20% of baseline** and adding **6,000 new paying users.**
- Competitor-keyword bidding invites the same back at you and can be expensive on trademarked terms, watch quality score and CPCs.
- The 15-20% step rule matters: bigger jumps reset the learning phase and spike CPA.

## → Skill conversion note
Becomes a `google-scaling-planner`: input = current campaign map + LTV-by-geo; output = a bid-strategy switch plan, brand/non-brand split, competitor keyword list, geo-tier structure, and a stepped budget-ramp schedule.

### Which Google Ads campaign type to use, Search, Display, Shopping, Video, App, Local, Smart, Performance Max, Discovery

## The strategy
Google Ads has a campaign type for each intent + placement. Pick by goal: capture existing demand with Search, showcase visual products with Shopping, build awareness/remarket with Display/Video/Discovery, drive foot traffic with Local, and hand it all to the machine with Smart or Performance Max. Understand the three-layer model: campaign goal → campaign type → ad format.

## When to use it
- Deciding which campaign type to launch for a given objective.
- Weighing automated (Smart/PMax) vs. manual control.

## How to execute (steps)
1. **Search**, capture intent from "best X"/"buy X"/competitor-brand searches. Text only: Headline 1 ≤30 chars (Business Name, Keywords), Headline 2+ ≤30 chars (value prop/social proof), Descriptions ≤90 chars (2 shown), Path ≤15 chars. Use Responsive Search Ads, branded search (bid on your own brand), Dynamic Search Ads (Google pulls page content, for simple/frequently-updated sites), Call-Only ads. Add **max extensions**: sitelinks, callouts (≤25 chars, up to 10), price (up to 8 cards), promotion, call, message, location (needs GBP), app.
2. **Shopping**, ecommerce/physical products with high buy-intent. Setup: create Google Merchant Center → link to Ads → link product database → wait **3-5 business days** for approval → build campaign filtering products. You control locations, devices, bid strategy (e.g. Target ROAS), per-product CPC, budget, negative keywords, schedule, remarketing lists. You can't control keywords, demographics, interest/topic/placement, or final URL. Types: Product (→ product page) and Showcase (groups products; fewer impressions in practice).
3. **Display**, awareness + remarketing; <1% CTR; 80/20-90/10 split with Search initially. (See dedicated Display card.)
4. **Video/YouTube**, awareness/remarketing for visual products. Formats: In-stream Skippable (12s, 6min, CPC on ≥30s view/interaction, remarketing); In-stream Non-skippable (15-20s, CPM, awareness); Bumper (≤6s, CPM, mobile/remarketing); Video Discovery (any length, CPM, least intrusive, YouTube search results, recommended videos, mobile home).
5. **App**, installs (CPI) or in-app actions (CPA, needs 10+ daily conversions + tracking). Google auto-builds ads from your store listing; placements across Search, Display, Play, YouTube, Discover + 3M sites. No targeting/bidding/placement control; needs **250k installs** for in-app remarketing; excludes Apple App Store (use Apple Search Ads).
6. **Local → Performance Max** (upgraded July 2022), drive in-store visits; 46% of Google searches are local. Needs a verified GBP + location extension; goals = directions, click-to-call, in-store visits; write location-specific copy with landmarks.
7. **Smart**, new advertisers / baseline before scaling. Requirements: Smart Search 100+ conv/30d, Smart Display 50+ conv/30d, Smart Shopping (GMC linked, feed, conversion tracking with value, dynamic remarketing, 100+ audience). Google runs bidding/keywords/copy/targeting; no remarketing, limited visibility.
8. **Performance Max**, all-in-one across YouTube, Display, Search, Discover, Gmail, Maps. Upload all asset types + an **audience signal** (seed audience → Google finds similar). Bidding: Max Conversion or Max Value. Run it **solo** to avoid cannibalizing standard campaigns.
9. **Discovery**, awareness + remarketing (converts better than Display remarketing, "more clicks at lower cost"). Native placements in YouTube Home/Watch Next, Gmail, Google Discover, GDN. Formats: Carousel (2-10 cards + logo), Single Image.

## Notes / caveats / examples
- **Search ROI claims:** "8:1 ROI," "2x more visitors than SEO," paid gets **65% of clicks** on high-commercial searches, and **2x** the clicks of organic on branded searches.
- **Shopping CAC** can go "as low as $6" (client-reported) because shoppers self-select on visible price/rating before clicking.
- **Automation trade-off:** Smart/PMax hide what's optimized, so you can't easily recreate success or diagnose per-channel performance.
- Model to keep straight: **goal** (sales/leads/traffic/awareness) → **type** (Search/Display/…) → **ad format** (text/responsive/carousel).
- Search ads convert directly; Display/Video/Discovery often convert via a later brand search (view-through).

## → Skill conversion note
Becomes a "Google campaign-type recommender" prompt: input business model + goal + conversion history → output the recommended campaign type(s), whether to go manual vs. Smart/PMax, and the setup prerequisites (GMC, GBP, conversion thresholds).

### Run Google Display ads that actually convert, formats, targeting, creative rules, and how to measure them

## The strategy
Google Display ads reach ~2M sites/apps/videos (incl. YouTube + Gmail) but convert at under 1%, so treat them as a cheap awareness + remarketing complement to Search, not a primary growth driver. Win by layering targeting, matching creative to whether the audience is cold vs. warm, and measuring downstream (brand-search lift + view-through) instead of just clicks.

## When to use it
- You want low-CPC brand awareness or to remarket to warm users visually.
- You sell unique/visual products, have long sales cycles, or compete in high-CPC niches (insurance, education, legal).
- You already run Search and want an accelerant, not as your first/only channel.

## How to execute (steps)
1. **Pick the ad format:** Responsive (upload images + headlines/descriptions, Google auto-tests combos, widest reach); Static (fixed image, HTML5 for video/audio/expandable, exact-size placements only, full design control); Dynamic (pull from a product feed, best for ecommerce remarketing, shows previously-viewed products with "New"/"Price Drop" snippets).
2. **Produce the common sizes:** 1200×1200, 1200×628, 300×250, 336×280, 728×90, 160×600, 320×50.
3. **Layer targeting:** demographics (gender/age/parental status/household income) + audiences (Affinity for interest, In-market for active buy-intent, Life events, Custom audiences by keywords/sites/apps, Remarketing off GA interactions, Similar audiences, Customer Match from CRM) + content (Placements, Keywords, Topics). Add exclusions (sites, keywords, topics, mature content).
4. **Split budget:** start 80/20 or 90/10 (Display/Search), then shift over time to lower CPA. Prioritize remarketing over cold prospecting.
5. **Match creative to temperature:** cold/prospecting ads describe what you sell and the problem solved (assume zero awareness) → full-pitch landing page; warm/retargeting ads use testimonials, limited-time offers, brand reminders → simplified page or the original category page they visited.
6. **Build a dedicated landing page per campaign** (never send everything to the homepage) that logically continues the ad's message.
7. **Experiment continuously:** test images, colors, CTAs, copy, value props, social proof (badges, ratings), photos vs. illustrations, GIF/video vs. static.

## Notes / caveats / examples
- **Benchmarks:** avg CTR across industries ~**0.35%**; avg conversion rate **<1%**; typical CPC usually **under $1**; high-CPC niches average **above $11**. (The 1994 first banner ad hit 44% CTR, long gone.)
- **7 creative rules:** high contrast (dark text on light, CTA contrasts background); explain the company in **<10 words** on static ads; use descriptive/intuitive images (ebook cover over stock; product-in-use over isolated product); avoid clutter (single focal point + one line + CTA + logo); goal-specific creative (separate prospecting vs. retargeting); dedicated landing pages (Semrush uses distinct pages per topic); test relentlessly.
- **Measure downstream, not just clicks:** track organic-traffic change since launch, brand-search volume (Semrush/Ahrefs), other channels' performance during the run, and view-through conversions (define a window e.g. 30 days; Google only counts if the user didn't interact with other ads).
- **Fit:** best for long sales cycles, visually unconventional products, teams with design resources, and expensive niches. Not a primary growth driver, a complement.
- Outsource HTML5/animated builds to Fiverr; use Canva templates as a design reference.
- Bid strategies available: CPA, ROAS, CPC, CPM (vs. Search which is primarily CPC).

## → Skill conversion note
Becomes a "Display campaign builder" prompt: input product + audience temperature → output format choice, the size set to produce, a layered targeting plan, budget split, and the two creative briefs (prospecting vs. retargeting) with landing-page requirements.

### Match ad messaging to the audience's awareness level using the Ladder of Product Awareness

## The strategy
How much you explain in an ad should depend on how aware the audience already is. The Ladder of Product Awareness (LPA) is a five-step scale, step 1 is the highest awareness/need, step 5 the lowest. Where your audience sits, and how the platform targets, determines whether you sell details or first sell the problem.

## When to use it
- Deciding copy depth for a given channel/audience.
- Explaining why the same ad wins on Google (intent) but flops on Facebook (interest).
- Building separate copy for high-intent vs. cold prospecting.

## How to execute (steps)
1. **Ask first: "What does our audience likely already know?"** Place them on the 5-step ladder.
2. **Behavior-based platforms (Google, YouTube, Pinterest)**, infer LPA from the search keyword/niche.
   - High LPA (specific query): highlight product details, skip explaining *why* they need it.
   - Low LPA (broad query): explain why your brand is best.
3. **Profile-based platforms (Facebook, Instagram, LinkedIn)**, use profile data as an LPA proxy; expect to write wordier, more generalized copy that simultaneously answers:
   - Why the problem is worth solving,
   - Why it's worth solving *now*,
   - Why your solution beats the alternatives,
   - What the next step is.
4. **Raise the ladder over time**, as audiences grow more aware of your product, refresh copy to assume more knowledge and lead with differentiation.

## Notes / caveats / examples
- Search intent is a strong LPA signal; social profile data is a weak proxy, which is why social copy must carry more context.
- Rising audience awareness is one of the standard triggers for creating fresh ads.

## → Skill conversion note
Becomes an `awareness-matched-ad-copy` skill: input = channel + targeting signal (keyword or profile) + product; output = LPA-placed messaging that either leads with details (high LPA) or sells the problem first (low LPA).

### Squeeze more from lookalikes with negative lookalikes, high-intent-only seeds, and partner pixel data

## The strategy
The default lookalike (seed = all buyers, target the 1% lookalike, ship it) leaves quality on the table. Three sharper moves improve the seed and the exclusions: build a lookalike of your *worst* customers and exclude it, seed only from *high-intent* visitors instead of every buyer, and *expand* thin seeds by buying partner pixel data. Better seed in → better audience out.

## When to use it
- You already run Meta/paid-social lookalikes but CAC is creeping up or the audience feels muddy.
- Your seed list is small (new brand, few conversions) and 1% lookalikes are too tight to deliver.
- Your customer base has a clear "bad customer" profile (refunders, one-and-done, high-support, low-LTV).

## How to execute (steps)
1. **Negative lookalike.** Build a source audience of your *worst* customers (high refund/churn/support, lowest LTV), generate a lookalike from it, then **exclude** that lookalike from prospecting. You steer the algorithm away from the profile that looks like your bad buyers.
2. **High-intent seed only.** Instead of seeding from all site visitors or all buyers, seed the lookalike from visitors whose **URL contains `utm_source=google`** (or any high-intent signal you can isolate). The model then hunts for people resembling your most intentful traffic, not your accidental traffic.
3. **Expand thin seeds with partner pixel data.** When your own seed is too small to build a stable lookalike, buy partner/second-party pixel data through a marketplace like **Repixel** to enlarge the seed audience before generating the lookalike.

## Notes / caveats / examples
- These stack on top of the standard prospecting setup (see `facebook-audience-targeting`), this card is the *advanced seed/exclusion* layer, not a replacement.
- Negative lookalikes need enough "bad customer" volume to build a valid source audience; on tiny accounts the exclusion may be noise.
- Partner-data marketplaces (Repixel) carry the usual data-provenance/privacy caveats, validate consent/quality before importing a pixel audience.

## → Skill conversion note
Becomes a `lookalike-seed-optimizer` recipe: input = CRM/LTV export + UTM taxonomy; output = three source-audience definitions (worst-customer exclusion, high-intent seed, expansion plan) ready to paste into Ads Manager.

### Restructure Meta creative-first, collapse to a 2-campaign architecture, respect GEM's ad-dedup, and enforce placement safe-space discipline

## The strategy
Meta's machine-learning delivery (GEM / Advantage+ era) has changed what a good account looks like. The classic granular 3-tier structure (see `campaign-structure-and-budgets`) now fights the algorithm. The modern move is to *consolidate* the account, shift effort from media buying to creative operations, and treat placements as deliberately-designed canvases, because GEM collapses near-identical creatives into one.

## When to use it
- You're a scaling advertiser ($50K+/mo) with a sprawling, over-segmented Meta account.
- CPAs are high and you suspect the structure is starving the algorithm of signal.
- You're relaunching an account and want the current best-practice architecture.

## How to execute (steps)
1. **Collapse to a 2-campaign architecture.** Advertisers who restructured to a 2-campaign setup saw **~32% CPA drops.** Consolidate ad sets so the algorithm pools signal instead of splitting it.
2. **Shift the effort ratio to creative.** Run **80% creative ops / 20% media buying**, the leverage is in creative, not bid management.
3. **Test only 2-3 variations per concept.** Meta's **GEM treats visually-similar creatives as one ad**, so 50 near-duplicates don't get distinct delivery. Test 2-3 *genuinely different* variations per concept and let organic Reels/posts feed the paid pool.
4. **Enforce placement safe-space discipline.** Build a **minimum of 4 versions per campaign**: 1:1, 4:5 (feed), 9:16 (Stories), and 9:16 (Reels), and **treat Stories and Reels as separate placements**, not one. Design the safe zones deliberately and **preview every placement manually before launch** so nothing important sits under UI chrome.

## Notes / caveats / examples
- Aimed at **$50K+/mo** advertisers; small accounts don't have the volume to justify 4 placement cuts per concept, but the consolidation principle still applies.
- This *supersedes* the granular structure in `campaign-structure-and-budgets` for GEM/Advantage+ delivery, keep the older card for the fundamentals, use this for scaled accounts.
- Feeding organic winners in ties directly to the Feeder Strategy in `creative-supply-chain-and-volume`.

## → Skill conversion note
Becomes a `meta-account-restructurer`: input = current campaign/ad-set map + monthly spend; output = a consolidated 2-campaign plan, a per-concept variation cap, and a 4-placement asset checklist with manual-preview gate.

### Run paid acquisition finance-first, model unit economics, architect the engine, then scale to pipeline not clicks

## The strategy
The "Growth Engine" model treats paid as a system built on top of finance, not a pile of campaigns. Four phases: model the economics, architect the revenue engine, launch a channel mix mapped to the P&L, then scale relentlessly by feeding budget to what actually drives revenue. The recurring theme: creative gets the attention, but the finance underneath paid is what separates winners from losers, and you track pipeline, not clicks.

## When to use it
- Planning paid acquisition at the strategy level before touching ad managers.
- Deciding whether/where paid can scale profitably, and how to structure channels and tracking.

## How to execute (steps)
1. **Growth & financial modeling**, model unit economics, margins, payback periods, and cash flow at scale. Identify where paid *breaks* at scale and map the growth levers before spending.
2. **Engine architecture**, engineer the revenue model, product-channel fit, messaging, and funnel; optimize tracking/data feeds so algorithms optimize for customer *quality*, not cheap clicks. Use lead-scoring to tie spend to pipeline quality.
3. **Channel strategy & launch**, build a channel mix mapped to funnel and P&L; deploy campaigns, creative, and landing pages as one integrated system. Separate high-intent (branded vs. non-branded) traffic, don't blend it. Structure campaigns so spend can scale cleanly (rebuild overlapping keywords/shared budgets that cannibalize).
4. **Relentless scaling**, test to find winners, allocate budget to revenue drivers, and re-model conditions at each new scaling ceiling. Restructure campaigns into LTV tiers (high-LTV / scalable / test) and keep ~20% of spend on fresh creative testing. Sometimes switch bid strategy to unlock volume (e.g. Target ROAS → Target CPA).
5. **Wire measurement to revenue**, attribution to pipeline metrics, real-time sales notifications, CRM integration (e.g. HubSpot) for full-funnel visibility; set lead-qualification frameworks before scaling spend.

## Notes / caveats / examples (real case numbers)
- **Videogen:** scaled spend $62k → $493k/month in 90 days while holding CAC within ~20% of baseline (an ~8x scale).
- **Snitcher:** ~4x revenue from paid in 12 months; expanded channels 2 → 4 (Google, Meta, Bing, LinkedIn).
- **FirmPilot:** high-ACV ($50-100K deals, 6-12 month contracts); achieved 8x+ ROAS.
- **WorkOS:** 9x qualified leads from Google via structured experimentation.
- The 4-phase model and the case benchmarks are the executable takeaways; the original write-up was an agency service page.

## → Skill conversion note
Becomes a `paid-acquisition-strategy` skill: input = unit economics (CAC/LTV/margin/payback) + product + channels; output = a phased plan, economic model + break-point, channel mix mapped to P&L, LTV-tier campaign structure, and a pipeline-based measurement spec.

### Set up Facebook retargeting with four custom audiences and fresh, complementary creative

## The strategy
Retargeting recaptures people who already engaged. Build four custom audiences, include recent site + video engagers while excluding just-visited and already-converted users, and, critically, never reuse prospecting ads. Pitch new, complementary value props instead.

## When to use it
- Standing up a retargeting layer on top of prospecting campaigns.
- Roughly 20% of total ad budget is earmarked for retargeting (per the standard account-structure guidance).

## How to execute (steps)
1. **Create four custom audiences:**
   - **Web traffic**, last 90 days' site visitors (or top 25% by time-on-site if you get tens of thousands+ of visitors).
   - **3-day exclusion**, last 3 days' visitors (used to exclude the just-visited).
   - **Video viewers** (optional), users who watched 50%+ of your video ads.
   - **Converted exclusion**, existing customers, to exclude from prospecting (retarget separately for repeat sales).
2. **Configure the retargeting ad set**, Include: web traffic + 50%+ video viewers. Exclude: 3-day visitors + converted visitors.
3. **Use fresh creative.** Do NOT reuse prospecting ads. Pitch new, complementary value props.
4. **Optionally build new landing pages**, each focused narrowly on one new value prop.

## Notes / caveats / examples
- The 90-day window (or top-25%-by-time for high-traffic sites) sizes the pool; the 3-day exclusion prevents hammering people who *just* left.
- Complementary value props matter: retargeting is a second, different pitch, not a louder repeat of the first.

## → Skill conversion note
Becomes a `build-retargeting-campaign` skill: input = traffic volume + whether video ads exist; output = the four audience definitions, the include/exclude ad-set config, and a brief for complementary retargeting creative.

### Stop the scroll with UI-mimicry, phone-ception/text-interrupt/fake-podcast devices, and format-violating novelty

## The strategy
The first 1-3 seconds decide whether an ad is watched. This card is a concrete toolbox of *scroll-stopping devices*, interface fakes, native-feeling transitions, and deliberate novelty that violates format expectations, plus a near-free way to produce animated versions of them.

## When to use it
- You need fresh hooks for cold/feed placements (Stories, Reels, TikTok, YouTube, Display).
- Your creative is clear but not *interrupting*, people scroll past before the message lands.
- You want production-light ways to test many hook devices quickly.

## How to execute (steps)
1. **Mimic native UI elements.** Fake a channel-change, screenshot, or interface overlay to hijack attention, Tubi's Super Bowl fake channel-switch ad is the archetype. Apply on YouTube, Stories/Reels, and TikTok.
2. **Use the three scroll-stopping video devices:**
   - **Phone-ception**, transition into the next scene *via a phone screenshot* of that scene.
   - **Text Interrupt**, a casual selfie with an incoming-text notification popping in.
   - **Fake Podcast**, podcast-style two-person chat about the product.
   Hook within **1-3 seconds** in every case.
3. **Fight the "Law of Shitty Clickthroughs" with novelty.** The first banner ad got **78% CTR**; today's average is ~**0.60%**, attention decays as formats become familiar. Counter it: add an *unexpected visual* (Ogilvy's 50¢ eyepatch on the Hathaway model; Labucq's ambiguous ankle device); **violate format expectations** (Guinness's 83-second ad where nothing happens for 23s, sound cuts mid-way, product reveal last, matching "good things come to those who wait"); use curiosity gaps; and deliberately **skip the logical first idea** competitors already run, brainstorm ideas that scare you.
4. **Produce animated versions in under an hour.** Build animated ads in **Keynote/PowerPoint** using Magic Move for smooth motion and parallax depth. Avoid over-outsourcing creative early (After Effects is unnecessarily complex here), ad creative is a high-leverage test surface you want to iterate fast.

## Notes / caveats / examples
- These devices are hooks, not whole ads, pair with a clear product payoff (see `ad-creative-design-rules`) and the 1/3/5 timing (see `video-ad-diagnostics-and-timing`).
- Novelty is the point: a device that's now everywhere (fake texts, fake podcasts) loses its interrupt value, rotate as they saturate.

## → Skill conversion note
Becomes a `scroll-stop-device-picker`: input = placement + product; output = 3-4 hook devices to storyboard (with the 1-3s beat) and a Keynote-based production plan for fast animated variants.

### TikTok ad creative, hook rules, UGC, and 8 swipeable ad formulas that convert

## The strategy
On TikTok, creative does the heavy lifting (not targeting). The winning pattern is native, UGC-style, mobile-shot video that hooks in the first frames, tells a story, and stays short. This card captures the 8 best-practice rules, the UGC rationale, 8 reusable ad-format structures, and the technical specs.

## When to use it
Whenever you're briefing, scripting, or producing TikTok ad creative, especially for DTC ecommerce or app installs where you need high-volume creative that feels organic.

## How to execute (steps)

**8 creative rules**
1. **Lead with a hook**, the decision happens on the first frame; only ~25% watch past 5 seconds and average watch time is 5-6 seconds. Hook with action + exciting audio, an enticing headline, or an unusual/provocative visual. Combine an intriguing headline + a face + a close-up product view.
2. **Sell with stories**, a cohesive, relatable problem→solution narrative the viewer can picture themselves in. Authenticity over polish.
3. **Keep it short, fast, lean**, 60% of highest-CTR videos land the message in the first 3 seconds; ~30 seconds is the sweet spot. Stitch multiple 1-2 second quick cuts (different angles/speeds); trim pauses.
4. **Use native tools**, believable on-camera performance + sharp editing. Layer greenscreen, transitions, subtitles, time warps, reversals, background music, robot voice narration.
5. **Emphasize discounts**, feature in a colorful price bubble + headline; make a TikTok-exclusive code (creator name or "TIKTOK15").
6. **Match the CTA**, "Shop Now" (product), "Download"/"Play game" (app), "Sign up" (email/trial). Avoid vague "Learn more." TikTok gives 8 CTA options.
7. **Test high volume, then iterate**, start with wildly different "big swing" creatives, scrap losers fast, refine top performers.
8. **Leave comments on**, engagement helps the ad in auction; positive comments are social proof. Use negative-keyword filters to block bad ones.

**UGC rationale** (working with creators/actors, NOT customers; prefer lesser-known creators over big influencers)
- 92% of consumers trust UGC over traditional ads.
- Mobile-shot creative has a 63% chance of outperforming studio-shot for purchases/checkouts/installs.
- UGC outperforms conventional ads by up to 50%, and is ~9.8× more impactful than influencer content.

**8 ad-format formulas**
1. **Model functionality**, tutorials/how-tos (products); demo walkthroughs, screen recordings, reactions (apps).
2. **"TikTok Made Me Buy It"**, text-overlay hook → introduce product → benefits with video+text → CTA.
3. **Reply to comment**, reply-bubble overlay hook (test angles) → casual influencer-style response → testimonial → product variations/in-action → second testimonial → CTA.
4. **Unboxing & assembly** (20-sec example): 0-1s problem, 2-3s top objection, 4-5s product+brand, 5-8s top value prop, 8-10s secondary value prop, 10-16s product in use, 17-20s CTA.
5. **Before & after**, headline+before visual → introduce product+human → benefits in context → after + testimonial → CTA.
6. **"3 reasons why"**, headline variants ("3 reasons why you should/shouldn't…", "you'll love/hate…", "I stopped/started…") → 3 reasons → CTA.
7. **Sketches & comedy**, 80% content / 20% promotion; get brand name + value props into the first 5 seconds, then entertain. Needs talented creators.
8. **Testimonials**, genuine emotional reactions + visual demonstration; show, don't tell.

**Technical specs**
- Vertical full-screen video, shot on iPhone if possible, uploaded at highest resolution.
- Respect safe zones: keep critical content/captions away from top/bottom, the CTA button, body copy, and the right-side engagement buttons. Product clearly framed.
- Ad types: In-Feed, Spark, TopView, Branded Hashtag Challenge, Branded Effects. Check TikTok Business Help Center for exact aspect ratios.

## Notes / caveats / examples
- Discount example code: "TIKTOK15". Unboxing timeline example is a full 20-second beat sheet.
- Inspiration/monitoring: TikTok Creative Center (ads.tiktok.com/business/creativecenter), Business Creative Hub (Profile > Settings > Business Suite), Ad Experience Specialist Mode, and just browsing the For You Page (ads appear every 3-4 swipes).
- Low buyer intent on-platform means discounts reliably lift conversion.

## → Skill conversion note
Becomes a "Script a TikTok ad" SKILL.md: user picks one of the 8 formulas + their product, and the skill outputs a beat-by-beat script with hook options, on-screen text, and a matched CTA following the 8 rules.

### Set up a TikTok Ads Manager account from scratch, pixel, audiences, campaign, ad group, ads

## The strategy
A concrete, click-by-click walkthrough of standing up a TikTok Ads Manager account end to end: business account + pixel, conversion events, creative + UTM prep, audiences, then the campaign → ad group → ad tree. Use Custom Mode so you get full control instead of TikTok's stripped-down Simplified Mode.

## When to use it
First time launching TikTok paid, or setting up a fresh ad account for a DTC ecommerce or mobile-app advertiser. Assumes you'll run a Conversions (ecommerce) or App Installs (app) objective.

## How to execute (steps)

**1. Account + pixel**
- Sign up at ads.tiktok.com; fill country, industry, business name, timezone, phone, currency. Approval usually ~1 business day.
- Add business + billing details. Choose **Custom Mode** (not Simplified) for full features.
- Install pixel: Assets > Event > Manage > Create Pixel. Install manually (code on site) or via Shopify / Google Tag Manager. For apps, paste the TikTok App ID into your MMP (Adjust, AppsFlyer, Branch, Singular). Wait several days for the pixel to go Active.
- Define conversion events under Manage Pixel > Custom Events: Purchase, Page View, Add to Cart, Signups, etc.

**2. Creative + tracking prep**
- Ad copy limits: Display Name max **20 characters** (use company name; no URLs/handles allowed), Ad Copy max **48 characters** (longer text scrolls in a loop).
- Build UTM tags per creative/ad group with an external URL builder (Google's campaign URL builder), TikTok has no built-in UTM tool. Append them to destination URLs.
- Load all videos first: Assets > Creative > Videos. Upload pre-made or build in TikTok Video Editor (music library, text overlays, transitions, effects, stickers).

**3. Audiences**
- Customer file: Assets > Audiences > Create Audience > Customer File, **only** mobile device IDs (Apple IDFA / Google GAID). Emails, names, phone numbers cannot be uploaded.
- Lookalike: seed from the customer file; placement TikTok; pick country; choose Narrow (≈FB 1%), Balanced (≈5%), or Broad (≈10%). Recommend **Narrow**.
- Website traffic: create separate Page Views audiences at 7 / 30 / 90 days, toggle Auto-Refresh ON. Requires an active pixel.

**4. Campaign**
- Campaign > Create. Objective: Conversions (ecommerce) or App Installs (apps).
- Name it (e.g. "Prospecting" or "Creative Testing").
- Toggle **Campaign Budget Optimization OFF**; set Budget to **No Limit** (budget controlled at ad-group level). Continue.

**5. Ad group**
- Name it; promotion type "Website" for conversions; select your pixel.
- Optimization event: start on **Add to Cart** until you hit 50 pixel purchases in 7 days, then switch to **Place an Order**.
- Placement: **TikTok only** (not Pangle/News App). Toggle User Comment ON and Video Download ON.
- Demographics: location where you acquire customers; Gender All; Age 18+; leave Interest and Behavior blank initially.
- Budget: min **$20/day**; recommended **$100-200/day** through the learning phase (TikTok suggests 20× your CPA goal).
- Bidding: Optimization goal Conversion; Bid strategy **Lowest cost** (drop to Click if volume is too low, then revert to Conversion).

**6. Ads**
- In-feed: identity toggle OFF; upload profile image + display name. Spark ads: identity ON, use your linked business account's posts or a creator's authorized posts (needs an authorization code).
- Select a video from the asset library; paste ad copy.
- CTA: use **Standard** mode (not Dynamic); pick a CTA matching the action ("Shop Now"). Destination URL = your UTM-tagged link; leave Tracking fields blank.
- Duplicate the ad to spin up creative/copy variations. Check TikTok's ad review checklist, then Submit.

## Notes / caveats / examples
- Custom Mode unlocks the full feature set, Simplified Mode hides levers you'll want.
- $20/day is the floor; $100-200/day is the realistic learning-phase commitment.
- The Add to Cart → Place an Order optimization swap avoids starving a fresh pixel of signal before it has 50 purchase events.

## → Skill conversion note
Becomes a step-checklist SKILL.md ("Launch a TikTok Ads account") that walks a user through each numbered stage and outputs their filled-in campaign structure, pixel/event plan, and ad-group settings.

### TikTok ads, 3-campaign structure, creative testing, scaling, and retargeting

## The strategy
The operating system for running TikTok ads over time: a 3-campaign account structure, a disciplined creative-testing loop with clear kill/scale rules, controlled scaling, and 5 retargeting tactics. Built around the reality that TikTok creative fatigues fast, so you're always feeding the top of the funnel with fresh variants.

## When to use it
Once your account is set up and you're managing ongoing spend, structuring campaigns, deciding what to kill/scale after a test, and building a retargeting layer.

## How to execute (steps)

**Account structure (3 campaigns)**
1. Creative Testing, isolate new concepts.
2. Prospecting, deploy proven winners from testing.
3. Retargeting, ~15% of budget to engaged audiences.
- 3-4 ad sets per campaign; **3-6 live ads max per ad set** (fewer ads = better algorithm serving + spend-through).

**Creative testing loop**
1. Cast a wide net: one ad set per concept, 3-6 wildly different creatives, run a **minimum 3 full days** before judging.
2. Hook matrix: test visual × headline combos, Visual A/B/C × Headline A, then A/B/C × Headline B (the first 2-3 seconds matter most).
3. Evaluate after 3 days:
   - **Excellent** (lower CPA, 1-2 winners): scale spend 20% every 3 days in the testing campaign before promoting to prospecting.
   - **Average** (CPA within 10-20% of target): kill underperformers, let others run 3+ more days, cut any ad hitting 2× average CPA.
   - **Bad** (2×+ normal CPA, poor engagement): turn off immediately.

**Refresh cadence**
- Ads fatigue faster than on other channels, launch new creative flights every **1-2 weeks**. Expect high ad-rejection rates. Budget for substantial ongoing UGC production.

**Scaling**
- Increase spend no more than **25% per week**. Keep the majority in prospecting (grow the funnel vs. exhausting the retargeting pool).
- Watch week-over-week watch time, CTR, ROAS, declines signal audience depletion or fatigue; refresh creative.
- Creator diversification: test multiple personas (skin tones, ages) with everything else identical to reach secondary demographics (Glossier ran identical product/targeting/LP/copy/structure across different creator demographics).
- Doubling-down loop: find top performers → hire similar-looking creators → recreate the winning concept → maximize its longevity → cycle best performers into new content → repeat.

**Retargeting, build audiences from:** ad engagement (7-180 day windows), lead gen (form viewers/submitters), website traffic (1,000+ pixel events), app activity (installs/IAP/feature use). **5 tactics:**
1. Lower-funnel optimization + an incentive (discount/special offer).
2. Repurpose a performing ad with a new offer/headline (use existing creative as a template).
3. Retarget cheap TikTok TOFU traffic on other channels (Facebook, Instagram, Snapchat).
4. Optimize ad→experience transition: mirror messaging, offer, UX, design, and color between ad and landing page.
5. Retarget in-app events (25-100% video watchers, after prospecting has run 2+ weeks).

## Notes / caveats / examples
- **Testing window:** budget 6-10 weeks to validate TikTok. If you hit 50% of CAC/ROAS goals after 6-10 weeks, keep testing creative; if you're an order of magnitude off, the platform likely won't work for you.
- KPIs to track: impressions, eCPM, eCPV, average watch time, completions (25/50/75/100%), CPA, add-to-cart, initiate-checkout, ROAS, spend, installs/install-rate/eCPI.
- Collection ads and dynamic product ads (DPAs) are agency-partner only, not available to self-serve accounts.

## → Skill conversion note
Becomes a "TikTok ad manager coach" SKILL.md: user pastes 3-day test results (CPA per ad vs. target); skill classifies each ad Excellent/Average/Bad, outputs kill/scale actions, next scaling step (+20% or +25%/wk), and recommends which retargeting tactic to build next.

### TikTok targeting, bidding, and budget math, go broad, let creative do the work

## The strategy
TikTok's algorithm rewards broad targeting + strong creative, not tight interest layering. This card covers the targeting philosophy, the bidding/learning-phase mechanics, the starting-budget formula, the platform benchmarks, and the product-channel-fit checklist that tells you whether to even run TikTok.

## When to use it
Planning a TikTok media buy: setting budgets, choosing bid strategy, deciding whether your product fits the channel, and setting realistic CPM/CPC/CPA/CAC expectations.

## How to execute (steps)

**Targeting, start broad**
- Begin with broad/open targeting across all of TikTok; no interest/behavioral restrictions. Narrow targeting "handicaps the algorithm."
- Add guardrails only by gender, age, or location when business-critical (e.g. maternity brand → female).
- Available parameters: demographics (age, gender, language, location, device), interests (long-term), behaviors (last 7-15 days), video interaction (watched-to-end/liked/commented/shared by category), creator interaction (category followers/viewers).
- Custom audiences: cannot upload emails/phones; can upload MAIDs (IDFA/GAID, min 1,000). Other sources: engagement, app activity, website traffic (pixel, 1,000+ events), lead gen.

**Bidding & learning phase**
- You need **50 conversion events per week** to exit the learning phase; expect higher costs/worse results until then.
- Optimization: "Lowest-Cost" (TikTok finds cheapest conversions within daily budget) or bid for your target CPA. Optimize for clicks/views early, then graduate to oCPM/oCPC after 50 events in 7 days.
- Use **Ad Group Budget Optimization (ABO)**, not Campaign Budget Optimization (CBO), for spend/delivery control.
- Run ads 3-7 days before changing anything; never change bids by more than **20%** (resets learnings). If impressions stall, duplicate the campaign every few weeks to kickstart delivery.

**Budget math**
- Starting daily budget = (target CPA × 50) ÷ 7. Example: $35 CPA × 50 = $1,750 ÷ 7 = **$250/day**.
- Minimum $20/day; recommend spending ~20× your CPA goal.
- Allocate 10-30% of your primary paid channel's budget to TikTok. Split ~85% prospecting/creative-testing, ~15% retargeting.

## Notes / caveats / examples
- **Benchmarks:** CPM $1-5 (~1/10th of Facebook), CPC $0.10-0.20, CPA $1-4 (ecommerce), CAC ~$35 (varies by business). Blended ROAS target 2-4×.
- **Attribution limits:** single-session attribution window; in-app reporting is insufficient, validate with post-purchase surveys, dedicated coupon codes (TIKTOK15), UTMs, and third-party tools (Supermetrics, Rockerbox, Northbeam, Triple Whale, Two-Minute Reports).
- **Audience skew (US):** 10-19 = 25%, 20-29 = 22.4%, 30-39 = 21.7%, 40-49 = 20.3%, 50+ = 11% (75% are 20+, 50% are 30+).
- **Product-channel fit checklist, only run TikTok if all four are yes:** (1) can budget 10-30% of spend for a testing period; (2) strong product-channel fit (visual appeal, short sales cycle, ~$25-150 AOV, or a mobile app); (3) resources to produce high-volume channel-specific creative; (4) prior success with Snapchat, Instagram Reels, or Instagram Stories.
- **Best categories:** DTC ecommerce under $150 AOV (beauty, fashion, CPG, e.g. Jones Road, True Classic, Athletic Greens) and mobile apps/games (Coinbase, Beatstar, Hopper).
- **Premium formats:** TopView (60-sec, $65k/day minimum); Sponsored Hashtag Challenge (up to $500k), not for most self-serve budgets.

## → Skill conversion note
Becomes a "TikTok budget & fit calculator" SKILL.md: user inputs target CPA, AOV, and total paid budget; skill returns the daily budget (CPA×50÷7), the prospecting/retargeting split, a go/no-go on the 4-point fit checklist, and expected CPM/CPC/CAC ranges.

### Diagnose and re-edit video ads with thumb-stop rate, dropoff-cliff editing, and the 1/3/5-second timing framework

## The strategy
`ad-metrics-and-optimization` judges an ad on CPA over CTR. This card is the *video-specific* diagnostic layer: read the second-by-second engagement chart to find where the ad is failing (hook vs hold), fix that exact section, and structure every video around a proven timing framework so the hook lands in the first second.

## When to use it
- A video ad has spend but weak results and you need to know *why*, bad hook, bad hold, or bad offer.
- You're editing/re-cutting existing video creative rather than shooting new.
- You want a repeatable QA metric for every video before it scales.

## How to execute (steps)
1. **Build a "thumb-stop rate" custom metric.** In Ads Manager → Customize → Metrics → Create: **thumb-stop rate = 3-Second Video Plays ÷ Impressions.** Under **10%** = weak hook → remake the creative. (This is the "hook rate.")
2. **Read the per-second dropoff chart.** Open Ads Manager's per-second play chart and watch **average play time / "Video % Watched"**. Find the steepest drop points ("dropoff cliffs").
3. **Re-edit at the cliffs, not globally.** Map your cuts, text overlays, and pacing changes *against the steepest drop points* and re-edit only those sections. Don't rebuild the whole ad, fix where attention leaks.
4. **Structure to the 1/3/5-second framework.** **1s** = striking visual to stop the scroll (70% watch muted, so make it work silent). **3s** = state the product/problem. **5s** = clarity + motivation. Then layer benefits → features → social proof.
5. **Map AIDA to Meta metrics with targets.** Attention = thumb-stop rate (aim **10%+**); Interest/hold = average play time drop-off; Desire = link clicks; Action = cost per result, which should be roughly **⅓ of LTV**.
6. **Separate hook rate from hold rate.** Analyze the two independently, a great hook with poor hold is a body/offer problem; a weak hook with strong hold is a first-frame problem.

## Notes / caveats / examples
- 70% of feed video is watched muted, the 1-second visual and on-screen text carry the hook.
- Thresholds (10% thumb-stop, ⅓-of-LTV cost per result) are rules of thumb; calibrate to your account's baselines.

## → Skill conversion note
Becomes a `video-ad-doctor`: input = Ads Manager export + the per-second play data; output = a hook-vs-hold verdict, the exact timestamps to re-edit, and a pass/fail against the thumb-stop and cost-per-result thresholds.

### What YouTube ads cost and how to lower it, CPV ranges, bidding models, and cost levers

## The strategy
YouTube ads run about $0.03, $0.30 per view, but the effective cost swings on format (skippable vs. not), quality score, and targeting tightness. You lower cost by improving relevance, narrowing audiences, leaning on skippable formats, and remarketing to warm users.

## When to use it
- Budgeting a YouTube campaign or forecasting spend.
- Diagnosing why CPV is high and deciding which lever to pull.

## How to execute (steps)
1. **Match the bidding model to format:** TrueView in-stream and non-skippable = pay per view (CPV); Bumper = CPM; TrueView Discovery, Display, and Overlay = pay per click (or CPM).
2. **Use skippable (TrueView) formats** so you only pay when a viewer watches 30+ seconds or interacts, you avoid paying for uninterested viewers that non-skippable formats force you to buy.
3. **Raise your quality score:** the higher it is, the less Google charges per ad, invest in relevant, native creative.
4. **Narrow targeting:** tighter audiences generally cost less than broad ones (but note premium/in-market audiences command higher rates).
5. **Remarket** to people who already touched your brand, an inexpensive way to reach warm users.
6. **Set a daily budget** to cap spend (no hard minimum stated).

## Notes / caveats / examples
- **CPV range:** ~$0.03, $0.30 per view.
- **Cost goes up** with: competitive placements, premium demographics/interests, non-skippable format (pay for all viewers), and in-market audiences.
- **Cost goes down** with: higher quality score, narrower targeting, skippable formats, and remarketing.

## → Skill conversion note
Becomes a lookup/estimator note that feeds the YouTube ad planner skill, maps format → bidding model and lists the four cost-down levers to apply when CPV is too high.

### Run YouTube ads, pick the right format, target by audience + content, and make videos built for YouTube

## The strategy
YouTube is a cheap awareness + remarketing channel ($0.10, $0.30 per view/click) that converts slower than Search/Display and rewards native, story-driven video. Win by matching the ad format to your goal, layering audience + content targeting, and building videos specifically for YouTube's sound-on, high-intent viewer, not recycled Facebook creative.

## When to use it
- Brand awareness or remarketing for a visually demonstrable product.
- You have (or can produce) real video and a familiar brand / decent traffic volume.
- You want a lower-cost complement to Search/Facebook, accepting slower attribution.

## How to execute (steps)
1. **Choose format by goal:**
   - In-stream Skippable (TrueView): 12s, 6min, skip after 5s, charged only on 30s+ view or interaction, best all-rounder / remarketing.
   - In-stream Non-skippable: 15-20s, CPM, brand awareness.
   - Bumper: ≤6s, CPM, before videos, pair with longer in-stream for remarketing; great on mobile.
   - In-Feed (Discovery): thumbnail + headline + 2 lines, in search/recommended/home, charged per click, remarketing to recent visitors.
   - Masthead: homepage top, 24h, $300k, $400k/day minimum, only for huge awareness budgets.
2. **Target by audience:** demographics, interests, life events (marriage/graduation), remarketing to site visitors, channel-subscriber targeting.
3. **Target by content:** specific channels/videos/apps/sites, topic list, keywords (YouTube + Google Search), competitor-video viewers.
4. **Exclude** profanity/violence, embedded videos, live streams, and low-conversion content (music videos, gaming walkthroughs).
5. **Run parallel prospecting campaigns** testing different targeting angles: a specific buyer persona (demo + interest), product keywords, competitors' video viewers, related topics.
6. **Make YouTube-native creative:** don't recycle FB/IG ads (wrong aspect ratio + different behavior, YouTube = sound on, intent to watch).
7. **Front-load the hook:** show product/value in the opening shot, brand logo within the first second, no slow intros, because users skip at 5s.
8. **Tell an emotional story** (Problem → emotional connection → Solution) rather than listing features; keep production simple.
9. **Add captions** (accessibility, watch time, SEO). **End with a funnel-matched CTA** (free trial for B2B prospecting, product-page link for ecommerce remarketing) that's both visual and verbal.

## Notes / caveats / examples
- **Cost benchmark:** ~$0.10, $0.30 per view/click, cheaper than Facebook/Google Search.
- **Prospecting vs. remarketing creative:** prospecting = who you are + problem→solution; remarketing = testimonials, case studies, product depth for people who already know you.
- **Attribution gap:** YouTube's conversion window misses users who skip then search later. Add a post-purchase "How did you hear about us?" survey; more customers often pick YouTube than Google Analytics reports, because the impression lingers.
- Measure with YouTube Studio (views, watch time) + Google Ads (view rate, CPV, CTR, spend).
- Expect slower conversions than search/display; the value is long-term brand building.

## → Skill conversion note
Becomes a "YouTube ad planner" prompt: input goal + budget + creative capacity → output the format choice, an audience/content targeting matrix, the parallel prospecting-campaign set, and a scripted hook-first video outline with CTA.

---

From **God of Skills**: a curated, hand-tested directory of AI skills, prompts, templates and image style guides.
Source: https://godofskills.com/skills/paid-acquisition?ref=claude-skill
