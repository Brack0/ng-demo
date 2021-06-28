import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordStrengthValidator } from '../../validators/password.validators';

@Component({
  selector: 'rf-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  public loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, PasswordStrengthValidator]),
  });

  public onSubmit(): void {
    console.log(this.loginForm.value);
  }
}
