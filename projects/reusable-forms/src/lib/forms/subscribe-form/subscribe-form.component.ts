import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'rf-subscribe-form',
  templateUrl: './subscribe-form.component.html',
  styleUrls: ['./subscribe-form.component.scss'],
})
export class SubscribeFormComponent {
  public subscribeForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  public onSubmit(): void {
    console.log(this.subscribeForm.value);
  }
}
