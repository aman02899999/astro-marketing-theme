---
title: "ChatGPT Prompts for DevOps and Infrastructure: Automate Everything"
description: "Expert ChatGPT prompts for DevOps engineers. Write Docker configs, CI/CD pipelines, Terraform IaC, shell scripts, monitoring setups, and incident runbooks."
pubDate: 2025-04-25
author: "AI Prompt Hub Team"
category: "coding-prompts"
tags: ["devops", "docker", "kubernetes", "terraform", "chatgpt", "infrastructure", "cicd", "automation"]
image: "/images/blog/chatgpt-devops-infrastructure-prompts.jpg"
pinned: false
draft: false
---

DevOps engineers spend a disproportionate amount of time on configuration, documentation, and boilerplate. These prompts eliminate that overhead so you can focus on architecture, reliability, and the work that actually requires expertise.

## Docker and Container Prompts

### Prompt 1: Dockerfile Generator

```
Write an optimized Dockerfile for:

Application: [description]
Language/runtime: [Node.js 20 / Python 3.12 / Go 1.22 / Java 21 / etc.]
Framework: [Express / FastAPI / Spring Boot / etc.]
Application type: [web server / CLI tool / worker / etc.]
Port: [X]
Environment: [development / production]

Requirements:
- Multi-stage build (keep final image lean)
- Non-root user for security
- Layer caching optimization (dependencies before code)
- Health check instruction
- .dockerignore guidance (list what to exclude)
- Environment variables via ENV with sensible defaults
- Signal handling (proper SIGTERM handling)

Output: Dockerfile with comments explaining each non-obvious choice.
```

---

### Prompt 2: Docker Compose Configuration

```
Write a docker-compose.yml for:

Application: [description]
Services needed:
  - App: [language/framework]
  - Database: [PostgreSQL / MySQL / MongoDB / Redis / etc.]
  - [Other services: message queue / cache / reverse proxy]
Environment: [development / staging / production]

Requirements:
- Named volumes for data persistence
- Health checks on all services
- Service dependency ordering (depends_on with condition)
- Environment variables via .env file
- Network isolation (custom network, not default bridge)
- Resource limits where appropriate
- Restart policies

Also include: the .env.example file I should create.
```

---

## CI/CD Pipeline Prompts

### Prompt 3: GitHub Actions Workflow

```
Write a GitHub Actions CI/CD workflow for:

Application: [language and framework]
Repository type: [monorepo / single service]
Pipeline stages needed: [test / lint / build / deploy]
Deployment target: [AWS ECS / GKE / Heroku / Fly.io / VPS / etc.]
Test command: [your test command]
Build command: [your build command]
Environments: [staging / production / or both]

Requirements:
- Trigger: [on PR / on push to main / on tag]
- Caching: dependencies (npm / pip / go modules)
- Parallel jobs where possible
- Secrets management (reference GitHub Secrets)
- Deployment only on main branch (not PRs)
- Rollback strategy
- Notification on failure (Slack or email)

Output: complete workflow YAML with comments.
```

---

## Infrastructure as Code Prompts

### Prompt 4: Terraform Module

```
Write a Terraform configuration for:

Cloud provider: [AWS / GCP / Azure]
Resources to create: [list — e.g. VPC, EC2 instances, RDS, S3 buckets, IAM roles]
Environment: [dev / staging / production]
Region: [target region]

Requirements:
- Module structure (reusable)
- Variables with descriptions and defaults
- Outputs for cross-module references
- Remote state backend (S3 + DynamoDB / GCS / Azure Blob)
- Tagging strategy
- Least-privilege IAM policies
- Resource naming convention: [company]-[env]-[service]-[resource]

Output: main.tf / variables.tf / outputs.tf / backend.tf structure with all files.
```

---

## Operations and Monitoring Prompts

### Prompt 5: Incident Runbook

```
Write an incident response runbook for:

Service: [name and what it does]
Alert: [the specific alert or incident type — e.g. "P99 latency > 2s" / "database connection pool exhausted" / "disk usage > 90%"]

Runbook sections:
1. ALERT SUMMARY: What this alert means and why it matters
2. IMMEDIATE TRIAGE (first 5 minutes):
   - Commands to run to assess severity
   - Key dashboards to check
   - Initial containment steps
3. DIAGNOSTIC STEPS:
   - Commands for root cause investigation
   - Common causes and how to identify each
4. RESOLUTION PATHS:
   - Fix for each common cause
   - Escalation criteria (when to wake someone up)
5. COMMUNICATION:
   - Status page update template
   - Internal Slack update template
6. POST-INCIDENT:
   - What to document
   - Monitoring improvements to add

Format as a copy-paste ready runbook in Markdown.
```

---

### Prompt 6: Shell Script Generator

```
Write a production-ready shell script to:

Task: [describe exactly what the script should do]
OS: [Linux / macOS / both]
Shell: [bash / zsh / sh]
Frequency: [one-time / cron job — if cron, specify schedule]
Inputs: [environment variables / command line arguments / config file]

Requirements:
- Strict mode: set -euo pipefail
- Logging to stdout with timestamps
- Error handling with meaningful messages
- Dry-run flag (--dry-run) to preview without executing
- Lock file (prevent concurrent runs) if cron
- Exit codes: 0 for success, non-zero with specific codes for different failure types
- Usage/help text (--help flag)
- Cleanup trap (remove temp files on exit)

Include: example cron entry if recurring.
```

---

## Frequently Asked Questions

### How reliable is ChatGPT for generating infrastructure code?

Strong for common patterns (standard Docker, GitHub Actions, basic Terraform for major cloud providers) and moderate for edge cases and cutting-edge features. Always review generated IaC carefully before applying to production — infrastructure mistakes are harder to reverse than application bugs. Test in a non-production environment first.

### Should I paste my actual infrastructure secrets into ChatGPT prompts?

Never. Replace all real values with placeholders before pasting anything into ChatGPT: API keys become `YOUR_API_KEY`, passwords become `YOUR_PASSWORD`, account IDs become `123456789`. ChatGPT doesn't need real values to generate correct configurations — it works fine with descriptive placeholders.

### What DevOps tasks does ChatGPT handle best?

Boilerplate generation (Dockerfiles, CI/CD workflows, Terraform modules), documentation (runbooks, architecture decisions, README files), shell script writing, Kubernetes manifest generation, and explaining configuration options. It's weakest on very new platform features, complex multi-cloud architectures, and anything requiring real-time system state.

### How do I use ChatGPT for debugging infrastructure issues?

Paste the exact error message and relevant configuration (with secrets redacted). Ask: "What does this error mean and what are the most likely causes?" Then: "What commands should I run to diagnose this further?" This is faster than searching StackOverflow for most common infrastructure errors.

### Can ChatGPT write Kubernetes manifests?

Yes, well. Specify your workload type (Deployment, StatefulSet, DaemonSet), resource requirements, service type, and any special configurations. It generates correct YAML for standard Kubernetes patterns. For advanced features (custom operators, complex RBAC, service mesh configuration), validate carefully against the official Kubernetes docs for your cluster version.
