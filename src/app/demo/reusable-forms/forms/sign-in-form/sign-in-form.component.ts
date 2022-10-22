import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordStrengthValidator, RequiredIdenticalPasswordValidator } from 'reusable-forms';

interface SignInForm {
  email: FormControl<string>;
  password: FormControl<string>;
  confirmPassword: FormControl<string>;
}

@Component({
  selector: 'rf-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss'],
})
export class SignInFormComponent {
  public signInForm = new FormGroup<SignInForm>(
    {
      email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
      password: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, PasswordStrengthValidator],
      }),
      confirmPassword: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, PasswordStrengthValidator],
      }),
    },
    [RequiredIdenticalPasswordValidator]
  );

  public onSubmit(): void {
    console.log(this.signInForm.value);
  }

  get confirmPassword() {
    return this.signInForm.get('confirmPassword')!;
  }
}
