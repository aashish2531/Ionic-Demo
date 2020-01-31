import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Chip4PageRoutingModule } from './chip4-routing.module';

import { Chip4Page } from './chip4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Chip4PageRoutingModule
  ],
  declarations: [Chip4Page]
})
export class Chip4PageModule {}
