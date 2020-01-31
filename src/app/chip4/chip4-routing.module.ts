import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Chip4Page } from './chip4.page';

const routes: Routes = [
  {
    path: '',
    component: Chip4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Chip4PageRoutingModule {}
