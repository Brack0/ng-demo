import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ng-demo-lazy-load-svg',
  templateUrl: './lazy-load-svg.component.html',
  styleUrls: ['./lazy-load-svg.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LazyLoadSvgComponent {}
