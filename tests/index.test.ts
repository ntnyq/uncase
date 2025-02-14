import { expect, it } from 'vitest'
import { getCaseConverter } from '../src'
import type { CaseType } from '../src'

export const CASE_MAP: Record<CaseType, string> = {
  camelCase: 'camelCase',
  kebabCase: 'kebab-case',
  pascalCase: 'PascalCase',
  snakeCase: 'snake_case',
  trainCase: 'Train-Case',
  capitalCase: 'Capital Case',
  constantCase: 'CONSTANT_CASE',
  dotCase: 'dot.case',
  noCase: 'no case',
  pascalSnakeCase: 'Pascal_Snake_Case',
  pathCase: 'path/case',
  sentenceCase: 'Sentence case',
} as const

const keys = Object.keys(CASE_MAP)
const values = Object.values(CASE_MAP)

it.each(keys)(`to %s`, caseType => {
  const convert = getCaseConverter(caseType as CaseType)

  expect(values.map(v => convert(v))).toMatchSnapshot()
})
