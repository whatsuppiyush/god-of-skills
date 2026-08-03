---
name: improve-conversion
description: >
  Raise the conversion rate of a specific page or flow by running four disciplines in the right
  order: structure, words, persuasion, then proof. Use whenever the user wants more signups, leads,
  sales, or trials from the same traffic on a landing page, homepage, pricing page, product page,
  signup, or checkout, and says "improve my conversion rate", "my page gets traffic but nobody
  converts", "fix this landing page", "why do people bounce", "make this page convert", "rewrite my
  hero", "optimize my signup flow", "increase my CTR to signup", or "what should I change on this
  page". This is the orchestration entry point for single-page/single-flow conversion work: it
  sequences conversion-cro (the structure), copywriting-messaging (the words), marketing-psychology
  (the persuasion), and analytics-data (the proof) so they build on each other instead of fighting.
  Reach for it even when the user only pastes a URL and says "make this better".
---

# Improve conversion

Conversion work fails when people do it out of order: they polish clever copy on a page whose
structure buries the CTA, or they A/B test a button color before the value proposition is even
legible. This playbook fixes the sequence. Get the skeleton right, then the words, then the
persuasion, then prove the lift with a real test. Each layer assumes the one below it is already
solid.

Governing formula, carried from `conversion-cro`: **Conversion = Desire minus (Labor plus
Confusion).** Structure removes labor and confusion, copy and psychology raise desire, analytics
tells you whether you actually moved it.

## When to use this

- One page or flow gets real traffic but converts poorly, and the user wants it fixed.
- The user pastes a URL or describes a hero/pricing/checkout and asks "make this convert".
- A rewrite is needed and you want copy that survives on a well-built page, not in a vacuum.
- The user is about to run an A/B test and needs to know what to change and how to measure it.

## When NOT to use this (reach for instead)

- **You do not yet know which stage of a multi-step funnel is leaking.** Diagnose first with the
  sibling `fix-a-leaky-funnel` playbook, then come here for the page it points to.
- **The price or model is the real blocker** (people understand the offer and still won't pay):
  use `pricing-monetization`, optionally via the `pricing-and-monetization-review` playbook.
- **There is no traffic to convert yet:** acquisition first (`paid-acquisition`, `seo-content`,
  `organic-social`, `launch-gtm`).
- **The whole strategy is wrong** (wrong audience, wrong channel, no PMF): `strategy-fundamentals`.

## The diagnostic order (run these in sequence)

### Step 1: Structure: fix the page skeleton
Pull `conversion-cro`.
Get from it: the above-the-fold/hero diagnosis (the hero does ~90% of the work), the fixed
7-section page structure, CTA placement, trust and friction levers, and checkout or signup field
surgery. Decide WHERE every element goes and whether the page passes the "do they know what you
sell in 5 seconds" test before you polish a single sentence. A great sentence in the wrong slot
does nothing.

### Step 2: Words: write the copy that fills the skeleton
Pull `copywriting-messaging`.
Get from it: the headline and value prop (one competitors cannot also claim), features turned into
benefits, objection handling, CTA and micro-copy, and a framework (PAS, BAB, AIDA) to structure the
argument. Mine real customer language so the page sounds human, not like a pitch deck. This step
fills the slots `conversion-cro` defined; do not let it move the slots.

### Step 3: Persuasion: tune the psychology
Pull `marketing-psychology`.
Get from it: the levers that raise perceived value without changing the product, anchoring and
price-display framing, social proof placement, scarcity and urgency used honestly, and CTA phrasing
that lowers resistance. Apply these on top of solid structure and clear copy. Persuasion applied to
a confusing page just makes the confusion louder, which is why it comes third.

### Step 4: Proof: verify with an experiment
Pull `analytics-data`.
Get from it: the right conversion event to track, an A/B test sized for real significance, and a
causal read (holdout or before/after with guardrails) so you know the lift is real and not seasonal.
Ship only funnel-moving changes to test; the winner becomes the new baseline. Without this step you
have opinions, not a lift.

## Why this order

Structure caps what copy can achieve; copy caps what psychology can amplify; psychology is only
worth measuring once the first three are in place. Running them backward (test → psychology → copy →
structure) means every test fights a broken foundation and you learn nothing durable.

## How to adapt

- **Quick win vs. full rebuild:** if traffic is low, the single highest-value micro-change is
  rewriting the hero header (Steps 1 to 2 only). Save the full four-step pass for pages with enough
  traffic to test.
- **Ecommerce product/checkout page:** add `ecommerce` after Step 1 for cart, AOV, shipping, and
  scarcity-framing specifics; keep `conversion-cro` for the field-level checkout surgery.
- **Pricing page specifically:** run the `pricing-and-monetization-review` playbook instead, since
  the number and model matter more than the layout there.
- **SaaS signup/onboarding flow (not a marketing page):** the "conversion" is activation; route to
  `product-led-growth` for onboarding and time-to-value, still closing with `analytics-data`.
- **Too little traffic to reach significance:** skip Step 4's A/B test and use judgement plus
  session review from `analytics-data`; do not fabricate significance on a tiny sample.

---

From **God of Skills**: a curated, hand-tested directory of AI skills, prompts, templates and image style guides.
Source: https://godofskills.com/skills/improve-conversion?ref=claude-skill
