import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'ng-demo-treeshakable-svg',
  templateUrl: './treeshakable-svg.component.html',
  styleUrls: ['./treeshakable-svg.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreeshakableSvgComponent implements OnInit {
  constructor(private title: Title) {}

  ngOnInit() {
    this.title.setTitle('Treeshakable Svg - NgDemo');
  }
}
