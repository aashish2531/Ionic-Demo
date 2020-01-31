import { Injectable } from "@angular/core";

import { Storage } from "@ionic/storage";

import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
import { Crop } from "@ionic-native/crop/ngx";
import { File } from "@ionic-native/file/ngx";
import { ImagePicker } from "@ionic-native/image-picker/ngx";

import { ActionSheetController } from "@ionic/angular";
@Injectable({
  providedIn: "root"
})
class Photo {
  data: any;
}

export class PhotoService {
  public photos: Photo[] = [];
  currentImage: any;

  constructor(
    private camera: Camera,
    private storage: Storage,
    private imagePicker: ImagePicker
  ) {}

  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: true,
      correctOrientation: true
    };

    this.camera.getPicture(options).then(
      imageData => {
        // Add new photo to gallery
        this.photos.unshift({
          data: "data:image/jpeg;base64," + imageData
        });

        //to save photos
        this.storage.set("photos", this.photos);
      },
      err => {
        // Handle error
        console.log("Camera issue:" + err);
      }
    );
  }

  loadSaved() {
    this.storage.get("photos").then(photos => {
      this.photos = photos || [];
    });
  }
}
