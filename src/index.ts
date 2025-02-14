import {
  camelCase,
  capitalCase,
  constantCase,
  dotCase,
  kebabCase,
  noCase,
  pascalCase,
  pascalSnakeCase,
  pathCase,
  sentenceCase,
  snakeCase,
  trainCase,
} from 'change-case'
import type { Options } from 'change-case'

/**
 * Type for all availabel [change-case](https://github.com/blakeembrey/change-case) method in `camelCase`
 */
export type CaseType =
  | 'camelCase'
  | 'capitalCase'
  | 'constantCase'
  | 'dotCase'
  | 'kebabCase'
  | 'noCase'
  | 'pascalCase'
  | 'pascalSnakeCase'
  | 'pathCase'
  | 'sentenceCase'
  | 'snakeCase'
  | 'trainCase'

/**
 * Type for case converter
 */
export type CaseConverter = (input: string) => {
  input: string
  changed: boolean
  output: string
}

/**
 * CaseType to case convert method map
 */
export const convertersMap: Record<
  CaseType,
  (value: string, options?: Options) => string
> = {
  camelCase,
  capitalCase,
  constantCase,
  dotCase,
  kebabCase,
  noCase,
  pascalCase,
  pascalSnakeCase,
  pathCase,
  sentenceCase,
  snakeCase,
  trainCase,
}

/**
 * Get a converter by caseType and convert the given input
 *
 * @param caseType - case utils name
 * @param options - case utils options
 * @returns input, output and whether changed
 *
 * @see {@link https://github.com/blakeembrey/change-case}
 *
 * @example
 *
 * ```ts
 * import { getCaseConverter } from 'uncase'
 *
 * const result = getCaseConverter('camelCase')('hello-world')
 *
 * console.log(result)
 * // => { input: 'hello-world', changed: true, output: 'helloWorld' }
 *
 * const isPascalCase = !getCaseConverter('pascalCase')('hello-world').changed
 *
 * console.log(isPascalCase)
 * // => false
 * ```
 */
export function getCaseConverter(
  caseType: CaseType,
  options: Options = {},
): CaseConverter {
  const convert = convertersMap[caseType]

  return (input: string) => {
    const output = convert(input, options)
    const changed = output !== input
    return {
      input,
      changed,
      output,
    }
  }
}
