import { ChangeDetectionStrategy, Component, forwardRef, Input, OnDestroy } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subscription } from 'rxjs';
import { generateId } from '../../helper/id.helper';

@Component({
  selector: 'rf-input-email',
  templateUrl: './input-email.component.html',
  styleUrls: ['./input-email.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      // eslint-disable-next-line @angular-eslint/no-forward-ref
      useExisting: forwardRef(() => InputEmailComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputEmailComponent implements ControlValueAccessor, OnDestroy {
  private subscription = new Subscription();

  @Input()
  public label: string = 'E-MAIL';

  public email: string = '';
  public id = generateId('email');

  onChange: any = () => {};
  onTouch: any = () => {};

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  writeValue(input: string) {
    this.email = input;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
}
