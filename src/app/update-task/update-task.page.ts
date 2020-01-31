import { Component, OnInit } from "@angular/core";
import { ListService } from "../services/list.service";
import { HttpClient } from "@angular/common/http";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";

@Component({
  selector: "app-update-task",
  templateUrl: "./update-task.page.html",
  styleUrls: ["./update-task.page.scss"]
})
export class UpdateTaskPage implements OnInit {
  constructor(private fb: FormBuilder, private listSrvs: ListService) {}

  editData;
  editDate;

  ngOnInit() {
    this.editData = this.listSrvs.dataObj;
    this.setDataValues();
  }

  profileForm = this.fb.group({
    name: [""],
    description: [""],
    dueDate: [""],
    priority: [""]
  });

  onSubmit() {
    this.listSrvs.edit(this.profileForm.value).subscribe(
      val => {
        alert("Successfully Updated!");
      },
      error => {
        console.log(error);
        alert("Internal Data Entry Error!");
      }
    );
  }

  setDataValues() {
    //this.editData.dueDate =
    if (this.editData != null) {
      this.profileForm.get("dueDate").setValue(this.editData.dueDate);
      this.profileForm.get("name").setValue(this.editData.name);
      this.profileForm.get("description").setValue(this.editData.description);
      this.profileForm.get("dueDate").setValue(this.editDate);
      this.profileForm.get("priority").setValue(this.editData.priority);
    }
  }
}
