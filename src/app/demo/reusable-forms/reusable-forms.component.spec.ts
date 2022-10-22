import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ButtonComponent, FooterComponent } from 'demo/shared';
import { ReusableFormsModule } from 'reusable-forms';
import { LoginFormComponent } from './forms/login-form/login-form.component';
import { SignInFormComponent } from './forms/sign-in-form/sign-in-form.component';
import { SubscribeFormComponent } from './forms/subscribe-form/subscribe-form.component';

import { ReusableFormsComponent } from './reusable-forms.component';

describe('ReusableFormsComponent', () => {
  let component: ReusableFormsComponent;
  let fixture: ComponentFixture<ReusableFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReusableFormsComponent, LoginFormComponent, SignInFormComponent, SubscribeFormComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        ReusableFormsModule,
        ButtonComponent,
        FooterComponent,
      ],
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
