import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const RequiredIdenticalPasswordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  return password && confirmPassword && password.value !== confirmPassword.value
    ? { requiredIdenticalPassword: true }
    : null;
};

export const PasswordStrengthValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.value;
  const hasLowercase = /[a-z]/.test(password);
  const hasUppercase = /[A-Z]/.test(password);
  const hasDigit = /[0-9]/.test(password);

  if (password.length < 10) {
    return { min: { min: 10, actual: password.length } };
  }

  if (!hasLowercase) {
    return { pattern: { requiredLowercase: true } };
  }

  if (!hasUppercase) {
    return { pattern: { requiredUppercase: true } };
  }

  if (!hasDigit) {
    return { pattern: { requiredDigit: true } };
  }

  return null;
};
