import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordStrengthValidator, RequiredIdenticalPasswordValidator } from '../../validators/password.validators';

@Component({
  selector: 'rf-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss'],
})
export class SignInFormComponent {
  public signInForm = new FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, PasswordStrengthValidator]),
      confirmPassword: new FormControl('', [Validators.required, PasswordStrengthValidator]),
    },
    [RequiredIdenticalPasswordValidator]
  );

  public onSubmit(): void {
    console.log(this.signInForm.value);
  }
}
