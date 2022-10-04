import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { CoreModule } from 'core';
import { ButtonComponent } from './components/button/button.component';
import { InputEmailFormControlComponent } from './components/input-email-form-control/input-email-form-control.component';
import { InputEmailComponent } from './components/input-email/input-email.component';
import { InputPasswordComponent } from './components/input-password/input-password.component';
import { LoginFormComponent } from './forms/login-form/login-form.component';
import { SignInFormComponent } from './forms/sign-in-form/sign-in-form.component';
import { SubscribeFormComponent } from './forms/subscribe-form/subscribe-form.component';

import { ReusableFormsComponent } from './reusable-forms.component';

describe('ReusableFormsComponent', () => {
  let component: ReusableFormsComponent;
  let fixture: ComponentFixture<ReusableFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
      imports: [FormsModule, ReactiveFormsModule, RouterTestingModule, CoreModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReusableFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
