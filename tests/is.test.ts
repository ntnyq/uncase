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
import { CASE_FIXTURES } from './fixtures'

const CASE_VALUES_FIXTURES = [
  ...Object.values(CASE_FIXTURES),
  // empty string is treated as false
  '',
]

it('isCamelCase', () => {
  const results = CASE_VALUES_FIXTURES.map(value => ({
    description: 'isCamelCase',
    isValid: isCamelCase(value),
    value,
  }))

  expect(results.filter(v => v.isValid)).toHaveLength(1)
  expect(results).toMatchSnapshot()
})

it('isCapitalCase', () => {
  const results = CASE_VALUES_FIXTURES.map(value => ({
    description: 'isCapitalCase',
    isValid: isCapitalCase(value),
    value,
  }))

  expect(results.filter(v => v.isValid)).toHaveLength(2)
  expect(results).toMatchSnapshot()
})

it('isConstantCase', () => {
  const results = CASE_VALUES_FIXTURES.map(value => ({
    description: 'isConstantCase',
    isValid: isConstantCase(value),
    value,
  }))

  expect(results.filter(v => v.isValid)).toHaveLength(2)
  expect(results).toMatchSnapshot()
})

it('isDotCase', () => {
  const results = CASE_VALUES_FIXTURES.map(value => ({
    description: 'isDotCase',
    isValid: isDotCase(value),
    value,
  }))

  expect(results.filter(v => v.isValid)).toHaveLength(2)
  expect(results).toMatchSnapshot()
})

it('isKebabCase', () => {
  const results = CASE_VALUES_FIXTURES.map(value => ({
    description: 'isKebabCase',
    isValid: isKebabCase(value),
    value,
  }))

  expect(results.filter(v => v.isValid)).toHaveLength(2)
  expect(results).toMatchSnapshot()
})

it('isNoCase', () => {
  const results = CASE_VALUES_FIXTURES.map(value => ({
    description: 'isNoCase',
    isValid: isNoCase(value),
    value,
  }))

  expect(results.filter(v => v.isValid)).toHaveLength(2)
  expect(results).toMatchSnapshot()
})

it('isPascalCase', () => {
  const results = CASE_VALUES_FIXTURES.map(value => ({
    description: 'isPascalCase',
    isValid: isPascalCase(value),
    value,
  }))

  expect(results.filter(v => v.isValid)).toHaveLength(2)
  expect(results).toMatchSnapshot()
})

it('isPascalSnakeCase', () => {
  const results = CASE_VALUES_FIXTURES.map(value => ({
    description: 'isPascalSnakeCase',
    isValid: isPascalSnakeCase(value),
    value,
  }))

  expect(results.filter(v => v.isValid)).toHaveLength(2)
  expect(results).toMatchSnapshot()
})

it('isPathCase', () => {
  const results = CASE_VALUES_FIXTURES.map(value => ({
    description: 'isPathCase',
    isValid: isPathCase(value),
    value,
  }))

  expect(results.filter(v => v.isValid)).toHaveLength(2)
  expect(results).toMatchSnapshot()
})

it('isSentenceCase', () => {
  const results = CASE_VALUES_FIXTURES.map(value => ({
    description: 'isSentenceCase',
    isValid: isSentenceCase(value),
    value,
  }))

  expect(results.filter(v => v.isValid)).toHaveLength(2)
  expect(results).toMatchSnapshot()
})

it('isSnakeCase', () => {
  const results = CASE_VALUES_FIXTURES.map(value => ({
    description: 'isSnakeCase',
    isValid: isSnakeCase(value),
    value,
  }))

  expect(results.filter(v => v.isValid)).toHaveLength(2)
  expect(results).toMatchSnapshot()
})

it('isTrainCase', () => {
  const results = CASE_VALUES_FIXTURES.map(value => ({
    description: 'isTrainCase',
    isValid: isTrainCase(value),
    value,
  }))

  expect(results.filter(v => v.isValid)).toHaveLength(2)
  expect(results).toMatchSnapshot()
})
