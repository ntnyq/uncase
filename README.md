# uncase

[![CI](https://github.com/ntnyq/uncase/workflows/CI/badge.svg)](https://github.com/ntnyq/uncase/actions)
[![NPM VERSION](https://img.shields.io/npm/v/uncase.svg)](https://www.npmjs.com/package/uncase)
[![NPM DOWNLOADS](https://img.shields.io/npm/dy/uncase.svg)](https://www.npmjs.com/package/uncase)
[![CODECOV](https://codecov.io/github/ntnyq/uncase/branch/main/graph/badge.svg?token=YGDMMEUY4M)](https://codecov.io/github/ntnyq/uncase)
[![LICENSE](https://img.shields.io/github/license/ntnyq/uncase.svg)](https://github.com/ntnyq/uncase/blob/main/LICENSE)

Wrapper of [change-case](https://github.com/blakeembrey/change-case) to create a converter, validator and etc.

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

```ts
import { getCaseConverter } from 'uncase'

const result = getCaseConverter('camelCase')('hello-world')

console.log(result)
// => { input: 'hello-world', changed: true, output: 'helloWorld' }

const isPascalCase = !getCaseConverter('pascalCase')('hello-world').changed

console.log(isPascalCase)
// => false
```

## Credits

- [change-case](https://github.com/blakeembrey/change-case)

## License

[MIT](./LICENSE) License © 2025-PRESENT [ntnyq](https://github.com/ntnyq)
