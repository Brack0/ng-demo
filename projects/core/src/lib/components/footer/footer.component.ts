import { Component, Input } from '@angular/core';

@Component({
  selector: 'ng-demo-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  @Input()
  public color: 'white' | undefined = undefined;

  public currentYear = new Date().getFullYear();
}
