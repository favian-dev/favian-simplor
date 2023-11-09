/** Type for value that can be null. */
export type Nullable<Value> = Value | null;

/** Type for value that can be undefined. */
export type CanUndefined<Value> = Value | undefined;

/**
 * Type for boolean attribute for element.
 * Since element takes bound attribute without any value as true, empty string is considered as true.
 */
export type BooleanAttribute = boolean | string;

/** Type for value that can be considered as number. */
export type NumberLike = number | string;

/** Type of available theme colors for Simplor. */
export type SplTheme = 'primary' | 'secondary' | 'tertiary' | 'warn' | 'error' | 'success' | 'none';

/** Type for ranged date value that has start date and end date. */
export type RangedDate = [Nullable<Date>, Nullable<Date>];
