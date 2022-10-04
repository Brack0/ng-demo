import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'ts-treeshakable-svg',
  templateUrl: './treeshakable-svg.component.html',
  styleUrls: ['treeshakable-svg.component.scss'],
})
export class TreeshakableSvgComponent implements OnInit {
  constructor(private title: Title) {}

  ngOnInit() {
    this.title.setTitle('Treeshakable Svg - NgDemo');
  }
}
