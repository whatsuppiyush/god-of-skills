---
name: brand-voice-codifier
description: Feed it 10 posts, it writes a reusable voice guide every future prompt can load.
---


# Brand Voice Codifier

Give it 10 of your best posts and it distils a reusable voice guide, cadence, vocabulary, banned phrases, that every future prompt can load. Stops AI-slop tone before it starts.

## Use it to

- Codify a founder or brand voice once, reuse everywhere
- Keep ghost-written content on-voice
- Onboard a new writer to your tone fast

## How to use it

**Claude / Claude Code**
1. Paste 10 posts into the skill
2. Save the returned voice guide
3. Load it at the top of any writing prompt

## SKILL.md

```
---
name: brand-voice-codifier
description: >-
  Distil ~10 of the user's best posts into a reusable voice guide they can paste at the top
  of any future writing prompt, so anything you write next sounds like them and not like
  generic AI. Use whenever the user says "capture my voice", "make a voice guide", "sound
  like me", "match my writing style", "codify our brand voice", "write in my tone", or hands
  over a batch of their own posts and wants future content to match. Reach for it before
  ghostwriting, before onboarding a new writer, or when AI drafts keep coming back sounding
  bland. Output is a loadable voice-guide document with rules, banned phrases, and before/after
  rewrites.
---

# Brand Voice Codifier

Take a sample of the user's genuinely good writing and reverse-engineer the rules that make
it sound like them, then write those rules down as a document they can load into any future
prompt. The output is not a description of the voice ("friendly and confident"); it is an
operating manual specific enough that a different writer, or a model, could produce a new post
that passes as theirs.

## When to use this

- Before ghostwriting or drafting anything in the user's or a brand's voice.
- Onboarding a writer or an agent who needs to match an existing voice.
- AI drafts keep coming out generic and the user wants a reusable fix.
- Trigger phrases: "voice guide", "sound like me", "match my tone", "codify our voice",
  "brand voice", "write like our founder".

## Workflow

### 1. Collect and read the samples

Get 8 to 12 pieces the user considers their best and most on-voice (posts, emails,
newsletters, threads). More is better up to a point; fewer than 6 and the guide overfits to
quirks. Read all of them once before analyzing anything, to feel the through-line.

Ask for the samples if not provided. If the user offers 30, ask them to pick the 10 they most
want future writing to resemble; quality of sample beats quantity.

### 2. Analyze along fixed dimensions

Go through the samples and extract concrete, quotable evidence for each dimension. Every
finding must be backed by an actual example from the samples, never invented.

- **Cadence and rhythm.** Short punchy bursts, or long flowing sentences? Do they vary
  deliberately (a long build then a three-word snap)? Note the pattern.
- **Sentence length.** Estimate the average and the range. Do they open with fragments? Use
  one-line paragraphs?
- **Vocabulary level.** Plain and concrete, or technical and precise? Casual or formal?
  List 8 to 15 words and phrases that recur and feel signature.
- **Signature phrases and tics.** Openers they reuse, transitions ("here's the thing"), a
  favorite metaphor domain, the way they start or end a piece.
- **Punctuation habits.** Em-dashes, ellipses, parentheses, colons before a list, ALL CAPS
  for emphasis, emoji use or absence, lowercase-everything.
- **Tone axes.** Place them on 3 to 5 sliders, e.g. warm <-> blunt, playful <-> serious,
  humble <-> authoritative, teacherly <-> peer. Cite the sample line that shows each.
- **Structure.** How a typical piece is built: hook style, whether they use lists, how they
  land the ending, whether they ask questions.

### 3. Derive the banned list

The fastest way to sound like someone is to avoid what they never say. From the samples,
infer what is off-voice and list it: corporate filler they clearly avoid, hype words absent
from their writing, punctuation they never use, greeting or sign-off styles that would feel
wrong. Add anything the user explicitly dislikes.

### 4. Write 3 before/after rewrites

Prove the guide works. Write three short generic sentences (the kind an AI defaults to), then
rewrite each in the codified voice. These calibrate any future writer and let the user
confirm you nailed it.

### 5. Assemble the loadable guide

Produce the guide as a single self-contained block the user can paste at the top of any
prompt with "Write in this voice:". Keep it tight; a guide nobody can hold in their head does
not get used.

## OUTPUT TEMPLATE

```markdown
# Voice Guide: <name / brand>

## In one line
<the voice summarized in a single sentence>

## Cadence & rhythm
- <rule> (e.g. "Alternates long setup sentences with 3-to-5-word payoffs")
- Average sentence length: <short/medium/long>, range <X to Y words>

## Vocabulary
- Register: <plain / technical / casual / formal>
- Signature words & phrases: <word>, <word>, <phrase>, ...
- Signature openers / transitions: "<phrase>", "<phrase>"

## Punctuation & formatting
- <habit, e.g. "One-line paragraphs. No emoji. Colons to introduce lists.">

## Tone (sliders)
- Warm <---o------> Blunt   (sits toward: <side>, e.g. "calls out lazy thinking directly")
- Playful <------o--> Serious
- Humble <----o----> Authoritative

## Structure of a typical piece
- Hook: <how they open>
- Body: <list / narrative / argument>
- Ending: <how they land it>

## Never do (banned)
- <filler word>, <hype word>, <punctuation they avoid>
- <off-voice move>

## Before / after
1. Before: "<generic line>"
   After: "<same idea, in voice>"
2. Before: "<generic line>"
   After: "<in voice>"
3. Before: "<generic line>"
   After: "<in voice>"
```

## Worked example

Ten LinkedIn posts from a founder. Analysis finds: very short paragraphs (often one line),
average sentence ~11 words, opens most posts with a blunt contrarian claim, reuses "Most
people get this backwards" and "Here's what actually works", never uses emoji or exclamation
marks, favors concrete nouns over abstractions. Tone sits blunt, authoritative, and
teacherly-toward-a-peer.

The banned list captures what is absent: no "excited to share", no "game-changer", no hashtag
stacks, no rhetorical "Right?".

Before/after:

- Before: "I'm thrilled to share some thoughts on productivity!"
  After: "Most productivity advice is procrastination in a nicer outfit."

The founder pastes the finished guide above their next prompt and the drafts stop reading like
a press release.
```


---

From **God of Skills**: a curated, hand-tested directory of AI skills, prompts, templates and image style guides.
Source: https://godofskills.com/skills/brand-voice-codifier?ref=claude-skill
