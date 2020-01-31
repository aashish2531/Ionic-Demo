import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RouteExPage } from './route-ex.page';

const routes: Routes = [
  {
    path: '',
    component: RouteExPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RouteExPageRoutingModule {}
