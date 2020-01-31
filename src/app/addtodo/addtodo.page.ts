import { Component, OnInit } from "@angular/core";
import { ListService } from "../services/list.service";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";
import { NavController, ModalController } from "@ionic/angular";
import { AuthenticateService } from "../services/authentication.service";
@Component({
  selector: "app-addtodo",
  templateUrl: "./addtodo.page.html",
  styleUrls: ["./addtodo.page.scss"]
})
export class AddtodoPage implements OnInit {
  constructor(
    private listSrvs: ListService,
    private fb: FormBuilder,
    private navCtrl: NavController,
    private authService: AuthenticateService
  ) {}
  userEmail: string;
  ngOnInit() {
    // if (this.authService.userDetails()) {
    //   this.userEmail = this.authService.userDetails().email;
    // } else {
    //   this.navCtrl.navigateBack("");
    // }
  }

  pageUsers: any;

  profileForm = this.fb.group({
    name: new FormControl(
      "",
      Validators.compose([
        Validators.maxLength(25),
        Validators.minLength(5),
        Validators.pattern("^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$"),
        Validators.required
      ])
    ),
    description: [""],
    dueDate: [""],
    priority: [""]
  });

  showdata() {
    this.listSrvs.getConfig().subscribe(data => {
      this.pageUsers = data;
      console.log(this.pageUsers);
    });
  }

  onSubmit() {
    this.listSrvs.addData(this.profileForm.value).subscribe(
      val => {
        this.showdata();
        console.log("Successfully Added");
      },
      error => {
        console.log(error);
      }
    );
  }
}
