---
name: chatterapi
description: Live Reddit and X data for your agent: find people asking for your product, track mentions, check a subreddit's rules and look up accounts, all within a credit budget it sticks to.
---


# ChatterAPI (Reddit + X data)

This skill teaches an agent to use ChatterAPI's MCP tools for four jobs: finding leads, listening for brand mentions, researching subreddits and looking up Reddit or X accounts. Every call costs credits. The skill checks prices first, asks before any run of more than five calls and stops when the balance gets low. You need the ChatterAPI MCP server connected and an API key. Signup includes 100 free credits.

## Use it to

- Find posts on Reddit and X where people ask for a product like yours
- Check what people said about your brand this week, on both platforms
- Read a subreddit's rules and recent top posts before you post there
- Look up a Reddit or X account before you reply or reach out

## How to use it

**Claude Code**
1. Get an API key at chatterapi.com/signup and export it as CHATTERAPI_KEY
2. Connect the MCP server: claude mcp add --transport http chatterapi https://api.chatterapi.com/mcp --header "Authorization: Bearer $CHATTERAPI_KEY"
3. Add the skill: npx skills add Amplifyx-Labs/chatterapi-skill

## SKILL.md

```
---
name: chatterapi
description: Use ChatterAPI's MCP tools to find leads, track brand mentions, research subreddits and look up Reddit or X accounts, while keeping to a credit budget. Use when the user asks to search Reddit or X, find people asking for a product, monitor mentions, check a subreddit's rules, or look up an account.
---

# ChatterAPI

ChatterAPI gives you live Reddit and X data through MCP tools with names like `reddit_search` and `x_user`. Every call costs credits, and every result ends with `credits.charged` and `credits.remaining`.

## Before you start

1. Check that the server is connected by calling `chatterapi_account`. It is free and returns the balance, plan and rate limit.
2. If no ChatterAPI tools are available, tell the user to install the server from https://chatterapi.com/mcp-server and stop.
3. Call `chatterapi_list_tools` once to see what each tool costs. Do not guess prices.

## Budget rules

- Before any job that needs more than five calls, tell the user the expected cost and get a yes.
- Read `credits.remaining` after each call. Stop when it drops below the cost of the next call.
- Keep `limit` small (10 to 25) unless the user wants an export.
- Page with `cursor` only while the results stay relevant. Every page is charged.
- On `insufficient_credits`, stop and pass on the top-up link from the error. Do not retry.
- On `rate_limited`, wait `retryAfter` seconds and retry once.
- On `upstream_error` or `upstream_timeout`, retry once after a few seconds, then report it.

## Job 1: find leads

Use `everywhere_leads` for Reddit and X together, or `reddit_leads` / `x_leads` for one platform.

- `q` is the category or problem in two or three words ("crm", "cold email"), not the user's brand.
- Add up to five `competitors` to catch people switching away from them.
- Results are ranked by `intentScore` (0 to 1) with `matchedTerms`. Show the top ones with their link, the intent and the reason they matched.
- Never draft a reply that pretends to come from a neutral user. Suggest the user reply as themselves.

## Job 2: listen for mentions

Use `everywhere_mentions` with the brand name in `q`, other spellings in `aliases`, and the user's own accounts in `excludeAuthors`.

For one platform, use `reddit_search` or `reddit_search_comments` (Reddit) or `x_search` and `x_mentions` (X) with `sort=new`. Summarise what people say, grouped into praise, complaints and questions.

## Job 3: research communities

1. `reddit_communities` with the customer's problem as `q` to find subreddits.
2. `reddit_subreddit` on the most promising ones for size, rules and posting settings. Read the rules before suggesting any post.
3. `reddit_subreddit_posts` with `sort=top` and `time=month` to see what that community rewards.

For each community, report its size, whether it allows self-promotion, and two or three post ideas that fit its rules.

## Job 4: look up people

- Reddit: `reddit_user` for profile and karma, `reddit_user_status` to check whether an account is active, `reddit_user_comments` and `reddit_user_posts` for history.
- X: `x_user` for profile and `canDm`, `x_tweets` for recent posts, `x_followers` to export an audience (this gets expensive at scale, so agree on a page budget first).

## Things to avoid

- Do not call 18+ tools unless the user asks. They only work after the user turns them on in Settings.
- Do not loop over hundreds of accounts or pages without an agreed budget.
- Do not post, vote or message on the user's behalf. The Reddit tools are read-only.
```


---

From **God of Skills**: a curated, hand-tested directory of AI skills, prompts, templates and image style guides.
Source: https://godofskills.com/skills/chatterapi?ref=claude-skill
