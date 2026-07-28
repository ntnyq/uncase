import { describe, expect, it } from 'vitest'
import { convertersMap, getCaseConverter } from '../src'
import type { CaseType } from '../src'
import { CASE_FIXTURES } from './fixtures'

describe('core', () => {
  it.each(Object.entries(CASE_FIXTURES))(
    'converts fixture values to %s',
    (caseType, expectedOutput) => {
      const convert = getCaseConverter(caseType as CaseType)

      for (const input of Object.values(CASE_FIXTURES)) {
        expect(convert(input)).toStrictEqual({
          changed: expectedOutput !== input,
          input,
          output: expectedOutput,
        })
      }
    },
  )

  it.each(['unknownCase', 'toString', 'constructor', '__proto__'])(
    'throws for unknown case type %s',
    caseType => {
      // @ts-expect-error intentionally invalid runtime input
      expect(() => getCaseConverter(caseType)).toThrow(
        `Unknown caseType: ${caseType}`,
      )
    },
  )

  it('rejects converter map mutations', () => {
    expect(() => {
      // @ts-expect-error mutation is intentionally rejected
      convertersMap.camelCase = value => value
    }).toThrow(TypeError)
  })
})
