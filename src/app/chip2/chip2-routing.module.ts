import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Chip2Page } from './chip2.page';

const routes: Routes = [
  {
    path: '',
    component: Chip2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Chip2PageRoutingModule {}
