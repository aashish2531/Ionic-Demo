import { Component, OnInit, ɵConsole } from "@angular/core";

@Component({
  selector: "app-infscrl",
  templateUrl: "./infscrl.page.html",
  styleUrls: ["./infscrl.page.scss"]
})
export class InfscrlPage {
  data = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30
  ];

  item: any;
  count: number = 0;
  fixed: boolean = true;
  constructor() {
    this.item = this.data.splice(0, 12);
  }

  loadData(event) {
    setTimeout(() => {
      console.log("I am here");
      for (let i = 0; i < 5; i++) {
        // this.fixed = true;
        this.item.push(this.data[this.count]);
        this.count++;
      }

      console.log("Done");
      event.target.complete();
    }, 1500);
    // console.log(this.item.length);
  }
}
