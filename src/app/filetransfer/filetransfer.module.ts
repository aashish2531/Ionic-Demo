import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiletransferPageRoutingModule } from './filetransfer-routing.module';

import { FiletransferPage } from './filetransfer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiletransferPageRoutingModule
  ],
  declarations: [FiletransferPage]
})
export class FiletransferPageModule {}
