import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadComponent: () => import('./demo/home/home.component').then((m) => m.HomeComponent) },
  {
    path: 'reusable-forms',
    loadChildren: () => import('./demo/reusable-forms/reusable-forms.module').then((m) => m.ReusableFormsDemoModule),
  },
  {
    path: 'treeshakable-svg',
    loadChildren: () =>
      import('./demo/treeshakable-svg/treeshakable-svg.module').then((m) => m.TreeshakableSvgDemoModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
