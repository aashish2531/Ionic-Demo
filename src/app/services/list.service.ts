import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { LISTS } from "../task-list";
import { Observable, of } from "rxjs";
import { List } from "../list";

@Injectable({
  providedIn: "root"
})
export class ListService {
  dataObj;
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };
  todoDataUrl = "https://todo-app-apis.herokuapp.com/task";

  addData(data) {
    let adddata = JSON.stringify(data);
    return this.http.post(
      "https://todo-app-apis.herokuapp.com/task",
      adddata,
      this.httpOptions
    );
  }

  deleteData(index) {
    return this.http.delete(this.todoDataUrl + "/" + index);
  }

  getLists(): Observable<List[]> {
    return of(LISTS);
  }

  getConfig() {
    return this.http.get(this.todoDataUrl);
  }
  // getConfig1(page) {
  //   return this.http.get(this.todoDataUrl);
  // }

  getData() {
    return this.http.get("https://accedo-video-app-api.herokuapp.com/users");
  }

  registerData(data) {
    let adddata = JSON.stringify(data);
    return this.http.post(
      "https://accedo-video-app-api.herokuapp.com/signup",
      adddata,
      this.httpOptions
    );
  }

  updateData(data) {
    this.dataObj = data;
  }

  edit(data) {
    let id = this.dataObj._id;
    let url = `${this.todoDataUrl}/${id}`;
    return this.http.put(url, data, this.httpOptions);
  }
}
