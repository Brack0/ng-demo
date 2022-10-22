import { Component, Input } from '@angular/core';

type ButtonType = 'submit' | 'reset' | 'button';

@Component({
  standalone: true,
  selector: 'ng-demo-button',
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

  public onClick(event: Event): void {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
}
