import { expect, it } from 'vitest'
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
import { allCaseValues } from './fixtures'

const CASE_VALUES_FIXTURES = [
  ...allCaseValues,
  // empty string is treated as false
  '',
]

it('isCamelCase', () => {
  const results = CASE_VALUES_FIXTURES.map(value => ({
    value,
    isValid: isCamelCase(value),
  }))

  expect(results.filter(v => v.isValid)).toHaveLength(1)
  expect(results).toMatchSnapshot()
})

it('isCapitalCase', () => {
  const results = CASE_VALUES_FIXTURES.map(value => ({
    value,
    isValid: isCapitalCase(value),
  }))

  expect(results.filter(v => v.isValid)).toHaveLength(1)
  expect(results).toMatchSnapshot()
})

it('isConstantCase', () => {
  const results = CASE_VALUES_FIXTURES.map(value => ({
    value,
    isValid: isConstantCase(value),
  }))

  expect(results.filter(v => v.isValid)).toHaveLength(1)
  expect(results).toMatchSnapshot()
})

it('isDotCase', () => {
  const results = CASE_VALUES_FIXTURES.map(value => ({
    value,
    isValid: isDotCase(value),
  }))

  expect(results.filter(v => v.isValid)).toHaveLength(1)
  expect(results).toMatchSnapshot()
})

it('isKebabCase', () => {
  const results = CASE_VALUES_FIXTURES.map(value => ({
    value,
    isValid: isKebabCase(value),
  }))

  expect(results.filter(v => v.isValid)).toHaveLength(1)
  expect(results).toMatchSnapshot()
})

it('isNoCase', () => {
  const results = CASE_VALUES_FIXTURES.map(value => ({
    value,
    isValid: isNoCase(value),
  }))

  expect(results.filter(v => v.isValid)).toHaveLength(1)
  expect(results).toMatchSnapshot()
})

it('isPascalCase', () => {
  const results = CASE_VALUES_FIXTURES.map(value => ({
    value,
    isValid: isPascalCase(value),
  }))

  expect(results.filter(v => v.isValid)).toHaveLength(1)
  expect(results).toMatchSnapshot()
})

it('isPascalSnakeCase', () => {
  const results = CASE_VALUES_FIXTURES.map(value => ({
    value,
    isValid: isPascalSnakeCase(value),
  }))

  expect(results.filter(v => v.isValid)).toHaveLength(1)
  expect(results).toMatchSnapshot()
})

it('isPathCase', () => {
  const results = CASE_VALUES_FIXTURES.map(value => ({
    value,
    isValid: isPathCase(value),
  }))

  expect(results.filter(v => v.isValid)).toHaveLength(1)
  expect(results).toMatchSnapshot()
})

it('isSentenceCase', () => {
  const results = CASE_VALUES_FIXTURES.map(value => ({
    value,
    isValid: isSentenceCase(value),
  }))

  expect(results.filter(v => v.isValid)).toHaveLength(1)
  expect(results).toMatchSnapshot()
})

it('isSnakeCase', () => {
  const results = CASE_VALUES_FIXTURES.map(value => ({
    value,
    isValid: isSnakeCase(value),
  }))

  expect(results.filter(v => v.isValid)).toHaveLength(1)
  expect(results).toMatchSnapshot()
})

it('isTrainCase', () => {
  const results = CASE_VALUES_FIXTURES.map(value => ({
    value,
    isValid: isTrainCase(value),
  }))

  expect(results.filter(v => v.isValid)).toHaveLength(1)
  expect(results).toMatchSnapshot()
})
