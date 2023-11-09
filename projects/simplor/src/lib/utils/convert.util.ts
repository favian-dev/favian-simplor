import { BooleanAttribute, NumberLike } from './type.util';

/**
 * Convert BooleanAttribute type to boolean.
 * Empty string is also converted to true.
 * @param value - BooleanAttribute value to convert.
 */
export function convertBooleanAttribute(value: BooleanAttribute): boolean {
  const stringified = value.toString().toLowerCase();

  return stringified === '' || stringified === 'true';
}

/**
 * Convert NumberLike type to number.
 * @param value - NumberLike value to convert.
 */
export function convertNumberLike(value: NumberLike): number {
  return typeof value === 'string' ? parseFloat(value) : value;
}
