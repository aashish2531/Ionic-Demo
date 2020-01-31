import { Component, OnInit } from "@angular/core";
import { ActionSheetController } from "@ionic/angular";
import { AlertController } from "@ionic/angular";
import { ListService } from "../services/list.service";
import { HttpClient } from "@angular/common/http";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";
@Component({
  selector: "app-tab4",
  templateUrl: "./tab4.page.html",
  styleUrls: ["./tab4.page.scss"]
})
export class Tab4Page implements OnInit {
  ngOnInit() {
    this.showdata();
  }
  constructor(
    public actionSheetController: ActionSheetController,
    public alertController: AlertController,
    private listSrvs: ListService,
    private fb: FormBuilder
  ) {}

  pageUsers: any;

  profileForm = this.fb.group({
    name: [""],
    description: [""],
    dueDate: [""],
    priority: [""]
  });

  onSubmit() {
    this.listSrvs.addData(this.profileForm.value).subscribe(
      val => {
        // this.showdata();
        console.log("Successfully Added");
      },
      error => {
        console.log(error);
      }
    );
  }

  deleteD(id) {
    this.listSrvs.deleteData(id).subscribe(
      val => {
        console.log("Deleted");
        this.showdata();
      },
      error => {
        console.log(error);
      }
    );
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: "Albums",
      buttons: [
        {
          text: "Delete",
          role: "destructive",
          icon: "trash",

          handler: () => {
            console.log("Delete clicked");
          }
        },
        {
          text: "Share",
          icon: "share",
          handler: () => {
            console.log("Share clicked");
          }
        },
        {
          text: "Play (open modal)",
          icon: "arrow-dropright-circle",
          handler: () => {
            console.log("Play clicked");
          }
        },
        {
          text: "Favorite",
          icon: "heart",
          handler: () => {
            console.log("Favorite clicked");
          }
        },
        {
          text: "Cancel",
          icon: "close",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          }
        }
      ]
    });
    await actionSheet.present();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: "Confirm!",
      message: "Message <strong>text</strong>!!!",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: blah => {
            console.log("Confirm Cancel: blah");
          }
        },
        {
          text: "Okay",
          handler: () => {
            console.log("Confirm Okay");
          }
        }
      ]
    });

    await alert.present();
  }

  showdata() {
    this.listSrvs.getConfig().subscribe(data => {
      this.pageUsers = data;
      console.log(this.pageUsers);
    });
  }

  doRefresh(event) {
    console.log("Begin async operation");
    this.showdata();
    setTimeout(() => {
      console.log("Async operation has ended");
      event.target.complete();
    }, 2000);
  }
}
