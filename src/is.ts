import { getCaseConverter } from './core'
import type { CaseType } from './core'

/**
 * Non-empty string
 */
type NonEmptyString = string & { 0: '' }

/**
 * Case validator
 */
type CaseValidator = (input: string) => boolean

/**
 * Check if given value is a string
 *
 * @param value - given value
 * @returns true if it is a string, false otherwise
 */
function isString(value: unknown): value is string {
  return typeof value === 'string'
}

/**
 * Check if given value is a non-empty string
 *
 * @param value - given value
 * @returns true if it is a non-empty string, false otherwise
 */
function isNonEmptyString(value: unknown): value is NonEmptyString {
  return isString(value) && value.length > 0
}

/**
 * Create a case validator by caseType
 *
 * @param caseType - {@link CaseType}
 * @returns case validator
 */
function createCaseValidator(caseType: CaseType): CaseValidator {
  const convert = getCaseConverter(caseType)
  return (input: string) => {
    if (!isNonEmptyString(input)) return false
    return !convert(input).changed
  }
}

/**
 * Check if given input string is in camelCase
 *
 * @param input - input string
 * @returns true if camelCase, false otherwise
 */
export const isCamelCase: CaseValidator = (input: string) =>
  createCaseValidator('camelCase')(input)

/**
 * Check if given input string is in capitalCase
 *
 * @param input - input string
 * @returns true if capitalCase, false otherwise
 */
export const isCapitalCase: CaseValidator = (input: string) =>
  createCaseValidator('capitalCase')(input)

/**
 * Check if given input string is in constantCase
 *
 * @param input - input string
 * @returns true if constantCase, false otherwise
 */
export const isConstantCase: CaseValidator = (input: string) =>
  createCaseValidator('constantCase')(input)

/**
 * Check if given input string is in dotCase
 *
 * @param input - input string
 * @returns true if dotCase, false otherwise
 */
export const isDotCase: CaseValidator = (input: string) =>
  createCaseValidator('dotCase')(input)

/**
 * Check if given input string is in kebabCase
 *
 * @param input - input string
 * @returns true if kebabCase, false otherwise
 */
export const isKebabCase: CaseValidator = (input: string) =>
  createCaseValidator('kebabCase')(input)

/**
 * Check if given input string is in noCase
 *
 * @param input - input string
 * @returns true if noCase, false otherwise
 */
export const isNoCase: CaseValidator = (input: string) =>
  createCaseValidator('noCase')(input)

/**
 * Check if given input string is in pascalCase
 *
 * @param input - input string
 * @returns true if pascalCase, false otherwise
 */
export const isPascalCase: CaseValidator = (input: string) =>
  createCaseValidator('pascalCase')(input)

/**
 * Check if given input string is in pascalSnakeCase
 *
 * @param input - input string
 * @returns true if pascalSnakeCase, false otherwise
 */
export const isPascalSnakeCase: CaseValidator = (input: string) =>
  createCaseValidator('pascalSnakeCase')(input)

/**
 * Check if given input string is in pathCase
 *
 * @param input - input string
 * @returns true if pathCase, false otherwise
 */
export const isPathCase: CaseValidator = (input: string) =>
  createCaseValidator('pathCase')(input)

/**
 * Check if given input string is in sentenceCase
 *
 * @param input - input string
 * @returns true if sentenceCase, false otherwise
 */
export const isSentenceCase: CaseValidator = (input: string) =>
  createCaseValidator('sentenceCase')(input)

/**
 * Check if given input string is in snakeCase
 *
 * @param input - input string
 * @returns true if snakeCase, false otherwise
 */
export const isSnakeCase: CaseValidator = (input: string) =>
  createCaseValidator('snakeCase')(input)

/**
 * Check if given input string is in trainCase
 *
 * @param input - input string
 * @returns true if trainCase, false otherwise
 */
export const isTrainCase: CaseValidator = (input: string) =>
  createCaseValidator('trainCase')(input)
