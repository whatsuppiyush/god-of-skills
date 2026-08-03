---
name: fix-a-leaky-funnel
description: >
  Diagnose WHERE a growth funnel leaks, then route to the exact discipline that plugs it,
  instead of guessing. Use whenever the user says traffic is fine but results are not, or
  "we get visitors but no signups", "people sign up but never use it", "users try it once and
  churn", "lots of trials, few paid", "our funnel is leaking", "growth stalled and I don't know
  why", "where are we losing people", "CAC is fine but revenue isn't growing", or is staring at a
  drop-off between two funnel stages and cannot tell which one to fix. This is the orchestration
  entry point: it finds the break point with data first, then dispatches to conversion-cro,
  product-led-growth, retention-lifecycle, or pricing-monetization based on the symptom. Reach for
  it before any single fix, because fixing the wrong stage wastes the traffic you already paid for.
---

# Fix a leaky funnel

A funnel is a chain: visit → click → signup → activation → habit → purchase → retention →
expansion. Money leaks at exactly one or two joints, and every joint has a different owner.
The costliest mistake is to redesign the landing page when the real leak is activation, or to
build a referral loop when the real leak is that trials never see value. This playbook makes you
locate the leak with evidence, then hand off to the one discipline that plugs it.

Governing rule: **measure the break point before you touch anything.** The stage with the worst
conversion relative to its benchmark is the leak. Fix that stage, re-measure, then move to the
next-worst. Never fix two stages at once, or you will not know which change worked.

## When to use this

- Traffic or spend is steady, but signups, activations, or revenue are flat.
- The user describes a gap between two stages ("sign up but don't stick", "trials don't convert").
- Growth plateaued and nobody can point to the stage that broke.
- CAC looks acceptable but the business is not growing, so the leak is downstream of acquisition.
- The user is about to "fix the funnel" by rebuilding one page on a hunch.

## When NOT to use this (reach for instead)

- **The problem is upstream: wrong market, wrong channel, no product-market fit.** Then the funnel
  is not leaking, it was never a funnel. Use `strategy-fundamentals` first.
- **The user already knows the exact leak** and just wants the fix. Skip the diagnosis and go
  straight to the matching discipline below.
- **There is no traffic yet.** You cannot diagnose a leak with no water in the pipe. Use
  `launch-gtm` or the acquisition disciplines (`paid-acquisition`, `seo-content`, `organic-social`)
  to get first users, then return here.

## Step 1: Find the break point (always first)

Pull `analytics-data`. Do not skip to a fix.

Get from it:
- The **one metric that matters** for this business and the **stage-by-stage conversion** map
  (visit → click → signup → activation → retention → paid).
- Each stage's conversion rate versus a sane benchmark, so the worst relative performer stands out.
- Whether the drop is real or a **measurement artifact** (broken event, attribution mismatch,
  reported ROAS that does not match real growth). Fix instrumentation before diagnosing behavior.
- If it is a multi-step on-site flow, a belief-and-energy read of where intent dies, not just where
  clicks stop.

Output of Step 1: one named leak stage (or at most two), stated as a conversion gap with a number.
That single finding decides which branch below you take.

## Step 2: Route to the owner of the leak

Match the leak stage to its discipline. Take exactly one branch; return to Step 1 to re-measure
after the fix.

### Leak: visit or click → signup (the page does not convert)
Route to `conversion-cro`.
Get from it: hero and above-the-fold fixes, the 7-section page skeleton, trust and friction levers,
checkout or signup field surgery, and an A/B test that proves the lift. If the leak is specifically
the *words* on the page, pair with `copywriting-messaging`; if it is *why* visitors resist, pair
with `marketing-psychology`. For deeper page-level work, see the sibling `improve-conversion`
playbook, which sequences all three.

### Leak: signup → activation (people sign up but never reach value)
Route to `product-led-growth`.
Get from it: the activation metric and aha moment definition, time-to-value compression, onboarding
and empty-state design, and setup friction removal. This is the most common misdiagnosed leak:
teams blame the landing page when users are signing up fine and dying in onboarding.

### Leak: activation → retention / habit (users try it once, then fade)
Route to `retention-lifecycle`.
Get from it: onboarding-to-habit loops, streaks and daily-usage design, churn and failed-payment
recovery, win-back and post-purchase flows, and lifecycle tooling. If the retention leak is about
users not inviting others or the loop not compounding, pull `product-led-growth` for referral and
viral-loop mechanics too.

### Leak: visit or trial → buy (people engage but do not pay)
Route to `pricing-monetization`.
Get from it: the value metric, tier structure, anchoring and display psychology, trial-vs-freemium
model choice, and discount/add-on levers. A "low conversion to paid" leak is usually a pricing-model
problem wearing a conversion-page costume. Pair with `marketing-psychology` for the display and
anchoring psychology, and with `conversion-cro` for the pricing-page layout itself.

### Leak spans several stages / you are unsure it is a funnel problem at all
Escalate to `strategy-fundamentals`. A funnel that leaks everywhere is usually a product, market, or
positioning problem, not a conversion problem. Diagnose the upstream cause before optimizing joints.

## Step 3: Prove the fix, then move to the next leak

Return to `analytics-data`. Run a real experiment (adequate sample, holdout where possible) to
confirm the fixed stage actually improved and that the gain is causal, not seasonal. Make the winner
the new baseline. Then re-run Step 1: the next-worst stage is your next target. One leak at a time.

## How to adapt

- **B2B SaaS:** the leak is usually signup → activation or trial → paid. Weight Steps toward
  `product-led-growth` and `pricing-monetization`.
- **Ecommerce / DTC:** the leak is usually add-to-cart → purchase or first order → repeat. Add
  `ecommerce` alongside `conversion-cro` (cart recovery, AOV, shipping) and `retention-lifecycle`
  (reorder, win-back).
- **Content / newsletter / community:** the leak is usually visit → subscribe or subscribe → active.
  Pair `conversion-cro` with `email-marketing` and `retention-lifecycle`.
- **Data too thin to diagnose:** if `analytics-data` cannot see the stages, the first fix is
  instrumentation. A leak you cannot measure, you cannot plug. Do not guess a branch; fix tracking.
- **Two leaks look equally bad:** fix the earlier-stage one first. Downstream stages inherit the
  volume you fix upstream, so an early fix can resize the later problem.

---

From **God of Skills**: a curated, hand-tested directory of AI skills, prompts, templates and image style guides.
Source: https://godofskills.com/skills/fix-a-leaky-funnel?ref=claude-skill
