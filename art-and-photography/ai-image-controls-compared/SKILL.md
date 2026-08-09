---
name: ai-image-controls-compared
description: The same handful of dials (aspect ratio, style strength, seed, reference images) mapped across every major image model.
---


# AI Image Controls, Compared

Every image model gives you the same small set of controls, they just spell them differently. Midjourney uses `--` flags; GPT Image and Nano Banana want plain words; Flux and Stable Diffusion use fields. This is the translation table. Learn the six dials once and you can drive any model, and you will not be stranded when Midjourney changes or a new model arrives. Deliberately model-agnostic: the concepts outlive the syntax.

Works in: Midjourney, GPT Image, Flux, Nano Banana, Stable Diffusion.

## How to use this skill

When the user asks for an image prompt in this style, compose one using the formulas and vocabulary below. Fill each slot with a concrete choice, then return the finished prompt. Prefer naming a real camera/lens, a light, and a colour or film treatment, which is what makes the output read as a real photograph rather than an AI render.

## Formulas

**The six dials**
```
aspect ratio · style strength · seed · reference images · negative prompts · quality / upscale
```
If you can set these six on a model, you can control it. Everything else is a variation on describing the image well, which the style guides on this site cover.

## Worked prompt examples

_"A 16:9 cinematic shot" in each model_
```
Midjourney: <prompt> --ar 16:9 --style raw  ·  GPT Image / Nano Banana: <prompt>, 16:9 widescreen cinematic framing  ·  Flux: set aspect_ratio 16:9  ·  Stable Diffusion: width 1344, height 768
```

## Vocabulary

### The six dials, model by model

**Aspect ratio (the shape of the frame)**
- **Midjourney**: `--ar 16:9` (or 1:1, 9:16, 3:2…). A flag at the end of the prompt.
- **GPT Image**: Choose a size (1536x1024 landscape, 1024x1536 portrait, 1024x1024 square), or say the ratio in words.
- **Flux**: An aspect-ratio field / parameter in the API or UI.
- **Nano Banana**: Describe it in the prompt: 'widescreen 16:9 framing'. No flag.
- **Stable Diffusion**: Set width and height directly (e.g. 1344x768 for 16:9).

**Style strength (how hard it leans into your words)**
- **Midjourney**: `--stylize` / `--s` (0-1000). Low stays literal, high improvises. `--style raw` reduces the house look.
- **GPT Image**: No dial; control it with wording ('subtle', 'heavily stylised') and by how specific your style words are.
- **Flux**: A guidance / strength parameter controls how closely it follows the prompt.
- **Nano Banana**: Prompt wording only; be explicit about how stylised you want it.
- **Stable Diffusion**: CFG scale: low is loose, high follows the prompt more strictly.

**Seed (repeat or vary a result)**
- **Midjourney**: `--seed <number>` reproduces a starting point; same seed + same prompt = similar result.
- **GPT Image**: No user-facing seed; regenerate for variations.
- **Flux**: A seed parameter for reproducibility.
- **Nano Banana**: No user-facing seed.
- **Stable Diffusion**: A seed field; fix it to reproduce, change it to vary.

**Reference images (show it an example)**
- **Midjourney**: Image prompt (drop an image URL), plus `--cref` for character and `--sref` for style reference.
- **GPT Image**: Attach reference image(s); it can edit or riff on them directly.
- **Flux**: Image-to-image and reference inputs supported.
- **Nano Banana**: Strong multi-image reference / editing: give it images to blend or restyle.
- **Stable Diffusion**: img2img, ControlNet and IP-Adapter for precise reference control.

**Negative prompts (say what to avoid)**
- **Midjourney**: `--no <thing>` removes elements (e.g. `--no text`).
- **GPT Image**: No negative field; phrase it positively ('a clean sky with no clouds').
- **Flux**: Limited or no true negative prompt; phrase positively.
- **Nano Banana**: No negative field; describe what you want instead.
- **Stable Diffusion**: A dedicated negative-prompt box, the most powerful of the five here.

**Quality & upscaling**
- **Midjourney**: `--q` affects detail; the Upscale buttons enlarge a chosen image.
- **GPT Image**: Quality tiers (low / medium / high) trade cost for polish.
- **Flux**: Step count and model variant (schnell vs dev/pro) trade speed for quality.
- **Nano Banana**: Single quality tier; upscale separately if needed.
- **Stable Diffusion**: Sampling steps + a separate upscaler (e.g. ESRGAN) for resolution.


---

From **God of Skills**: a curated, hand-tested directory of AI skills, prompts, templates and image style guides.
Source: https://godofskills.com/guides/ai-image-controls-compared?ref=claude-skill
