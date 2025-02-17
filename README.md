# uncase

[![CI](https://github.com/ntnyq/uncase/workflows/CI/badge.svg)](https://github.com/ntnyq/uncase/actions)
[![NPM VERSION](https://img.shields.io/npm/v/uncase.svg)](https://www.npmjs.com/package/uncase)
[![NPM DOWNLOADS](https://img.shields.io/npm/dy/uncase.svg)](https://www.npmjs.com/package/uncase)
[![CODECOV](https://codecov.io/github/ntnyq/uncase/branch/main/graph/badge.svg?token=YGDMMEUY4M)](https://codecov.io/github/ntnyq/uncase)
[![LICENSE](https://img.shields.io/github/license/ntnyq/uncase.svg)](https://github.com/ntnyq/uncase/blob/main/LICENSE)

Wrapper of [change-case](https://github.com/blakeembrey/change-case) to create case converter, validator and etc.

## Install

```shell
npm install uncase
```

```shell
yarn add uncase
```

```shell
pnpm add uncase
```

## Usage

### case converter

```ts
import { getCaseConverter } from 'uncase'

const result = getCaseConverter('camelCase')('hello-world')

console.log(result)
// => { input: 'hello-world', changed: true, output: 'helloWorld' }
```

### case validator

```ts
import { isCamelCase, isPascalCase } from 'uncase/is'

console.log(isCamelCase('hello-world'))
// => false

console.log(isPascalCase('HelloWorld'))
// => true
```

## API

### Case converter

#### `getCaseConverter`

- **Type**: `(caseType: CaseType, options: Options = {}) => CaseConverter`

Get a converter by caseType and convert the given input.

#### Interface

```ts
/**
 * Case converter
 */
export type CaseConverter = (input: string) => CaseConvertResult

/**
 * Case convert result
 */
export type CaseConvertResult = {
  /**
   * whether output has changed from input
   */
  changed: boolean

  /**
   * input value
   */
  input: string

  /**
   * converted value
   */
  output: string
}

/**
 * All case converter names in raw and `camelCase`
 */
export type CaseType =
  | 'camelCase'
  | 'capitalCase'
  | 'Capital Case'
  | 'CONSTANT_CASE'
  | 'constantCase'
  | 'dot.case'
  | 'dotCase'
  | 'kebab-case'
  | 'kebabCase'
  | 'noCase'
  | 'no case'
  | 'Pascal_Snake_Case'
  | 'pascalCase'
  | 'PascalCase'
  | 'pascalSnakeCase'
  | 'path/case'
  | 'pathCase'
  | 'sentenceCase'
  | 'Sentence case'
  | 'snake_case'
  | 'snakeCase'
  | 'Train-Case'
  | 'trainCase'
```

### Case validator

- `isCamelCase`
- `isCapitalCase`
- `isConstantCase`
- `isDotCase`
- `isKebabCase`
- `isNoCase`
- `isPascalCase`
- `isPascalSnakeCase`
- `isPathCase`
- `isSentenceCase`
- `isSnakeCase`
- `isTrainCase`

#### Type

```ts
export type CaseValidator = (input: string) => boolean
```

## Why this?

Dynamic case convert. Useful to create ESLint case convention rules.

## Credits

- [change-case](https://github.com/blakeembrey/change-case)

## License

[MIT](./LICENSE) License © 2025-PRESENT [ntnyq](https://github.com/ntnyq)
