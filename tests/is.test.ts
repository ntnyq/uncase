import { describe, expect, it } from 'vitest'
import type { CaseType } from '../src'
import {
  isCamelCase,
  isCapitalCase,
  isConstantCase,
  isDotCase,
  isKebabCase,
  isNoCase,
  isPascalCase,
  isPascalSnakeCase,
  isPathCase,
  isSentenceCase,
  isSnakeCase,
  isTrainCase,
} from '../src/is'
import type { CaseValidator } from '../src/is'
import { CASE_FIXTURES } from './fixtures'

const CASE_VALUES_FIXTURES = [
  ...Object.values(CASE_FIXTURES),
  // empty string is treated as false
  '',
]

const CASE_VALIDATORS = [
  ['camelCase', isCamelCase],
  ['capitalCase', isCapitalCase],
  ['constantCase', isConstantCase],
  ['dotCase', isDotCase],
  ['kebabCase', isKebabCase],
  ['noCase', isNoCase],
  ['pascalCase', isPascalCase],
  ['pascalSnakeCase', isPascalSnakeCase],
  ['pathCase', isPathCase],
  ['sentenceCase', isSentenceCase],
  ['snakeCase', isSnakeCase],
  ['trainCase', isTrainCase],
] satisfies [CaseType, CaseValidator][]

describe('is', () => {
  it.each(CASE_VALIDATORS)('validates %s values', (caseType, isCase) => {
    const expectedValue = CASE_FIXTURES[caseType]

    for (const value of CASE_VALUES_FIXTURES) {
      expect(isCase(value)).toBe(value.length > 0 && value === expectedValue)
    }
  })
})
