---
title: "ChatGPT Prompts for Python Developers: Write Better Code Faster"
description: "Expert ChatGPT prompts for Python developers. Data processing, automation, API integration, Django/FastAPI, testing, and performance optimization. Copy-paste ready."
pubDate: 2025-02-20
author: "AI Prompt Hub Team"
category: "coding-prompts"
tags: ["python", "chatgpt", "coding prompts", "automation", "data science", "django", "fastapi"]
draft: false
image:
  path: /images/blog/default.jpg
  alt: AI Prompt Hub article
pin: false
---

Python developers who use AI ship faster across every layer of the stack — from one-liners that replace 20 lines of manual logic to full API endpoints with error handling and tests. These prompts are specific to Python and cover the tasks you actually do every day.

## Data Processing Prompts

### Prompt 1: Pandas Data Cleaning Pipeline

```
Write a Python data cleaning function using pandas for:

Dataset description: [describe your data — columns, types, issues]
Issues to fix: [missing values / duplicates / type mismatches / outliers / etc.]
Output: [cleaned DataFrame ready for analysis]

Requirements:
- Handle each issue explicitly with a comment explaining why
- Log what was changed (rows removed, values imputed, etc.)
- Return both the cleaned df and a cleaning_report dict
- Use type hints
- Include docstring

Sample data (or describe it):
[paste sample or describe columns]
```

---

### Prompt 2: Data Analysis Script

```
Write a Python script to analyze this dataset:

Data: [describe or paste a sample]
Questions to answer:
1. [analytical question 1]
2. [analytical question 2]
3. [analytical question 3]

Requirements:
- pandas for data manipulation
- matplotlib or plotly for charts (specify your preference)
- Print a clean summary report to console
- Save charts to /output/ folder
- Add comments explaining each analytical step
```

---

## Automation Prompts

### Prompt 3: File Processing Automation

```
Write a Python script to automate:

Task: [describe exactly what needs to happen — e.g. "rename all PDFs in a folder based on their date modified, move them to subfolders by year/month, and log everything to a CSV"]

Input: [source location and format]
Output: [where files should end up and format]
Error handling: [what to do with files that fail]
Logging: [console / file / both]

Requirements:
- pathlib for all file operations (not os.path)
- dry_run=True parameter to preview without making changes
- Progress bar with tqdm
- Summary report at the end
```

---

### Prompt 4: Web Scraping Script

```
Write a Python web scraping script to extract:

Target: [URL or describe the site]
Data to extract: [what fields — titles, prices, links, dates, etc.]
Pagination: [yes/no — how many pages]
Output: [CSV / JSON / SQLite]

Requirements:
- requests + BeautifulSoup or playwright (specify if dynamic site)
- Polite scraping: random delays between 1–3 seconds
- Retry logic for failed requests (max 3 retries)
- User-agent rotation
- Progress indicator
- Resume capability if interrupted

Note: For robots.txt compliance, add a check at the top.
```

---

## API Development Prompts

### Prompt 5: FastAPI Endpoint

```
Write a FastAPI endpoint for:

Endpoint: [method] [path]
Purpose: [what it does]
Request body: [fields and types]
Response model: [fields and types]
Authentication: [API key / JWT / none]
Business logic: [what processing happens]

Include:
- Pydantic models for request and response
- Input validation with meaningful error messages
- Error handling (400, 401, 404, 500)
- Dependency injection for database/auth
- Docstring for OpenAPI docs
- Unit test for the endpoint
```

---

### Prompt 6: Python Script to Call Any REST API

```
Write a Python class to interact with the [API name] API:

Base URL: [URL]
Authentication: [API key / OAuth / Bearer token]
Endpoints to implement:
- [endpoint 1]: [description]
- [endpoint 2]: [description]
- [endpoint 3]: [description]

Requirements:
- requests or httpx (async if needed)
- Automatic retry with exponential backoff
- Rate limiting respect (X requests per minute)
- Response parsing into typed dataclasses or Pydantic models
- Comprehensive error messages
- Usage examples in docstring
```

---

## Testing Prompts

### Prompt 7: pytest Test Suite

```
Write a comprehensive pytest test suite for this Python code:

```python
[paste your function or class]
```

Include:
- Unit tests for each method/function
- Edge case tests (empty, None, boundary values)
- Error condition tests
- Parametrized tests where appropriate (pytest.mark.parametrize)
- Fixtures for any shared setup
- Mock any external dependencies

Test naming convention: test_[function]_[scenario]_[expected_result]
Coverage target: 90%+
```

---

## Performance Optimization Prompts

### Prompt 8: Performance Audit

```
Audit this Python code for performance issues:

```python
[paste your code]
```

Analyze and fix:
1. Unnecessary loops that can be vectorized
2. Repeated database/API calls that can be batched or cached
3. Memory inefficiencies (loading full data when streaming would work)
4. String operations that should use join()
5. List comprehension opportunities

For each issue:
- Show the original code
- Show the optimized code
- Estimate the performance improvement
- Explain why it's faster
```

---

## Frequently Asked Questions

### Which ChatGPT model is best for Python code?

GPT-4 is significantly better than GPT-3.5 for complex Python tasks — especially multi-file architecture, debugging tricky async code, and generating comprehensive tests. For simple scripts and one-liners, GPT-3.5 is fine and faster.

### Can I trust ChatGPT to write secure Python code?

Not without review. ChatGPT regularly produces code with security issues: SQL injection risks (string concatenation instead of parameterized queries), insecure file permissions, missing input validation, and hardcoded secrets. Always run security linting tools (bandit, semgrep) on AI-generated code.

### How do I get ChatGPT to follow my project's coding style?

Paste 20–50 lines of existing code from your codebase at the top of your prompt and say "Match the coding style, patterns, and conventions shown in this code." It will pick up your formatting, docstring style, naming conventions, and architectural patterns.

### What Python tasks should I NOT delegate to ChatGPT?

Critical security code (authentication, encryption, payment processing), complex async logic that requires deep reasoning about race conditions, and production database migrations. Draft with AI, then have a senior engineer review thoroughly.

### How do I use ChatGPT for Python debugging without sharing sensitive code?

Replace real variable names, API keys, and business logic with generic placeholders before pasting. The error message and code structure are usually enough for ChatGPT to diagnose the problem without needing your actual data or credentials.
