import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilemanagerPageRoutingModule } from './filemanager-routing.module';

import { FilemanagerPage } from './filemanager.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilemanagerPageRoutingModule
  ],
  declarations: [FilemanagerPage]
})
export class FilemanagerPageModule {}
