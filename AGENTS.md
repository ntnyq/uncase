# AGENTS.md

Guidance for AI coding agents working in this repository.

## Start Here

- Read [README.md](README.md) for public API intent and examples.
- This is a TypeScript library that wraps `change-case` and exports:
  - main entry: `uncase` (`src/index.ts`)
  - subpath entry: `uncase/is` (`src/is.ts`)

## Setup And Commands

- Package manager: `pnpm` (`packageManager` is pinned in `package.json`).
- Install: `pnpm install`
- Build: `pnpm run build`
- Typecheck: `pnpm run typecheck`
- Test: `pnpm run test`
- Coverage: `pnpm run coverage`
- Lint: `pnpm run lint`
- Format check: `pnpm run format:check`
- Full release gate: `pnpm run release:check`

## Code Map

- `src/core.ts`
  - `CaseType` union aliases
  - `convertersMap`
  - `getCaseConverter(caseType, options)`
- `src/is.ts`
  - `createCaseValidator` factory
  - exported validators (`isCamelCase`, `isSnakeCase`, etc.)
- `src/index.ts`
  - re-exports from `./core`, `./is`, and `change-case`
- `tests/fixtures.ts`
  - canonical fixture map for all `CaseType` keys
- `tests/index.test.ts`, `tests/is.test.ts`
  - behavior and snapshot coverage for converter + validators

## Project Conventions

- Keep strict TS compatibility (`tsconfig.json` is strict + ESM).
- Preserve JSDoc on exported/public API.
- Keep exports stable:
  - main exports in `src/index.ts`
  - validator subpath behavior in `src/is.ts`
  - package subpath mapping in `package.json` (`exports["./is"]`)
- Use existing style:
  - concise functions
  - named exports
  - `test.each(...)`/fixture-driven tests

## High-Value Pitfalls

- If changing case types or aliases, update all of:
  - `CaseType` in `src/core.ts`
  - `convertersMap` in `src/core.ts`
  - `CASE_FIXTURES` in `tests/fixtures.ts`
  - tests/snapshots that depend on those fixtures
- Validators intentionally return `false` for empty strings in `src/is.ts`.
- `vitest` coverage thresholds are 100%; new branches require tests.
- Snapshot tests are authoritative here. Do not update snapshots without verifying behavior changes are intended.

## Suggested Validation Flow For Changes

1. `pnpm run format:check`
2. `pnpm run lint`
3. `pnpm run typecheck`
4. `pnpm run test`
5. `pnpm run coverage` (for logic-heavy changes)
