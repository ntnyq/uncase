import type { CaseType } from '../src'

export const CASE_FIXTURES: Record<CaseType, string> = {
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
}

export const allCaseTypes = Object.keys(CASE_FIXTURES)
export const allCaseValues = Object.values(CASE_FIXTURES)
