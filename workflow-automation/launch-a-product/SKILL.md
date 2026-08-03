---
name: launch-a-product
description: >
  The ordered playbook for launching a product or running a go-to-market push. It sequences the
  right discipline skills into one workflow: strategy and positioning first, then message and copy,
  then the launch moment (Product Hunt, press, limited drop), then the acquisition channels that
  carry it, then the analytics that prove it worked. Use whenever the user is launching a new
  product, feature, or store; planning a Product Hunt or press launch; running a limited or capped
  drop; asking "how do we go to market", "how do I launch this", "what's the launch plan", or
  "we're launching next month, what's the order of operations". Reach for this instead of firing a
  single skill when the launch touches strategy, brand, copy, channels, and measurement at once.
---

# Launch a product: the playbook

A launch is not one skill, it is a sequence. Skip the upstream steps and you launch a
well-marketed product nobody wants, or a great product with a message nobody remembers. Run
the steps in order. Each step names the discipline skill to invoke and what to walk away with.

## When to use this

- Launching a new product, feature, store, or major version.
- Planning a Product Hunt launch, a press push, or a limited/capped drop.
- A time-boxed go-to-market moment where several disciplines have to line up.
- The user asks "how do we launch", "what's the plan", or "what order do I do this in".

If the goal is steady zero-to-first-users acquisition rather than a launch moment, use the
**acquire-first-users** playbook instead. If the request is a single piece of a launch (just
the copy, just the ads), invoke that discipline skill directly.

## The sequence

### Step 1 - Decide the bet (before any asset)
Invoke `strategy-fundamentals`.
Get: which segment and job-to-be-done you are launching for, whether the product actually has
fit, which one or two channels you will concentrate on, and a one-line strategy. If there is no
diagnosis, everything downstream is guesswork. Do not skip this even under deadline.

### Step 2 - Positioning and brand
Invoke `brand` (pull in `strategy-fundamentals` output).
Get: the positioning against an incumbent or category, the differentiator competitors cannot
also claim, the name/tagline, and the voice the launch speaks in. This is what makes the launch
memorable instead of generic.

### Step 3 - Message and copy
Invoke `copywriting-messaging`; add `marketing-psychology` for the persuasion triggers.
Get: the launch headline, value prop, the announcement copy, and the hooks you will reuse across
Product Hunt, email, social, and ads. Turn features into benefits and handle the obvious
objections here, once, then reuse everywhere.

### Step 4 - Price and offer (if money changes hands at launch)
Invoke `pricing-monetization`.
Get: the launch pricing, any launch-only discount or founder tier, and how the price is
displayed. Lock this before the assets quote a number.

### Step 5 - Run the launch moment
Invoke `launch-gtm`.
Get: the channel for first users, the Product Hunt run-of-show, the press outreach list and
angle, and any scarcity mechanic for a limited drop. This is the spike-day playbook.

### Step 6 - Carry it with acquisition channels
Invoke the channel skills that fit the concentrated channel from Step 1:
- `paid-acquisition` to put spend behind the launch creative.
- `organic-social` to earn reach and ride the launch-day attention.
- `email-marketing` to fire the launch sequence to your list.
- `sales-outbound` if the motion is founder-led or sales-driven.
- `influencer-creator` to seed creators around the moment.
Get: live campaigns using the Step-3 hooks, message-matched to the landing page.

### Step 7 - Convert the attention
Invoke `conversion-cro`.
Get: a launch landing page that turns the spike into signups or sales, with the ad-to-page
message match verified so paid clicks do not bounce.

### Step 8 - Prove it worked
Invoke `analytics-data`.
Get: the launch North Star and the handful of KPIs to watch, an honest read on whether the
lift was real (not just platform-reported ROAS), and the ranked list of what to fix next.

## How to adapt

- **Tiny or solo launch:** collapse Steps 2 to 4 into a single positioning-plus-copy pass, but
  never skip Step 1 (strategy) or Step 8 (measurement).
- **No press or Product Hunt in scope:** Step 5 shrinks to the launch checklist; put the weight
  on Steps 6 and 7.
- **Ecommerce/DTC launch:** add `ecommerce` alongside Steps 5 to 7 for store mechanics, cart
  recovery, and AOV, and use `retention-lifecycle` for the post-purchase flow.
- **Free product with a viral angle:** insert `product-led-growth` between Steps 5 and 6 to build
  the invite/referral loop into the launch itself.
- **Want a proven template first:** run `growth-teardowns` before Step 5 to copy a launch pattern
  from a company that already nailed it.

When any single step raises a question bigger than the launch ("is this even the right channel",
"why is nothing converting"), stop and route through the `growth-os` master router.

---

From **God of Skills**: a curated, hand-tested directory of AI skills, prompts, templates and image style guides.
Source: https://godofskills.com/skills/launch-a-product?ref=claude-skill
