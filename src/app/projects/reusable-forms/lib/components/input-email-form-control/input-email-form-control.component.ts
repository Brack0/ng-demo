import { ChangeDetectionStrategy, Component, forwardRef, Input, OnDestroy } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subscription } from 'rxjs';
import { generateId } from '../../helper/id.helper';

@Component({
  selector: 'rf-input-email-form-control',
  templateUrl: './input-email-form-control.component.html',
  styleUrls: ['./input-email-form-control.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      // eslint-disable-next-line @angular-eslint/no-forward-ref
      useExisting: forwardRef(() => InputEmailFormControlComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputEmailFormControlComponent implements ControlValueAccessor, OnDestroy {
  private subscription = new Subscription();

  @Input()
  public label: string = 'E-MAIL';

  public email = new FormControl('');
  public id = generateId('email');

  onTouch: any = () => {};

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  writeValue(input: string) {
    this.email.setValue(input);
  }

  registerOnChange(fn: any): void {
    this.subscription.add(this.email.valueChanges.subscribe(fn));
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
}
