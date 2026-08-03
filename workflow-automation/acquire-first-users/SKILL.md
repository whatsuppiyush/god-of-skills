---
name: acquire-first-users
description: >
  The ordered playbook for getting from zero to your first ~1000 users. It sequences the right
  discipline skills: pick the one channel that fits, run that channel hard, convert the traffic it
  sends, activate the users who sign up, and measure so you double down on what works. Use whenever
  the user is pre-launch or newly launched with few or no users, asks "how do I get my first users",
  "how do I get to 1000 users", "where do I find early customers", "which channel should I start
  with", "I have a product but no traffic", or "nobody's signing up yet". Reach for this instead of
  guessing a single tactic, because early traction fails more often from picking the wrong channel
  or leaking the funnel than from a weak tactic.
---

# Acquire first users: the playbook

Early traction is a sequence, not a hack. The common failure is spraying effort across every
channel, or driving traffic into a funnel that leaks. Concentrate on one channel, convert what
it sends, and let the users who stick tell you where to double down. Run the steps in order.

## When to use this

- Pre-launch or freshly launched with few or no users.
- "How do I get my first users / first 1000 users / early customers".
- "Which channel should I start with" when nothing is running yet.
- A product exists but no repeatable acquisition does.

If this is a time-boxed launch moment (Product Hunt, press, a drop), use the **launch-a-product**
playbook. If a specific channel is already chosen and working, invoke that channel skill directly.

## The sequence

### Step 1 - Pick the one channel
Invoke `strategy-fundamentals`.
Get: the single channel to concentrate on, chosen from where your specific, high-intent audience
already is. Under-resourcing five channels produces five false negatives. Pick one primary channel
(and at most one backup) and commit for long enough to read a real signal.

### Step 2 - Run the chosen channel
Invoke the skill for the channel Step 1 picked:
- `seo-content` - if the audience searches for the problem. Slow to start, compounds.
- `paid-acquisition` - if you can pay to reach them and the unit economics allow it.
- `organic-social` - if the audience clusters on a platform and you can create for it.
- `sales-outbound` - if the buyers are known, few, and worth a personal cold email or DM.
Get: a repeatable motion that reliably sends the right visitors, using hooks and copy from
`copywriting-messaging`. Resist adding a second channel until this one produces traction.

### Step 3 - Convert the traffic
Invoke `conversion-cro`; pull words from `copywriting-messaging`.
Get: a landing page or signup flow that turns the visitors from Step 2 into signups, with the
channel-to-page message match verified so the traffic you worked for does not bounce. Early on,
a converting page beats more traffic every time.

### Step 4 - Activate the signups
Invoke `product-led-growth`.
Get: an onboarding path that carries new signups to their first real value (the aha moment) fast,
and, if the product allows, an invite or referral loop so early users bring the next ones. A
signup that never activates is not a user.

### Step 5 - Measure and double down
Invoke `analytics-data`.
Get: the activation metric that defines a real user, an honest read of which Step-2 channel and
Step-3 page actually drive activated users (not vanity signups), and the ranked next experiment.
Feed this back into Step 1: keep the channel that works, cut the one that does not.

## How to adapt

- **No budget:** bias Step 2 to `seo-content`, `organic-social`, or `sales-outbound`; skip
  `paid-acquisition` until you have proof and cash.
- **B2B with named buyers:** lead Step 2 with `sales-outbound` and founder-led selling; a handful
  of design-partner conversations beats broad reach.
- **Consumer app with a social hook:** weight Step 4 toward the referral/viral loop in
  `product-led-growth`; the loop is the channel.
- **Ecommerce/DTC:** add `ecommerce` at Steps 3 and 4 for store conversion, cart recovery, and the
  post-purchase flow, and `email-marketing` to capture and nurture early buyers.
- **Want a proven pattern before you build:** run `growth-teardowns` to copy a zero-to-one play
  from a company that already did it, then slot it into the right step.

Whenever the bottleneck turns out to be upstream ("is this even the right audience", "the product
has no fit"), stop and route back through the `growth-os` master router before spending more.

---

From **God of Skills**: a curated, hand-tested directory of AI skills, prompts, templates and image style guides.
Source: https://godofskills.com/skills/acquire-first-users?ref=claude-skill
