---
name: analytics-data
description: >
  The discipline of measuring growth honestly: finding the metric that matters, proving a change
  actually caused a result, and prioritizing what to test next. Use whenever the user is choosing
  KPIs or dashboard metrics, mentions activation threshold / magic number / aha metric, wants to
  run or audit A/B experiments, asks "did this actually work / was it causal", is confused why
  platform ROAS doesn't match real growth, needs attribution or incrementality or holdout tests,
  wants to measure PMF, is designing surveys (Sean Ellis 40% test, churn, post-purchase NPS),
  needs to prioritize a backlog (RICE / DRICE), or is stalling on growth and debating tactics.
  Trigger phrases: "which metric should I track", "is this a vanity metric", "how do I prove
  incrementality", "why is my reported ROAS so high", "how do I measure PMF", "what should I test
  next", "how do I prioritize experiments", "growth is stalling, where's the problem".
---

# Analytics & Data

Measure what's real. This skill covers the research and measurement layer every other discipline
depends on: pick metrics that reflect true health, diagnose where growth is constrained before
prescribing a fix, run experiments with enough rigor to trust them, separate what happened from
why, and prioritize the backlog objectively.

## When to use this

Reach for analytics-data whenever a decision hinges on a number being trustworthy. Trigger
signals:

- **Metric selection:** setting up a dashboard; choosing KPIs; suspecting a metric is inflated
  (SMS/email open rate); wanting a single number for growth quality.
- **Diagnosis:** growth is stalling and the team is debating tactics; you need to know *where*
  the system is breaking before spending budget.
- **Activation measurement:** finding the activation threshold / magic number; comparing cohorts
  that crossed vs didn't cross a behavior; setting an experiment rhythm.
- **Experiments:** building or auditing an A/B program; deciding what to test next; wondering
  when to call a winner; most tests "failing."
- **Attribution:** reported ROAS not matching business growth; evaluating paid channels;
  allocating budget; recovering "dark" conversions that clicks and coupons miss.
- **What vs why:** about to scale a winning test without knowing the mechanism.
- **Surveys:** measuring PMF; diagnosing churn; post-purchase voice-of-customer.
- **Prioritization:** more experiment ideas than capacity.

## When NOT to use this (reach for instead)

- **To design the growth intervention itself** (the onboarding redesign, the referral loop, the
  default, the habit hook) use `product-led-growth`. Analytics-data measures whether it worked;
  PLG builds the thing being measured.
- **To decide strategic direction, positioning, or channel-market fit** use
  `strategy-fundamentals`. This skill sits *under* every discipline: it supplies the
  measurement and prioritization that strategy, PLG, CRO, paid, and lifecycle all rely on. When
  a diagnosis points to a strategy problem (the three break points map to the Five Fits), hand
  off there.

## How this works (decision path)

Diagnose before you prescribe, and always pair a *what* with a *why*.

1. **Growth is stalling and the team is guessing?** Start with **growth-model diagnosis**. Build
   the equation, run sensitivity analysis to find the highest-leverage variable, and map the
   symptom to one of three break points *before* choosing any tactic.
2. **Need to know if you're even measuring the right thing?** Run the **metrics audit**: SaaS
   Quick Ratio for growth quality, the five brand metrics, and drop vanity metrics.
3. **The problem is activation specifically?** Use the **activation-threshold** method: compare
   crossed-vs-didn't cohorts to find the predictive behavior, then run a weekly hypothesis →
   ship → measure loop with a user-volume gate.
4. **Have a backlog of ideas?** Score them with **RICE / DRICE** so priority is arithmetic, not
   argument.
5. **Running a test?** Apply **experiment discipline**: 7-question checklist, bottom-of-funnel
   first, redefine success as learning, know when to break the rules.
6. **A test won and you want to scale it?** Stop. Run the **what-vs-why** check first. A wrong
   learning is worse than no learning.
7. **Judging a channel or paid spend?** Use **attribution & incrementality**: holdouts over
   platform ROAS, widened windows, survey-based attribution.
8. **Need direct signal from users?** Use **survey methods** (PMF, churn, post-purchase) with a
   quality gate.

## The plays

### Diagnose before prescribing
- **Build a growth model, run sensitivity analysis, map symptoms to the three break points**

### Metrics that reflect real health
- **Track the SaaS Quick Ratio + five brand metrics; drop vanity metrics**

### Activation measurement and cadence
- **Find the activation threshold via crossed-vs-didn't cohorts + weekly experiment loop**

### Experiment rigor
- **Run disciplined A/B tests (7-question checklist, success as learning, break-the-rules by stage)**
- **Pair every quantitative win with qualitative why-research before scaling**

### Prioritization
- **Score and rank initiatives with RICE, level up to DRICE for mature teams**

### Attribution and incrementality
- **Measure incrementality with holdouts, widen attribution windows, survey for discovery**

### Direct-from-user research
- **Run growth surveys that inform decisions (Sean Ellis PMF, segmented churn, post-purchase, math-gate)**

### Data foundation
- **Stand up a CDP and first-party data strategy before personalizing**

## Key numbers & benchmarks

- **SaaS Quick Ratio** = (New MRR + Expansion MRR) ÷ (Churned + Contraction MRR). 4+ excellent,
  2-4 healthy, 1-2 at-risk, <1 declining. Monitor monthly.
- **PMF threshold:** ≥40% of activated users answering "very disappointed" if they could no
  longer use the product (Sean Ellis test, 100+ activated users, run quarterly).
- **Experiment reality:** ~90% of A/B tests don't beat control. Call winners at 98%+ confidence
  in startups (vs the standard 90%); spot-check day 1-2 for bugs but don't peek on short tests.
- **Activation reads:** push ~200-300 users through an intervention per weekly batch for a
  practical read without waiting months. Magic-number example: Facebook's 7 friends in 10 days.
- **Attribution:** across 299 brands, Google brand-search ROAS collapsed from 19x reported to
  5.7x incremental under holdouts. ~60% of ChatGPT-ad conversions land outside the immediate
  click window, so extend attribution windows to 7-14 days. Post-purchase surveys can hit 80%+
  completion and recover discovery that links and coupons miss.
- **RICE** = Reach × Impact × Confidence ÷ Effort. Impact scale: <5% = 3, up to >20% = 20;
  Effort 1-60+ in person-time. DRICE adds a written hypothesis, a bottom-up financial model, and
  a task-level cost estimate.
- **Three break points:** Market↔Product (good feedback, low retention → fix relevance/urgency);
  Model↔Market (late-stage stalls, pricing friction → realign packaging); Product↔Channel (high
  traffic, weak activation → match product friction to channel intent).
- **Vanity metrics to drop:** SMS open rate (~99%, meaningless), email open rate. Track CTR and
  channel-specific redemption instead.

---

## Reference library

Every play above, in full.

### Find your activation threshold by comparing crossed-vs-didn't cohorts, then run a weekly hypothesis→ship→measure loop to move it

## The strategy
Every product has an activation threshold, an action or count that separates users who stick from users who churn. Find it by comparing cohorts, then design an intervention to push more users across it, on a tight weekly experiment cadence.

## When to use it
Improving activation/retention; finding your "aha" or magic-number metric; setting an experiment rhythm.

## How to execute (steps)
1. **Track all actions (issue #226):** instrument events in GA4 + Mixpanel/Amplitude.
2. **Map user stages** across the lifecycle.
3. **Compare cohorts that crossed vs didn't cross** a behavior to find the variable that predicts retention (the activation threshold).
4. **Design a threshold intervention:** push mobile-app install, notifications, "People You May Know," bundles/reminders, whatever nudges users to hit the threshold.
5. **Run a weekly loop (issue #278):** hypothesis → ship → get ~200-300 users through it → pause → measure. Use Hotjar + Fullstory session watching. Pause underperforming ads to fix the funnel instead of spending more.

## Notes / caveats / examples
- The crossed-vs-didn't cohort comparison is the concrete method behind "magic number" activation metrics (e.g. Facebook's 7 friends in 10 days).
- The weekly ~200-300-user batch is a practical minimum for a read without waiting months.

## → Skill conversion note
Strong skill candidate: an "activation finder" that structures the crossed-vs-didn't cohort comparison, proposes threshold interventions, and sets up a weekly hypothesis→ship→measure cadence with a user-volume gate.

### Measure incrementality with holdouts (not platform ROAS), extend attribution windows to 7-14 days, and use surveys to catch discovery that links miss

## The strategy
Platform-reported ROAS massively overstates real impact because it claims conversions that would have happened anyway. Measure incrementality with holdouts, widen attribution windows to catch delayed conversions, and use surveys to capture discovery that clicks and coupons never see.

## When to use it
Evaluating paid channel performance, deciding budget allocation, or reconciling why "reported ROAS" doesn't match business growth.

## How to execute (steps)
1. **Measure incrementality with holdouts (issue #335):** across 299 brands, Google brand-search ROAS collapsed from 19x reported to 5.7x incremental. Use blended efficiency (total revenue ÷ total spend) and optimize marginal ROAS, not the blended average. Feed closed-won revenue + margin data back to the algorithms.
2. **Extend attribution windows to 7-14 days (issue #333):** ~60% of ChatGPT-ad conversions land outside the immediate click window. Also measure branded-search lift as a signal.
3. **Attribute via post-purchase surveys, not just links/coupons (issue #038):** Enquire for Shopify hits 80%+ completion; real influencer ROAS is higher than links show because people discover via an influencer but convert later, direct.
4. **Measure content ROI with unique thank-you pages (issue #051):** redirect lead forms to a `/thank-you/` URL, set it as a GA goal, and track completions against content cost to compute CAC.

## Notes / caveats / examples
- The 19x → 5.7x collapse on Google brand search is the headline case for why holdouts beat platform ROAS.
- Surveys and widened windows together recover the "dark" conversions that link-based attribution structurally undercounts.

## → Skill conversion note
Strong skill candidate: an "incrementality auditor" that flags channels being judged on platform ROAS, recommends a holdout test design, sets attribution windows by channel, and adds a survey-based attribution question.

### Stand up a CDP and first-party data strategy before personalizing

## The strategy
Personalization only works if data is unified, high-quality, and privacy-respecting. A Customer Data Platform (CDP) is the foundation layer that consolidates data, updates profiles in real time, and powers downstream tools. First-party data is becoming the only viable option under GDPR/CCPA.

## When to use it
Before scaling personalization tactics, and matched to your data maturity stage (don't buy a CDP if you have no data strategy yet).

## How to execute (steps)
- Answer the data-strategy prerequisites first: What business outcomes? What KPIs map to them? What tools execute them? What data powers those tools? How will segmentation work?
- Pick a CDP (e.g. mParticle) for: single tracking API, rule/conditional automation, opt-in/opt-out privacy management, real-time profiles; it integrates with Amplitude, Braze, Klaviyo, Salesforce, GA, Intercom, Zendesk.
- Prefer first-party data (forms, surveys, behavioral tracking) over second-party (another org's first-party) or third-party (aggregators, most regulated).
- Follow the maturity model: Stage 1 Beginner (no strategy → start with an analytics tool like Indicative), Stage 2 Informed (leadership standardizing data → implement CDP), Stage 3 Advanced (full strategy + high-volume experiments → CDP in use).

## Notes / caveats / examples
- Governance principles: collect responsibly with transparency; adopt a customer-centric mindset beyond compliance; respect privacy boundaries to earn trust.

## → Skill conversion note
Reference/checklist rather than a generative skill: informs a "data-readiness assessment" that classifies a company's stage and recommends the next infra step.

### Run disciplined A/B experiments, redefine success as learnings, score with a 7-point checklist, prioritize bottom-of-funnel, and know when to break the rules

## The strategy
~90% of experiments don't beat control, so a program that only counts "lifts" as wins will look like failure. Judge experiments on rigor and learning, run them in the right order, and adapt the statistical rules to your stage.

## When to use it
Building or auditing an experimentation program; deciding what to test next and when to call a winner.

## How to execute (steps)
1. **Redefine success (issues #068, #317):** ~90% of tests don't beat control, count rigor and learnings as wins; a sloppy or inconsequential test is the real failure. Score candidates with a modified RICE (Reach / Impact / Cost / Evidence, each 1-10).
2. **Run the 7-question pre/post checklist (issue #132):** measurable hypothesis; stakeholder pre-commitment to acting on results; enough volume for significance (Optimizely calculator); Twyman's-Law skepticism of surprising results; cause vs correlation; share findings; confirm it drove a decision.
3. **Prioritize bottom-of-funnel first (issue #074):** checkout/purchase-flow tests have higher intent and clearer north-star links; top-funnel tests risk becoming vanity tests.
4. **Sequence your test types (issue #317):** escalate Minimum Viable Tests from interviews → waitlist pages → prototypes → ads+LP → A/B.
5. **Know when to break rules (issue #071):** in startups, test cumulative multi-variable changes for speed; spot-check day 1-2 for bugs but only call winners at 98%+ confidence (vs the standard 90%); don't peek on short tests.
6. **Prefer 3 tracked experiments over 20 random AI-run tests (issue #265):** log each in a template, hypothesis + customer evidence, upfront success criteria, results + root cause, next test.
7. **Override winners that hurt LTV/ethics/brand (issue #051):** Netflix picked the two-costar Grace and Frankie image over the higher-clicking solo one to protect brand integrity.

## Notes / caveats / examples
- Segment flat results by source/cohort/device before declaring "no effect", a flat aggregate can hide organic +20% / social −10%.
- The point of the checklist is that a test only counts if a decision was pre-committed to its outcome.

## → Skill conversion note
Strong skill candidate: an "experiment reviewer" that runs a proposed test through the 7-question checklist, assigns a modified-RICE score, flags top-funnel vanity tests, and enforces confidence thresholds by company stage.

### Diagnose before you prescribe, build a growth model, run sensitivity analysis to pick the lever, and map symptoms to the three predictable break points

## The strategy
Teams jump to solutions ("let's try a new channel") before diagnosing where growth is actually constrained. Build an explicit growth model, find the highest-leverage variable with sensitivity analysis, and match the symptoms you see to one of three predictable break points.

## When to use it
When growth is stalling and the team is debating tactics; before committing budget to a "fix."

## How to execute (steps)
1. **Run the 6-step problem-discovery workflow (issue #313):** define goal + constraints (e.g. "+$400k MRR in 90 days under $50k/mo cost") → build a growth model (Revenue = customers × rev/customer; customers = leads × conversion) → run sensitivity analysis or work backward → pick a lever by impact/feasibility/evidence → diagnose the root cause before prescribing → then enter solution discovery.
2. **Ask "where is this system breaking?" and map to 3 break points (issue #304):**
   - **Market↔Product**, good feedback but low retention, "interesting, but…" → fix relevance/urgency.
   - **Model↔Market**, late-stage stalls, discount/procurement friction → realign pricing/packaging.
   - **Product↔Channel**, high traffic but weak activation → match product friction to channel intent.
3. **Diagnose, then prescribe:** only after the model and break-point analysis do you choose a tactic.

## Notes / caveats / examples
- The growth model turns "growth is slow" into a specific equation where you can see which variable moves the outcome most.
- The three break points are the operational, symptom-first version of the strategy-fundamentals Five Fits, pair them.

## → Skill conversion note
Strong skill candidate: a "growth diagnostician" that builds a growth model from stated goals/constraints, runs sensitivity analysis to rank levers, and maps observed symptoms to the three break points before suggesting tactics.

### Track the metrics that reflect real health, SaaS Quick Ratio, five brand-performance metrics, and drop inflated vanity metrics like SMS/email open rate

## The strategy
The metric you put on the dashboard shapes behavior. Pick metrics that capture genuine growth quality and brand health, and stop reporting inflated vanity metrics that make everything look fine.

## When to use it
Setting up a growth dashboard, choosing KPIs, or auditing whether current metrics actually reflect the business.

## How to execute (steps)
1. **Track the SaaS Quick Ratio (issue #164)** = (New MRR + Expansion MRR) ÷ (Churned + Contraction MRR). Benchmarks: 4+ excellent, 2-4 healthy, 1-2 at-risk, <1 declining. Monitor monthly, it exposes whether growth is outrunning churn.
2. **Track 5 brand-performance metrics (issue #114):** branded search volume, organic mentions, ad CTR, B2B sales-cycle compression, and conversion rate. Set a baseline and track monthly.
3. **Drop inflated vanity metrics (issue #043):** stop using SMS open rate (~99%, meaningless) or email open rate as a KPI; track CTR and channel-specific redemption (e.g. SMS discount-code redemption) instead.

## Notes / caveats / examples
- The Quick Ratio is one number that tells you if you're building or leaking, expansion and new revenue vs churn and contraction.
- Brand metrics are lagging and easy to ignore; a monthly baseline makes brand investment measurable.

## → Skill conversion note
Strong skill candidate: a "KPI auditor" that computes the SaaS Quick Ratio from MRR inputs, benchmarks it, checks a dashboard for vanity metrics (open rates), and recommends the brand-performance set.

### Score and rank growth initiatives with RICE, and level up to DRICE (add a written hypothesis, financial model, and task-level cost) for advanced teams

## The strategy
Stop debating which experiment to run next based on who argues hardest. Score every initiative objectively with RICE, and for mature teams extend it to DRICE so scoring also captures a hypothesis, a financial impact model, and real cost.

## When to use it
Prioritizing a backlog of growth experiments, features, or campaigns when the team has more ideas than capacity.

## How to execute (steps)
1. **Score with RICE** = Reach × Impact × Confidence ÷ Effort. Use concrete scales: Impact <5% = 3, up to >20% = 20; Effort measured 1-60+ (person-time).
2. **Rank objectively** by the RICE score rather than debating, it turns argument into arithmetic.
3. **Upgrade to DRICE for advanced teams:** add a written **Hypothesis**, a **bottom-up financial impact model**, and a **task-level cost estimate**. Transparent scoring also encourages teams to submit "crazy" ideas (a Komissarouk RICE template is linked in the issue).
4. **Keep the scales consistent** across the backlog so scores are comparable.

## Notes / caveats / examples
- RICE's value is objectivity; DRICE adds financial rigor and a paper trail of the reasoning, which also de-risks bold ideas.
- Pairs with the experiment-discipline card (modified RICE using Evidence) and growth-model-diagnosis (picking the lever before scoring tactics).

## → Skill conversion note
Strong skill candidate: a "RICE/DRICE scorer" that takes a list of initiatives, prompts for each factor with the concrete scales, computes and ranks scores, and optionally attaches the DRICE hypothesis + financial model fields.

### Run growth surveys that actually inform decisions, Sean Ellis 40% PMF test, segmented churn surveys, post-purchase zero-party surveys, and a math-gate for quality

## The strategy
Surveys are the cheapest way to measure PMF, diagnose churn, and get attribution and voice-of-customer, but only if you ask the right question to the right segment and filter out low-effort responses.

## When to use it
Measuring product-market fit, diagnosing why users churn, learning attribution/discovery channels, or gathering voice-of-customer at scale.

## How to execute (steps)
1. **Sean Ellis PMF survey (issue #081):** ask 100+ activated users "How would you feel if you could no longer use [product]?" ≥40% answering "very disappointed" signals PMF. Run it quarterly.
2. **Segment the PMF/churn survey (issue #082):** use a template (pmfsurvey.com in Typeform) asking discovery / loss-feeling / alternatives / benefit / recommend, segmented by loyal vs infrequent vs never-engaged trial users to isolate churn and activation blockers.
3. **Post-purchase zero-party survey (issue #047):** ~1 week after purchase, ask 3 questions, attribution, "how would you feel without the product," 0-10 NPS. Incentivize with 3× 20% vouchers (1 personal + 2 referral). Then book 15-min calls with the top 10% by RFV to learn channels and search terms.
4. **Add a math-question gate (issue #131):** put a 2-digit addition question at the survey start to weed out speeders and force reflection → higher-quality responses.

## Notes / caveats / examples
- 40% "very disappointed" is the canonical PMF threshold; segmenting by user type turns a single score into an activation/retention diagnosis.
- The math-gate is a cheap quality filter for any incentivized survey.

## → Skill conversion note
Strong skill candidate: a "growth survey builder" that generates a Sean-Ellis PMF survey, a segmented churn survey, and a post-purchase zero-party survey with a math-gate and an incentive/voucher structure.

### Never scale a "learning" until you know WHY it won, pair quantitative tests (what) with qualitative research (why) or a wrong learning will cost you

## The strategy
A/B tests, cohorts, and heatmaps tell you WHAT happened, not WHY. Scaling a result without understanding the mechanism bakes in a false learning that's worse than no learning at all. Pair every quantitative win with qualitative research before you scale it.

## When to use it
After any winning test or observed metric shift, before pouring budget into "what worked."

## How to execute (steps)
1. **Spot the what-vs-why trap (issue #310):** a team saw higher ROAS from female-model creative and scaled the "learning" without validating why, was it the model, the algorithm, the culture, timing? They scaled a correlation.
2. **Pair methods:** run the quantitative test (A/B, cohort, heatmaps) that shows *what*, then qualitative research (interviews, surveys) that explains *why*, before scaling.
3. **Use qual to interrogate A/B winners (issue #030):** after a variant wins, use Hotjar heatmaps + post-purchase surveys to learn *why* it won, then feed that into the next test.
4. **Audit your learning log:** for each logged "learning," check whether you approached *why* or only observed *what*. A wrong learning is worse than no learning.

## Notes / caveats / examples
- The rule: "a wrong learning is worse than no learning." Correlational wins scaled as causal truths are how teams pour budget into the wrong lever.
- This is the qualitative bookend to the experiment-discipline card's quantitative rigor.

## → Skill conversion note
Strong skill candidate: a "learning validator" that, given a test result a team wants to scale, forces a why-hypothesis, checks whether qualitative evidence supports it, and flags unvalidated correlations before scale-up.

---

From **God of Skills**: a curated, hand-tested directory of AI skills, prompts, templates and image style guides.
Source: https://godofskills.com/skills/analytics-data?ref=claude-skill
