---
title: "ChatGPT Prompts for SQL and Database Development"
description: "Expert ChatGPT prompts for SQL developers and data engineers. Write complex queries, design schemas, optimize performance, and build data pipelines. Copy-paste ready."
pubDate: 2025-04-05
author: "AI Prompt Hub Team"
category: "coding-prompts"
tags: ["sql", "database", "chatgpt", "data engineering", "postgresql", "mysql", "data modeling"]
image: "/images/blog/chatgpt-sql-database-prompts.jpg"
pinned: false
draft: false
---

SQL is where data becomes insight. Whether you're writing your first JOIN or designing a multi-terabyte warehouse schema, ChatGPT accelerates every step of the database development workflow. These prompts cover queries, schema design, optimization, and data pipelines.

## Query Writing Prompts

### Prompt 1: Complex Query Builder

```
Write an optimized SQL query:

Database: [PostgreSQL / MySQL / SQLite / BigQuery / Snowflake / SQL Server]
Goal: [plain English description of what data you need]

Tables involved (paste CREATE TABLE or describe):
- [table_name]: [columns and relationships]
- [table_name]: [columns and relationships]

Requirements:
- Filter: [WHERE conditions]
- Grouping: [GROUP BY if aggregation needed]
- Sorting: [ORDER BY]
- Limit: [LIMIT if needed]
- Performance concern: [expected row counts, any index hints]

Output:
1. The SQL query with comments explaining non-obvious parts
2. Plain-English explanation of the query logic
3. Any indexes that would dramatically improve this query
4. Alternative approach if one exists
5. One common mistake to avoid when running this query
```

---

### Prompt 2: Window Functions Explainer and Generator

```
Help me use SQL window functions for:

Goal: [what analysis you're trying to do — e.g. "calculate 7-day rolling average of sales per product"]
Database: [PostgreSQL / BigQuery / Snowflake / SQL Server]
Table structure: [paste or describe]

Produce:
1. The query using the appropriate window function
2. Plain English explanation of how the window function works
3. The PARTITION BY and ORDER BY choices explained
4. Alternative without window functions (for comparison)
5. Two more examples of window functions useful for my data type

Window functions to cover if relevant:
ROW_NUMBER / RANK / DENSE_RANK / LAG / LEAD / SUM OVER / AVG OVER / FIRST_VALUE / LAST_VALUE
```

---

### Prompt 3: Query Performance Optimizer

```
Optimize this slow SQL query:

Database: [type and version]
Current execution time: [X seconds]
Table sizes: [approximate row counts for each table]

Current query:
```sql
[paste your query]
```

Existing indexes: [list or "unknown"]
Query plan output (if available): [paste EXPLAIN output]

Analyze and fix:
1. Missing indexes (which columns and why)
2. Inefficient JOIN order
3. Subqueries that should be CTEs or temp tables
4. SELECT * usage
5. Functions on indexed columns preventing index use
6. N+1 query patterns
7. Unnecessary DISTINCT or ORDER BY

Show before/after and estimate improvement.
```

---

## Schema Design Prompts

### Prompt 4: Database Schema Designer

```
Design a relational database schema for:

Application: [what the application does]
Core entities: [list the main objects/concepts in your domain]
Key relationships: [describe how entities relate to each other]
Database: [PostgreSQL / MySQL / SQLite]
Scale: [small / medium / large — rows per table estimate]
Key queries this schema must support efficiently: [list 3–5 main queries]

Produce:
1. Entity-Relationship diagram (text format)
2. CREATE TABLE statements for each table
3. Primary and foreign key definitions
4. Index recommendations for each table
5. Normalization choices explained (why 3NF, where denormalization makes sense)
6. Any JSON/array column considerations
7. Soft delete vs. hard delete approach
```

---

### Prompt 5: Data Migration Script

```
Write a data migration script:

Database: [source and target — same or different types]
Migration goal: [restructuring / adding columns / splitting tables / merging tables / data type change]

Current schema: [paste or describe]
Target schema: [paste or describe]
Data volume: [approximate rows affected]

Script must:
1. Be wrapped in a transaction (all-or-nothing)
2. Validate data before migrating (count check)
3. Handle NULLs and edge cases explicitly
4. Include a rollback plan
5. Log what was migrated
6. Be idempotent (safe to run twice)

Also: what could go wrong with this migration and how to test safely.
```

---

## Analytics and Reporting Prompts

### Prompt 6: Analytics Query Library

```
Build an analytics query library for a [type of business] database.

Schema summary: [describe your main tables — users, orders, events, etc.]
Database: [type]

Write optimized queries for:
1. Daily active users (last 30 days)
2. Monthly recurring revenue (for subscription business)
3. Customer cohort retention by signup month
4. Top 10 products by revenue this quarter vs. last quarter
5. User funnel analysis (steps from registration to conversion)
6. Average session duration by traffic source
7. Churn rate by customer segment
8. Revenue per user by acquisition channel

For each query: the SQL + what metric it produces + how to interpret the result.
```

---

## Frequently Asked Questions

### Which SQL dialect does ChatGPT write best?

PostgreSQL and MySQL are strongest due to training data volume. BigQuery and Snowflake are well-supported. Highly specific SQL Server T-SQL syntax and Oracle PL/SQL are less reliable — always test outputs against your actual database version. Specify your dialect and version explicitly in every prompt.

### How do I get ChatGPT to write queries for my specific schema?

Paste your CREATE TABLE statements (with or without sample data) at the top of the prompt. ChatGPT immediately uses your actual column names, relationships, and constraints. This single step dramatically improves query accuracy over describing the schema in prose.

### Can ChatGPT help me understand a query I didn't write?

Yes, and this is one of the highest-value uses. Ask: "Explain this query to me step by step, starting with what data it returns and then walking through each clause": [paste query]. It's faster than debugging unknown SQL yourself and works well for inherited codebases or database code written by a colleague.

### How accurate is ChatGPT for query optimization advice?

Strong for general principles (missing indexes, avoiding SELECT *, efficient JOIN strategies) and moderate for specific optimization. The best optimization requires an actual query plan (EXPLAIN ANALYZE output) — paste that into your prompt for much more targeted advice. ChatGPT can't profile your actual database statistics, so treat optimization suggestions as hypotheses to test.

### Should I run ChatGPT-generated SQL directly on production?

Never without review. Always: (1) read and understand the query before running, (2) test on a non-production copy of the data first, (3) wrap destructive operations (UPDATE, DELETE, DROP) in a transaction with a rollback test, (4) LIMIT results initially to verify the WHERE clause works as expected before running the full query.
