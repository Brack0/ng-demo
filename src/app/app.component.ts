import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ng-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
