import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChpwPage } from './chpw.page';

const routes: Routes = [
  {
    path: '',
    component: ChpwPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChpwPageRoutingModule {}
