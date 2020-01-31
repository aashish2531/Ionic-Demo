import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Tab1Page } from "./tab1.page";
import { Brightness } from "@ionic-native/brightness/ngx";
import { ModelPage } from "../model/model.page";
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,

    RouterModule.forChild([{ path: "", component: Tab1Page }])
  ],
  declarations: [Tab1Page, ModelPage],
  entryComponents: [ModelPage]
})
export class Tab1PageModule {}
