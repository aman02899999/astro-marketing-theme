---
title: "ChatGPT Prompts for JavaScript and React Developers"
description: "Expert ChatGPT prompts for JavaScript and React developers. Components, hooks, state management, API calls, testing, and performance. Copy-paste ready."
pubDate: 2025-03-14
author: "AI Prompt Hub Team"
category: "coding-prompts"
tags: ["javascript", "react", "chatgpt", "coding prompts", "frontend", "hooks", "typescript"]
image: "/images/blog/chatgpt-javascript-react-prompts.jpg"
pinned: false
draft: false
---

JavaScript and React developers who use AI iterate faster, catch bugs earlier, and spend less time on boilerplate. These prompts cover the full frontend development workflow — from component design to state management, testing, and performance optimization.

## React Component Prompts

### Prompt 1: React Component Generator

```
Write a React component:

Component name: [ComponentName]
Purpose: [what it does and where it's used]
Props it receives:
  - [propName]: [type] — [description]
  - [propName]: [type] — [description]
State it manages: [describe internal state if any]
Events/callbacks it emits: [describe]
Styling approach: [Tailwind / CSS Modules / styled-components / inline]
TypeScript: [yes/no]

Requirements:
- Functional component with hooks
- Proper TypeScript types/interfaces (if TS)
- PropTypes or TS interface for all props
- Accessible (ARIA attributes where needed)
- JSDoc comment on the component
- Export as named export

Include a basic usage example below the component.
```

---

### Prompt 2: Custom Hook Generator

```
Write a custom React hook:

Hook name: [useHookName]
Purpose: [what problem it solves]
Parameters it accepts: [list with types]
What it returns: [data + functions it exposes]
Side effects: [API calls / subscriptions / localStorage / etc.]
Dependencies: [external libraries if needed]

Requirements:
- TypeScript with proper generic types
- Handle loading, error, and success states
- Cleanup function in useEffect where applicable
- Memoize callbacks with useCallback
- JSDoc with @param and @returns

Include: usage example with a sample component.
```

---

### Prompt 3: Refactor Class to Functional Component

```
Refactor this React class component to a modern functional component with hooks:

```jsx
[paste your class component]
```

Requirements:
- Replace lifecycle methods with appropriate hooks
  (componentDidMount → useEffect, componentDidUpdate → useEffect with deps, etc.)
- Replace this.state with useState hooks
- Replace this.setState with hook setters
- Extract complex logic into custom hooks if appropriate
- Add TypeScript types if the original used PropTypes

Show: side-by-side comparison and explain each lifecycle → hook mapping.
```

---

## State Management Prompts

### Prompt 4: Zustand Store

```
Create a Zustand store for:

Feature: [what feature this store manages]
State shape:
  - [field]: [type] — [initial value and description]
Actions needed:
  - [actionName]: [what it does]
  - [actionName]: [what it does]
Async operations: [API calls or async state]

Requirements:
- TypeScript with full types for state and actions
- Immer middleware for complex state mutations (if nested)
- Devtools middleware
- Persist middleware for: [fields to persist] (or "no persistence needed")
- Separate selectors for derived state

Include: usage example in a component.
```

---

### Prompt 5: React Context + Reducer Pattern

```
Implement a React Context with useReducer for:

Context name: [ContextName]
What it manages: [description]

State shape: [describe the state object]

Actions to handle:
- [ACTION_TYPE]: [what it does to state]
- [ACTION_TYPE]: [what it does to state]

Requirements:
- TypeScript with discriminated union types for actions
- Separate context, provider, and consumer hook
- Error if hook is used outside provider
- Optimized to prevent unnecessary re-renders (useMemo on context value)

Provide:
1. Types file
2. Context and provider component
3. useContextName hook
4. Usage example
```

---

## API and Data Fetching Prompts

### Prompt 6: React Query Setup

```
Set up React Query (TanStack Query) for:

API endpoint: [endpoint description]
Data type returned: [shape of the response]
Operations needed: [GET / POST / PUT / DELETE]

For each operation provide:
- Query/mutation key
- Query function (using fetch or axios)
- TypeScript types
- Loading and error states handling
- Optimistic updates (for mutations if applicable)
- Cache invalidation strategy

Also provide:
- QueryClient configuration with sensible defaults
- Error boundary integration
- Usage example in a component
```

---

## Testing Prompts

### Prompt 7: React Testing Library Tests

```
Write React Testing Library tests for:

```jsx
[paste your component]
```

Test framework: Jest + React Testing Library
Test file: [ComponentName].test.tsx

Write tests covering:
1. Renders correctly (snapshot or structure check)
2. All interactive elements (buttons, inputs, links)
3. User interactions (click, type, submit)
4. Conditional rendering (all branches)
5. Error states
6. Loading states (if async)
7. Accessibility (getByRole queries, not getByTestId where possible)

Mock: [list what needs mocking — API calls, context, hooks]
Use: userEvent over fireEvent for all interactions.
```

---

## Performance Optimization Prompts

### Prompt 8: Performance Audit and Fix

```
Audit this React component for performance issues:

```jsx
[paste your component]
```

Check for and fix:
1. Missing or incorrect dependency arrays in useEffect/useCallback/useMemo
2. Functions recreated on every render (should be useCallback)
3. Expensive calculations not memoized (should be useMemo)
4. Unnecessary re-renders (missing React.memo on child components)
5. State that should be split (causes unrelated re-renders)
6. Large component that should be code-split (React.lazy)
7. Inline object/array props causing reference inequality

For each issue:
- Show the problem code
- Show the fixed code
- Explain why the fix prevents unnecessary work
```

---

## Frequently Asked Questions

### Should I use TypeScript with all these prompts?

Yes, strongly recommended. Just add "TypeScript: yes" or "with full TypeScript types" to any prompt. TypeScript prompts from ChatGPT are generally better quality — the type constraints force more explicit, correct code. If your project doesn't use TS yet, the generated types also serve as documentation.

### How do I get ChatGPT to match my existing React codebase conventions?

Paste 50–100 lines of an existing component and say "Match the conventions, patterns, and style shown in this code." ChatGPT picks up: your import organization, component structure, hook patterns, naming conventions, and whether you use semicolons or not.

### Is ChatGPT reliable for React 18+ features?

Generally yes for stable features (useId, Suspense improvements, automatic batching). For the very newest features (React Server Components, use() hook) — verify against the official React docs. The training data for cutting-edge features may lag several months behind the actual release.

### What React tasks should I not fully delegate to ChatGPT?

Complex state machine design where the business logic has subtle edge cases, performance optimization that requires profiling real render data, and accessibility decisions that require user research. Use ChatGPT to generate the implementation; apply your own judgment to the architecture and UX decisions.

### How do I debug AI-generated React code that doesn't work?

Paste the error message and the generated code back into ChatGPT: "This code you generated produces this error: [error]. Fix it." It usually resolves on the first try. For persistent issues, add your React and dependency versions — version-specific API changes are a common source of AI-generated code bugs.
