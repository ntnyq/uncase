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

/**
 * CaseType to case converter map
 */
export const convertersMap: Record<
  CaseType,
  (value: string, options?: Options) => string
> = {
  camelCase,
  capitalCase,
  'Capital Case': capitalCase,
  CONSTANT_CASE: constantCase,
  constantCase,
  'dot.case': dotCase,
  dotCase,
  'kebab-case': kebabCase,
  kebabCase,
  noCase,
  'no case': noCase,
  Pascal_Snake_Case: pascalSnakeCase,
  pascalCase,
  PascalCase: pascalCase,
  pascalSnakeCase,
  'path/case': pathCase,
  pathCase,
  sentenceCase,
  'Sentence case': sentenceCase,
  snake_case: snakeCase,
  snakeCase,
  'Train-Case': trainCase,
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
