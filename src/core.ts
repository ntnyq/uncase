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
 * Case converter
 */
export type CaseConverter = (input: string) => CaseConvertResult

/**
 * Case convert result
 */
export interface CaseConvertResult {
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

/**
 * CaseType to case converter map
 */
export const convertersMap: Record<
  CaseType,
  (value: string, options?: Options) => string
> = {
  CONSTANT_CASE: constantCase,
  'Capital Case': capitalCase,
  PascalCase: pascalCase,
  Pascal_Snake_Case: pascalSnakeCase,
  'Sentence case': sentenceCase,
  'Train-Case': trainCase,
  camelCase,
  capitalCase,
  constantCase,
  'dot.case': dotCase,
  dotCase,
  'kebab-case': kebabCase,
  kebabCase,
  'no case': noCase,
  noCase,
  pascalCase,
  pascalSnakeCase,
  'path/case': pathCase,
  pathCase,
  sentenceCase,
  snakeCase,
  snake_case: snakeCase,
  trainCase,
} as const

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

  if (!convert) {
    throw new Error(`Unknown caseType: ${caseType}`)
  }

  return (input: string) => {
    const output = convert(input, options)
    return {
      changed: output !== input,
      input,
      output,
    }
  }
}
