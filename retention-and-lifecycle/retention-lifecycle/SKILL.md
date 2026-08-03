---
name: retention-lifecycle
description: >
  The keep-and-grow-customers discipline: activation, onboarding, churn and failed-payment
  recovery, loyalty, referral, gamified habit loops, surprise-and-delight gifting, and the
  lifecycle tooling to run it. Use whenever the user wants to reduce churn, improve retention or
  LTV, fix onboarding or activation, recover abandoned carts or failed payments, build a loyalty
  or referral program, design streaks or daily-usage habits, set up post-purchase or win-back
  flows, or pick a lifecycle/CRM/email tool. Reach for it on phrases like "my churn is too high,"
  "users sign up but don't stick," "improve retention," "reduce cancellations," "recover failed
  payments," "build a referral program," "increase LTV," "win back lapsed customers," or "design
  onboarding."
---

# Retention & lifecycle

The discipline of keeping customers and growing their value after the first purchase. Retaining a
customer is roughly 5x cheaper than acquiring one, so these plays compound: fix activation first,
then defend against churn, then multiply value through loyalty, referral, and delight. Retention
lives in the product and the messaging, not just the email tool.

## When to use this
- Users sign up but don't stick; first-session or first-week drop-off is high.
- Churn is rising, or you want to raise LTV / repeat-purchase rate.
- Failed payments (expired/declined cards) are silently bleeding subscribers.
- The cancel page is where subscriptions die.
- You want a loyalty program, a referral program, or streak/habit mechanics.
- Post-purchase flows: welcome sequences, cart recovery, win-back, surprise gifting.
- Choosing or fixing a lifecycle / email / CRM stack.

Trigger phrases: "reduce churn," "improve retention," "users don't come back," "increase LTV,"
"recover failed payments," "abandoned cart," "loyalty program," "referral program," "onboarding
isn't working," "win back lapsed users," "which email tool."

## When NOT to use this (reach for instead)
- **For acquiring new customers** (paid ads, cold outreach, top-of-funnel): this skill starts once
  someone has signed up or bought. For outbound acquisition use `sales-outbound`.
- **For building the habit/value into the product itself at a structural level** (activation
  loops, aha moments, product-led growth mechanics): pair with `product-led-growth`. The onboarding
  and gamification plays here overlap; PLG owns the deeper product architecture.
- **For the broadcast/newsletter and drip-campaign craft** (deliverability, segmentation, email
  design and copy on owned lists): use `email-marketing`. This skill decides *what lifecycle
  message to send when*; email-marketing executes the send well.

## How this works (decision path)
Fix leaks top-down. Retention economics mean each earlier stage caps everything after it.

1. **Plug the first-session leak.** Retention is decided on day one. Engineer a quick win, keep the
   job-to-be-done visible, hit the activation threshold, and end on a peak-end high
   (`onboarding-activation.md`). Reinforce daily return with habit mechanics
   (`gamified-retention-streaks.md`).
2. **Stop the customer feeling the product is pointless.** Habituation makes a working product feel
   like a wasted expense. Surface immediate, historical, and future value
   (`communicate-ongoing-value.md`). Counterintuitively, give clean exit points so users don't feel
   trapped (`graceful-exit-points.md`).
3. **Defend against churn.** Split it in two:
   - **Involuntary (failed payments):** the cheapest churn to recover. Auto-retry, then a
     passwordless update link, then SMS (`involuntary-churn-payment-recovery.md`).
   - **Voluntary (they chose to leave):** make the cancel flow a retention surface, not a wall, and
     add cadence flexibility (`subscription-churn-prevention.md`).
4. **Recover abandoned purchases.** When email cart-recovery stalls, escalate high-value
   abandoners to physical mail (`physical-cart-recovery.md`).
5. **Multiply value from the customers you kept.**
   - Loyalty: reward your top 10% of spenders (`loyalty-email-program.md`).
   - Referral: close the 83%-say-yes / 29%-actually-do gap (`referral-program-design.md`).
   - Delight: low-cost surprises that lift repeat spend (`surprise-and-delight-gifting.md`).
   - Structural stickiness: build a ritual, add customization, layer LTV onto one-time buys
     (`product-ritual-customization-ltv.md`).
6. **Make it run at scale.** Trigger messages on behavior and moment, not elapsed time
   (`personalization-lifecycle-tactics.md`), stand up an ecommerce welcome/SMS foundation
   (`ecommerce-email-sms-retention.md`), and match your tool to your operator level
   (`lifecycle-tooling-chef-model.md`).

## The plays

### Activation & onboarding
- **Engineer a quick win, keep the job visible, end on a peak-end high**

### Gamified streaks & habit
- **Drive daily / 2x-daily use with streaks, time-boxed chests, and the activation threshold**

### Ongoing value & graceful exits
- **Fight habituation: surface immediate, historical, and future value**
- **Add exit points and completion states so users don't feel trapped**

### Churn & payment recovery
- **Recover involuntary (failed-payment) churn: retry → passwordless link → SMS**
- **Reduce voluntary churn: frictionless cancel page + cadence flexibility**
- **Recover high-value abandoned carts with physical mail**

### Loyalty, referral & gifting
- **Stand up an email loyalty program for your top 10% of spenders**
- **Design a referral program that closes the intent-vs-action gap**
- **Build loyalty with surprise-and-delight gifting mechanics**
- **Build stickiness into the product: ritual, customization, LTV layers**

### Lifecycle tooling & foundations
- **Trigger messages on behavior + moment, not elapsed time**
- **Stand up ecommerce email + SMS retention (4-email welcome flow)**
- **Choose your stack with the Chef Model (tool complexity ↔ operator level)**

## Key numbers & benchmarks
- **Retention economics:** ~5x cheaper to retain than acquire; well-run email returns $40+ per $1
  spent.
- **Activation thresholds (concrete targets):** Slack 3+ active days/week ≈ 50/50 churn-vs-activate;
  Instagram 10+ follows in first 7 days → >65% activation.
- **Involuntary churn:** smart auto-retry alone resolves 20%+ of failed payments before any message
  is sent.
- **Referral gap:** 83% of customers say they'd refer, only 29% do. Friction and timing are the
  lever, not willingness. Immediate $1/hr beat a delayed $100 reward by 81% more referrals (CAC $110
  vs $257).
- **Loyalty:** a top-10%-spend email program made $46.8k in 90 days (11.6% CTR, 8% conversion), built
  in ~6 hours with no loyalty platform.
- **Cart recovery:** direct mail sees 300–400% conversion lift on abandoners vs email-only; reserve
  for high AOV/LTV and always run against a control.
- **Surprise & delight:** a handwritten note nearly doubled future spend ($52.07 vs $25.97 typed
  none-to-note baseline in the beauty test); raffle tickets ~$9/500.
- **Subscription flexibility:** DTC subscribers spend ~3x more, so pause/skip beats losing them.
- **Tooling:** warehouse-native lifecycle tooling let one operator ship 1,000+ personalized campaigns
  → 114% y/y revenue with zero engineering tickets.
- **Streaks:** diminishing daily rewards (~$1–3/day) plus a referral bonus drive self-set reminders
  and organic bragging; time-boxed chests (earned AM, open PM) manufacture a second daily session.
- **Email basics:** subject lines under 50 chars; one primary goal per email.
- **Triggering rule:** fire on engagement level + a meaningful moment (a completed high-value
  action), never on "X days since signup," and never mid-session.

---

## Reference library

Every play above, in full.

### Fight habituation by surfacing ongoing value, show immediate, historical, and future benefit across in-app + email/push/SMS

## The strategy
Customers stop noticing the value they get, habituation makes a working product feel like a pointless expense, and that's when they cancel. The fix is to keep reminding them, concretely, how much the product has done for them, across three time dimensions: what it did just now, what it's done over time, and what it will keep doing.

## When to use it
Subscriptions and habitual products where the value is real but invisible (savings apps, grocery/delivery, productivity, finance). Especially before renewal and after any lull in usage.

## How to execute (steps)
1. **Surface value across three dimensions:**
   - **Immediate**, "you just saved $8 in fees on this order,"
   - **Historical**, cumulative time/money saved to date,
   - **Future**, projected/lifetime impact, scaled dramatically ("11 years less looking at your phone").
2. **Show it in-app AND via email/push/SMS** so the reminder reaches people who aren't currently in the product.
3. **Tie the number to the price to justify the subscription**, Instacart shows hours + fees saved to justify its $100/yr membership; Opal, Imperfect Foods, and Wealthsimple do similar value-recaps.
4. **Use labor-illusion cues for invisible features**, surface the work the product does behind the scenes (scanning, optimizing, protecting) so effort the user can't see becomes visible value.

## Notes / caveats / examples
- Instacart justifies its $100/yr sub by showing hours + fees saved.
- Scaling future value ("11 years less on your phone") makes an abstract benefit visceral.
- Labor-illusion cues make invisible background work feel valuable, countering "what am I paying for?"

## → Skill conversion note
A "value-recap generator": given {product metrics, price} it drafts immediate/historical/future value messages for in-app + email/push/SMS, plus labor-illusion cues for invisible features, timed around renewal.

### Retain ecommerce customers with a 4-email welcome flow and disciplined SMS capture

## The strategy
Email is an owned channel (unlike social), it's ~5x cheaper to retain than acquire a customer, and it can return $40+ per dollar spent. Build a structured post-signup welcome flow, then layer SMS carefully as a high-open-rate supplement.

## When to use it
Right after launch or once a store has an email list forming. Set up the automated welcome flow before running paid acquisition so new emails get nurtured.

## How to execute (steps)
1. **Build the 4-email welcome sequence** (tools: Klaviyo or Mailchimp):
   1. **Welcome**, thank subscribers, include a discount code if applicable, mention upcoming holidays/sales.
   2. **Brand focus** (1-2 days later), brand story + unique value prop.
   3. **Social proof** (2-3 days later), popular products, reviews, testimonials.
   4. **Community** (3-4 days later), CTA to follow socials / join the Facebook group.
2. **Follow email best practices:** subject lines under 50 characters (mobile readability); ample negative space, large type, aggressive concision; one primary goal per email (multiple CTAs only if they serve the same goal, e.g. Black Friday "shop men's" + "shop women's").
3. **Add lifecycle campaigns:** limited-time/holiday deals, win-back campaigns for inactive customers, and top-of-mind brand awareness sends.
4. **Capture SMS carefully:** offer a discount via popup in exchange for a phone number (United by Blue's 15% offer); do NOT add a phone field at checkout (friction at the critical moment). Be transparent about frequency and keep messages personable and valuable (Mudwtr sends personable discounts, not just promos).

## Notes / caveats / examples
- SMS has high open rates but limited hard data on SMS-to-revenue ROI, treat as a supplement, not a core channel.
- Email is "owned"; prioritize it over rented social reach.
- Retention economics: ~5x cheaper than acquisition; some companies see $40+ revenue per $1 of email spend.

## → Skill conversion note
Becomes an "ecommerce welcome-flow generator" SKILL.md: takes brand details + a discount offer and drafts the 4-email sequence (subjects under 50 chars, one goal each) plus a compliant SMS-capture popup.

### Drive daily/2x-daily usage with streaks and time-boxed chests, and find the activation threshold to push users across

## The strategy
Habit is retention. Gamification mechanics, streaks, time-boxed reward chests, and pushing users past a known activation threshold, turn occasional use into daily (or twice-daily) use, which is where long-term retention and organic growth come from.

## When to use it
Apps/products where frequency of use predicts retention (fintech, learning, health, content). Layer streaks/leaderboards first so the rewards feel valuable.

## How to execute (steps)
1. **Reward daily-open streaks with diminishing increments** (issue #152, Shakepay): ~$1-3/day that shrinks over time, plus a referral bonus. Users set their own calendar reminders and brag about streaks, driving organic growth.
2. **Add time-boxed "chests" to create a second daily session** (issue #155, Duolingo Early Bird / Night Owl): a 2x-XP chest earned before noon that opens at 6PM, and another earned 6PM, midnight that opens next morning, push-notified. This engineers 2x-daily usage.
3. **Sequence it right**, gamify streaks/leaderboards FIRST so users already value the currency before you introduce chests.
4. **Find and exploit the activation tipping point** (issue #226): identify the behavioral threshold that predicts activation, then engineer users across it. Slack: 3+ days/week active ≈ 50/50 churn-vs-activate. Instagram: 10+ follows in first 7 days → >65% activation. Design onboarding to hit the number fast.

## Notes / caveats / examples
- Shakepay streaks (~$1-3/day, diminishing) + referral bonus → self-set reminders + bragging.
- Duolingo chests open on a delay (earned AM, opens PM) to manufacture a return visit.
- Tipping points give a concrete activation target: Slack 3 days/wk, Instagram 10 follows in 7 days.

## → Skill conversion note
A "habit-mechanic designer": given {product, usage data} it recommends a streak reward curve, a time-boxed chest schedule, and identifies the activation threshold to engineer users across during onboarding.

### Add graceful exit points and completion states, forced engagement makes users feel trapped and churn

## The strategy
Counterintuitively, giving users a clean way to stop improves long-term retention. Infinite scroll and autoplay maximize a single session but leave users feeling manipulated and trapped, which erodes trust and drives them away. Explicit exit points and completion states make the product feel respectful, so people come back.

## When to use it
Content, social, learning, and any app with continuous consumption loops where session-maxing dark patterns are tempting. Especially where brand trust and long-term retention matter more than one more minute today.

## How to execute (steps)
1. **Replace autoplay/infinite scroll with explicit controls** (issue #072): "Next" / "Load More" buttons instead of endless feeds, let the user choose to continue.
2. **Show completion states** ("You're All Caught Up") so there's a natural, satisfying stopping point.
3. **Surface usage-time nudges and celebrate wins** rather than hiding the clock; help users feel good about how they spent the time.
4. **Add a graceful exit card at heavy-usage thresholds** (issue #158): TikTok's hard-to-skip "You've watched 293 videos" break card; Duolingo celebrates goal completion instead of dumping the user back into the tree. These boost long-term retention even though they end the session sooner.

## Notes / caveats / examples
- Forced engagement (autoplay, infinite scroll) makes users feel trapped and reduces long-term retention.
- TikTok's "293 videos" break card and Duolingo's goal-completion celebration are the canonical examples.
- The trade: a shorter session now for a returning, trusting user later.

## → Skill conversion note
An "exit-point auditor": given a product's consumption loops, flag dark-pattern engagement traps and recommend completion states, explicit continue controls, and threshold break cards.

### Fight involuntary (failed-payment) churn, auto-retry the card BEFORE emailing, then a passwordless update link, then SMS

## The strategy
A big chunk of subscription churn isn't people deciding to leave, it's failed payments (expired/declined cards). This "involuntary churn" is the cheapest churn to recover because the customer still wants the product. A recovery ladder that starts with a silent retry saves a large share of failures before the customer ever notices.

## When to use it
Any subscription/recurring-billing product. Set up the dunning ladder before scaling paid acquisition, since involuntary churn silently caps LTV.

## How to execute (steps)
1. **Auto-retry the card BEFORE emailing anyone.** Retrying on a smart schedule resolves 20%+ of failures with zero customer friction (many declines are temporary, insufficient funds, bank flags).
2. **If retries fail, send a passwordless, mobile-friendly card-update link.** Remove every step: no login, one tap to update the card from the phone.
3. **Escalate to SMS if email is ignored.** SMS open rates are far higher; use it as the second nudge, not the first.
4. **Sequence and time the ladder** (retry → email → SMS) and monitor recovered-revenue as a first-class metric.

## Notes / caveats / examples
- Auto-retry alone resolves 20%+ of failed payments before any message is sent.
- Passwordless update links cut friction at the exact moment friction loses the customer.
- Involuntary churn is invisible in most dashboards, it looks like normal churn until you separate it out.

## → Skill conversion note
A "dunning ladder generator": given {billing provider, channels} outputs the retry schedule, a passwordless card-update email/SMS, and the escalation timing, plus the recovered-revenue metric to track.

### Choose your lifecycle/email stack with the "Chef Model", match tool complexity to your team's operator level

## The strategy
Most lifecycle-tooling decisions fail because teams buy for the platform's ceiling, not their own operating level. The "Chef Model" rates your operator, then matches the tool's complexity to that level, and evaluates the tool on data access, where AI actually operates, operator fit, and migration reality. The payoff of a good match is large: warehouse-native tooling let one operator ship 1,000+ personalized campaigns → 114% y/y revenue with no engineering tickets.

## When to use it
Selecting or switching a lifecycle/email/CRM platform, or diagnosing why an existing tool underdelivers (usually a mismatch between tool complexity and team capability).

## How to execute (steps)
1. **Rate your operator on the Chef scale:**
   - **Line Cook**, runs pre-built campaigns/recipes,
   - **Sous Chef**, architects programs + segmentation,
   - **Master Chef**, builds data-to-messaging systems at scale.
   Match platform complexity to that level; a Master-Chef tool wastes a Line-Cook team, and vice versa.
2. **Evaluate the tool on four criteria + a case:**
   - **Data-access model**, warehouse-native (Snowflake/BigQuery) vs proprietary data piping,
   - **Where AI actually operates** in the workflow (not marketing claims),
   - **Operator fit**, can your actual team run it without engineering,
   - **Migration reality**, the true cost/time to switch.
3. **Weight warehouse-native data access heavily**, it's what let one operator ship 1,000+ personalized campaigns → 114% y/y revenue with no eng tickets.
4. **Reference Drew Price's "2026 Lifecycle Compass"** for the deeper evaluation framework.

## Notes / caveats / examples
- Warehouse-native tooling → one operator, 1,000+ campaigns, 114% y/y revenue, zero eng tickets.
- The failure mode is buying above (or below) your operator level, capability, not features, is the constraint.
- Judge "where AI operates" by the actual workflow, not the sales deck.

## → Skill conversion note
A "lifecycle-stack selector": input {operator level, data setup, team eng access, current tool} → recommend Line/Sous/Master-appropriate platforms scored on the four criteria, with a migration-reality flag.

### Stand up an email loyalty program for your top 10% of spenders in ~6 hours, Peak Design made $46.8k in 90 days

## The strategy
You don't need a points platform to run loyalty. A simple, email-only program that rewards your highest-spending customers with tiered offers, written in a personal voice, drives outsized repeat revenue for a few hours of setup. The best customers are already inclined to buy again; a small, well-framed reward tips them.

## When to use it
Ecommerce/DTC (or any repeat-purchase business) with enough order history to identify a top-spend segment. A fast, low-cost retention win before investing in loyalty software.

## How to execute (steps)
1. **Segment the top ~10% by lifetime spend** in your ESP/store data.
2. **Tier the offers by spend threshold**, e.g. $500+ → $20 off $100+; $1,000+ → $40 off $200+. Reward scales with value.
3. **Write in personal "I" copy**, not corporate voice, this is a thank-you to your best people, framed as an insider perk.
4. **Generate unique discount codes** (e.g. Shopify Bulk Discount Generator) so redemption is trackable and codes don't leak.
5. **Send, then measure CTR / conversion / revenue** and iterate thresholds.

## Notes / caveats / examples
- Peak Design: $46.8k in 90 days, 11.6% CTR, 8% conversion, built in ~6 hours, no loyalty platform.
- Tiering by spend makes higher-value customers feel recognized and nudges the next tier up.
- Unique codes keep it exclusive and let you attribute revenue to the program.

## → Skill conversion note
A "loyalty-email builder": takes {customer spend data, margin} and outputs the top-10% segment definition, a two/three-tier offer table, personal-voice email copy, and a unique-code plan.

### Onboard for a fast "quick win," keep the job-to-be-done visible, and end on a peak-end high

## The strategy
Retention is decided in the first session. Users who reach a quick win, keep sight of why they signed up, and finish onboarding on a memorable high are far more likely to stay. Engineer the first experience deliberately instead of dumping people into an empty product.

## When to use it
Any product with a signup → first-value gap: SaaS, apps, marketplaces. Design onboarding before scaling acquisition, since a leaky first session caps every downstream metric.

## How to execute (steps)
1. **Engineer a quick win** (issue #044): pre-check the first step so it's already partly done (Quora), keep the job-to-be-done visible (Airbnb shows projected monthly earnings), and replace "thanks for signing up" emails with benefit reminders.
2. **Target the activation tipping point** (issue #226): find the behavioral threshold that predicts activation and design onboarding to hit it fast, Slack 3+ days/week active ≈ 50/50 churn-vs-activate; Instagram 10+ follows in first 7 days → >65% activation.
3. **Apply the peak-end rule to the first day** (issue #305, "Return" phase): engineer a memorable first day and confirmation page, give specific feedback ("Your first report is ready") over a generic "Success!", and add a founder welcome video or day-3 check-in.
4. **Watch unacquainted users interact and fix the biggest friction first**, observe real first-time sessions, rank friction, and remove the worst blocker before polishing anything else.

## Notes / caveats / examples
- Quora pre-checks step one; Airbnb keeps projected earnings visible, both reduce first-session drop-off.
- Activation thresholds give a concrete onboarding target (Slack 3 days/wk, Instagram 10 follows/7 days).
- Peak-end: people remember the high point and the ending, so make the first day's finish memorable.

## → Skill conversion note
An "onboarding designer": given {product, activation data} it maps a quick-win first step, the tipping-point target, and a peak-end first-day finish (specific feedback + founder touch), plus a first-session friction audit.

### Trigger lifecycle messages on behavior and timing, not elapsed time

## The strategy
Retention and lifecycle personalization works best when triggered by a combination of engagement level AND a meaningful moment, not by "X days since signup." Right message, right user, right moment reduces churn and lifts referrals/reviews.

## When to use it
Onboarding, review/referral asks, reactivation of lapsed users, and support prioritization once you can act on behavioral signals.

## How to execute (steps)
- Ask for reviews/referrals from engaged users at optimal timing: trigger on engagement (session count, video completion) + a completed high-value action (Duolingo asks after 10 consecutive daily exercises); never interrupt mid-session.
- Tailor onboarding by company size + role: collect them at signup (ClickUp asks "how many people will you work with?"), auto-enroll into role-based email sequences, add feature-triggered emails (a PM exploring sprint features gets sprint-collaboration tips).
- Reactivate lapsed customers by segmenting on reason (location, product, price sensitivity) and testing multiple angles beyond "we miss you" + discount (local business tests curbside pickup, free local shipping, pop-ups).
- Help struggling users: set performance benchmarks (avg matches/wins), find users below it, send tips/resources/discounts (Coffee Meets Bagel offers "profile tips to get X% more matches" or discounted "beans").
- Geo-triggered messages: detect travel (Radar, Foursquare) and notify traveling customers of nearby locations (Drybar lifted full-price bookings ~3x this way).
- Prioritize support by customer value: route enterprise/high-value to live agents, self-serve to chatbots; flag frequent-ticket users for proactive outreach.

## Notes / caveats / examples
- Drybar's travel-detection notifications increased full-price bookings by "nearly 3x."

## → Skill conversion note
A "lifecycle trigger designer" skill: given events available, output a table of behavior+timing triggers → message → segment, replacing time-based drips.

### Recover abandoned carts with physical mail, a QR postcard or a free product sample when email alone stalls

## The strategy
Email cart-recovery is table stakes and everyone's inbox is saturated. Physical mail cuts through: a postcard or a free sample arriving in the real world re-triggers the purchase intent that an ignored email couldn't. It costs more per touch, so reserve it for high-value abandoners, but the conversion lift is large.

## When to use it
Ecommerce/DTC with mailing addresses for abandoners (or enough order data to acquire them), higher AOV or subscription LTV that justifies the per-piece cost, and an email recovery flow already running.

## How to execute (steps)
1. **Mail a postcard with a unique QR + promo within 12-24h** of abandonment (issue #079): a personalized postcard with a QR code and ~10% off, sent to abandoners as a test vs an email-only control. Tools: Inkit, Lob, Rejoiner.
2. **For high-LTV carts, mail a free product sample** (issue #113): KetoneAid sends a $10 sample + free-shipping coupon, signed with the founder's name in a first-person voice, and converts abandoners into subscriptions worth ~$3,000 LTV.
3. **Target and cap by value**, physical mail is expensive, so trigger it only above an AOV/LTV threshold, and always run it against an email-only control to prove incremental lift.
4. **Keep the voice personal** (founder's name, first person), the physical touch works because it feels human, not automated.

## Notes / caveats / examples
- Direct mail sees 300-400% conversion lift on cart abandoners vs email-only (issue #079).
- KetoneAid's free-sample recovery converts to ~$3,000-LTV subscriptions (issue #113).
- Reserve for high-value carts and measure against a control, the cost only pays off on the right segment.

## → Skill conversion note
A "physical-recovery planner": given {AOV/LTV threshold, offer, tool} it outputs which abandoners qualify, a QR-postcard spec or free-sample offer, the send-timing window, and the control-group test design.

### Make the product stickier by design, build a ritual, add customization, and layer LTV onto one-time purchases

## The strategy
Retention isn't only messaging, it can be built into the product itself. A designed ritual makes usage emotionally sticky, customization makes people value (and stay with) what they helped create, and adding recurring or complementary layers turns a one-time purchase into ongoing revenue.

## When to use it
Product and pricing design decisions, not campaigns. Best when you control the product experience and want structural retention/LTV rather than a tactic bolted on afterward.

## How to execute (steps)
1. **Design a product ritual** (issue #136): make a repeated behavior easy, emotion-tied, context-triggered, and experience-enhancing, Oreo's twist-lick-dunk, Corona's lime. Customers enjoy the product more and will pay more for the ritual.
2. **Add customization** (issue #035): Converse color/star placement, Slack bots/integrations. People value what they help create, customization raises SaaS switching costs, and tracking which options users pick reveals what to build into the core line.
3. **Layer LTV onto one-time products** (issue #091):
   - add subscription layers (Peloton onto hardware),
   - add higher-frequency complements (Alpha Paw sells beds/food/toys onto a dog ramp),
   - reposition the product for new segments.
4. **Measure the retention/LTV effect**, ritual adoption, customization rate, and repeat/complement purchase, and feed learnings back into the core product.

## Notes / caveats / examples
- Rituals (Oreo, Corona) make usage emotional and repeatable, lifting willingness to pay.
- Customization data (Converse, Slack) both retains users and informs the core product line.
- One-time-purchase LTV levers: subscription layer, high-frequency complements, new-segment repositioning.

## → Skill conversion note
A "product-stickiness planner": given {product, purchase model} it proposes a candidate ritual, customization options to add (with the switching-cost rationale), and LTV layers (subscription/complements/segments) to test.

### Design a referral program that closes the 83%-vs-29% gap, right moment, two-click flow, faster/smaller rewards, phased rollout

## The strategy
Most customers are willing to refer but almost never do, 83% say they would, only 29% actually do. The gap is friction and timing, not willingness. A good referral program removes steps, asks at high-rapport moments, rewards fast (even if smaller), and rolls out in phases so you learn before you automate.

## When to use it
Any business with satisfied customers and a repeatable moment of delight. Build the mechanics before scaling, a broken referral flow burns goodwill.

## How to execute (steps)
1. **Close the referral gap** (issue #046): ask via your highest last-click-revenue channel, pre-write friendly (non-salesy) share copy for them, cut the flow to two clicks (Gusto), and use Hotjar heatmaps to find friction.
2. **Ask only at high-rapport moments** (issue #039): post-NPS, at renewal, or when a customer actively engages (email reply, social comment), never pre-purchase.
3. **Test faster, smaller rewards over delayed larger ones** (issue #083): IntelyCare's $1/hour immediate payout drove 81% more referrals than a $100 delayed reward, at CAC $110 vs $257.
4. **Roll out in three phases** (issue #065): Phase 1, test with the top 10-20% engaged customers via individual emails + manual fulfillment; Phase 2, minimize clicks + automate; Phase 3, scale with Rewardful/GrowSurf/Referral Rock + fraud monitoring.
5. **Consider spotlight over swag when audience goals align** (issue #125): Growth in Reverse features subscribers who refer 10+; recognition can beat incentives for creator-to-creator audiences.
6. **Find your organic referrers first** (issue #067): audit GA Acquisition → Source/Medium for reputable traffic, monitor Twitter advanced search + LinkedIn mentions, then formalize a program around the promoters you already have.

## Notes / caveats / examples
- The core stat: 83% willing to refer, only 29% do, friction/timing is the lever.
- IntelyCare: immediate $1/hr beat delayed $100 by 81% more referrals; CAC $110 vs $257.
- Phase 1 = manual + top customers on purpose; automate only after the offer works.

## → Skill conversion note
A "referral program designer": given {product, delight moments, margin} outputs the ask-moment triggers, a two-click share flow with pre-written copy, a reward structure (favoring speed), and the 3-phase rollout plan.

### Reduce subscription churn with frictionless offboarding (the "objection smasher" cancel page) and flexible cadence

## The strategy
Making it hard to cancel breeds resentment and chargebacks; making it easy, while smartly handling objections and offering alternatives to leaving, retains more people and protects the brand. The cancel flow is a retention surface, not a wall. Pair it with subscription flexibility so temporary friction (too much product, wrong cadence) doesn't force a full cancel.

## When to use it
Any subscription/membership (SaaS or DTC). Especially where churn spikes at the cancel page or where "I have too much / don't need it monthly" is a common reason to quit.

## How to execute (steps)
1. **Mirror cancel-ease to signup-ease** (issue #067): if signup was two clicks, cancel should be too. Frictionless offboarding preserves trust and reduces chargebacks/complaints.
2. **Handle objections on the cancel page ("objection smasher")**: a one-question exit survey to capture the reason, then show what's lost by leaving (Canva-style: your designs/history), and offer salvage incentives ALONGSIDE the cancel button, never blocking it.
3. **Offer a pause or skip-a-month** as the middle option before full cancel, so people who are just overwhelmed can stay subscribed.
4. **Build DTC subscription flexibility** (issue #151): let subscribers pause anytime, adjust cadence (30-day → 45-60), change frequency post-purchase, and run pre-ship check-ins (Rodeo). DTC subscribers spend 3x more, so keeping them flexibly beats losing them.

## Notes / caveats / examples
- Cancel page = retention surface: survey → show what's lost → offer salvage, all without blocking the exit.
- Pause/skip catches "too much product" churn that a hard cancel would lose entirely.
- DTC subscribers spend 3x more (issue #151), so flexible retention has outsized LTV impact.

## → Skill conversion note
A "cancel-flow builder": given {product, common churn reasons} it drafts a frictionless offboarding page with a one-question survey, a "what you lose" module, salvage offers, and pause/skip/cadence options.

### Build loyalty with surprise-and-delight, handwritten notes, value-prop gifts, in-shipment raffles, and public-wear swag loops

## The strategy
Unexpected, personal touches lift future spend and loyalty far more than their cost, because they're a surprise, and because they signal the brand sees the customer as a person. A handful of low-cost gifting mechanics measurably raise repeat purchase, and some double as acquisition (public swag, referral raffles).

## When to use it
Post-purchase and at aha/milestone moments, across DTC/ecommerce and subscriptions. Best where margins allow small per-order or per-cohort spend and where delight can be tied to the product.

## How to execute (steps)
1. **Include a handwritten thank-you note** with orders (issue #087). Beauty test: no note → $25.97 future spend, typed → $29.74, handwritten/photocopy → $52.07. Scale with Handwrytten or TaskRabbit.
2. **Send surprise loyalty gifts tied to your value prop, off-calendar** (issue #037), not on holidays/birthdays, when they're unexpected (Chewy mails hand-painted pet portraits).
3. **Slip a surprise raffle into shipments** (issue #076): buy raffle tickets (~$9/500 on Amazon), include them quietly, announce a winner via email/SMS with a small product-related prize, great for subscriptions, and collecting numbers builds an SMS list (issue #138).
4. **Use branded swag as a growth loop** (issue #122): gift at aha moments, make product-related custom items, add handwritten CEO notes. InVision's Twitter shirt contest drove paid signups ($15 item → recurring revenue); Airtable branded AirPods retained users; premium items worn publicly become acquisition.
5. **Engineer delight by underpromising delivery** (issue #093): quote a conservative timeline then beat it (Apple quotes ~2 weeks, ships in 4 days). Identify the default expectation, then exceed it.

## Notes / caveats / examples
- Handwritten note nearly doubled future spend ($52.07 vs $25.97) in the beauty test.
- Raffle tickets are ~$9/500 and turn shipments into a delight + list-building loop.
- Public-wear swag (AirPods, shirts) retains AND acquires, pick items people show off.

## → Skill conversion note
A "delight-moment planner": given {product, margins, key lifecycle moments} outputs a gifting calendar (note, off-calendar gift, in-shipment raffle, swag) with cost estimates and the expectation-beating delivery promise.

---

From **God of Skills**: a curated, hand-tested directory of AI skills, prompts, templates and image style guides.
Source: https://godofskills.com/skills/retention-lifecycle?ref=claude-skill
