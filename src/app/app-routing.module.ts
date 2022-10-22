import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
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
