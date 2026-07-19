---
name: founder-crm-notion
description: A ready Notion CRM wired for AI enrichment, drop a name, the linked prompt fills the row.
---


# Founder CRM (Notion)

A Notion CRM template pre-wired for AI enrichment. Add a contact name and the linked prompt fills in company, role, and a first-line opener. Built for a one-person founder pipeline.

## Use it to

- Run a lightweight sales pipeline in Notion
- Auto-enrich new contacts with one prompt
- Track deals without a heavyweight CRM

## The template

```
# Founder CRM in Notion, pre-wired for AI enrichment

A lightweight CRM for a one-person founder pipeline. Two linked databases, a handful of views that answer "who do I talk to next", and one enrichment prompt you run whenever you drop in a new contact name. No plugins required. Everything below is copy-and-build.

## What you get
- A Contacts database (the people).
- A Deals database (the opportunities), linked to Contacts.
- Two views that run your day: a pipeline board by stage, and a follow-ups-due list.
- One enrichment prompt that turns a bare name into company, role, and a personalized opener.

## (a) Database schema

### Contacts DB

| Property | Type | Purpose |
|---|---|---|
| Name | Title | The person's full name. The one field you fill by hand. |
| Company | Text | Where they work. Filled by the enrichment prompt. |
| Role | Text | Their job title or function. Filled by the enrichment prompt. |
| Opener | Text | A one-line, personalized first message. Filled by the enrichment prompt. |
| Email | Email | Their email once you have it. |
| Source | Select | How you met them: Referral, Inbound, Event, Cold, Community, Other. |
| Status | Select | Relationship stage: New, Contacted, Replied, Meeting, Customer, Passed. |
| Last touch | Date | The date you last spoke or messaged. |
| Next follow-up | Date | When to reach out next. Drives the follow-ups view. |
| Deals | Relation to Deals DB | Links this person to any deals they belong to. |
| Notes | Text | Freeform context, call notes, anything you want to remember. |

### Deals DB

| Property | Type | Purpose |
|---|---|---|
| Deal | Title | Short name for the opportunity, for example "Acme, pilot". |
| Contact | Relation to Contacts DB | The person driving this deal. |
| Stage | Select | Pipeline stage: Lead, Qualified, Proposal, Negotiation, Won, Lost. |
| Value | Number (format: currency) | Expected or closed deal value. |
| Probability | Select | Rough confidence: Low, Medium, High. |
| Expected close | Date | Target date to close. |
| Next step | Text | The single next action that moves this deal forward. |
| Next step date | Date | When that next step is due. |
| Notes | Text | Deal-specific context, objections, decision makers. |

### Recommended views

Contacts DB:
- Follow-ups due (Table or List): filter Next follow-up is on or before today, sort Next follow-up ascending. This is your daily call sheet.
- All contacts (Table): default catch-all, sorted by Last touch descending.

Deals DB:
- Pipeline board (Board, grouped by Stage): drag deals between Lead, Qualified, Proposal, Negotiation, Won, Lost. Sort each column by Expected close.
- Closing soon (Table): filter Expected close within the next 14 days and Stage is not Won and not Lost.

## (b) The enrichment prompt

Run this whenever you add a contact name. Paste it into your AI assistant, replace the input, and copy the three returned fields back into Company, Role, and Opener.

```
ROLE: You are a research assistant for a founder's CRM. Given a person's name and any context I paste, you return three fields only: their company, their role, and a one-line personalized opener I can send.

INPUT
- Name: {contact_name}
- Context (optional, paste anything I know: where we met, their profile text, a link, a company): {context}

INSTRUCTIONS
1. From the context I provided, identify the person's current company and role. Use only what is supported by the context. If the context does not make it clear, write "unknown" rather than guessing.
2. Write one opener: a single sentence, under 25 words, that references something specific and real about them from the context. It should sound like a human founder, not a template. No flattery, no "I hope this finds you well", no pitch.
3. If you had to mark company or role as unknown, make the opener something I can send anyway, based on how we met.

CONSTRAINTS
- Never invent a company, title, or fact that is not in the context. "unknown" is an acceptable answer.
- No em-dashes. Use commas or periods.
- Return only the three fields, nothing else.

OUTPUT FORMAT
Company: <company or unknown>
Role: <role or unknown>
Opener: <one sentence, under 25 words>
```

## (c) Step-by-step setup

1. Create a new Notion page called "CRM". This is the home for both databases.
2. On that page, add a full-page database and name it "Contacts". Add each property from the Contacts DB table above, matching the property type exactly. Delete the default Tags property if it was auto-added.
3. Add a second full-page database on the CRM page and name it "Deals". Add each property from the Deals DB table.
4. Wire the relation. In the Deals DB, set the Contact property type to Relation and point it at the Contacts DB. Notion will offer to show the reverse relation on Contacts: turn that on so the Contacts "Deals" property appears automatically.
5. Set the Select options. Open each Select property (Source, Status, Stage, Probability) and type in the option values listed in the schema so they are ready to pick.
6. Build the views. On Contacts, add a new view called "Follow-ups due" and apply the filter and sort described above. On Deals, add a Board view called "Pipeline board" grouped by Stage, and a Table view called "Closing soon" with the date filter.
7. Save the enrichment prompt somewhere one click away: a Notion callout block at the top of the CRM page, a saved snippet in your AI tool, or a text expander. The goal is that adding a contact and enriching it takes seconds.
8. Run the loop. When a new person enters your world: add a row in Contacts with just their Name, run the enrichment prompt with whatever context you have, paste Company, Role, and Opener back in, set Source, Status, and a Next follow-up date. When a contact becomes a real opportunity, create a linked row in Deals and work it from the pipeline board.

That is the whole system: one field of manual input per contact, one prompt to fill the rest, and two views that tell you who to talk to today.
```


---

From **God of Skills**: a curated, hand-tested directory of AI skills, prompts, templates and image style guides.
Source: https://godofskills.com/templates/founder-crm-notion?ref=claude-skill
