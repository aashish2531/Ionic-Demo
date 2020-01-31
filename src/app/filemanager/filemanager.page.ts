import { Component, OnInit } from "@angular/core";
import { File } from "@ionic-native/file";

@Component({
  selector: "app-filemanager",
  templateUrl: "./filemanager.page.html",
  styleUrls: ["./filemanager.page.scss"]
})
export class FilemanagerPage {
  constructor(private fileCtrl: File) {}

  private dirs: any;

  // public goToDir()
  // {

  //   this.fileCtrl.listDir(this.fileCtrl.externalRootDirectory,'').then(
  //     (list) => {

  //         this.dirs=list;
  //     }
  // );

  // }
}
