import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface SubscribeForm {
  email: FormControl<string>;
}

@Component({
  selector: 'rf-subscribe-form',
  templateUrl: './subscribe-form.component.html',
  styleUrls: ['./subscribe-form.component.scss'],
})
export class SubscribeFormComponent {
  public subscribeForm = new FormGroup<SubscribeForm>({
    email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
  });

  public onSubmit(): void {
    console.log(this.subscribeForm.value);
  }
}
