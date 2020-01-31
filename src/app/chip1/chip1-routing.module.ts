import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Chip1Page } from './chip1.page';

const routes: Routes = [
  {
    path: '',
    component: Chip1Page
  },
  {
    path: 'chpw',
    loadChildren: () => import('./chpw/chpw.module').then( m => m.ChpwPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Chip1PageRoutingModule {}
