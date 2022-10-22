import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent, FooterComponent } from 'demo/shared';
import { svgMinus, SvgModule, svgPlus } from 'treeshakable-svg';
import { TreeshakableSvgComponent } from './treeshakable-svg.component';

@NgModule({
  declarations: [TreeshakableSvgComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: TreeshakableSvgComponent,
        children: [
          {
            path: 'lazy',
            loadChildren: () => import('./lazy-load-svg/lazy-load-svg.module').then((m) => m.LazyLoadSvgModule),
          },
        ],
      },
    ]),
    SvgModule.forRoot([svgMinus, svgPlus]),
    FooterComponent,
    ButtonComponent,
  ],
})
export class TreeshakableSvgDemoModule {}
