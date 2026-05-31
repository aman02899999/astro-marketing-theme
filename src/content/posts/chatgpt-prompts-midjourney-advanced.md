---
title: "Advanced Midjourney Prompts: Master Parameters, Styles, and Photorealism"
description: "Advanced Midjourney prompts and techniques. Master --style, --sref, aspect ratios, camera settings, lighting vocabulary, and prompt structures for professional-grade images."
pubDate: 2025-07-22
author: "AI Prompt Hub Team"
category: "design-prompts"
tags: ["midjourney", "ai art", "advanced prompting", "design", "image generation", "photography"]
draft: false
image:
  path: /images/blog/default.jpg
  alt: AI Prompt Hub article
pin: false
---

Midjourney's power comes from mastering its parameter system alongside prompt vocabulary. These aren't beginner tips — they're the techniques that separate amateur AI art from professional-grade outputs.

## Advanced Prompt Structures

### The Professional Photography Formula

```
[subject description], [camera make and model], [lens spec], [aperture], [lighting type and quality], [time of day], [location/environment], [mood/atmosphere], [color treatment], --ar [ratio] --style raw --v 6.1

Example:
Portrait of a jazz musician in his 50s, deep in concentration, Leica M11, 50mm Summilux f/1.4, open shade natural light, late afternoon, intimate jazz club, smoky atmospheric haze, desaturated warm tones --ar 3:4 --style raw --v 6.1
```

### The Concept Art Formula

```
[concept description], [style reference: artist or movement], [environment/context], [lighting mood], [color palette], [technical rendering quality], --ar [ratio] --v 6.1

Example:
Ancient underwater library, Art Nouveau architecture meets biopunk organic tech, bioluminescent lighting, teal and amber color palette, intricate details, concept art, by Greg Rutkowski, octane render --ar 16:9 --v 6.1
```

---

## Parameter Reference

### Essential Parameters

**--ar (aspect ratio):** Controls image dimensions
- `--ar 1:1` Square (social media)
- `--ar 16:9` Widescreen (YouTube, desktop)
- `--ar 9:16` Vertical (Instagram Reels, TikTok)
- `--ar 4:5` Portrait (Instagram feed)
- `--ar 3:2` Classic photo proportions

**--style raw:** Reduces Midjourney's aesthetic processing for more literal interpretations. Essential for product photography and realistic portraits.

**--stylize (--s):** Controls how strongly Midjourney applies its aesthetic training
- `--s 0` Very literal, minimal style
- `--s 100` Default balance
- `--s 750` Highly stylized, more artistic

**--chaos (--c):** Controls variation between image grid results
- `--c 0` Consistent, focused results
- `--c 100` Maximum variation and experimentation

**--weird (--w):** Introduces unexpected elements
- `--w 250–1000` for controlled weirdness in experimental work

### Style Reference (--sref)

```
[your prompt] --sref [image URL or another Midjourney job URL]
```
Applies the visual style of a reference image without copying content. Use for: maintaining consistent brand aesthetics, replicating a visual style across a series, or exploring "what if this style met this subject."

---

## Lighting Vocabulary

Professional lighting terms that dramatically improve results:

**Natural Light:** golden hour, blue hour, overcast diffuse light, dappled forest light, harsh midday sun, backlit silhouette, rim lighting from setting sun

**Studio Light:** three-point lighting, Rembrandt lighting, butterfly lighting, split lighting, broad lighting, softbox diffused, ring light catchlights, cross lighting

**Cinematic Light:** practical lighting, motivated light sources, film noir chiaroscuro, neon-lit night, god rays, volumetric fog, anamorphic lens flares

**Atmospheric:** bioluminescent, candlelit, firelight, golden hour magic hour, blue hour twilight, storm light, fog-diffused

---

## Frequently Asked Questions

### What's the most impactful parameter to learn first?

`--style raw` combined with specific camera and lens specifications. This combination removes Midjourney's automatic "beautification" and produces images that look like actual photographs rather than AI interpretations. For commercial photography, product images, and realistic portraits, `--style raw` is essential.

### How do I get consistent characters across multiple images?

Use Character Reference (`--cref [image URL]`) to maintain facial consistency across a series. Combine with `--style raw` for the most realistic results. Note that `--cref` controls character appearance, while `--sref` controls overall style — you can use both together.

### What's the difference between --v 6 and --v 6.1?

V6.1 (the current version as of late 2024) produces sharper details, better text rendering, more accurate prompt following, and improved photorealism over V6. For most professional work, specify `--v 6.1`. V5.2 still produces more "painterly" aesthetic results that some artists prefer for illustration work.

### How do I write prompts for product photography?

```
[Product name], product photography, [surface/background], [lighting setup], commercial photography, clean background, [specific angle: front view / 45 degree / overhead], sharp focus, photorealistic, studio shot, --style raw --ar 1:1 --v 6.1
```
Add: `white background` or `gradient background` or `lifestyle setting` depending on use case.

### How do I avoid Midjourney's "AI look" in portraits?

Three techniques: (1) `--style raw` to reduce AI aesthetic processing, (2) specific camera and lens (`Canon 5D Mark IV, 85mm f/1.8`) to force realistic rendering, (3) specific lighting condition (`soft overcast natural light, no flash`). The "AI look" often comes from Midjourney's default enhancement mode, which `--style raw` disables.
