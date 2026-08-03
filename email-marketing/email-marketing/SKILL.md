---
name: email-marketing
description: >
  The playbook for owned-email marketing to an opted-in list: deliverability, list growth,
  writing and creative, sequences, segmentation, and the KPIs that matter. Use whenever the
  user is building or fixing an email program, a newsletter, or lifecycle flows, or says things
  like "my emails land in spam", "how do I grow my list", "write a welcome email", "set up
  abandoned cart", "which ESP", "my open rate dropped", "should I do double opt-in", "annual
  discount email", "launch sequence for my course", "segment my list", or asks what email
  metrics to track. Reach for it even when the request is a single email, because the send is
  only as good as the setup and audience behind it.
---

# Email Marketing

The discipline of turning an opted-in list into revenue: get into the inbox, grow the list with
the right offer, write emails that ladder to one goal, sequence them across the lifecycle, and
measure what actually moves money. Email returns about $36 per $1, the highest of any channel,
but only when setup, audience, and copy compound instead of fighting each other.

## When to use this

Reach for this skill when the work touches any owned-email surface:
- Standing up a new program: picking an ESP, opt-in model, sender names, send times.
- Deliverability trouble: landing in spam, softening open rates, a reputation slide, an IP move.
- List growth: choosing a lead magnet, driving traffic to it, optimizing the capture popup, or
  growing a newsletter through cross-promo and social.
- Writing a specific email or auditing a draft (welcome, promo, win-back, cart, nurture).
- Building triggered flows: welcome, browse and cart abandonment, sales/launch sequences.
- Personalization and segmentation: who gets which message, dynamic content, behavioral gating.
- Reporting: deciding what to track, diagnosing a program's health, cutting dead weight.

Trigger phrases: "grow my email list", "my emails go to spam", "SPF/DKIM/DMARC", "welcome
sequence", "abandoned cart flow", "which email platform", "open rate is falling", "launch
email sequence", "segment subscribers", "email KPIs", "annual plan email", "sender name".

## When NOT to use this (reach for instead)

- Cold email to strangers (prospecting, outbound lists, deliverability for cold sends) belongs to
  **sales-outbound**. This skill is for people who opted in.
- The words inside any email (headlines, hooks, voice, offer framing) are **copywriting-messaging**.
  Come here for the structure, timing, and targeting; go there for the sentence craft.
- Broader onboarding, activation, churn, and win-back strategy across the whole customer
  lifecycle (not just the email mechanics) is **retention-lifecycle**. Email is one channel inside it.
- Pricing-page and offer design referenced by promo emails lives in **pricing-monetization**.

## How this works (decision path)

Work outside-in. Each layer sets the ceiling for the next, so fix them in order.

1. **Can you reach the inbox?** If deliverability is shaky, nothing else matters. Audit
   authentication, list hygiene, sender config, and volume first (`email-deliverability.md`,
   `single-vs-double-optin.md`, `sender-name-strategy.md`). A dirty list or a founder's name on a
   shipping receipt caps every send below.
2. **Is the program set up right?** Wrong ESP, wrong send time, or tracking open rate as the
   north star will quietly waste effort (`email-program-setup-and-best-practices.md`).
3. **Do you have an audience worth emailing?** If the list is small or low-intent, growth comes
   before optimization: magnet plus traffic (`email-list-growth-lead-magnets.md`), then the
   on-site capture layer (`optin-popup-optimization.md`), plus off-site newsletter plays
   (`newsletter-acquisition-plays.md`).
4. **Does each email earn its send?** Write to one goal with the drafting framework
   (`how-to-write-a-marketing-email.md`), pattern-match to a proven exemplar by email type
   (`email-examples-swipe-file.md`).
5. **Are the right triggers firing?** Move from one-off broadcasts to lifecycle automation:
   protect the first touch (`welcome-and-confirmation-email-mechanics.md`), recover revenue with
   abandonment flows (`browse-abandonment-emails.md`), and sell with a sequence not a blast
   (`email-sales-sequences.md`).
6. **Is the right person getting the right message?** Segment and personalize so relevance stays
   high, which also protects deliverability (`email-segmentation.md`,
   `dynamic-content-and-behavioral-targeting.md`).
7. **Measure and prune.** Track outcomes not vanity, and treat unsubscribes as a health signal
   (`email-marketing-kpis.md`, `unsubscribes-and-snooze.md`). Feed learnings back to step 4.

Diagnostic shortcut: opens fine but no revenue, go to KPIs and sequences. Sends look great but
deliverability is dropping, go to hygiene and unsubscribe placement. List not growing, go to
magnet and popup. One email underperforming, go to the drafting framework and swipe file.

## The plays

### Setup & deliverability
- **Stand up the program (ESP, 10am local send, right metrics, quarterly prune)**
- **Land in the inbox: hygiene, SPF/DKIM/DMARC, IP warmup, reputation signals**
- **Choose single vs double opt-in by team, engagement, and reputation**
- **Pick the sender name by email type and trim it against truncation**

### List growth & capture
- **Grow the list: match a lead magnet to the model, drive the right traffic**
- **Convert the capture form: outcome-led copy, social proof, the 60% timing rule**
- **Grow a newsletter with cross-promo widgets, social teasers, a paid mini-course**

### Writing & creative
- **Write one email that ladders to one goal (17-step prep, build, ship, optimize)**
- **Pattern-match by email type: 15 teardowns mapped to the tactic each proves**

### Sequences & lifecycle
- **Engineer the welcome moment: delay 15 to 45 min, add sniper links**
- **Recover the browse-to-cart gap with browse-abandonment emails**
- **Sell with a 6-email PAS sequence, an MVC close, and non-percentage incentives**

### Segmentation & personalization
- **Segment four ways: demographic, psychographic, relationship, behavioral**
- **Personalize with dynamic content blocks and gate promos on behavior**

### Measurement & list health
- **Track the 9 KPIs that matter (and skip open rate)**
- **Treat unsubscribes as a signal: benchmark 0.5%, top-of-email link, snooze option**

## Key numbers & benchmarks

- **ROI:** about $36 per $1 overall. By industry: media 32:1, software 36:1, agencies 42:1,
  retail/ecommerce 45:1. Email acquires roughly 40x more reliably than Facebook/Twitter.
- **Segmentation:** segmented campaigns earn about 760% more revenue; 80% of consumers expect
  personalization. Triggered emails convert about 624% more than broadcasts.
- **Deliverability:** aim for 15%+ unique opens (30%+ ideal). Prune contacts inactive 90+ days
  or across the last 5 emails. Under 100k emails/month use a shared IP; over that consider a
  dedicated IP and warm it up doubling daily from 200. About 62% of opens are mobile.
- **CTR:** all-industry average 3.75%, target 2 to 5%. Click-to-open average 10.5%. Best send
  days Tuesday/Wednesday.
- **Bounce rate:** average 0.55%, keep under 2%. **Unsubscribe rate:** benchmark 0.5% or under.
- **Capture:** average popup converts about 3% of visitors, high performers about 10%. Fire the
  popup at 60% of average time-on-page. A quiz magnet lifted signups 528% in one case.
- **First touch:** delay the welcome email 15 to 45 minutes after signup. Sniper links added
  about +7% confirmations, recovering roughly 30% of non-confirmers.
- **Sequences:** cap abandoned-cart sequences at about 4 emails (email 8 may earn $0.16 vs $5 on
  email 1). Browse-abandonment emails see about 50% higher CTR and 80% higher open rate vs
  standard sends. For $1,000+ products, absolute-dollar incentives beat percentage ("$200 off"
  over "10% off").
- **Copy:** subject line under 30 characters to avoid mobile truncation; front-load key info.
  Value CTAs beat generic ones ("See it in action" over "Learn more"). One case: a value-framed
  CTA got 2x the clicks.

---

## Reference library

Every play above, in full.

### Close the browse-to-cart gap with browse-abandonment emails (50%+ higher CTR than standard sends)

## The strategy
Most stores only email people who abandon a cart, but far more visitors view a product and never add it. Browse-abandonment emails target that much larger group, people who viewed a product detail page (PDP) but didn't add to cart, and they dramatically out-engage standard broadcasts.

## When to use it
Ecommerce/DTC with product-view tracking (Klaviyo, Shopify + pixel). Set it up alongside, not instead of, cart-abandonment flows, the browse audience is bigger and earlier in the funnel.

## How to execute (steps)
1. **Track PDP views and trigger an email** when a known subscriber views a product but doesn't add to cart within a window.
2. **Build the email around the viewed product:**
   - a high-contrast CTA back to that exact PDP,
   - objection-handling copy + social proof (reviews, ratings) to close the doubt that stopped them,
   - complementary/alternative products in case the viewed item wasn't the fit.
3. **Sequence gently**, the browse signal is weaker intent than a cart add, so lead with helpfulness (fit, reviews, sizing) before any discount.
4. **Measure against your standard sends** to prove the lift and justify the flow.

## Notes / caveats / examples
- The gap this fills: 43.8% of sessions view a PDP but only 14.5% add to cart.
- Browse-abandonment emails see 50.5% higher CTR and 80.9% higher open rate vs standard emails.
- Distinct from cart-abandonment, earlier signal, larger audience, softer tone.

## → Skill conversion note
A "browse-abandonment flow generator": takes {product data, review source, complementary SKUs} and drafts the triggered email (PDP CTA + objection/social-proof block + cross-sell), plus the trigger rule.

### Personalize with dynamic content blocks and only send promos to behavior-qualified subscribers

## The strategy
Two ways to make an email feel one-to-one without building ten versions: swap dynamic content blocks inside a single email so each recipient sees the right variant, and gate promotional sends on behavior so you only pitch people who've shown intent. Both raise relevance and protect deliverability by not blasting the whole list.

## When to use it
Once you have basic behavioral tracking (page visits, past purchases, survey answers, campaign engagement) wired into your ESP/CDP. Especially valuable for launches, course/offer promos, and lifecycle emails.

## How to execute (steps)
1. **Use dynamic content blocks instead of multiple email versions.** In one email template, conditionally render:
   - a gift/first-order offer to first-time buyers, nothing to existing customers,
   - NPS follow-ups tailored by completion state,
   - referral asks adjusted by past participation,
   - "you already read X" references to skip content they've seen.
2. **Gate promos on behavior (behavior-based promo targeting).** Before a sequence, set up behavioral tracking, then only promote (e.g.) a course to people who visited the landing page, joined the waitlist, or engaged recently. Tools: RightMessage / RightMessage-style segmentation, or your ESP's conditional-send rules.
3. **Collect the qualifying signals up front**, a segmentation question at signup, a waitlist join, or a tracked LP visit, so the "who qualifies" list exists before you write the campaign.
4. **Fall back gracefully:** define a default block for subscribers with no data so no one gets a broken/empty email.

## Notes / caveats / examples
- Sending only to behavior-qualified segments keeps list-wide engagement metrics high, which sustains inbox placement for everyone.
- Dynamic blocks reduce production overhead vs building/segmenting separate campaigns for every variant.

## → Skill conversion note
A "dynamic-email planner": takes {available signals, offer} and outputs the conditional block matrix (segment → block content → fallback) plus the behavioral rule that decides who receives the send at all.

### Land in the inbox, list hygiene, SPF/DKIM/DMARC, IP warmup, and sender-reputation signals

## The strategy
Deliverability (share reaching the *inbox*, not just the server) is driven by sender reputation, which you protect with clean lists, proper authentication, gradual volume ramps, and content that avoids spam triggers. Prune ruthlessly, authenticate fully, warm up slowly.

## When to use it
Setting up or troubleshooting an opted-in email program, especially before scaling volume or moving to a dedicated IP.

## How to execute (steps)
1. **List hygiene:** remove contacts quarterly who haven't engaged in 90+ days OR across the last 5 emails; run a win-back campaign first. Target ≥15% unique open rate (aim 30%+). Require **double opt-in** (click-to-confirm) to block fakes/bots. Never buy lists; collect via value-driven opt-ins. Keep unsubscribe visible and easy.
2. **Sender configuration:** send from your company domain (not Gmail/Yahoo/Hotmail), use a real person's name ("Julian Shapiro" not a bare company name), and split subdomains by email type, e.g. `news.company.com` (newsletter) vs `notifications.company.com` (transactional). (Nike: `official.nike.com` vs `notifications.nike.com`.)
3. **Authenticate:**
   - **SPF**, designate which IPs may send for your domain.
   - **DKIM**, attach a digital signature preventing forgery/edits.
   - **DMARC**, builds on SPF/DKIM; tells receivers how to handle failures (junk/block).
   - Most ESPs document setup (Mailchimp auto-DKIMs its purchased domains; Campaign Monitor, ConvertKit, Customer.io, Drip, HubSpot, Klaviyo, Rejoiner all provide guides).
4. **Choose IP by volume:** <100k emails/month → shared IP with a reputable ESP; >100k/month → consider a dedicated IP for reputational control.
5. **Warm up a dedicated IP gradually:** start at 200 emails, double daily (200 → 400 → 800 …). Add reCAPTCHA on opt-in forms, deploy a CDN, and seed-test before full sends. Build a "friendly positive signal" list across ISPs (opens, clicks, replies, "mark important").
6. **Mobile-first content:** ~62% of opens are mobile, negative space, large legible fonts, large contrasting CTAs, compressed images; test on your phone first.

## Notes / caveats / examples
- **Positive reputation signals:** opens, clicks, replies, forwards, read-through. **Negative:** spam complaints, unsubscribes, bounces (invalid addresses), spam-trap hits, volume/frequency mismatches.
- **Spam-filter triggers to avoid:** excessive links, false "FW:/RE:" prefixes, too many images relative to text, heavy HTML.
- **Proof:** a well-pruned growth newsletter can sustain a 46% open rate via ongoing hygiene.
- Definitions: *delivery* = reached the server (incl. spam); *deliverability* = reached the inbox; *Sender Score* = 1-100 rating.

## → Skill conversion note
Becomes a deliverability audit prompt: input {domain, ESP, monthly volume, list age} → outputs an authentication checklist (SPF/DKIM/DMARC), an IP-warmup schedule, and a hygiene/pruning plan.

### 15 real marketing-email teardowns mapped to the tactic each one demonstrates (welcome, win-back, cart, promo)

## The strategy
Every strong marketing email nails a four-part framework, subject line, design, body copy, single goal ("the power of One"), where all four ladder to one CTA. This swipe file pairs 15 real brand emails to the specific tactic each proves, so you can pattern-match to your own send.

## When to use it
Reaching for a proven angle by email *type* (welcome, win-back, abandoned cart, promo, nurture/newsletter) or auditing whether your draft's four elements align to one goal.

## How to execute (steps)
Match your email type to a pattern:

**Welcome / onboarding:**
- *Zapier* "Getting started: What's a Zap?", three sentences, zero fluff; focus on the *what* not the *how*; give two starting options. Principle: don't overwhelm at onboarding.
- *Tracksmith* "Welcome to the team", states brand *values* over product; "team" leverages community; brand before promotion.
- *Persona* "50% off welcome offer", mobile-first stacking columns; three values (transparency, personalization, expert care); sterile whites/blacks signal medical authority. (Weakness: dry subject line, wasted bottom space.)

**Win-back / re-engagement:**
- *Grammarly* "You've earned a new badge", references a past action to trigger positive memory; single paragraph above the mobile fold; subtle Premium offer at bottom.
- *Avocode* "Was Avocode too slow for you", names the exact pain point + a concrete fix (v3.7 speed update) + 20% discount.
- *Noom* "Come back... up to 90% off", deep discount + 14-day trial; steep discounts are cheap at this lifecycle stage.

**Abandoned cart:**
- *Columbia* "Price drop on your favorites", feels personalized without a name; gives a reason to open (price cut = "why buy now"); dynamic blocks show the abandoned items; "Reveal New Price" teaser forces a click-through micro-commitment. Principle: tease the price, don't show it.

**Promotion:**
- *Calm* "Your exclusive discount on a lifetime of Calm", lead with the best offer (50% off), minimal copy, urgency.
- *Freshly* "Kick the meal kits with 30% off", side-by-side vs competitors ("3 minutes, zero cleanup" vs "60+ minutes"); bullet benefits. (Missing: upfront shipping cost.)
- *Strava* "Right now use Routes and Segments for free", "right now" urgency; pairs each feature with a benefit; 60-day risk-free trial.

**Nurture / newsletter / cross-sell:**
- *Bluewolf* "Find out how the best companies are using Salesforce", FOMO open; single CTA ("Get Your Copy Now"); "power of One."
- *InVision* "New for Freehand: templates...", leads with "new"; marries features to real scenarios; abstract illustrations over screenshots.
- *Packhelp* "An unboxing you can see and smell", storytelling + customer testimonial as social proof; three sentences; visuals lead.
- *Baggu*, animated GIFs teaching product care (motion > static); affirms the purchase, invites repeat. (Missed: could use UGC.)
- *Methodical Coffee* "How to enjoy black coffee", blends a teaching blog post with product blocks; works when products are cheap + related. (Distraction: second-half gift-card promo dilutes the goal.)

## Notes / caveats / examples
- **Four-part framework:** subject (appealing, ≤50 chars, self-evident) → design (simple, negative space, mobile-first, compressed images) → body (aggressively concise, fulfill the subject, tease value behind the CTA, social proof) → single goal (one CTA; welcome emails are the exception and can offer a "choose your own adventure").

## → Skill conversion note
Becomes a pattern-library reference the drafting skill cites: given an email type, it retrieves the matching exemplar + the tactic to copy, then checks the draft's four elements ladder to one goal.

### Grow an email list with the right lead magnet + traffic source (10 magnet types, 7 channels)

## The strategy
List growth is a 3-step system: (1) create a lead magnet worth an email, (2) drive the right traffic to it, (3) capture with an optimized form. This card covers steps 1-2 (magnet + traffic); the popup/form mechanics are in `optin-popup-optimization.md`.

## When to use it
Building or scaling an owned email list for ecommerce, SaaS, B2B, or creator brands. Email acquires customers ~40× more reliably than Facebook/Twitter, at $36 ROI per $1.

## How to execute (steps)
**Step 1, pick a lead magnet (match to business model):**
1. **Discount code** (ecommerce), first-visit popup; A/B test $ vs %.
2. **Free shipping**, protects margin vs a discount.
3. **Lead-gen quiz**, Typeform-style, email-gate results. *Cup and Leaf boosted signups 528%.* Start with one essential question; use the rest to learn about the audience.
4. **Gated content**, white papers/reports (Messari's 150+ page crypto thesis), guides/playbooks (Backlinko's SEO guide; partial-gate after the halfway point), swipe files (Digital Marketer's 100+ subject lines), tools/templates (Sumo's content-planning sheet).
5. **Sweepstakes/giveaway** (tool: Gleam), make the prize intent-specific ("lifetime supply of free coffee," not "trip to the Bahamas") to attract real customers.
6. **Webinars / free courses** (30-60 min), email to attend.
7. **Newsletter**, be specific about value; cadence flexible (Tim Ferriss "5-Bullet Friday," Moz "Top 10").
8. **Free tools**, calculators/templates; *Perfect Keto's keto calculator gets ~5k monthly organic visitors, gates results.* Tripwire variant: Ahrefs' 7-day trial for $7.
9. **Exclusive community**, Slack/Discord requiring email (a brand-run community group).
10. **Free trials/demos** (SaaS).

**Step 2, drive traffic (7 channels):**
1. **Social bios**, link one primary opt-in (or Linktree/Linkin.bio for multiple); Instagram Stories swipe-ups (10k+ followers); UTM-tag everything.
2. **Web traffic**, 3-second homepage hook (benefit header + objection sub-header + CTA); blog sidebar + content upgrades on top-traffic posts (find them in GA: Behavior → Site Content → All Pages; or Ahrefs on a competitor's domain).
3. **Guest posts / podcasts / cross-promos**, guest podcasts (find via Listen Notes) beat guest blogs for ROI; co-host webinars; joint giveaways.
4. **Email referrals**, reward referrers (Morning Brew swag tiers; some newsletters unlock their back-catalog).
5. **Communities/forums**, Reddit, Quora, FB/LinkedIn groups, Product Hunt, HN; follow the 9:1 rule (1 promo per 10 posts).
6. **Paid ads**, FB/IG best for magnet conversion + lookalikes; Google better for direct purchase; Pinterest for women/visual; TikTok needs heavy creative.
7. **Offline**, QR codes on business cards, POS signups, conference sheets, Meetups, street-level (Uber referral codes).

## Notes / caveats / examples
- **Quality > volume:** a valuable magnet attracts quality subscribers (reciprocity); small paid commitments (tripwires) lift future purchases (commitment principle).
- **Tools:** CRM (HubSpot, Pipedrive), ESP (Klaviyo, Mailchimp, ConvertKit, Drip), landing pages (Unbounce, Instapage, ClickFunnels), capture (Sumo, Privy, WP Forms).

## → Skill conversion note
Becomes a list-growth planner: input {business model, existing traffic} → recommends 1-3 lead magnets and the best-fit channels with UTM/tracking setup.

### The 9 email KPIs worth tracking (with formulas + industry benchmarks), and why open rate isn't one

## The strategy
Open rate is a vanity metric now (image auto-opens inflate it; Apple Mail Privacy hides it). Track outcome and engagement metrics instead, conversion, revenue, clicks, bounces, list growth, shares, each with a formula and a benchmark so you know what "good" looks like.

## When to use it
Setting up email reporting, diagnosing a program's health, or deciding what to optimize next.

## How to execute (steps)
Track these 9, with formulas and targets:

1. **Conversion rate** = conversions / delivered × 100. (3,500 prospects → 50 signups = 1.4%.) Improve: one goal/email; segment (segmented campaigns = 760% more revenue); A/B test; triggered emails (624% more conversions than broadcasts).
2. **Revenue per subscriber** = total email revenue / subscribers. ($30k / 4,000 = $7.50.)
3. **Revenue per email** = revenue / emails delivered. (Cap abandoned-cart sequences at ~4 emails, email 8 may earn only $0.16 vs $5 on email 1.)
4. **Click-through rate (CTR)** = link clicks / delivered × 100. Benchmark: all-industry avg 3.75%; target 2-5%. Top: bloggers 7.17%, games 6.74%. Low: software/web apps 1.35%, insurance 1.38%. Improve with value-driven CTA copy ("learn how to make sourdough" > "read the blog").
5. **Click-to-open rate (CTOR)** = unique clicks / unique opens × 100. Avg 10.5%; high real estate/design/construction 17.2%, low retail 5.8%. Best send days Tue/Wed; worst Fri/Sat/Sun.
6. **Bounce rate** = bounced / sent × 100. Avg 0.55%; keep <2% (5%+ is alarming). Remove hard bounces immediately; treat repeated soft bounces as hard; dedupe; fix typos; double opt-in; quarterly cleaning.
7. **List growth rate** = (new − lost) / total × 100. (7,000 new − 900 unsub / 20,000 = 30.5%.)
8. **Shares & forwards** = unique share/forward clicks / delivered × 100. Design for sharing with Jonah Berger's *Contagious* six: social currency, triggers, emotion, public, practical value, story.
9. **Overall ROI** = gross profit / costs × 100. ($15k rev − $2k cost / $2k = 650%.) Benchmark $36 per $1; by industry: media 32:1, software 36:1, agencies 42:1, retail/ecommerce 45:1.

## Notes / caveats / examples
- **Skip open rate.** If you must proxy reach, use *open reach rate* = unique subscribers opening ≥1 email in a period / subscribers who received emails × 100.
- Also monitor spam complaints, unsubscribe rate, and inbox placement rate.
- Strongest lever across nearly all metrics: writing genuinely valuable content + segmentation.

## → Skill conversion note
Becomes a KPI-calculator/report skill: input raw counts → returns each metric, flags it vs the benchmark, and names the top improvement tactic for whichever is underperforming.

### Stand up an email program, pick the right ESP, send at 10am local, track the metrics that matter, prune quarterly

## The strategy
The program-level decisions, which ESP, when to send, what to measure, how often to clean the list, and how to phrase CTAs, set the ceiling for every individual email. Email returns $36 per $1 (highest of any channel) and segmented campaigns earn 760% more; get the setup right and the sends compound.

## When to use it
Choosing tooling and cadence for a new email program, or tuning an existing one that's optimizing the wrong things (e.g. chasing open rate).

## How to execute (steps)
1. **Pick the ESP by business model:**
   - SaaS / B2B / apps → Customer.io, Iterable.
   - Ecommerce → Klaviyo, Drip, Mailchimp (Klaviyo for Shopify integration + ecommerce features).
   - Creators / influencers → ConvertKit.
2. **Build the list** with a model-matched lead magnet (ecommerce: first-purchase discount/free shipping; SaaS: trial/demo/free tool; B2B: gated whitepaper/webinar), driven by paid ads, organic social, and communities (Slack/Reddit/Discord), captured via inline forms + exit-intent popups.
3. **Track the right metrics**, conversion rate, revenue per subscriber, revenue per email, CTR, NOT open rate.
4. **Set up lifecycle flows** triggered by demographics, psychographics, behavior (page visits, clicks), and stage. Example flow: signup → welcome → blog click → 5 more page visits → free-trial offer (3-10+ emails depending on engagement).
5. **Optimize send time:** default 10am in the recipient's timezone (use ESP send-time optimization); delay welcome emails 15-45 min post-signup to dodge signup fatigue.
6. **Write value CTAs:** "See it in action" > "Learn more"; "Begin designing" > "Visit site"; "Browse winter jackets" > "Shop now." Put text-link CTAs on their own line.
7. **Quarterly list hygiene:** identify 3+ month inactives → send a win-back → delete. Cuts cost (inactives can be 50%+ of the bill) and lifts deliverability. Keep the unsubscribe link visible in the footer.
8. **Design mobile-first:** single column, negative space, large legible fonts, tappable CTAs, compressed images with alt text, preheader text; test on your phone first.

## Notes / caveats / examples
- **Benchmarks:** $36 ROI per $1; 760% more revenue from segmented vs non-segmented campaigns.
- **Subject line:** ≤30 chars to avoid mobile truncation; curiosity without clickbait; self-evident; single emoji OK for casual consumer brands; A/B test on ~10% then send the winner.
- **Compliance:** double opt-in, ethical collection, GDPR / CAN-SPAM / CCPA / CASL.
- Content standard: only email people who want it; show the brand solving a real problem; avoid generic promotional language.

## → Skill conversion note
Becomes a program-setup wizard: input {business model, list size, region mix} → recommends an ESP, a send-time default, a metrics dashboard (excluding open rate), and a quarterly-pruning schedule.

### Sell with a multi-email sequence, a 6-email PAS arc, a minimum-viable-commitment close, and non-percentage incentives

## The strategy
A single promotional blast leaves money on the table. A sequenced launch, build the problem, tell a transformation story, prove it, then close, outperforms one email, and the final push should lower risk (not just add urgency). For expensive products, swap percentage discounts for incentives that feel bigger.

## When to use it
Course/product launches, cohort opens, high-consideration DTC or B2B offers, and post-lead-magnet nurture to a warm opted-in segment (not cold outbound).

## How to execute (steps)
1. **Run a 6-email PAS sequence instead of one blast:**
   1. Problem, name the pain.
   2. Amplify, dramatize the consequences of not solving it.
   3. Transformation, a story of the before/after.
   4. Social proof, testimonials, results, named customers.
   5. Offer, the product plus exactly how it works and what's included.
   6. Urgency, deadline / scarcity to force the decision.
2. **Close with a minimum-viable-commitment (MVC) email in the final 48h.** Instead of only tightening scarcity timers, use a confidence formula: acknowledge the time objection → acknowledge the fit concern → offer a low-risk trial (guarantee, small first step, pause option).
3. **For $1,000+ products, use non-percentage incentives.** "$200 off" feels bigger than "10% off"; or a free complementary gift, a chance-to-win-a-discount drawing, or exclusive educational content instead of money.
4. **Convert non-email audiences into the sequence**, e.g. tease a podcast/webinar benefit, offer a free actionable PDF, add urgency ("goes back to $100 next week"), and give a fallback offer for latecomers (issue #045).

## Notes / caveats / examples
- MVC close (issue #075): the final-48h job is to remove risk, not just add pressure.
- Big-ticket incentive framing (issue #073): absolute dollars beat percentages when the price is high.
- Keep each email single-goal; the CTA in emails 1-5 can be "read the story", only the offer emails ask for the sale.

## → Skill conversion note
A "launch-sequence writer": takes {product, price, proof, deadline} and drafts the 6-email PAS arc + an MVC close, choosing percentage vs absolute-dollar incentive based on price point.

### Segment a list four ways (demographic, psychographic, relationship, behavioral) to earn 760% more revenue

## The strategy
Blasting one email to everyone leaves money on the table, segmented campaigns generate 760% more email revenue, and 80% of consumers now expect personalized experiences. Slice the list along four axes and trigger tailored content per segment.

## When to use it
Any list large or varied enough that subscribers differ by location, interest, relationship stage, or behavior, i.e. almost all of them past the earliest stage.

## How to execute (steps)
1. **Demographic / firmographic:** age, gender, location, income, education (B2B: industry, employee count, revenue). *DoorDash varied subject lines by state, Texas saw "Randalls," Florida saw "Winn-Dixie."*
2. **Psychographic:** lifestyle, interests, and intent. *Brooks asks subscribers about running habits to tailor gear; Netflix segments on viewing history; Lawrence Yeo uses clickable links to gauge topic interest.* Personalize welcome flows by signup source (newsletter vs lead magnet vs checkout).
3. **Relationship:**
   - *Type of customer*, Grubhub sends corporate clients perk content from a "corpmarketing" address; consumers get coupons.
   - *Length of relationship*, GetUpside sends how-tos to new users, requests reviews only after 90+ days.
   - *Funnel stage*, downloaded ebook AND viewed 5 posts → webinar email; attended webinar AND viewed FAQ → case study.
4. **Behavioral:**
   - *Email engagement*, segment by open/click to find "warm" subscribers.
   - *Website behavior*, Nomad triggers abandoned-cart emails on exit.
   - *Purchase history*, Reebok segments by time-since-last-purchase and by AOV for upsells.
   - *Product activity*, Uber emails inactive users a value reminder, then a 10%-off-5-rides offer if still inactive.
5. **Automate with if/then logic** in your ESP; combine criteria (spent $200 AND high contact rating; downloaded magnet AND clicked 5+ product links → sales workflow).

## Notes / caveats / examples
- **Benchmarks:** 760% more revenue from segmented campaigns; 80% of consumers expect personalization.
- **Tools:** Mailchimp, Customer.io, Klaviyo; advanced: HubSpot, Segment (CDP).

## → Skill conversion note
Becomes a segmentation-planner skill: input {available data fields, business model} → outputs a prioritized segment map with a trigger + tailored message angle for each.

### A 17-step framework for writing an opted-in marketing email (persona → subject → copy → CTA → test)

## The strategy
A marketing email to a subscriber (not a stranger) succeeds when every element, subject, preview, copy, design, CTA, ladders up to ONE clear goal, is aggressively concise, and fulfills the promise the subject line made. The process is prep, build, ship, optimize.

## When to use it
Writing broadcasts, newsletters, drip/lifecycle emails, or promos to an opted-in list. For strangers, use the sales-outbound cold-email cards instead.

## How to execute (steps)
**Prep (1-5):**
1. Build a customer persona (age, location, title, interests, brands, values, goals, challenges).
2. Define brand voice with the template: *"We always sound: [X]. We never sound: [Y]. So that our customers: [Z]."* (Warby Parker: approachable / snobby / a helpful eyewear source.)
3. Sign up for competitors' email lists to differentiate (don't copy).
4. Identify campaign type (triggered / transactional / ongoing), content differs by type.
5. Set ONE clear, specific goal ("get a review from new customers" beats "increase social proof").

**Build (6-13):**
6. **Subject line**, appealing, concise (~30 chars on mobile; 50-60 max, front-load key info), self-evident, compelling. Pull one of three triggers: self-interest (Spotify "Playlists made just for you"), emotional (Typeform "You're invited to the premiere"), relational (Allbirds "Leave a lighter footprint").
7. **Sender name**, include a person's name when it adds a personal touch ("Ivan at Notion"); ~20-30 chars display.
8. **Preview text**, reinforce (don't repeat) the subject; progress benefits → features. ~40 chars on mobile. No filler ("view in browser").
9. **Design**, simple, single column, mobile-first, ample negative space, ESP templates; images <1MB with alt text; A/B plain-text vs designed (plain text often reads more authentic).
10. **Copy**, aggressively concise, fulfill the subject promise, tease extra value behind the CTA. Vivid verbs ("celebrate" > "click here"), conversational, second person, social proof. Don't bury the point or use spam words ("free," "act now"), ALL CAPS, or excess "!".
11. **CTA**, high contrast, "call to value," actionable-not-effortful ("get" > "download"). Ecommerce: "Shop our new additions" > "Shop now." Webinar: "Book your seat."
12. **Personalization**, merge tags (`*|FNAME|*`) plus underused *dynamic content blocks*: first-time vs repeat buyers see different offers; NPS non-responders vs completers; referral tiers; newsletter blocks matched to blog posts the subscriber read. Scale winning blocks across flows.
13. **Legal**, unsubscribe link in every email + valid domain address (also aids deliverability).

**Ship (14-15):**
14. Proofread with fresh eyes (wait hours), read aloud, test on mobile/tablet/desktop, send yourself a test, check "from" + preview rendering; tool: Email on Acid.
15. Send with type-specific timing: welcome delay 15-45 min; abandoned cart wait 1-3 days; drip cadence matches the buying-cycle speed.

**Optimize (16-17):**
16. Analyze CTR, click-to-open, conversion vs expectation; feed learnings into the next campaign.
17. A/B test ONE element at a time (subject OR CTA OR sender), send the winner to the rest. (Example: "Learn how to cut your own bangs" got 2× the clicks of "Get the guide.")

## Notes / caveats / examples
- Core copywriting rule: **brief + beneficial = all great email copy**; "help your readers, do it succinctly."
- Legal microcopy can carry brand voice (Chubbies' playful unsubscribe line).

## → Skill conversion note
Becomes a guided email-drafting skill that walks {persona, brand-voice line, campaign type, one goal} → outputs subject + preview + body + CTA and a pre-send QA checklist.

### Grow a newsletter with cross-promo recommendation widgets, social teasers, and a paid mini-course funnel

## The strategy
Beyond on-site popups, the fastest newsletter growth comes from three underused sources: other newsletters recommending you, social posts that tease the email itself, and a cheap paid mini-course that filters serious subscribers. Each pulls higher-intent signups than a generic lead magnet.

## When to use it
Once a newsletter has a consistent send and something worth recommending; especially for creators/B2B where audience overlap and credibility compound.

## How to execute (steps)
1. **Turn on cross-promo recommendation widgets.** Use SparkLoop Upscribe (or Substack/Beehiiv recommendations) so publishers recommend each other at the point of signup. Lenny Rachitsky got 78% of new subs from Substack recs, with 11% converting to paid.
2. **Run three unconventional social signup plays (issue #113):**
   - a mid-thread "ad break" CTA inside a Twitter/X thread,
   - before/after-send teasing on LinkedIn/Twitter ("today's issue covers X, subscribe before it goes out"),
   - screenshotting positive reader replies/reviews as social proof.
3. **Sell a $0-100, 7-day email course as a funnel (issue #052).** It filters out non-serious leads, builds credibility, repurposes existing content, and warms subscribers for a $500+ course/service upsell.
4. **Capture on the About page (issue #072)** with an aligned CTA where visitors are already engaged, James Clear (free habit course → book), Perfect Keto (subscriber discounts), Exploding Topics (trends newsletter).

## Notes / caveats / examples
- SparkLoop/Substack recs: 78% of Lenny's new subs, 11% → paid.
- Paid mini-course doubles as a lead filter AND a credibility/upsell asset.
- These plays pull higher intent than a broad lead magnet because the subscriber self-selects on topic.

## → Skill conversion note
A "newsletter growth planner": given {niche, existing content, platform} it outputs a prioritized set, rec-widget setup, 3 social teaser templates, and a 7-day mini-course outline with the upsell path.

### Optimize opt-in popups, outcome-led copy, social proof, the 60% timing rule, and dynamic segment variants

## The strategy
The capture form is where list growth is won or lost. Average popups convert 3% of visitors; well-built ones hit ~10%. The levers: sell the *outcome* not the offer, add matching social proof, time the popup to ~60% of average page time, and show different popups to different visitor segments.

## When to use it
After you have a lead magnet and traffic (see `email-list-growth-lead-magnets.md`), this is the conversion layer on-site.

## How to execute (steps)
1. **Header copy = outcome, not explanation** (55% of visitors spend ≤15 seconds on a site). Weak: "Sign up to get my free 7-day course." Strong: "Improve your emotional intelligence in just 7 days."
2. **Social proof:** include a testimonial + photo of someone who looks like the target audience (marketer testimonial for martech, athlete for fitness) so the prospect sees themselves.
3. **CTA copy = value-driven, not transactional.** Weak: "Subscribe." Strong: "Join the community," "Get exclusive access."
4. **The 60% rule:** check average time-on-page in analytics; trigger the popup at 60% of it (avg 50s → fire at 30s). The reader has shown interest but is near session-end, so the exchange feels fair. Make the popup copy/CTA/incentive directly relevant to the current page (reuse the page header as the popup hook).
5. **Dynamic popups by segment** (show a different one to each):
   - First-time traffic → discount / giveaway / gated content.
   - Returning non-purchasers → subscriber-only discount with a countdown timer.
   - Existing customers → new features / "welcome back."
6. **Choose the popup type by intent:**
   - *Welcome mat*, full-page overlay seconds after landing (high impact).
   - *Exit intent*, fires when the mouse heads for the URL bar.
   - *Slide-in*, bottom corner on time/scroll; stays until dismissed.
   - *Gamification*, "spin the wheel" for novelty.
7. **Non-intrusive alternatives:** inline mid-post forms (Neil Patel), static header/footer subscribe CTAs, scroll boxes / floating bars.

## Notes / caveats / examples
- **Benchmarks:** ~3% average popup conversion, ~10% for high performers.
- **Tools:** Sumo, Privy, JustUno, WP Forms.
- Always match the incentive to the page context, a keto post should pop a keto shopping-list upgrade, not a generic newsletter ask.

## → Skill conversion note
Becomes a popup-copy generator: input {page topic, lead magnet, avg time-on-page, visitor segment} → outputs outcome-led header + social-proof line + value CTA and the 60%-rule trigger timing.

### Choose the sender name by email TYPE, brand, human, or hybrid, and trim it so clients don't truncate it

## The strategy
The "From" name is the first thing a recipient reads and it decides whether they open at all. There is no single best sender name, the right one depends on the type of email. Match the sender to the job, then trim it so the recognizable part survives inbox truncation.

## When to use it
Auditing an ESP account's sender names, standing up a new email program, or diagnosing soft open rates that copy tweaks aren't fixing.

## How to execute (steps)
1. **Match sender name to email type:**
   - **Transactional / promo** → use the brand ("IKEA Shipping", "Acme"). Recipients want to know which company, not which employee.
   - **Relationship / lifecycle** → use a hybrid "[First] at [Company]" ("Neal at Acme"), personal warmth plus brand recognition.
   - **Personal-brand builders** → full name only ("Julian Shapiro"), where the person IS the product.
2. **Trim to beat truncation.** Mobile and many desktop clients cut long sender names. Drop the last name or use an initial, and replace "from" with "@" or a comma ("Neal, Acme") so the part the reader recognizes stays visible.
3. **Prefer a person over the company for lifecycle sends** (per issue #023): a human name lifts opens and invites replies, which improve inbox placement.
4. **Audit every automated flow** and label each sender by type; fix mismatches (e.g. a founder's name on a shipping receipt, or a faceless brand on a nurture email).

## Notes / caveats / examples
- Keep the sender name consistent within a flow so the relationship compounds; don't rotate names randomly.
- Reply-prompting subject lines pair with human sender names to build the reply signal deliverability rewards.

## → Skill conversion note
A "sender-name auditor" skill: takes {list of flows + email types} and returns the recommended sender name for each (brand / hybrid / full-name) plus a truncation-safe short version.

### Choose single vs double opt-in by three variables, not by default, and back it with real list hygiene

## The strategy
Single vs double opt-in isn't a religious choice. Single opt-in grows the list faster but requires discipline to stay clean; double opt-in trades some growth for a self-cleaning list. Pick based on your team, your metrics, and your reputation, and if you go single, run the hygiene that makes it safe.

## When to use it
Setting up a new signup form, migrating ESPs, or fixing a deliverability slide where the opt-in model may be the root cause.

## How to execute (steps)
1. **Decide on three variables (not by default):**
   - **Team bandwidth**, can someone actively manage hygiene? If yes, single opt-in is viable.
   - **Engagement metrics**, strong, stable opens → single is fine; if engagement dropped in the last 6 months → double.
   - **Sender reputation**, clean/never-penalized → single OK; if you've been penalized or blacklisted → double to rebuild trust.
2. **If you run single opt-in, run the hygiene that sustains it** (issue #147 held 40-45% opens over 4 years this way):
   - validate addresses with a tool like Kickbox before subscribing,
   - auto win-back inactives, then drop after consecutive bounces,
   - purge free-provider/test/obvious-fake emails,
   - keep unsubscribe easy plus a preference center.
3. **Detect inflated engagement with invisible-link bot detection** (issue #098): insert hidden links only bots click; compare their CTR to real links to estimate how much of your "engagement" is robotic, critical when judging whether single opt-in is actually clean.
4. **Re-evaluate periodically**, the right model changes as the team, metrics, and reputation change.

## Notes / caveats / examples
- Single opt-in + Kickbox validation + auto win-back → 40-45% opens sustained for 4 years (issue #147).
- Double opt-in is the safer default when you lack a dedicated email owner or are recovering reputation.

## → Skill conversion note
A decision-helper skill: input {team bandwidth, 6-month engagement trend, reputation status} → recommend single vs double opt-in, plus the hygiene checklist required to make the chosen model safe.

### Treat unsubscribes as a health signal, benchmark ≤0.5%, add a top-of-email unsub link, and offer a snooze

## The strategy
Unsubscribes aren't the end of the world, they're a diagnostic and, counterintuitively, better for sender reputation than the alternative (spam complaints and dead weight). Make leaving easy, benchmark the rate, and offer a lighter exit (snooze) so you keep people who are only temporarily overwhelmed.

## When to use it
Ongoing, for any recurring newsletter or promotional program; especially when open rates soften or you're ramping send frequency.

## How to execute (steps)
1. **Benchmark the unsubscribe rate at ≤0.5%.** Above that = wrong audience or weak content. Audit and diagnose (segment, cadence, relevance) rather than panic or hide the unsub link.
2. **Add a SECOND unsubscribe link at the TOP of the email**, not just the footer. Julian Shapiro uses a top link; Christopher Penn uses an oversized GIF. Rationale: a clean unsubscribe beats a spam complaint every time, spam complaints wreck sender reputation and deliverability for the whole list.
3. **Offer a "snooze" (pause 1-2 months) next to unsubscribe.** It cuts permanent churn by giving overwhelmed subscribers a middle option, and a spike in snoozes is an early signal your campaigns are too aggressive. HiSmile uses this.
4. **Watch the mix of unsubscribes vs complaints** as your true reputation metric, and use rising snooze/unsub rates to throttle frequency before it becomes damage.

## Notes / caveats / examples
- Unsubscribe ≤0.5% benchmark; treat breaches as an audience/content problem, not a reason to bury the link.
- HiSmile: snooze option beside unsubscribe reduces permanent churn.
- Making unsubscribe easy is a deliverability strategy, not a leak to plug.

## → Skill conversion note
A "list-health monitor" spec: given unsubscribe/complaint/snooze rates per campaign, flag breaches of the ≤0.5% benchmark and recommend cadence/segment fixes plus snooze-link and top-link placement.

### Engineer the welcome & confirmation moment, delay the welcome 15-45 min and add sniper links to lift confirmations

## The strategy
The first automated email a subscriber gets is fragile: send it at the wrong second or make it hard to find and you lose the person before the relationship starts. Two mechanical fixes, a short delay on the welcome email and a "sniper link" in the confirmation email, protect the first touch and recover subscribers who would otherwise slip away.

## When to use it
Any signup, waitlist, or double-opt-in flow where the first system email fires the moment someone submits their address.

## How to execute (steps)
1. **Delay the welcome email 15-45 minutes after signup.** Immediately after signing up people are in a reflexive "just signed up, deleting confirmations" mindset and clear their inbox. A short delay lands the email after that sweep, when they're paying attention again.
2. **Set the sender to a person and prompt a reply.** Use a human sender name and a distinctive subject; ask a question so the subscriber replies, replies are a strong inbox-placement signal for future sends.
3. **Add a sniper link to confirmation / double-opt-in emails.** A sniper link is a pre-filtered inbox search URL (e.g. a Gmail link that surfaces only your confirmation email) so the user finds it in one click instead of hunting. Growth Design reports +7% confirmation rate, fixing roughly 30% of people who never confirm.
4. **Test the timing window per audience.** 15 min for high-intent product signups, up to 45 min for cold newsletter signups; watch open + reply rate, not just delivery.

## Notes / caveats / examples
- Sniper links: Growth Design saw +7% confirmations, recovering ~30% of non-confirmers.
- Don't confuse the welcome delay with transactional receipts (order/payment confirmations must be instant); the delay applies only to the marketing welcome.

## → Skill conversion note
A "welcome-flow timing generator": takes {signup source, intent level, ESP} and outputs the delay window, a reply-prompting welcome subject/body, and a ready-to-paste sniper link for the confirmation email.

---

From **God of Skills**: a curated, hand-tested directory of AI skills, prompts, templates and image style guides.
Source: https://godofskills.com/skills/email-marketing?ref=claude-skill
