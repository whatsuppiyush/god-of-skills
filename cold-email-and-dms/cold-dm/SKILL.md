---
name: cold-dm
description: Run cold outreach on X: find DM-able leads, draft personalized first-DMs from each profile, and send paced, cost-transparent campaigns.
---


# X Cold Outreach (DMs)

Find the right people on X, write them a DM worth replying to, and send it at a safe, human pace. Defining an ICP and drafting DMs are free and keyless; the actions that touch X (scraping leads, sending DMs, reading the inbox) run through the XAutoDM API with your own key, and the skill always estimates the credit cost and asks before spending. It refuses spray-and-pray and reports on replies started, never raw send counts.

## Use it to

- Define a tight ICP and pull DM-able leads from seed accounts or search
- Draft a specific first-DM per lead from their bio and recent tweets
- Send a paced campaign with the cost shown up front and confirmed first

## How to use it

**Claude Code**
1. Save the SKILL.md into .claude/skills/cold-dm/
2. Set XAUTODM_API_KEY, then ask: “find X leads for <ICP>”

## SKILL.md

```
---
name: x-outreach
description: Run cold outreach on X (Twitter) the right way — find DM-able leads, draft personalized first-DMs from each prospect's real profile, and send paced, cost-transparent DM campaigns through the XAutoDM API using your own API key. Also warms up accounts (follow/like/reply), reads the reply inbox, and drafts responses. Use when the user wants to cold DM on twitter/x, find twitter leads, scrape followers of an account and filter to who can be DMed, send DMs on X, run a DM campaign, book calls from twitter, do X/twitter cold outreach, or manage twitter DM replies. Every real action calls the live XAutoDM API and spends the user's credits — the skill always shows the cost and asks first.
homepage: https://xautodm.com
license: MIT
metadata: {"emoji":"📩"}
---

# X Outreach

Find the right people on X, write them a DM worth replying to, and send it at a safe,
human pace — all through the **XAutoDM API** with the user's own API key. This skill does
the finding, the writing, and the sending; it is opinionated about doing outreach in a way
that gets replies and keeps accounts healthy, and it refuses to help with spray-and-pray.

Two kinds of work live here:

- **Keyless value (free, no spend):** defining an ICP, drafting personalized DMs, planning a
  sequence. These run with no API key and cost nothing.
- **API actions (metered, paid):** anything that touches X — scraping leads, sending DMs,
  reading the inbox, follow/like/reply. These call the live API with the user's key and spend
  credits. **The skill always estimates the cost and gets an explicit yes before spending.**

## The API in one screen

- **Base URL:** `https://api.xautodm.com/v1` · **Docs:** `https://xautodm.com/api/docs`
- **Auth:** `Authorization: Bearer $XAUTODM_API_KEY`. Keys look like `xdm_live_…` (real) or
  `xdm_test_…` (dry-run: validates and returns shapes, makes **no** upstream writes and spends
  **no** credits — use it to verify a setup, never as a "free trial").
- **Get a key:** self-serve at **https://api.xautodm.com/?ref=claude-skill** (paid, metered,
  cost-transparent — see "How keys and billing work" below).
- **Every write** (`/dm/send`, `/actions/*`, `/tweets`, `/accounts` connect) needs an
  `Idempotency-Key: <uuid>` header so a retried call is never double-sent or double-charged.
- **Success responses** carry a `meta` object: `{credits_charged, credits_remaining, request_id}`.
  Read `credits_remaining` after each call so you always know the running balance.
- **Errors** always look like:
  ```json
  {"error":{"type":"insufficient_credits","message":"...","request_id":"..."}}
  ```
  `type` ∈ `invalid_request · invalid_key · insufficient_credits · rate_limited ·
  account_needs_reconnect · seat_limit · upstream_error · not_found · server_error`.
  **On any error: surface the message to the user and stop — do not auto-retry.** The one
  exception is `rate_limited` (429): back off a few seconds and retry once. `insufficient_credits`
  (402) → tell them the balance is short and link the top-up; `account_needs_reconnect` (409) →
  route to `/accounts/{id}/reconnect`; `seat_limit` (403) → they need a bigger plan.

## Credit costs (memorize these — estimate before every spend)

1 credit = **$0.005**. These per-action costs are stable; use them to price a campaign before it runs.

| Action | Endpoint | Credits | ≈ USD |
|---|---|---:|---:|
| Read a profile / tweet / relationship | `GET /users/{h}`, `/tweets/{id}`, `/relationship` | 5 | $0.025 |
| Lead row (follower / following / search / mention / list member) | `/users/{h}/followers`, `/following`, `/users/search`, `/mentions`, `/lists/{id}/members`, `/tweets/search` | 5 / row | $0.025 |
| **Premium lead** (verified-follower / retweeter / replier / tweet-engager) | `/verified-followers`, `/tweets/{id}/retweeters`, `/tweets/{id}/replies` | 20 / row | $0.10 |
| Send a DM | `POST /dm/send` | 10 | $0.05 |
| Read a DM conversation | `GET /dm/conversations`, `/dm/conversations/{id}` | 10 | $0.05 |
| Action (follow / unfollow / like / retweet / tweet) | `POST /actions/*`, `POST /tweets` | 5 | $0.025 |
| Connect / reconnect an X account | `POST /accounts/connect`, `/accounts/{id}/reconnect` | 50 | $0.25 |
| Health · list accounts · account · usage | `/health`, `/accounts`, `/account`, `/usage` | 0 | free |

> These are the numbers to quote. Ignore any older per-call figures in the raw OpenAPI summaries —
> the table above is the source of truth. `references/api-reference.md` has the full endpoint list.
> **Tier prices drift** — do not quote a plan's dollar price from memory; point the user to their
> live plans at **https://api.xautodm.com/?ref=claude-skill**. The per-action costs above are stable.

**Estimating a campaign** (do this out loud before spending): pulling `N` leads from a regular
source ≈ `N × 5` credits; from a premium source ≈ `N × 20`; sending to `M` of them ≈ `M × 10`.
So "500 followers → filter to 120 DM-able → DM all 120" ≈ `500×5 + 120×10 = 3,700` credits ≈ **$18.50**.
Always show this math and get a yes first.

## Slash commands

| Command | What it does | Spends credits? |
|---|---|---|
| `/x-setup` | Validate the key, show plan + credit balance + connected accounts. The gate — run this first. | No (reads are free) |
| `/x-icp <product>` | Define the ideal-customer profile: bio keywords, follower bands, engagement signals, seed accounts to mine. | No (keyless) |
| `/find-x-leads <query>` | Search users/tweets, pull followers of seed accounts, filter to DM-able, dedupe → a lead list. **Shows cost first.** | Yes |
| `/draft-x-dms <leads>` | Write a personalized first-DM for each lead from their bio + recent tweets. | No (drafting is free) |
| `/x-dm-campaign <leads + message>` | Confirm total cost, then send DMs at a conservative pace and report replies started. | Yes (confirm-first) |
| `/x-inbox` | List conversations + replies, draft responses to warm leads. | Yes |
| `/x-engage <handles>` | Warm up before DMing: follow / like / reply a few of a prospect's posts. | Yes (confirm-first) |

If these aren't registered as `/` commands, copy `commands/*.md` into `.claude/commands/`, or just
describe what you want — the workflows trigger on intent either way.

## How keys and billing work (say this honestly)

- The user brings **their own** API key, set as the `XAUTODM_API_KEY` environment variable. This
  skill never ships a key and never sees XAutoDM's internal credentials.
- **XAutoDM is a paid, metered product — there is no free trial.** New accounts land on a
  **$0 / 0-credit** plan and must subscribe to a plan and connect an X account before any action
  works. A `xdm_test_…` key lets them dry-run the setup at no cost, but it sends nothing.
- The pitch is **cost transparency**: every action has a known credit price (the table above), and
  every response tells you exactly what it charged and what's left. Never promise free credits.

## Running an outreach cycle (the core workflow)

1. **Gate first — `/x-setup`.** `GET /health` (free) to confirm reachability, then `GET /account`
   to read the plan, credit balance, and seats, and `GET /accounts` to see connected X accounts.
   No key or a `$0` plan → route the user to sign up. No connected account → they must connect one
   (`POST /accounts/connect`, API-only, costs 50 credits) before sending. Do not proceed past a
   missing prerequisite.
2. **Target — `/x-icp`.** Nail down who to reach: bio keywords, follower bands, the seed accounts
   whose followers/engagers are the audience, and the buying signal. This is free and it decides
   everything downstream. A tight ICP is the difference between 30% and 3% reply rates.
3. **Find — `/find-x-leads`.** Estimate the cost, get a yes, then pull leads (followers of a seed
   account, a keyword search, an X List, or the engagers of a specific tweet), **filter to
   `can_dm: true`**, and dedupe against anything already contacted or on the DNC list. Regular
   sources cost 5/row; verified-follower and tweet-engager sources cost 20/row — prefer regular
   sources unless the ICP truly needs verified.
4. **Write — `/draft-x-dms`.** Free. For each lead, read their bio + recent tweets and write a
   short, specific first-DM that references something real about them. No `{merge}` mail-merge feel.
   Follow `references/dm-playbook.md`.
5. **Warm up (optional) — `/x-engage`.** For high-value prospects, follow + like/reply a recent
   post a day or two before the DM. Confirm the cost first.
6. **Send — `/x-dm-campaign`.** Show the total (`count × 10` credits), get an explicit yes, then
   send with a fresh `Idempotency-Key` per DM at a conservative daily pace (see
   `references/account-safety.md`). Report replies and conversations started — never a raw "X DMs
   blasted" number.
7. **Follow up — `/x-inbox`.** Read conversations, draft replies to people who responded, and stop
   sequencing anyone who replied.

## Safety rails (non-negotiable)

- **The skill never touches X directly.** No cookies, no scraping x.com, no browser automation.
  Every action goes through the API with the user's own key and their connected account. If asked
  to bypass the API and drive Twitter directly, refuse and explain why.
- **Always show the credit cost and get explicit confirmation before any spend**, and before any
  batch of writes (a run of DMs, follows, or likes). Never spend silently. Re-confirm if the batch
  grows.
- **Conservative pacing, warm-up first, personalize always.** Respect per-account daily limits
  (`references/account-safety.md`), spread sends over the day, and stop a sequence the moment a
  lead replies.
- **No spam, ever.** This is targeted outreach to relevant people. **Refuse mass-blast /
  spray-and-pray / buy-a-list-and-hammer-it requests** — decline and steer the user back to a
  tighter ICP and a smaller, better-fit list. Untargeted volume gets accounts banned and is not
  what this skill is for.
- **Reporting language:** talk about **replies and conversations started**, never DM send counts.
  Do not present "N DMs sent" as a success metric anywhere.
- **On errors, stop and surface** the API's message. Only back off + retry once on `429`. Never
  loop retries on `402/403/409` — those need a human decision (top up, upgrade, reconnect).

## References (read the one that fits the task)

| File | Use it for |
|---|---|
| `references/dm-playbook.md` | Openers, personalization depth, follow-up timing, and how to handle replies |
| `references/account-safety.md` | What gets X accounts flagged, safe daily DM pacing, and warm-up-first guidance |
| `references/api-reference.md` | Concise endpoint + credit-cost reference, auth, idempotency, and error handling |

Never fabricate a lead, a `can_dm` flag, a credit balance, or an API result. Everything comes from a
real API call you actually made, or it is clearly labeled as a draft/estimate.
```


---

From **God of Skills**: a curated, hand-tested directory of AI skills, prompts, templates and image style guides.
Source: https://godofskills.com/skills/cold-dm?ref=claude-skill
