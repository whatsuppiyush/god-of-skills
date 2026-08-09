---
name: ai-consistent-characters
description: How to keep the same character across multiple AI images, using today's methods, not the obsolete Midjourney trick.
---


# Consistent Characters Across AI Images

Keeping one character looking the same across many images is the single most-asked problem in AI image generation, and the answer changed. The old Midjourney `--cref` trick is fading; today the reliable methods are reference images, image-to-image, and the strong character consistency in newer models like Nano Banana. This guide is the working playbook: the methods that actually hold a character together, in order of reliability, plus the details that make or break it.

Works in: Midjourney, GPT Image, Flux, Nano Banana, Stable Diffusion.

## How to use this skill

When the user asks for an image prompt in this style, compose one using the formulas and vocabulary below. Fill each slot with a concrete choice, then return the finished prompt. Prefer naming a real camera/lens, a light, and a colour or film treatment, which is what makes the output read as a real photograph rather than an AI render.

## Formulas

**The consistency recipe**
```
a fixed, detailed character description (reused verbatim) + a reference image + one changed thing (pose / scene / outfit)
```
Lock the description and the reference; change only one variable per image. That is how you get the same person in a new situation instead of a new person.

## Worked prompt examples

_The reusable character sheet_
```
Character: a woman, late 20s, warm brown skin, short black curly hair, round gold glasses, small scar above left eyebrow, green utility jacket. [Reuse this block verbatim, then add the scene.] ...standing in a rainy market at night.
```

_Base reference_
```
Character sheet: a woman, late 20s, short black curly hair, round gold glasses, green utility jacket, neutral standing pose, plain background, consistent illustration style
```

_New scene, same character_
```
The same character (reuse the description + reference image), now sitting at a cafe table, warm light, same face, hair, glasses and jacket
```

_New pose, same character_
```
The same character (reuse the description + reference image), now walking through a rainy street at night, dynamic pose, same face, hair, glasses and jacket
```

## Vocabulary

### The methods, most reliable first

**Reference images (most reliable)**
- **How**: Generate one clean reference of the character, then attach it and ask for new poses/scenes. GPT Image and Nano Banana are strong at this; Midjourney uses image prompts + --cref; Stable Diffusion uses IP-Adapter / ControlNet.
- **When**: Any time you need more than one image of the same character. This is the default in 2026.
- **Catch**: Large changes (very different angle or lighting) still drift. Change one thing at a time.

**A fixed character description**
- **How**: Write a specific, detailed description (age, hair, distinctive features, clothing) and reuse it verbatim in every prompt.
- **When**: Always, alongside a reference. It is the cheap half of the recipe.
- **Catch**: Vague words drift. Name specific, repeatable features (a scar, a particular jacket), not moods.

**Image-to-image / inpainting**
- **How**: Take an existing image of the character and edit it (new background, new outfit) rather than generating from scratch.
- **When**: Small changes to an image you already like.
- **Catch**: Drifts if you push the change strength too high; keep edits modest.

**Seed locking (Midjourney / Stable Diffusion)**
- **How**: Fix the seed so the starting point is the same across generations.
- **When**: A helper on models that expose a seed; weakest method on its own.
- **Catch**: A same seed does not guarantee the same face if the prompt changes much. Use with a reference.


---

From **God of Skills**: a curated, hand-tested directory of AI skills, prompts, templates and image style guides.
Source: https://godofskills.com/guides/ai-consistent-characters?ref=claude-skill
