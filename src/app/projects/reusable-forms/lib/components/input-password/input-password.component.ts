import { ChangeDetectionStrategy, Component, forwardRef, Input, OnDestroy } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subscription } from 'rxjs';
import { generateId } from '../../helper/id.helper';

@Component({
  selector: 'rf-input-password',
  templateUrl: './input-password.component.html',
  styleUrls: ['./input-password.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      // eslint-disable-next-line @angular-eslint/no-forward-ref
      useExisting: forwardRef(() => InputPasswordComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputPasswordComponent implements ControlValueAccessor, OnDestroy {
  private subscription = new Subscription();

  @Input()
  public label = 'Password';

  public password = '';
  public id = generateId('password');

  onChange: any = () => {};
  onTouch: any = () => {};

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  writeValue(input: string) {
    this.password = input;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
}
