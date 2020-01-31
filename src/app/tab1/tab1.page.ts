import { Component, OnInit, Input } from "@angular/core";
import { Validators, FormControl, FormGroup } from "@angular/forms";
import { PokemonService } from "../services/pokemon.service";
import { Brightness } from "@ionic-native/brightness/ngx";
import { ModalController } from "@ionic/angular";
import { ModelPage } from "../model/model.page";
import { Router } from "@angular/router";
import { FileTransfer, FileTransferObject } from "@ionic-native/file-transfer";
import { File } from "@ionic-native/file/ngx";

import { PopoverController } from "@ionic/angular";
import { Tab2Page } from "../../app/tab2/tab2.page";

import { CallNumber } from "@ionic-native/call-number/ngx";
import { Contacts } from "@ionic-native/contacts";

import { ListService } from "../services/list.service";
import { List } from "../list";
import { BatteryStatus } from "@ionic-native/battery-status/ngx";
@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"]
})
export class Tab1Page implements OnInit {
  taskList = [];
  everybody;
  // private fileTransfer: FileTransferObject;
  batterySubscription: any;
  brightnessModel = 0.1;

  constructor(
    private router: Router,
    private file: File,
    public itemService: PokemonService,
    private brightness: Brightness,
    public popoverController: PopoverController,
    public modalController: ModalController,
    public callNumber: CallNumber,
    public contacts: Contacts,
    private batteryStatus: BatteryStatus,
    public listService: ListService
  ) {
    this.brightness.setBrightness(this.brightnessModel);
    this.everybody = this.contacts.find(["*"]);

    // for (let i = 0; i < 15; i++) {
    //   this.lists1[i];
    // }
  }

  imageList = [
    "../../assets/94dd573e4b4de604ea7f33548da99fd6.jpg",
    "../../assets/94dd573e4b4de604ea7f33548da99fd6.jpg",
    "../../assets/94dd573e4b4de604ea7f33548da99fd6.jpg"
  ];

  new_item_form: FormGroup;

  ngOnInit() {
    this.getLists();
  }

  goBack() {
    this.router.navigate(["/home"]);
  }
  @Input() list: List;

  lists1: List[];

  getLists(): void {
    this.listService.getLists().subscribe(lists1 => {
      this.lists1 = lists1;
    });
  }

  createItem(value) {
    this.itemService.createItem(value.title, value.description);
    this.new_item_form.reset();
    this.goBack();
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: Tab2Page,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  adjustBrightness() {
    // Called method from range's ionChange event
    this.brightness.setBrightness(this.brightnessModel);
  }

  callContact(number: string) {
    this.callNumber
      .callNumber(number, true)
      .then(() => console.log("Dialer Launched!"))
      .catch(() => console.log("Error launching dialer"));
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModelPage
    });
    return await modal.present();
  }

  loadData(event) {
    setTimeout(() => {
      for (let i = 0; i < 5; i++) {
        this.lists1[i];
      }
      console.log("Done");
      event.target.complete();
    }, 1500);
    if (this.lists1.length == 10) {
      console.log("Stop");
    }
  }
  checkBattery() {
    // watch change in battery status
    this.batterySubscription = this.batteryStatus
      .onChange()
      .subscribe(status => {
        console.log(status.level, status.isPlugged);
      });
  }
  // downloadFile: any;
  // public download(fileName, filePath) {
  //   let url = encodeURI(filePath);
  //   // this.fileTransfer = this.transfer.create();

  //   this.fileTransfer
  //     .download(url, this.file.dataDirectory + fileName, true)
  //     .then(entry => {
  //       //here logging our success downloaded file path in mobile.
  //       console.log("download completed: " + entry.toURL());

  //       // open downloaded file
  //       this.downloadFile = entry.toURL();
  //     })
  //     .catch(error => {
  //       //here logging an error.
  //       console.log("download failed: " + JSON.stringify(error));
  //     });
  // }
}
