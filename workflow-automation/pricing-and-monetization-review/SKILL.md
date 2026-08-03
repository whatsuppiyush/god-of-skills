---
name: pricing-and-monetization-review
description: >
  Audit and fix how you charge and how you present it, in one ordered pass: model and tiers first,
  then display psychology, then the pricing page, then measured impact. Use whenever the user is
  setting, raising, or rethinking prices, redesigning a pricing page or tiers, or says "how much
  should I charge", "what should my tiers be", "how do I raise prices without churn", "my pricing
  page isn't converting", "should I do a free trial or freemium", "annual vs monthly", "increase
  ARPU / revenue per user", "add a discount", "usage-based pricing", "price anchoring", "sell a
  high-ticket offer", or "review our monetization". This is the orchestration entry point for
  pricing work: it sequences pricing-monetization (the model), marketing-psychology (how the number
  is perceived), conversion-cro (the pricing page mechanics), and analytics-data (proving the change
  paid off). Reach for it even when the ask sounds like a page tweak, because the model behind the
  number sets the ceiling.
---

# Pricing and monetization review

Most "pricing page" requests are actually model problems. A prettier page cannot rescue the wrong
value metric, three tiers nobody can choose between, or an anchor that makes the real offer look
expensive. This playbook works top-down: get the money model right, then make the number feel right,
then build the page that presents it, then prove the change lifted revenue and did not just shuffle
customers between tiers.

Governing principle: **the model sets the ceiling; display, page, and testing only capture what the
model makes possible.** Fix them in that order.

## When to use this

- The user is setting prices for the first time or has not revisited them in a long time.
- Revenue per user is flat, or the mix of plans is not what the business needs.
- A price increase is planned and the fear is churn.
- The pricing page gets traffic but few people pick a plan or start a trial.
- The trial/freemium model itself is in question (too many low-intent free users, or trials that
  never convert).

## When NOT to use this (reach for instead)

- **People never reach the pricing page** because an earlier funnel stage leaks: diagnose with
  `fix-a-leaky-funnel` first.
- **The page converts poorly but the model is sound** and it is really a layout/copy problem:
  use the `improve-conversion` playbook (structure → words → persuasion → proof).
- **Free users won't activate regardless of price:** that is a value/onboarding problem, route to
  `product-led-growth`.
- **Recurring-revenue retention and failed-payment recovery** (dunning, win-back, LTV over time):
  `retention-lifecycle` owns keeping the revenue you priced.

## The ordered review

### Step 1: Model and tiers: fix what you charge
Pull `pricing-monetization`.
Get from it: the **value metric** (what the price scales with), the tier structure and how many
tiers, add-ons, the trial model (free trial vs freemium vs demo), and whether the offer should be
subscription, usage-based, or high-ticket. Decide the *shape* of the money before anything visual.
This step sets the ceiling for every step after it.

### Step 2: Display psychology: make the number feel right
Pull `marketing-psychology`.
Get from it: anchoring (a high reference tier that makes the target plan look reasonable), decoy
tiers, price-display framing (charm pricing, per-day framing, annual framing), how discounts are
perceived, and social proof placed at the decision point. This is how the *same* price converts
better or worse. Apply it to the model from Step 1, not to a random price.

### Step 3: Pricing page: build the surface that presents it
Pull `conversion-cro`.
Get from it: pricing-page structure, the plan-comparison layout, CTA placement per tier, trust and
objection handling at the point of purchase, and the checkout/field surgery that gets a chosen plan
across the line. If the page copy needs rewriting, pair with `copywriting-messaging` for the plan
names, feature lines, and CTA micro-copy. This step captures the demand the model and psychology
created.

### Step 4: Measure impact: prove revenue actually moved
Pull `analytics-data`.
Get from it: the right revenue metric to watch (ARPU, revenue per visitor, not just conversion
rate), an experiment or staged rollout that isolates the pricing change, and a causal read so you
know the lift is real. Critically, check that a "win" raised total revenue rather than just moving
buyers to a cheaper tier or trading conversion rate for price. The validated change becomes the new
baseline.

## Why this order

If you A/B test a pricing page (Step 3/4) before fixing the model (Step 1), you optimize the
presentation of a broken offer and cap your own upside. If you tune display psychology (Step 2)
before choosing the value metric (Step 1), you are anchoring against the wrong number. Model first,
always.

## How to adapt

- **High-ticket / sales-assisted offers:** weight Step 1 heavily (offer construction, guarantees,
  payment terms) and pair Step 3 with `sales-outbound` or `launch-gtm` rather than a self-serve
  checkout page.
- **Ecommerce / DTC:** add `ecommerce` for bundle pricing, AOV levers, promo framing, and free-
  shipping thresholds; `pricing-monetization` still owns the base model.
- **SaaS raising prices on existing customers:** add `retention-lifecycle` to grandfather, message,
  and dun the increase without spiking churn, and use `email-marketing` for the announcement
  sequence.
- **Freemium-to-paid conversion is the real question:** pair Step 1 with `product-led-growth` so the
  free tier is a funnel, not a leak, before you touch the paywall.
- **Not enough volume to test a price:** skip Step 4's live experiment and use willingness-to-pay
  signals and cohort revenue reads from `analytics-data`; never claim significance on thin data.

---

From **God of Skills**: a curated, hand-tested directory of AI skills, prompts, templates and image style guides.
Source: https://godofskills.com/skills/pricing-and-monetization-review?ref=claude-skill
