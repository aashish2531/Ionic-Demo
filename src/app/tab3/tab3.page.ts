import { Component } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { ModelPage } from "../model/model.page";

@Component({
  selector: "app-tab3",
  templateUrl: "tab3.page.html",
  styleUrls: ["tab3.page.scss"]
})
export class Tab3Page {
  dataList: any;

  constructor(public modalController: ModalController) {
    this.dataList = [];
    for (let i = 0; i < 15; i++) {
      this.dataList.push("Item Number " + this.dataList.length);
    }
  }
  doRefresh(event) {
    console.log("Begin async operation");

    setTimeout(() => {
      console.log("Async operation has ended");
      event.target.complete();
    }, 2000);
  }

  loadData(event) {
    setTimeout(() => {
      for (let i = 0; i < 5; i++) {
        this.dataList.push("Item Number " + this.dataList.length);
      }
      console.log("Done");
      event.target.complete();
    }, 1500);
    if (this.dataList.length == 30) {
      console.log("Stop");
    }
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModelPage,
      componentProps: {
        firstName: "Douglas",
        lastName: "Adams",
        middleInitial: "N"
      }
    });
    return await modal.present();
  }
}
