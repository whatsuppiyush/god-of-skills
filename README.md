# God of Skills — open skills library

> 20 hand-tested AI skills, prompts, templates and image style guides for Claude, ChatGPT,
> Cursor and 30+ agent tools. Free and open. Organised by department, like a company.

Full searchable directory, with examples and copy-paste recipes: **https://godofskills.com**

Every folder holds a `SKILL.md` — the same file agents load as a skill. Drop one into a project,
or wire the whole library over MCP and let your agent pull skills on demand.

## Install one skill (Claude Code)

```bash
mkdir -p .claude/skills/<name> && \
  curl -sL https://godofskills.com/r/skills/<name>.md -o .claude/skills/<name>/SKILL.md
```

## Or add the whole library as an MCP server

```bash
claude mcp add --transport http godofskills https://godofskills.com/mcp
```

Then ask your agent for any skill by name. Works with any MCP client.

## Departments

### SEO

- [**SEO Cluster Builder**](seo/seo-cluster-builder/SKILL.md) — One seed keyword into a full hub-and-spoke content map with an internal-link matrix. · [page](https://godofskills.com/skills/seo-cluster-builder)
- [**SEO Content Brief Builder**](seo/seo-content-brief/SKILL.md) — Competitive briefs with per-section word counts, entities to cover, and a title/meta set. · [page](https://godofskills.com/skills/seo-content-brief)

### Sales

- [**Cold Email That Books**](sales/cold-email-that-books/SKILL.md) — A 6-step chain that writes cold emails from a prospect's LinkedIn: hook, proof, one ask. · [page](https://godofskills.com/prompts/cold-email-that-books)

### Engineering

- [**Changelog Writer**](engineering/changelog-writer/SKILL.md) — Reads merged PRs and drafts a human changelog grouped by feature / fix / chore. · [page](https://godofskills.com/skills/changelog-writer)

### Marketing

- [**Landing Page Teardown**](marketing/landing-page-teardown/SKILL.md) — Paste a URL, get a conversion audit: hierarchy, hook, objections, CTA — scored 0–100. · [page](https://godofskills.com/prompts/landing-page-teardown)

### Operations

- [**Founder CRM (Notion)**](operations/founder-crm-notion/SKILL.md) — A ready Notion CRM wired for AI enrichment — drop a name, the linked prompt fills the row. · [page](https://godofskills.com/templates/founder-crm-notion)
- [**Meeting Notes → Actions**](operations/meeting-notes-to-actions/SKILL.md) — Paste a transcript, get owners, decisions, and dated action items — nothing invented. · [page](https://godofskills.com/prompts/meeting-notes-to-actions)

### Writing

- [**Brand Voice Codifier**](writing/brand-voice-codifier/SKILL.md) — Feed it 10 posts, it writes a reusable voice guide every future prompt can load. · [page](https://godofskills.com/skills/brand-voice-codifier)

### Art & Photography

- [**AI Photography: The DSLR Style Guide**](art-and-photography/ai-dslr-photography/SKILL.md) — The camera, lens, film-stock and lighting vocabulary that turns flat AI images into photographs that look real. · [page](https://godofskills.com/ai-dslr-photography)
- [**AI Art Styles: The Reference**](art-and-photography/ai-art-styles/SKILL.md) — One subject rendered across 20 art movements, each with the exact prompt, so you can see what every style actually does. · [page](https://godofskills.com/ai-art-styles)
- [**AI Product Photography: Setups & Mockups**](art-and-photography/ai-product-photography/SKILL.md) — One product across 16 studio setups, surfaces and lighting, each with the prompt, so you can shoot any product without a studio. · [page](https://godofskills.com/ai-product-photography)
- [**AI Anime & Illustration Styles**](art-and-photography/ai-anime-styles/SKILL.md) — One character across 16 anime and manga sub-styles, each with the prompt, from Ghibli to webtoon to noir manga. · [page](https://godofskills.com/ai-anime-styles)
- [**AI Food Photography**](art-and-photography/ai-food-photography/SKILL.md) — 12 food-photography styles, from dark-and-moody to bright-and-airy to flat-lay, each with the prompt. · [page](https://godofskills.com/ai-food-photography)
- [**AI Interior Design Styles**](art-and-photography/ai-interior-design/SKILL.md) — One living room across 14 interior-design styles, each with the prompt, from Scandinavian to japandi to maximalist. · [page](https://godofskills.com/ai-interior-design)
- [**AI Portrait Styles**](art-and-photography/ai-portrait-styles/SKILL.md) — 16 kinds of portrait, from corporate headshot to editorial to cinematic, each with the prompt. · [page](https://godofskills.com/ai-portrait-styles)
- [**AI Fashion Photography**](art-and-photography/ai-fashion-photography/SKILL.md) — One model across 14 fashion-photography styles, from runway to streetwear to haute couture, each with the prompt. · [page](https://godofskills.com/ai-fashion-photography)
- [**AI Film Stock Emulation**](art-and-photography/ai-film-stock-emulation/SKILL.md) — One portrait across 14 film stocks, so you can see exactly what each film's colour does, each with the prompt. · [page](https://godofskills.com/ai-film-stock-emulation)
- [**AI Image Controls, Compared**](art-and-photography/ai-image-controls-compared/SKILL.md) — The same handful of dials (aspect ratio, style strength, seed, reference images) mapped across every major image model. · [page](https://godofskills.com/ai-image-controls-compared)
- [**Consistent Characters Across AI Images**](art-and-photography/ai-consistent-characters/SKILL.md) — How to keep the same character across multiple AI images, using today's methods, not the obsolete Midjourney trick. · [page](https://godofskills.com/ai-consistent-characters)
- [**Blending & Reference Images**](art-and-photography/ai-blending-reference-images/SKILL.md) — How to combine two images or ideas into one, using multi-image reference input, the modern replacement for photobashing. · [page](https://godofskills.com/ai-blending-reference-images)

---

⭐ If this is useful, star the repo — it helps other people find it.

Generated from https://godofskills.com — do not hand-edit; edit the source and re-run the generator.
