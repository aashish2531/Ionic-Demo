import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfscrlPageRoutingModule } from './infscrl-routing.module';

import { InfscrlPage } from './infscrl.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfscrlPageRoutingModule
  ],
  declarations: [InfscrlPage]
})
export class InfscrlPageModule {}
