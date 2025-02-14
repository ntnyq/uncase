import { getCaseConverter } from '.'
import type { CaseType } from '.'

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
export const isCamelCase = (input: string) =>
  createCaseValidator('camelCase')(input)

/**
 * Check if given input string is in capitalCase
 *
 * @param input - input string
 * @returns true if capitalCase, false otherwise
 */
export const isCapitalCase = (input: string) =>
  createCaseValidator('capitalCase')(input)

/**
 * Check if given input string is in constantCase
 *
 * @param input - input string
 * @returns true if constantCase, false otherwise
 */
export const isConstantCase = (input: string) =>
  createCaseValidator('constantCase')(input)

/**
 * Check if given input string is in dotCase
 *
 * @param input - input string
 * @returns true if dotCase, false otherwise
 */
export const isDotCase = (input: string) =>
  createCaseValidator('dotCase')(input)

/**
 * Check if given input string is in kebabCase
 *
 * @param input - input string
 * @returns true if kebabCase, false otherwise
 */
export const isKebabCase = (input: string) =>
  createCaseValidator('kebabCase')(input)

/**
 * Check if given input string is in noCase
 *
 * @param input - input string
 * @returns true if noCase, false otherwise
 */
export const isNoCase = (input: string) => createCaseValidator('noCase')(input)

/**
 * Check if given input string is in pascalCase
 *
 * @param input - input string
 * @returns true if pascalCase, false otherwise
 */
export const isPascalCase = (input: string) =>
  createCaseValidator('pascalCase')(input)

/**
 * Check if given input string is in pascalSnakeCase
 *
 * @param input - input string
 * @returns true if pascalSnakeCase, false otherwise
 */
export const isPascalSnakeCase = (input: string) =>
  createCaseValidator('pascalSnakeCase')(input)

/**
 * Check if given input string is in pathCase
 *
 * @param input - input string
 * @returns true if pathCase, false otherwise
 */
export const isPathCase = (input: string) =>
  createCaseValidator('pathCase')(input)

/**
 * Check if given input string is in sentenceCase
 *
 * @param input - input string
 * @returns true if sentenceCase, false otherwise
 */
export const isSentenceCase = (input: string) =>
  createCaseValidator('sentenceCase')(input)

/**
 * Check if given input string is in snakeCase
 *
 * @param input - input string
 * @returns true if snakeCase, false otherwise
 */
export const isSnakeCase = (input: string) =>
  createCaseValidator('snakeCase')(input)

/**
 * Check if given input string is in trainCase
 *
 * @param input - input string
 * @returns true if trainCase, false otherwise
 */
export const isTrainCase = (input: string) =>
  createCaseValidator('trainCase')(input)
