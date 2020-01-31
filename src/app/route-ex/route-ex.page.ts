import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { ListService } from "../services/list.service";
import { List } from "../list";

@Component({
  selector: "app-route-ex",
  templateUrl: "./route-ex.page.html",
  styleUrls: ["./route-ex.page.scss"]
})
export class RouteExPage implements OnInit {
  constructor(
    public listService: ListService,
    private _Activatedroute: ActivatedRoute
  ) {}

  id: any;

  ngOnInit() {
    this._Activatedroute.paramMap.subscribe(params => {
      this.id = params.get("id");
      this.getLists(this.id);
      console.log(this);
    });
  }

  @Input() list: List;
  lists1: List[];
  res: any;

  getLists(id) {
    this.listService.getLists().subscribe(lists1 => {
      this.res = lists1.find(ide => {
        return ide.id == id;
      });
      console.log(this.res);
    });
  }
}
