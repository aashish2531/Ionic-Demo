import { Component, OnInit } from "@angular/core";
import { File, Entry } from "@ionic-native/file/ngx";
import { Platform, AlertController, ToastController } from "@ionic/angular";
import { FileOpener } from "@ionic-native/file-opener/ngx";
import { Router, ActivatedRoute } from "@angular/router";
import { FileTransfer, FileTransferObject } from "@ionic-native/file-transfer";

@Component({
  selector: "app-filetransfer",
  templateUrl: "./filetransfer.page.html",
  styleUrls: ["./filetransfer.page.scss"]
})
export class FiletransferPage implements OnInit {
  directories = [];
  folder = "";
  copyFile: Entry = null;
  shouldMove = false;

  constructor(
    private file: File,
    private plt: Platform,
    private alertCtrl: AlertController,
    private fileOpener: FileOpener,
    private router: Router,
    private route: ActivatedRoute,
    private toastCtrl: ToastController
  ) {}

  ngOnInit() {
    this.folder = this.route.snapshot.paramMap.get("folder") || "";
    this.loadDocuments();
    console.log(this.file.externalDataDirectory);
  }

  loadDocuments() {
    this.plt.ready().then(() => {
      // Reset for later copy/move operations
      this.copyFile = null;
      this.shouldMove = false;

      this.file
        .listDir(this.file.externalDataDirectory, this.folder)
        .then(res => {
          this.directories = res;
          console.log(this.file.dataDirectory);
        });
    });
  }

  async createFolder() {
    let alert = await this.alertCtrl.create({
      header: "Create Folder",
      message: "Please specify the name of new folder",
      inputs: [
        {
          name: "name",
          type: "text",
          placeholder: "myDir"
        }
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary"
        },
        {
          text: "Create",
          handler: data => {
            this.file
              .createDir(
                `${this.file.dataDirectory}/${this.folder}`,
                data.name,
                false
              )
              .then(res => {
                this.loadDocuments();
              });
          }
        }
      ]
    });
    await alert.present();
  }

  async createFile() {
    let alert = await this.alertCtrl.create({
      header: "Create file",
      message: "Please specify the name of the new file",
      inputs: [
        {
          name: "name",
          type: "text",
          placeholder: "MyFile"
        }
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary"
        },
        {
          text: "Create",
          handler: data => {
            this.file
              .writeFile(
                `${this.file.dataDirectory}/${this.folder}`,
                `${data.name}.txt`,
                `My custom text - ${new Date().getTime()}`
              )
              .then(res => {
                this.loadDocuments();
              });
          }
        }
      ]
    });

    await alert.present();
  }

  deleteFile(file: Entry) {
    let path = this.file.dataDirectory + this.folder;
    this.file.removeFile(path, file.name).then(() => {
      this.loadDocuments();
    });
  }

  startCopy(file: Entry, moveFile = false) {
    this.copyFile = file;
    this.shouldMove = moveFile;
  }

  async itemClicked(file: Entry) {
    if (this.copyFile) {
      if (!file.isDirectory) {
        let toast = await this.toastCtrl.create({
          message: "Please select an folder for your operation"
        });
        await toast.present();
        return;
      }
      this.finishCopyFile(file);
    } else {
      if (file.isFile) {
        this.fileOpener.open(file.nativeURL, "text/plain");
      } else {
        let pathToOpen =
          this.folder != "" ? this.folder + "/" + file.name : file.name;
        let folder = encodeURIComponent(pathToOpen);
        this.router.navigateByUrl(`/home/${folder}`);
      }
    }
  }

  finishCopyFile(file: Entry) {
    let path = this.file.dataDirectory + this.folder;
    let newPath = this.file.dataDirectory + this.folder + "/" + file.name;

    if (this.shouldMove) {
      if (this.copyFile.isDirectory) {
        this.file
          .moveDir(path, this.copyFile.name, newPath, this.copyFile.name)
          .then(() => {
            this.loadDocuments();
          });
      } else {
        this.file
          .moveFile(path, this.copyFile.name, newPath, this.copyFile.name)
          .then(() => {
            this.loadDocuments();
          });
      }
    } else {
      if (this.copyFile.isDirectory) {
        this.file
          .copyDir(path, this.copyFile.name, newPath, this.copyFile.name)
          .then(() => {
            this.loadDocuments();
          });
      } else {
        this.file
          .copyFile(path, this.copyFile.name, newPath, this.copyFile.name)
          .then(() => {
            this.loadDocuments();
          });
      }
    }
  }
}
