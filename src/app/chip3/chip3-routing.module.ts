import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Chip3Page } from './chip3.page';

const routes: Routes = [
  {
    path: '',
    component: Chip3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Chip3PageRoutingModule {}
