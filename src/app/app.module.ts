import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";
import { CartModalPageModule } from "./shoppingcart/cart-modal/cart-modal.module";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Brightness } from "@ionic-native/brightness/ngx";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { Camera } from "@ionic-native/camera/ngx";
import { Crop } from "@ionic-native/crop/ngx";
import { IonicStorageModule } from "@ionic/storage";
import { HttpClientModule } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { AuthenticateService } from "./services/authentication.service";
import { AngularFireAuthModule } from "@angular/fire/auth";
import {
  ImagePicker,
  ImagePickerOptions
} from "@ionic-native/image-picker/ngx";
import { FileTransfer } from "@ionic-native/file-transfer";

import { CallNumber } from "@ionic-native/call-number/ngx";
import { Contacts } from "@ionic-native/contacts";

import * as firebase from "firebase";

import { BarcodeScanner } from "@ionic-native/barcode-scanner/ngx";

import {
  MediaCapture,
  MediaFile,
  CaptureError
} from "@ionic-native/media-capture/ngx";
import { LocalNotifications } from "@ionic-native/local-notifications/ngx";

import { OneSignal } from "@ionic-native/onesignal/ngx";

import { File } from "@ionic-native/file/ngx";
import { FileOpener } from "@ionic-native/file-opener/ngx";
import { BatteryStatus } from "@ionic-native/battery-status/ngx";
import { Geolocation } from "@ionic-native/geolocation/ngx";
import { NativeGeocoder } from "@ionic-native/native-geocoder/ngx";
import { AndroidPermissions } from "@ionic-native/android-permissions/ngx";
import { LocationAccuracy } from "@ionic-native/location-accuracy/ngx";
import { StreamingMedia } from "@ionic-native/streaming-media/ngx";
import { Media, MediaObject } from "@ionic-native/media/ngx";
import { PhotoViewer } from "@ionic-native/photo-viewer/ngx";
import { NgxQRCodeModule } from "ngx-qrcode2";
firebase.initializeApp(environment.firebase);
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    CartModalPageModule,
    AngularFireAuthModule,
    NgxQRCodeModule,
    IonicStorageModule.forRoot()
  ],
  providers: [
    StatusBar,
    BatteryStatus,
    Brightness,
    BarcodeScanner,
    Crop,
    SplashScreen,
    Geolocation,
    NativeGeocoder,
    PhotoViewer,
    StreamingMedia,
    Camera,
    AuthenticateService,
    MediaCapture,
    File,
    FileOpener,
    AndroidPermissions,
    LocalNotifications,
    LocationAccuracy,
    Media,
    ImagePicker,
    OneSignal,
    Contacts,
    CallNumber,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
