import { Component, OnInit } from "@angular/core";
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
// import { PhotoService } from "../services/photo.service";
import { File } from "@ionic-native/file/ngx";
import { ActionSheetController } from "@ionic/angular";
import { PopoverController, NavParams, Events } from "@ionic/angular";

import {
  ImagePicker,
  ImagePickerOptions
} from "@ionic-native/image-picker/ngx";
import { PhotoService } from "../services/photo.service";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"],
  providers: [PhotoService]
})
export class Tab2Page {
  croppedImagepath = "";
  isLoading = false;

  imagePickerOptions = {
    maximumImagesCount: 1,
    quality: 50
  };
  constructor(
    private camera: Camera,
    public photoService: PhotoService,
    public imagePicker: ImagePicker,
    public actionSheetController: ActionSheetController,
    private popoverController: PopoverController,
    private events: Events,
    public file: File
  ) {}

  // images: any = [];

  // ngOnInit() {
  //   this.photoService.loadSaved();
  // }

  // PickMultipleImages() {
  //   var options: ImagePickerOptions = {
  //     maximumImagesCount: 5,
  //     width: 100,
  //     height: 100
  //   };
  //   this.imagePicker.getPictures(options).then(results => {
  //     for (var interval = 0; interval < results; interval++) {
  //       let fileName = results[interval].substring(
  //         results[interval].lastIndexOf("/") + 1
  //       );
  //       let path = results[interval].substring(
  //         results[interval].lastIndexOf("/") + 1
  //       );
  //       this.file.readAsDataURL(path, fileName).then(base64string => {
  //         this.images.push(base64string);
  //       });
  //     }
  //   });
  // }

  pickImage(sourceType) {
    const options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };
    this.camera.getPicture(options).then(
      imageData => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        // let base64Image = 'data:image/jpeg;base64,' + imageData;
      },
      err => {
        // Handle error
      }
    );
  }
  async selectImage() {
    const actionSheet = await this.actionSheetController.create({
      header: "Select Image source",
      buttons: [
        {
          text: "Load from Library",
          handler: () => {
            this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: "Use Camera",
          handler: () => {
            this.pickImage(this.camera.PictureSourceType.CAMERA);
          }
        },
        {
          text: "Cancel",
          role: "cancel"
        }
      ]
    });
    await actionSheet.present();
  }

  eventFromPopover() {
    this.events.publish("fromPopoverEvent");
    this.popoverController.dismiss();
  }
}
