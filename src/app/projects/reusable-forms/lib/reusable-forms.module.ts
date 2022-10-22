import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputEmailFormControlComponent } from './components/input-email-form-control/input-email-form-control.component';
import { InputEmailComponent } from './components/input-email/input-email.component';
import { InputPasswordComponent } from './components/input-password/input-password.component';

@NgModule({
  declarations: [InputEmailComponent, InputEmailFormControlComponent, InputPasswordComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [InputEmailComponent, InputEmailFormControlComponent, InputPasswordComponent],
})
export class ReusableFormsModule {}
