import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { svgArrowUp } from '../../svg';
import { SvgModule } from '../../svg.module';
import { LazyLoadSvgComponent } from './lazy-load-svg.component';

@NgModule({
  declarations: [LazyLoadSvgComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: LazyLoadSvgComponent }]),
    SvgModule.forChild([svgArrowUp]),
  ],
})
export class LazyLoadSvgModule {}
