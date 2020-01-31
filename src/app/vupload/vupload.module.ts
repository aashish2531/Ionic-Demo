import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VuploadPageRoutingModule } from './vupload-routing.module';

import { VuploadPage } from './vupload.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VuploadPageRoutingModule
  ],
  declarations: [VuploadPage]
})
export class VuploadPageModule {}
