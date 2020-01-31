import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VuploadPage } from './vupload.page';

const routes: Routes = [
  {
    path: '',
    component: VuploadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VuploadPageRoutingModule {}
