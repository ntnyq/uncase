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
    isValid: isCamelCase(value),
    value,
  }))

  expect(results.filter(v => v.isValid)).toHaveLength(1)
  expect(results).toMatchSnapshot()
})

it('isCapitalCase', () => {
  const results = CASE_VALUES_FIXTURES.map(value => ({
    isValid: isCapitalCase(value),
    value,
  }))

  expect(results.filter(v => v.isValid)).toHaveLength(2)
  expect(results).toMatchSnapshot()
})

it('isConstantCase', () => {
  const results = CASE_VALUES_FIXTURES.map(value => ({
    isValid: isConstantCase(value),
    value,
  }))

  expect(results.filter(v => v.isValid)).toHaveLength(2)
  expect(results).toMatchSnapshot()
})

it('isDotCase', () => {
  const results = CASE_VALUES_FIXTURES.map(value => ({
    isValid: isDotCase(value),
    value,
  }))

  expect(results.filter(v => v.isValid)).toHaveLength(2)
  expect(results).toMatchSnapshot()
})

it('isKebabCase', () => {
  const results = CASE_VALUES_FIXTURES.map(value => ({
    isValid: isKebabCase(value),
    value,
  }))

  expect(results.filter(v => v.isValid)).toHaveLength(2)
  expect(results).toMatchSnapshot()
})

it('isNoCase', () => {
  const results = CASE_VALUES_FIXTURES.map(value => ({
    isValid: isNoCase(value),
    value,
  }))

  expect(results.filter(v => v.isValid)).toHaveLength(2)
  expect(results).toMatchSnapshot()
})

it('isPascalCase', () => {
  const results = CASE_VALUES_FIXTURES.map(value => ({
    isValid: isPascalCase(value),
    value,
  }))

  expect(results.filter(v => v.isValid)).toHaveLength(2)
  expect(results).toMatchSnapshot()
})

it('isPascalSnakeCase', () => {
  const results = CASE_VALUES_FIXTURES.map(value => ({
    isValid: isPascalSnakeCase(value),
    value,
  }))

  expect(results.filter(v => v.isValid)).toHaveLength(2)
  expect(results).toMatchSnapshot()
})

it('isPathCase', () => {
  const results = CASE_VALUES_FIXTURES.map(value => ({
    isValid: isPathCase(value),
    value,
  }))

  expect(results.filter(v => v.isValid)).toHaveLength(2)
  expect(results).toMatchSnapshot()
})

it('isSentenceCase', () => {
  const results = CASE_VALUES_FIXTURES.map(value => ({
    isValid: isSentenceCase(value),
    value,
  }))

  expect(results.filter(v => v.isValid)).toHaveLength(2)
  expect(results).toMatchSnapshot()
})

it('isSnakeCase', () => {
  const results = CASE_VALUES_FIXTURES.map(value => ({
    isValid: isSnakeCase(value),
    value,
  }))

  expect(results.filter(v => v.isValid)).toHaveLength(2)
  expect(results).toMatchSnapshot()
})

it('isTrainCase', () => {
  const results = CASE_VALUES_FIXTURES.map(value => ({
    isValid: isTrainCase(value),
    value,
  }))

  expect(results.filter(v => v.isValid)).toHaveLength(2)
  expect(results).toMatchSnapshot()
})
