---
title: "ChatGPT Prompts for API Development: Design, Build, and Document APIs"
description: "Expert ChatGPT prompts for API developers. Design REST and GraphQL APIs, write OpenAPI specs, build authentication, create documentation, and test endpoints."
pubDate: 2025-05-13
author: "AI Prompt Hub Team"
category: "coding-prompts"
tags: ["api development", "rest api", "graphql", "chatgpt", "backend", "openapi", "documentation"]
image: "/images/blog/chatgpt-api-development-prompts.jpg"
pinned: false
draft: false
---

APIs are the backbone of modern software — and well-designed ones are a competitive advantage. These prompts accelerate every phase of API development from design through documentation.

## API Design Prompts

### Prompt 1: REST API Design

```
Design a RESTful API for: [application description]

Core domain objects: [list your main entities]
Key operations: [what the API needs to support]
Authentication: [JWT / OAuth 2.0 / API key / session]
Versioning strategy: [URL versioning /v1 / header versioning / none]
Expected clients: [web app / mobile / third-party / internal]

Design the full API including:

ENDPOINTS (for each resource):
- GET /resources — list (with pagination, filtering params)
- GET /resources/:id — single resource
- POST /resources — create
- PUT/PATCH /resources/:id — update (distinguish full vs partial)
- DELETE /resources/:id — delete

REQUEST/RESPONSE:
- Request body schemas (JSON)
- Response schemas (data + metadata wrapper)
- Error response format (consistent across all endpoints)
- HTTP status codes for each operation

PAGINATION:
- Cursor-based or offset pagination?
- Response format for paginated results

RATE LIMITING:
- Headers to include
- Response for rate-limit exceeded

Produce: OpenAPI 3.0-compatible endpoint descriptions.
```

---

### Prompt 2: GraphQL Schema Design

```
Design a GraphQL schema for: [application]

Domain entities: [list with relationships]
Key queries: [what clients need to fetch]
Key mutations: [what clients need to create/update/delete]
Subscriptions: [real-time data needs — or "none"]
Authentication context: [how user identity is passed]

Produce:
1. Full GraphQL schema (SDL format)
2. Resolver map outline
3. N+1 query prevention strategy (DataLoader setup)
4. Pagination approach (cursor-based Relay spec or offset)
5. Error handling pattern
6. Input validation approach
7. Auth directive or middleware approach

Include: example queries and mutations for the 3 most important operations.
```

---

## Security Prompts

### Prompt 3: API Security Checklist

```
Review my API design for security vulnerabilities:

API type: [REST / GraphQL / gRPC]
Authentication: [method]
Data sensitivity: [public / user data / financial / health]

My API description: [paste endpoint list or architecture overview]

Audit for:
1. Authentication and authorization gaps
   - Missing auth on sensitive endpoints
   - IDOR (Insecure Direct Object Reference) vulnerabilities
   - Privilege escalation paths
2. Input validation
   - SQL/NoSQL injection vectors
   - Mass assignment vulnerabilities
   - Missing rate limiting
3. Data exposure
   - Over-fetching (returning more data than needed)
   - Sensitive fields in responses
   - Error messages leaking implementation details
4. Transport security
   - HTTPS enforcement
   - Certificate pinning (for mobile clients)
5. API-specific issues
   - GraphQL introspection in production
   - Batch query abuse

Output: prioritized security issues with code-level fixes.
```

---

## Documentation Prompts

### Prompt 4: OpenAPI Specification Writer

```
Write an OpenAPI 3.0 specification for:

API name: [name]
Base URL: [https://api.example.com/v1]
Authentication: [Bearer JWT / API key header / OAuth2]

Endpoints to document:
[list your endpoints with brief descriptions]

For each endpoint include:
- Summary and description
- Parameters (path, query, header, body)
- Request body schema with examples
- Response schemas for 200, 400, 401, 403, 404, 500
- Example request and response objects

Generate the YAML specification ready for Swagger UI or Redoc.
Include: info section, servers, components/schemas for reused types.
```

---

### Prompt 5: API Documentation Writer

```
Write developer documentation for this API endpoint:

Endpoint: [METHOD] [path]
Purpose: [what it does]
Request: [parameters and body]
Response: [structure and fields]
Authentication: [required]
Rate limit: [X requests per minute]

Documentation sections:
1. Overview (2 sentences — what this endpoint does and when to use it)
2. Request format (with copy-paste ready curl example)
3. Parameters table (name / type / required / description)
4. Response format (field-by-field description)
5. Error codes (table of error codes specific to this endpoint)
6. Code examples in: [JavaScript / Python / curl — pick 2–3]
7. Common mistakes (top 3 errors developers make with this endpoint)

Write for a developer reading this at 11pm trying to debug integration.
```

---

## Testing Prompts

### Prompt 6: API Test Suite Generator

```
Write an API test suite for:

Endpoint: [METHOD] [path]
Testing framework: [Jest / pytest / Postman / k6 / supertest]
Language: [JavaScript / Python / etc.]

Test categories:
1. Happy path tests (valid inputs → expected responses)
2. Validation tests (invalid inputs → appropriate errors)
3. Authentication tests (missing / expired / invalid tokens)
4. Authorization tests (valid token but wrong permissions)
5. Edge cases (empty arrays, max length inputs, special characters)
6. Rate limiting tests (if applicable)

For each test:
- Test name (descriptive)
- Setup (mocks, fixtures needed)
- Request
- Expected status code and response body assertions
- Teardown

Include: test data factories for creating test fixtures.
```

---

## Frequently Asked Questions

### REST vs GraphQL: which should I build?

REST for: simple CRUD operations, public APIs, mobile apps needing predictable caching, teams familiar with REST. GraphQL for: complex data relationships, clients with varied data needs (mobile vs web), rapid frontend iteration, and when over-fetching is a real performance problem. Most teams start with REST and add GraphQL selectively for data-heavy features.

### How do I version a REST API without breaking clients?

URL versioning (/v1/, /v2/) is the most pragmatic approach — it's visible, cacheable, and easy to route. Maintain backwards compatibility within a major version. Deprecate old versions with 18+ months notice and a Sunset header in responses. Never remove fields from responses (only add) within a major version.

### What authentication should my API use?

JWT (JSON Web Tokens) for stateless APIs where clients are trusted applications. OAuth 2.0 for APIs where users grant third-party apps access to their data. API keys for machine-to-machine communication and public APIs. Session-based auth for same-domain web applications. Don't roll your own — use proven libraries and follow the spec.

### How do I handle API rate limiting?

Return 429 Too Many Requests with Retry-After header. Implement at the infrastructure level (NGINX, API Gateway) not application code. Use sliding window algorithms for smoother limits. Provide different tiers for different API key classes. Document limits clearly in your API docs. Prompt 3 covers rate limiting as part of the security audit.

### What makes good API documentation?

Copy-paste ready code examples in multiple languages, a working sandbox or playground environment, clear error code reference, a changelog documenting breaking changes, and a getting-started guide that takes a developer from zero to first successful API call in under 10 minutes. The test: can a developer integrate your API without asking you a single question?
