import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NgxQRCodeModule } from "ngx-qrcode2";

import { IonicModule } from "@ionic/angular";

import { BarcodePageRoutingModule } from "./barcode-routing.module";

import { BarcodePage } from "./barcode.page";

@NgModule({
  imports: [
    CommonModule,
    NgxQRCodeModule,
    FormsModule,
    IonicModule,
    BarcodePageRoutingModule
  ],
  declarations: [BarcodePage]
})
export class BarcodePageModule {}
