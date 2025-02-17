import type { CaseType } from '../src'

export const CASE_FIXTURES: Record<CaseType, string> = {
  camelCase: 'camelCase',
  capitalCase: 'Capital Case',
  'Capital Case': 'Capital Case',
  CONSTANT_CASE: 'CONSTANT_CASE',
  constantCase: 'CONSTANT_CASE',
  'dot.case': 'dot.case',
  dotCase: 'dot.case',
  'kebab-case': 'kebab-case',
  kebabCase: 'kebab-case',
  noCase: 'no case',
  'no case': 'no case',
  Pascal_Snake_Case: 'Pascal_Snake_Case',
  pascalCase: 'PascalCase',
  PascalCase: 'PascalCase',
  pascalSnakeCase: 'Pascal_Snake_Case',
  'path/case': 'path/case',
  pathCase: 'path/case',
  sentenceCase: 'Sentence case',
  'Sentence case': 'Sentence case',
  snake_case: 'snake_case',
  snakeCase: 'snake_case',
  'Train-Case': 'Train-Case',
  trainCase: 'Train-Case',
}

export const allCaseTypes: string[] = Object.keys(CASE_FIXTURES)
export const allCaseValues: string[] = Object.values(CASE_FIXTURES)
