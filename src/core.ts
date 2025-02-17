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
 * Case convert result
 */
export type CaseConvertResult = {
  /**
   * input value
   */
  input: string

  /**
   * whether output has changed from input
   */
  changed: boolean

  /**
   * converted value
   */
  output: string
}

/**
 * Case converter
 */
export type CaseConverter = (input: string) => CaseConvertResult

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
 * @returns case convert result {@link CaseConvertResult}
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
