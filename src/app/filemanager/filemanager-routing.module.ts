import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilemanagerPage } from './filemanager.page';

const routes: Routes = [
  {
    path: '',
    component: FilemanagerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilemanagerPageRoutingModule {}
