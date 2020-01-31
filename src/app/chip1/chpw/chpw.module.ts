import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChpwPageRoutingModule } from './chpw-routing.module';

import { ChpwPage } from './chpw.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChpwPageRoutingModule
  ],
  declarations: [ChpwPage]
})
export class ChpwPageModule {}
