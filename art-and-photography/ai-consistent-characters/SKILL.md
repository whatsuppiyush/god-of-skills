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

### A five-step workflow that works across tools

**The steps**
- **1. Write the character down**: Write a short fixed description: age, build, face shape, hair, skin tone, the one outfit, and two details that are hard to confuse with anyone else, such as a scar or a distinctive jacket. Keep it under a paragraph and never reword it between prompts.
- **2. Make one good reference image**: Generate the character alone, front-facing, on a plain background, in even light. Make several and keep the best. This image does most of the work later, so spend your time here.
- **3. Add a turnaround**: From the reference, ask for the same character from the side and from behind, then a few expressions. Check that the outfit and proportions match before you go further. A mistake is cheap to fix at this stage and expensive later.
- **4. Reuse the reference for every new scene**: Attach the reference image each time and paste the same character description. Change only the scene, the pose and the camera. Drift starts when you change the character description and the scene together.
- **5. Review in a row**: Put the images side by side before you use any of them. Drift is hard to see one picture at a time and obvious in a line. Throw out the outliers rather than trying to fix them.

### Why a character changes, and what to do about it

**Common causes**
- **The prompt got longer**: Every extra scene detail competes with the character description. Keep the character block identical and short, and let the scene be the only part that grows.
- **The outfit is vague**: A grey hoodie can be a hundred hoodies. Name the colour, the cut and one detail, such as a white drawstring or a chest pocket, so there is less room to invent.
- **The angle is new**: Models handle a front view best because they have seen more examples of it. When you move to a three-quarter or side view, add the turnaround image as a second reference.
- **The art style changed underneath**: If one scene says watercolour and the next says photo, the face will change with it. Put the style in the character block and treat it as part of the character.
- **Too many edits in a row**: Each regeneration or edit pass can nudge the face. Go back to the original reference instead of editing a copy of a copy.

### What each kind of tool is good at

**By kind of tool**
- **Chat-based image models**: Good for beginners. You can attach a reference image and ask for a change in plain language, and the conversation keeps the context. Consistency is decent for a few images and degrades over long sessions, so when it slips, start a fresh chat with the reference attached.
- **Image generators with reference flags**: These let you point at a reference image and say how closely to follow it, usually for the face, the whole look or only the style. Useful when you want a dial rather than a yes or no.
- **Open-source stacks**: The most control and the most setup. Techniques such as training a small adapter on a set of images of your character give the strongest consistency, but you need a handful of good training images and some patience.
- **Video and animation tools**: Treat a still of your character as the first frame and keep the description identical. Short clips hold a character far better than long ones, so cut a sequence into short shots.


---

From **God of Skills**: a curated, hand-tested directory of AI skills, prompts, templates and image style guides.
Source: https://godofskills.com/guides/ai-consistent-characters?ref=claude-skill
