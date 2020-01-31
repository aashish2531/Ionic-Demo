import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from "@angular/forms";
import { AuthenticateService } from "../services/authentication.service";
import { NavController } from "@ionic/angular";
@Component({
  selector: "app-register",
  templateUrl: "./register.page.html",
  styleUrls: ["./register.page.scss"]
})
export class RegisterPage implements OnInit {
  validation_form: FormGroup;
  errorMessage: string = " ";
  successMessage: string = "";

  validation_message = {
    email: [
      { type: "required", message: "Email is required" },
      { type: "pattern", message: "Enter a valid mail" }
    ],
    password: [
      { type: "required", message: "passowrd is required" },
      { type: "minLength", message: "password must be atleast 5 length long" }
    ]
  };

  constructor(
    private navCtrl: NavController,
    private authService: AuthenticateService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.validation_form = this.formBuilder.group({
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
        ])
      ),
      password: new FormControl(
        "",
        Validators.compose([Validators.minLength(5), Validators.required])
      )
    });
  }

  tryRegister(value) {
    this.authService.registerUser(value).then(
      res => {
        console.log(res);
        this.errorMessage = "";
        this.successMessage = "Your Account has been Created, Please log In";
      },
      err => {
        console.log(err);
        this.errorMessage = err.message;
        this.successMessage = "";
      }
    );
  }

  goLoginPage() {
    this.navCtrl.navigateBack("");
  }
}
