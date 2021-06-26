import { Component, EventEmitter, Input, Output } from '@angular/core';

type ButtonType = 'submit' | 'reset' | 'button';

@Component({
  selector: 'rf-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input()
  public label: string = '';

  @Input()
  public type: ButtonType = 'button';

  @Input()
  public disabled = false;

  @Output()
  public click = new EventEmitter();

  public onClick(event: Event): void {
    if (!this.disabled) {
      this.click.emit(event);
    }
  }
}
