import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Nullable } from './type.util';
import { ExtendedDate } from './date.util';

/**
 * Returns ValidatorFn that validates correct start date.
 * ValidatorFn binds 'startDate' error when date value is more than value of provided endDateControl.
 * @param endDateControl - AbstractControl of endDate.
 */
export function startDate(endDateControl: AbstractControl): ValidatorFn {
  return (startDateControl: AbstractControl): Nullable<ValidationErrors> => {
    const startDate = startDateControl.value;
    const endDate = endDateControl.value;

    if (startDate instanceof Date && endDate instanceof Date) {
      const extendedStartDate = new ExtendedDate(startDate);

      if (extendedStartDate.isMoreThan(endDate, 'day')) {
        return {
          startDate: true,
        };
      }
    }

    return null;
  };
}

/**
 * Returns ValidatorFn that validates correct end date.
 * ValidatorFn binds 'endDate' error when date value is less than value of given startDateControl.
 * @param startDateControl - AbstractControl of startDate.
 */
export function endDate(startDateControl: AbstractControl): ValidatorFn {
  return (endDateControl: AbstractControl): Nullable<ValidationErrors> => {
    const startDate = startDateControl.value;
    const endDate = endDateControl.value;

    if (startDate instanceof Date && endDate instanceof Date) {
      const extendedEndDate = new ExtendedDate(endDate);

      if (extendedEndDate.isLessThan(startDate, 'day')) {
        return {
          endDate: true,
        };
      }
    }

    return null;
  };
}

/**
 * Returns ValidatorFn that validates whether value of control is more than or equal to given minDate.
 * ValidatorFn binds 'minDate' error when value is invalid.
 * @param minDate - Minimum available date.
 */
export function minDate(minDate: Date): ValidatorFn {
  return (control: AbstractControl): Nullable<ValidationErrors> => {
    const value = control.value;

    if (value && value instanceof Date) {
      if (new ExtendedDate(value).isLessThan(minDate, 'day')) {
        return {
          minDate: true,
        };
      }
    }

    return null;
  };
}

/**
 * Returns ValidatorFn that validates whether value of control is more than or equal to given maxDate.
 * ValidatorFn binds 'maxDate' error when value is invalid.
 * @param maxDate - Maximum available date.
 */
export function maxDate(maxDate: Date): ValidatorFn {
  return (control: AbstractControl): Nullable<ValidationErrors> => {
    const value = control.value;

    if (value && value instanceof Date) {
      if (new ExtendedDate(maxDate).isLessThan(value, 'day')) {
        return {
          maxDate: true,
        };
      }
    }

    return null;
  };
}
