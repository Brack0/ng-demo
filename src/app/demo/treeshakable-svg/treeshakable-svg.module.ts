import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreModule } from 'core';
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
            path: '',
            loadChildren: () => import('./lazy-load-svg/lazy-load-svg.module').then((m) => m.LazyLoadSvgModule),
          },
        ],
      },
    ]),
    CoreModule,
    SvgModule.forRoot([svgMinus, svgPlus]),
  ],
})
export class TreeshakableSvgDemoModule {}
