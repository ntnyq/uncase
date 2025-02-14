import { expect, it } from 'vitest'
import { getCaseConverter } from '../src'
import { allCaseTypes, allCaseValues } from './fixtures'
import type { CaseType } from '../src'

it.each(allCaseTypes)(`to %s`, caseType => {
  const convert = getCaseConverter(caseType as CaseType)
  const results = allCaseValues.map(v => convert(v))

  expect(results.filter(v => !v.changed)).toHaveLength(1)
  expect(results).toMatchSnapshot()
})
