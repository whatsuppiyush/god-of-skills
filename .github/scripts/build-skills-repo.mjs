#!/usr/bin/env node
// Materialises the public GitHub skills repo tree from the live registry routes.
//
// The website (via src/lib/skills.ts) is the single source of truth; this script
// is a plain-JS snapshot tool with NO TypeScript / alias imports, so it runs with
// bare `node` and can point at either a local dev server or production.
//
// The repo is organised DEPARTMENT-WISE (like a company): marketing, sales,
// engineering, art-and-photography, etc. — one flagship monorepo that is the
// thing you promote for GitHub stars. Every entry becomes <department>/<slug>/SKILL.md
// so it installs identically as a Claude / agent skill. Only FREE entries are
// exported (paid packs never leak).
//
// Usage:
//   node scripts/build-skills-repo.mjs [BASE_URL] [OUT_DIR]
//   node scripts/build-skills-repo.mjs http://localhost:3100 ../skills-repo
//   node scripts/build-skills-repo.mjs https://godofskills.com ../skills-repo
//
// Then push OUT_DIR to the flagship repo (see REPO-STRATEGY.md / todo.md §2.3).

import { mkdir, writeFile, rm, readdir } from "node:fs/promises";
import { join } from "node:path";

// Wipe generated content but PRESERVE a real git repo living in OUT: never touch
// .git or .github (workflows). Lets the same folder be a persistent repo that we
// regenerate in place.
const PRESERVE = new Set([".git", ".github"]);
async function cleanOut(dir) {
  let entries;
  try {
    entries = await readdir(dir);
  } catch {
    return; // dir doesn't exist yet
  }
  for (const name of entries) {
    if (PRESERVE.has(name)) continue;
    await rm(join(dir, name), { recursive: true, force: true });
  }
}

const BASE = (process.argv[2] || "http://localhost:3100").replace(/\/$/, "");
const OUT = process.argv[3] || join(process.cwd(), "..", "skills-repo");

// Registry category -> department folder + display name. New categories fall
// back to a slug of the category name, so nothing is ever dropped silently.
const DEPARTMENTS = {
  Marketing: { dir: "marketing", label: "Marketing" },
  SEO: { dir: "seo", label: "SEO" },
  Ads: { dir: "advertising", label: "Advertising" },
  Sales: { dir: "sales", label: "Sales" },
  Engineering: { dir: "engineering", label: "Engineering" },
  Research: { dir: "research", label: "Research" },
  Writing: { dir: "writing", label: "Writing" },
  Ops: { dir: "operations", label: "Operations" },
  "Image style guides": { dir: "art-and-photography", label: "Art & Photography" },
};

const slugify = (s) =>
  s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

function departmentOf(category) {
  return DEPARTMENTS[category] ?? { dir: slugify(category || "misc"), label: category || "Misc" };
}

async function main() {
  console.log(`Reading registry from ${BASE}/r/skills.json`);
  const res = await fetch(`${BASE}/r/skills.json`);
  if (!res.ok) throw new Error(`registry fetch failed: ${res.status}`);
  const { skills } = await res.json();
  const free = skills.filter((s) => !s.paid);
  console.log(`${skills.length} entries (${free.length} free) — writing to ${OUT}`);

  await cleanOut(OUT);
  await mkdir(OUT, { recursive: true });

  // group by department, preserving registry order within each
  const groups = new Map();
  for (const s of free) {
    const dep = departmentOf(s.category);
    if (!groups.has(dep.dir)) groups.set(dep.dir, { ...dep, items: [] });
    groups.get(dep.dir).items.push(s);
  }

  let written = 0;
  for (const g of groups.values()) {
    for (const s of g.items) {
      // Fetch from BASE (not the absolute prod rawUrl) so the repo can be built
      // from a local dev server before the site is deployed.
      const md = await fetch(`${BASE}${new URL(s.rawUrl).pathname}`).then((r) => r.text());
      const folder = join(OUT, g.dir, s.slug);
      await mkdir(folder, { recursive: true });
      await writeFile(join(folder, "SKILL.md"), md);
      written++;
    }
  }

  await writeFile(join(OUT, "skills.json"), JSON.stringify({ count: free.length, skills: free }, null, 2));
  await writeFile(join(OUT, "README.md"), readme([...groups.values()], free.length));
  await writeFile(join(OUT, "LICENSE"), MIT);

  console.log(`Done. ${written} SKILL.md files across ${groups.size} departments + skills.json + README + LICENSE.`);
  console.log(`Next: cd ${OUT} && git init && git add -A && git commit -m "God of Skills" && push to the flagship repo.`);
}

function readme(groups, total) {
  const line = (s) => `- [**${s.title}**](${s.dir ?? "."}) — ${s.description} · [page](${s.url})`;
  const section = (g) =>
    `### ${g.label}\n\n${g.items
      .map((s) => `- [**${s.title}**](${g.dir}/${s.slug}/SKILL.md) — ${s.description} · [page](${s.url})`)
      .join("\n")}`;
  void line;
  return `# God of Skills — open skills library

> ${total} hand-tested AI skills, prompts, templates and image style guides for Claude, ChatGPT,
> Cursor and 30+ agent tools. Free and open. Organised by department, like a company.

Full searchable directory, with examples and copy-paste recipes: **https://godofskills.com**

Every folder holds a \`SKILL.md\` — the same file agents load as a skill. Drop one into a project,
or wire the whole library over MCP and let your agent pull skills on demand.

## Install one skill (Claude Code)

\`\`\`bash
mkdir -p .claude/skills/<name> && \\
  curl -sL https://godofskills.com/r/skills/<name>.md -o .claude/skills/<name>/SKILL.md
\`\`\`

## Or add the whole library as an MCP server

\`\`\`bash
claude mcp add --transport http godofskills https://godofskills.com/mcp
\`\`\`

Then ask your agent for any skill by name. Works with any MCP client.

## Departments

${groups.map(section).join("\n\n")}

---

⭐ If this is useful, star the repo — it helps other people find it.

Generated from https://godofskills.com — do not hand-edit; edit the source and re-run the generator.
`;
}

const MIT = `MIT License

Copyright (c) God of Skills

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`;

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
