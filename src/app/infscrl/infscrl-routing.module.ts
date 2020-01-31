import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfscrlPage } from './infscrl.page';

const routes: Routes = [
  {
    path: '',
    component: InfscrlPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfscrlPageRoutingModule {}
