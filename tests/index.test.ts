import { expect, it } from 'vitest'
import { getCaseConverter } from '../src'
import type { CaseType } from '../src'
import { CASE_FIXTURES } from './fixtures'

it.each(Object.keys(CASE_FIXTURES))('to %s', caseType => {
  const convert = getCaseConverter(caseType as CaseType)
  const results = Object.values(CASE_FIXTURES).map(v => ({
    ...convert(v),
    caseType,
    description: `to: ${caseType}`,
  }))

  if (caseType === 'camelCase') {
    expect(results.filter(v => !v.changed)).toHaveLength(1)
  } else {
    expect(results.filter(v => !v.changed)).toHaveLength(2)
  }

  expect(results).toMatchSnapshot()
})

it('should throw error for unknown caseType', () => {
  // @ts-expect-error intentionally wrong type
  expect(() => getCaseConverter('unknownCase')).toThrow(
    'Unknown caseType: unknownCase',
  )
})
