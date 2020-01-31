import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Chip3PageRoutingModule } from './chip3-routing.module';

import { Chip3Page } from './chip3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Chip3PageRoutingModule
  ],
  declarations: [Chip3Page]
})
export class Chip3PageModule {}
