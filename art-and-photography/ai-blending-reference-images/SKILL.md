---
name: ai-blending-reference-images
description: How to combine two images or ideas into one, using multi-image reference input, the modern replacement for photobashing.
---


# Blending & Reference Images

Combining two images or ideas, a face and a galaxy, a product and a scene, two photos into one, used to mean manual photobashing or fiddly Midjourney blends. Now the reliable route is multi-image reference input: give the model the images and describe how to combine them. This guide covers the methods and the prompt patterns that make blends look intentional rather than pasted.

Works in: Midjourney, GPT Image, Flux, Nano Banana, Stable Diffusion.

## How to use this skill

When the user asks for an image prompt in this style, compose one using the formulas and vocabulary below. Fill each slot with a concrete choice, then return the finished prompt. Prefer naming a real camera/lens, a light, and a colour or film treatment, which is what makes the output read as a real photograph rather than an AI render.

## Formulas

**The blend recipe**
```
[image A] + [image B] + how they combine (double exposure / composited into / textured with)
```
The relationship word matters: 'a double exposure of X and Y' reads differently from 'X composited into Y' or 'X with the texture of Y'. Name the one you want.

## Worked prompt examples

_Reference blend vs word blend_
```
Reference (GPT Image / Nano Banana): [attach face image] + [attach forest image], blend them as a double exposure, face filled with the forest.  ·  Words only: 'double exposure portrait of a woman's profile filled with a misty pine forest, elegant, monochrome'.
```

_Double exposure_
```
Double exposure portrait of a woman's profile filled with a misty pine forest, elegant, monochrome, blended seamlessly
```

_Texture blend_
```
A portrait of a woman blended with autumn leaves, her skin taking on the texture and colour of the leaves, artistic, seamless
```

_Composite into a scene_
```
A perfume bottle composited into a dramatic mountain landscape at sunset, the product integrated with matching light and reflections, seamless
```

## Vocabulary

### The methods

**Multi-image reference (most control)**
- **How**: Attach two or more images and describe how they combine. GPT Image and Nano Banana are the strongest; they can genuinely merge provided images.
- **When**: You have the source images and want a controllable, faithful blend.
- **Catch**: Be explicit about which image is the base and which is the overlay, and about matching the light.

**Double exposure (words only)**
- **How**: Describe both subjects and use 'double exposure of X filled with Y'.
- **When**: You want the double-exposure look and have no source images.
- **Catch**: Works best with a clear silhouette (a profile, a head) as the container.

**Compositing a product into a scene**
- **How**: '[product] composited into [scene], integrated with matching light and reflections'.
- **When**: Advertising: placing a product into an environment believably.
- **Catch**: Name 'matching light and shadow' or it will look pasted on.


---

From **God of Skills**: a curated, hand-tested directory of AI skills, prompts, templates and image style guides.
Source: https://godofskills.com/playbooks/ai-blending-reference-images?ref=claude-skill
