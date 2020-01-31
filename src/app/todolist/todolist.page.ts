import { Component, OnInit } from "@angular/core";
import { ListService } from "../services/list.service";
import { AuthenticateService } from "../services/authentication.service";
import { NavController, ModalController } from "@ionic/angular";

@Component({
  selector: "app-todolist",
  templateUrl: "./todolist.page.html",
  styleUrls: ["./todolist.page.scss"]
})
export class TodolistPage implements OnInit {
  constructor(
    private listSrvs: ListService,
    private authService: AuthenticateService,
    private navCtrl: NavController
  ) {
    // this.pageUsers = [];
    // for (let i = 0; i < 10; i++) {
    //   this.pageUsers[i];
    // }
    //Mild-mannered Abe, however, is Tarzan of the traffic jungle. He knows the strict species pecking order:
    // pedestrians are on the bottom and run out of the way of everything, bicycles make way to cycle-rickshaws,
    // which give way to auto-rickshaws, which stop for cars, which are subservient to trucks. Buses stop for one
    //  thing and one thing only. Not customers – they jump on while the buses are still moving. The only thing
    //  that can stop a bus is the king of the road, the lord of the jungle and the top dog. The holy cow.”
  }
  page = 1;
  userEmail: string;
  pageUsers: any;
  pagedata: any;
  ngOnInit() {
    this.showData();
  }
  item = [];
  count: number = 0;
  fixed: boolean = true;

  showData() {
    this.listSrvs.getConfig().subscribe(data => {
      this.pageUsers = data;
      for (let i = 0; i < 15; i++) {
        this.item.push(this.pageUsers[this.count]);
        this.count++;
      }
    });
  }
  doRefresh(event) {
    console.log("Begin async operation");
    this.showData();
    setTimeout(() => {
      console.log("Async operation has ended");
      event.target.complete();
    }, 1000);
  }

  loadDataa(event) {
    setTimeout(() => {
      console.log("I am here");
      for (let i = 0; i < 3; i++) {
        this.item.push(this.pageUsers[this.count]);
        this.count++;
      }
      event.target.complete();
    }, 1500);
  }
}
