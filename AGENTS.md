# Repository Guidelines

## Project Structure & Module Organization

`src/` contains the TypeScript library. `core.ts` defines case types,
converter mappings, and `getCaseConverter`; `is.ts` provides validator helpers;
`index.ts` exposes the main public API. Root-level `tests/` mirrors these entry
points with `*.test.ts` files, shared data in `tests/fixtures.ts`, and committed
snapshots under `tests/__snapshots__/`. Builds are generated in `dist/`; do not
edit that directory by hand. Packaging and tool configuration live in
`package.json`, `tsdown.config.ts`, `vitest.config.ts`, and `tsconfig.json`.

## Build, Test, and Development Commands

Use the pnpm version pinned in `package.json`.

- `pnpm install` installs dependencies.
- `pnpm dev` runs tsdown in watch mode.
- `pnpm build` produces ESM JavaScript and declarations in `dist/`.
- `pnpm test` runs the Vitest suite once.
- `pnpm coverage` runs tests with V8 coverage reporting.
- `pnpm lint` checks code with Oxlint.
- `pnpm format` applies Oxfmt; `pnpm format:check` verifies formatting.
- `pnpm typecheck` runs strict TypeScript checks without emitting files.
- `pnpm release:check` runs the full pre-release validation sequence.

## Coding Style & Naming Conventions

Follow `.editorconfig`: UTF-8, LF endings, final newlines, and two-space
indentation. Oxfmt enforces single quotes, no semicolons, trailing commas, and
an 80-column width. Keep the project ESM-only and preserve strict TypeScript
compatibility. Use `camelCase` for functions and variables, `PascalCase` for
types, and descriptive uppercase names for shared constants such as
`CASE_FIXTURES`. Prefer named exports and retain JSDoc on public APIs.

## Testing Guidelines

Vitest is configured for non-watch runs and 100% coverage across `src/**/*.ts`.
Name tests `*.test.ts`, favor fixture-driven `it.each(...)` cases, and cover
both successful results and thrown errors. Snapshot changes are part of the
review surface; use `pnpm test -u` only after confirming the behavior change is
intentional.

## Commit & Pull Request Guidelines

History follows Conventional Commit-style subjects such as `feat:`, `fix:`,
`build:`, `chore:`, and `chore(deps):`. Keep subjects imperative and scoped to
one logical change. Pull requests should explain the user-visible impact, link
relevant issues, and call out API or snapshot changes. Add or update tests for
behavior changes and run `pnpm release:check` before requesting review.

## Public API Changes

When adding a case alias or validator, update the relevant type, mapping,
fixtures, tests, and snapshots together. Preserve both package entry points:
`uncase` and `uncase/is`.
