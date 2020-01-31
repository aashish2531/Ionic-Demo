import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Chip1PageRoutingModule } from './chip1-routing.module';

import { Chip1Page } from './chip1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Chip1PageRoutingModule
  ],
  declarations: [Chip1Page]
})
export class Chip1PageModule {}
