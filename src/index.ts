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
 * availabel change-case utils
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
 * change-case utils map
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
 * get a converter and convert given input
 *
 * @param caseType - case utils name
 * @param options - case utils options
 * @returns input, output and whether changed
 *
 * @see {@link https://github.com/blakeembrey/change-case}
 */
export function getCaseConverter(caseType: CaseType, options: Options = {}) {
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
