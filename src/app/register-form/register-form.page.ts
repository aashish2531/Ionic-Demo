import { Component, OnInit } from "@angular/core";
import { ListService } from "../services/list.service";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";
import { ModalController } from "@ionic/angular";
// import { ModalPage } from '../modal/modal.page';
@Component({
  selector: "app-register-form",
  templateUrl: "./register-form.page.html",
  styleUrls: ["./register-form.page.scss"]
})
export class RegisterFormPage implements OnInit {
  constructor(private listSrvs: ListService, private fb: FormBuilder) {}

  profileForm = this.fb.group({
    username: [""],
    email: [""],
    password: [""],
    firstname: [""],
    lastname: [""]
  });

  ngOnInit() {}

  onSubmit() {
    this.listSrvs.registerData(this.profileForm.value).subscribe(
      res => {
        console.log("Success");
      },
      error => {
        console.log(error);
      }
    );
  }
}
