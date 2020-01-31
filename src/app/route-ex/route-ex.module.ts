import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NgxQRCodeModule } from "ngx-qrcode2";

import { IonicModule } from "@ionic/angular";

import { RouteExPageRoutingModule } from "./route-ex-routing.module";

import { RouteExPage } from "./route-ex.page";

@NgModule({
  imports: [
    CommonModule,
    NgxQRCodeModule,
    FormsModule,
    IonicModule,
    RouteExPageRoutingModule
  ],
  declarations: [RouteExPage]
})
export class RouteExPageModule {}
