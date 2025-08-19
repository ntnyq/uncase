# Copilot Instructions for `uncase`

This guide helps AI coding agents work productively in the `uncase` codebase. It covers architecture, workflows, conventions, and integration points unique to this project.

## Project Overview

- **Purpose:** Wrapper around [`change-case`](https://github.com/blakeembrey/change-case) for dynamic string case conversion and validation. Useful for tooling and lint rules.
- **Main Components:**
  - `src/core.ts`: Implements case converters and exposes `getCaseConverter(caseType)`.
  - `src/is.ts`: Implements case validators (e.g., `isCamelCase`, `isPascalCase`) using converters.
  - `src/index.ts`: Re-exports all API and `change-case` itself.
  - `tests/`: Contains Vitest-based tests and fixtures for all supported cases.

## Developer Workflows

- **Build:** `pnpm run build` (uses `tsdown` for TypeScript compilation)
- **Test:** `pnpm test` (runs Vitest)
- **Coverage:** `pnpm run coverage` (Vitest + v8 coverage)
- **Lint:** `pnpm run lint` (ESLint, auto-fix enabled via nano-staged)
- **Typecheck:** `pnpm run typecheck` (TypeScript strict mode)
- **Release:** `pnpm run release` (checks, bumps, publishes)
- **Dev Watch:** `pnpm run dev` (incremental build)

## Key Patterns & Conventions

- **Case Types:** All supported case types are defined in `CaseType` (see `core.ts`). Use `convertersMap` for mapping names to functions.
- **Validation:** Validators use `createCaseValidator(caseType)` to check if a string matches a case. Empty strings always return `false`.
- **Testing:**
  - Test fixtures in `tests/fixtures.ts` provide canonical values for each case type.
  - Snapshots are used for output validation (`tests/__snapshots__`).
  - Use `it.each` for parameterized tests over all case types.
- **Exports:** All main API is exported from `src/index.ts`, including direct re-export of `change-case`.
- **Type Safety:** Types are strictly defined and exported for all main entities (`CaseConverter`, `CaseValidator`, `CaseConvertResult`, `CaseType`).

## Integration Points

- **External Dependency:** Relies on `change-case` for all conversion logic.
- **Lint/Format:** Uses project-specific ESLint and Prettier configs (`@ntnyq/eslint-config`, `@ntnyq/prettier-config`).
- **Nano-staged:** Auto-fixes code on commit for supported file types.

## Examples

- **Convert:**
  ```ts
  import { getCaseConverter } from 'uncase'
  getCaseConverter('camelCase')('hello-world') // { input: 'hello-world', changed: true, output: 'helloWorld' }
  ```
- **Validate:**
  ```ts
  import { isCamelCase } from 'uncase/is'
  isCamelCase('helloWorld') // true
  isCamelCase('hello-world') // false
  ```

## References

- See `README.md` for API details and usage.
- See `src/core.ts` and `src/is.ts` for implementation patterns.
- See `tests/fixtures.ts` for canonical case values.

---

**Feedback:** If any section is unclear or missing, please specify so it can be improved for future AI agents.
