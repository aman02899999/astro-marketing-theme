#!/usr/bin/env node
/**
 * generate-articles.js
 * Reads topics from data/topics.json and generates markdown articles
 * in src/content/posts/ — matching astro-marketing-theme's content schema.
 *
 * Frontmatter schema used by this theme (from live example):
 *   title, description, pubDate, author, category, tags, image, pinned, draft
 *
 * Usage:
 *   node scripts/generate-articles.js
 *   node scripts/generate-articles.js --topic "My Topic" --category "seo-prompts"
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

// ─── Helpers ──────────────────────────────────────────────────────────────

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

function today() {
  return new Date().toISOString().split('T')[0];
}

// Category name → slug (matches navigation.json)
const CATEGORY_SLUGS = {
  'ChatGPT Prompts':      'chatgpt-prompts',
  'Business Prompts':     'business-prompts',
  'Marketing Prompts':    'marketing-prompts',
  'SEO Prompts':          'seo-prompts',
  'Coding Prompts':       'coding-prompts',
  'Productivity Prompts': 'productivity-prompts',
  'YouTube Prompts':      'youtube-prompts',
  'Social Media Prompts': 'social-media-prompts',
  'Design Prompts':       'design-prompts',
  'Education Prompts':    'education-prompts',
};

const BASE_TAGS = {
  'ChatGPT Prompts':      ['chatgpt', 'ai prompts', 'prompt engineering'],
  'Business Prompts':     ['business', 'entrepreneurship', 'strategy'],
  'Marketing Prompts':    ['marketing', 'content marketing', 'growth'],
  'SEO Prompts':          ['seo', 'search engine optimization', 'keywords'],
  'Coding Prompts':       ['coding', 'programming', 'development'],
  'Productivity Prompts': ['productivity', 'time management', 'efficiency'],
  'YouTube Prompts':      ['youtube', 'video content', 'content creation'],
  'Social Media Prompts': ['social media', 'instagram', 'linkedin'],
  'Design Prompts':       ['design', 'midjourney', 'dall-e'],
  'Education Prompts':    ['education', 'learning', 'teaching'],
};

function buildFrontmatter(topic) {
  const categorySlug = CATEGORY_SLUGS[topic.category] || slugify(topic.category);
  const tags = [...(BASE_TAGS[topic.category] || ['ai', 'prompts'])].slice(0, 6);
  const imageSlug = slugify(topic.title);

  return `---
title: "${topic.title.replace(/"/g, '\\"')}"
description: "Discover the best ${(topic.keyword || topic.title).toLowerCase()} with our comprehensive guide. Copy-paste ready prompts with examples and tips."
pubDate: ${today()}
author: "AI Prompt Hub Team"
category: "${categorySlug}"
tags: [${tags.map(t => `"${t}"`).join(', ')}]
image: "/images/blog/${imageSlug}.jpg"
pinned: false
draft: false
---`;
}

function buildArticleBody(topic) {
  const { title, category } = topic;
  const categorySlug = CATEGORY_SLUGS[category] || slugify(category);

  return `

Are you looking for the best **${topic.keyword || title.toLowerCase()}**? In this guide you'll find expert-crafted prompts you can use immediately to get better results from AI tools.

> **Quick Start:** Copy any prompt below, paste it into ChatGPT or Claude, and replace the parts in [brackets] with your details.

## Why Use Specialized AI Prompts?

Generic prompts get generic results. Specialized prompts:

- **Save time** — get the right output on the first try
- **Improve quality** — better context produces better responses
- **Unlock capabilities** — go beyond surface-level AI use
- **Increase consistency** — reliable outputs across your workflows

## Top Prompts for ${category}

### Prompt 1: Getting Started

\`\`\`
Act as an expert in ${category.toLowerCase()}. I need help with [specific task].

Context: [your context]
Goal: [what you want to achieve]
Format: [how you want the output structured]
Constraints: [any limitations or requirements]

Please provide [specific deliverable].
\`\`\`

**When to use:** Use this prompt when starting any task in ${category.toLowerCase()}.

---

### Prompt 2: Advanced Technique

\`\`\`
You are a world-class expert in ${category.toLowerCase()}.

I want you to [action] for [subject].

Follow these steps:
1. First, analyze [aspect 1]
2. Then, create [aspect 2]
3. Finally, optimize [aspect 3]

My requirements:
- [Requirement 1]
- [Requirement 2]

Output as: [format]
\`\`\`

**Pro tip:** Add "Think step by step" at the end of any prompt for more detailed, logical responses.

---

### Prompt 3: Creative Application

\`\`\`
Generate 10 unique [output type] for [your context].

Each should:
- Be [quality descriptor]
- Include [key element]
- Avoid [element to avoid]

Target audience: [audience]
Tone: [tone]
Length per item: [length]
\`\`\`

---

## How to Use These Prompts Effectively

### 1. Add Specific Context

The more context you give, the better the output. Always include:
- Your role or expertise level
- The end goal
- The target audience
- Any constraints or requirements

### 2. Iterate and Refine

Don't expect perfection on the first try. Effective follow-up prompts:
- "Make this more concise"
- "Give me 5 more variations"
- "Rewrite this for a [different audience]"
- "Focus more on [specific aspect]"

### 3. Chain Prompts for Complex Tasks

For complex work, break it into steps:
1. Research / analysis prompt
2. Planning / structure prompt
3. Execution prompt
4. Review / refinement prompt

## Advanced Tips

- **Use role-playing:** "Act as a [specific expert]..."
- **Specify format:** Request bullet points, tables, JSON, or code blocks
- **Set word limits:** "In 200 words or less..."
- **Ask for alternatives:** "Give me 3 different approaches..."
- **Request reasoning:** "Explain your reasoning step by step"

## Frequently Asked Questions

### What AI tool works best with these prompts?

These prompts work with ChatGPT (GPT-4), Claude, Gemini, and most modern AI tools. GPT-4 and Claude 3 tend to produce the best results for complex, multi-step prompts.

### Can I use these prompts commercially?

Yes. All prompts on AI Prompt Hub are free for personal and commercial use. We only ask that you don't republish our full articles without permission.

### How do I get better results from AI prompts?

Specificity is everything. Include context, desired format, tone, target audience, and constraints. The more specific your prompt, the better the output.

### Do these prompts work with the free version of ChatGPT?

Most prompts work with free versions, but GPT-4 (ChatGPT Plus) produces significantly better results for complex, multi-step tasks.

### How often are new prompts published?

We publish new prompt articles regularly. Subscribe to our [RSS feed](/rss.xml) or check back often.

---

*Found these prompts helpful? Share this article with someone who could use better AI results.*

[← Browse more ${category}](/blog/categories/${categorySlug})
`;
}

// ─── Main ─────────────────────────────────────────────────────────────────

async function run() {
  const topicsPath = path.join(ROOT, 'data', 'topics.json');
  const outputDir  = path.join(ROOT, 'src', 'content', 'posts');

  // CLI args: --topic "Title" --category "Category Name"
  const args = process.argv.slice(2);
  const titleIdx = args.indexOf('--topic');
  const catIdx   = args.indexOf('--category');
  let topics;

  if (titleIdx !== -1 && catIdx !== -1) {
    topics = [{
      title:    args[titleIdx + 1],
      category: args[catIdx + 1],
      keyword:  args[titleIdx + 1].toLowerCase(),
    }];
  } else {
    topics = JSON.parse(fs.readFileSync(topicsPath, 'utf-8'));
  }

  fs.mkdirSync(outputDir, { recursive: true });

  let generated = 0, skipped = 0;

  for (const topic of topics) {
    const slug     = slugify(topic.title);
    const filePath = path.join(outputDir, `${slug}.md`);

    if (fs.existsSync(filePath)) {
      console.log(`⏭  Skip (exists): ${slug}`);
      skipped++;
      continue;
    }

    const content = buildFrontmatter(topic) + buildArticleBody(topic);
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`✅ Generated: ${slug}`);
    generated++;
  }

  console.log(`\n📊 Done — Generated: ${generated}, Skipped: ${skipped}`);
  console.log(`📁 Output: ${outputDir}`);
}

run().catch(console.error);
