import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import type { NgDemoSvg } from '../../svg';

@Component({
  selector: 'ts-svg[name]',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgComponent {
  @Input()
  public name!: NgDemoSvg;
}
