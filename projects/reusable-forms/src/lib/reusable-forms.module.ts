import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InputEmailFormControlComponent } from './components/input-email-form-control/input-email-form-control.component';
import { InputEmailComponent } from './components/input-email/input-email.component';
import { InputPasswordComponent } from './components/input-password/input-password.component';
import { LoginFormComponent } from './forms/login-form/login-form.component';
import { SignInFormComponent } from './forms/sign-in-form/sign-in-form.component';
import { SubscribeFormComponent } from './forms/subscribe-form/subscribe-form.component';
import { ReusableFormsComponent } from './reusable-forms.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    ReusableFormsComponent,
    InputEmailComponent,
    InputEmailFormControlComponent,
    InputPasswordComponent,
    LoginFormComponent,
    SignInFormComponent,
    SubscribeFormComponent,
    ButtonComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: ReusableFormsComponent }]),
  ],
})
export class ReusableFormsModule {}
