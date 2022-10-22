import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadComponent: () => import('./demo/home/home.component').then((m) => m.HomeComponent) },
  {
    path: 'reusable-forms',
    loadChildren: () => import('reusable-forms').then((m) => m.ReusableFormsModule),
  },
  {
    path: 'treeshakable-svg',
    loadChildren: () => import('treeshakable-svg').then((m) => m.TreeshakableSvgModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
