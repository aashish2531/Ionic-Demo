import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FiletransferPage } from './filetransfer.page';

const routes: Routes = [
  {
    path: '',
    component: FiletransferPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FiletransferPageRoutingModule {}
