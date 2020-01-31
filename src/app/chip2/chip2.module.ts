import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Chip2PageRoutingModule } from './chip2-routing.module';

import { Chip2Page } from './chip2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Chip2PageRoutingModule
  ],
  declarations: [Chip2Page]
})
export class Chip2PageModule {}
