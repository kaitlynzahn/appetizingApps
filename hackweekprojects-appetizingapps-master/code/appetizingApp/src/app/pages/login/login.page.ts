import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";

import { AuthService } from "../../services/auth/auth.service";
import { Router } from "@angular/router"; 
import { AlertController } from "@ionic/angular";


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

loginFormGroup: FormGroup;
registerFormGroup: FormGroup;
isTextFieldType: boolean;

//using responsive forms
  constructor(
    private formBuilder: FormBuilder, 
    private authService: AuthService, 
    private router: Router, 
    private alertController: AlertController,
  ) {
    this.loginFormGroup = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
    });
    this.registerFormGroup = this.formBuilder.group({
      name:  ["", Validators.required],
      email: ["", Validators.required],
      password: ["", Validators.required],
    });
   }

  ngOnInit() {
  }

  //toggle password field type
  togglePasswordFieldType(){
    this.isTextFieldType = !this.isTextFieldType;
  }

  //log user in
  login(){
    if (this.loginFormGroup.valid) {
      //get user input
      this.authService.login(
        this.loginFormGroup.get("email").value,
        this.loginFormGroup.get("password").value
      ).then(result => {
        //if the user logs in, direct them to homepage. otherwise, error
        if (result) {
          this.router.navigate(["home"]);
        } else {
          this.presentAlert("Unable to login. Please try again.");
        }
      }).catch(err => {
        //if the username doesn't exist
        if (err.code.localeCompare("auth/user-not-found") == 0){
          this.presentAlert("Incorrect email. Please try again.");
        } 
        //if the password is incorrect
        else if (err.code.localeCompare("auth/wrong-password") == 0) {
          this.presentAlert("Incorrect password. Please try again.");
        } 
        //if the credentials are incorrect
        else {
          this.presentAlert("Incorrect login credentials. Please try again.");
        }
      });
    }
  }

  //register user
  register() {
    if (this.registerFormGroup.valid){
      //get user input
      this.authService.register(
        this.registerFormGroup.get("name").value,
        this.registerFormGroup.get("email").value,
        this.registerFormGroup.get("password").value,
      ).then(result => {
        //direct them to homepage if successful
        this.router.navigate(["home"]);
      }).catch(err => {
        switch(err.code) {
          //if the username already exists
          case 'auth/email-already-in-use':
            this.presentAlert("An account is already associated with this email. Login with your credentials to continue.");
            break;
          //if the email is invalid
          case 'auth/invalid-email':
            this.presentAlert("The email you entered is invalid. Please try again.");
            break;
          //if the password is weak
          case 'auth/weak-password':
            this.presentAlert("The password you entered is not strong enough. Please try again.");
            break;
          //if there are any other errors
          default:
            this.presentAlert("Unable to register. Please try again.");
            break;
        }
      });
    }
  }

  //display alert
  async presentAlert(message) {
    const alert = await this.alertController.create({
      header: "Error",
      message: message,
      buttons: ['OK']
    })

    await alert.present();
  }

}
