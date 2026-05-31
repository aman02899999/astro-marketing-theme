---
title: "ChatGPT Prompts for Technical SEO: Fix Issues and Improve Core Web Vitals"
description: "Expert ChatGPT prompts for technical SEO. Audit site speed, fix crawlability issues, implement structured data, optimize Core Web Vitals, and improve indexation."
pubDate: 2025-03-30
author: "AI Prompt Hub Team"
category: "seo-prompts"
tags: ["technical seo", "core web vitals", "chatgpt", "site speed", "structured data", "crawlability"]
draft: false
image:
  path: /images/blog/default.jpg
  alt: AI Prompt Hub article
pin: false
---

Technical SEO is the foundation everything else sits on. The best content in the world won't rank if Google can't crawl, index, or render your pages properly. These prompts help you audit, diagnose, and fix technical issues — even if you're not a developer.

## Site Audit Prompts

### Prompt 1: Technical SEO Audit Checklist

```
Generate a comprehensive technical SEO audit checklist for:

Site type: [blog / e-commerce / SaaS / local business / news]
CMS: [WordPress / Astro / Shopify / Next.js / custom]
Current traffic: [rough monthly visits or "new site"]
Known issues: [list anything you already know]

Produce a prioritized checklist across these areas:

CRAWLABILITY (high priority)
- robots.txt configuration
- XML sitemap status
- Crawl budget considerations
- Redirect chains and loops
- Broken internal links
- Orphan pages

INDEXATION
- Canonical tag implementation
- noindex usage audit
- Duplicate content issues
- Pagination handling
- Hreflang (if multilingual)

PERFORMANCE
- Core Web Vitals: LCP, CLS, INP
- Page speed bottlenecks
- Image optimization
- JavaScript render-blocking
- Server response time (TTFB)

STRUCTURED DATA
- Schema markup coverage
- Schema validation
- Rich result eligibility

MOBILE
- Mobile-first indexing readiness
- Viewport configuration
- Touch target sizing

For each item: priority (critical/important/nice-to-have) and why it matters.
```

---

### Prompt 2: robots.txt Generator

```
Generate a robots.txt file for:

Site type: [blog / e-commerce / web app]
CMS: [your CMS]
Sitemap URL: [your sitemap URL]

I want to:
ALLOW: [pages/sections to allow — usually everything]
DISALLOW: [pages/sections to block, e.g. admin, checkout, search results, duplicate parameter URLs]
Special cases: [staging subdomain / PDF files / user-generated content / etc.]

Also:
- Block common SEO-negative bots: [AhrefsBot / SemrushBot — or "keep all"]
- Crawl-delay for bots: [yes/no]

Produce the complete robots.txt file ready to upload.
Explain each disallow directive and why it's appropriate.
```

---

### Prompt 3: XML Sitemap Strategy

```
Design an XML sitemap strategy for:

Site: [description]
Total pages: [approximate count]
Content types: [blog posts / product pages / category pages / landing pages]
Update frequency: [how often content is added]

Produce:
1. Sitemap architecture recommendation (single vs. sitemap index + multiple sitemaps)
2. Which pages to INCLUDE and WHY
3. Which pages to EXCLUDE and WHY (thin content, paginated, noindex, etc.)
4. Priority values recommendation (0.1–1.0) per page type
5. Changefreq values per content type
6. Sitemap submission strategy (Google Search Console + Bing)
7. Automated regeneration setup notes for [your CMS]

Sample sitemap XML for the top-level index structure.
```

---

## Core Web Vitals Prompts

### Prompt 4: LCP Optimization Guide

```
Help me improve my Largest Contentful Paint (LCP) score.

Current LCP: [X seconds — from PageSpeed Insights or CrUX]
LCP element: [image / text block / video — from PageSpeed report]
Current score: [Poor / Needs Improvement / Good]
Tech stack: [your CMS and hosting]
Current image format: [JPEG / PNG / WebP / AVIF]

Diagnose and fix:
1. Is this an image, text, or video LCP? (different fix path)
2. Top 5 causes of slow LCP for my setup
3. Specific fixes in priority order
4. Code snippet for: preloading the LCP image
5. Image optimization checklist
6. Hosting/server improvements to consider
7. Expected improvement from each fix

Target: LCP under 2.5 seconds.
```

---

### Prompt 5: Schema Markup Generator (Advanced)

```
Generate structured data markup for:

Page type: [Article / Product / LocalBusiness / Event / Recipe / HowTo / FAQ / BreadcrumbList / SiteNavigationElement]
Page URL: [url]
Content details:
[provide the relevant details for the schema type — title, description, author, price, steps, etc.]

Requirements:
- Valid JSON-LD format
- All required properties for the schema type
- Recommended properties that enable rich results
- Nested entities where appropriate (e.g., author Organization + Person)
- DatePublished and dateModified for articles

After the markup:
1. List which rich result features this unlocks
2. How to validate it (Google Rich Results Test)
3. Common mistakes that invalidate this schema type
```

---

## Indexation Prompts

### Prompt 6: Canonical Tag Audit

```
Audit my canonical tag implementation:

Site structure I'll describe:
- Homepage: [URL]
- Blog posts: [URL pattern]
- Category pages: [URL pattern]
- Paginated pages: [URL pattern like /page/2]
- URL parameters used: [e.g., ?sort=price, ?color=red, ?ref=newsletter]
- Duplicate content concern: [www vs non-www / HTTP vs HTTPS / trailing slash]

For each scenario provide:
1. Correct canonical tag to use
2. Common mistake to avoid
3. Whether self-referencing canonicals are needed
4. How pagination should be handled
5. How parameter URLs should be handled

Output: canonical tag implementation rules I can give to my developer.
```

---

## Frequently Asked Questions

### What are the most impactful technical SEO fixes for a new site?

In priority order: (1) ensure all pages are crawlable and indexable, (2) implement a proper sitemap and submit to Google Search Console, (3) fix duplicate content with canonicals, (4) optimize Core Web Vitals especially LCP, (5) add appropriate schema markup. These five alone cover 80% of technical SEO value for most sites.

### How do I know if Google can crawl my site properly?

Google Search Console is the authoritative source. Check: Coverage report (indexed vs. not indexed), URL Inspection tool (test specific pages), and the Crawl Stats report (how often and how much Google is crawling). ChatGPT can help you interpret what you find, but you need the actual data from GSC.

### Is Core Web Vitals really a ranking factor?

Yes, but it's a tiebreaker, not a primary ranking factor. Two pages with equal relevance will see the better-performing page rank higher. More importantly, poor Core Web Vitals hurt user experience, which increases bounce rates, which is a negative signal. Fix CWV for users first, rankings second.

### How often should I run a technical SEO audit?

Full audit: quarterly. Targeted monitoring: continuous via Google Search Console alerts and a crawl tool (Screaming Frog, Ahrefs, Sitebulb). Every time you make significant site changes — new CMS, site migration, major template update — run an audit immediately after. Technical SEO problems compound silently if unchecked.

### Can I fix technical SEO issues without a developer?

Many issues yes: robots.txt, sitemap, meta tags, canonical tags, and schema markup can be managed through CMS plugins or settings without coding. Core performance issues (render-blocking JS, server response time, image delivery) typically require developer involvement. Prompt 1's checklist separates which fixes need dev resources.
