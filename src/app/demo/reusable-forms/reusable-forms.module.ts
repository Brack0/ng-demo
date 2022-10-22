import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonComponent, FooterComponent } from 'demo/shared';
import { ReusableFormsModule } from 'reusable-forms';
import { LoginFormComponent } from './forms/login-form/login-form.component';
import { SignInFormComponent } from './forms/sign-in-form/sign-in-form.component';
import { SubscribeFormComponent } from './forms/subscribe-form/subscribe-form.component';
import { ReusableFormsComponent } from './reusable-forms.component';

@NgModule({
  declarations: [ReusableFormsComponent, LoginFormComponent, SignInFormComponent, SubscribeFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: ReusableFormsComponent }]),
    ButtonComponent,
    FooterComponent,
    ReusableFormsModule,
  ],
})
export class ReusableFormsDemoModule {}
