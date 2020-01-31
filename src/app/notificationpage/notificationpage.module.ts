import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotificationpagePageRoutingModule } from './notificationpage-routing.module';

import { NotificationpagePage } from './notificationpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificationpagePageRoutingModule
  ],
  declarations: [NotificationpagePage]
})
export class NotificationpagePageModule {}
