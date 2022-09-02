import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../model/login';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  fieldTextType: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      loginId: [],
      password: [],
    })
  }

  onSubmit() {
    console.log("logging........");
    console.log(this.loginForm.value);

    const loginId: string = this.loginForm.controls["loginId"].value;
    const password: string = this.loginForm.controls["password"].value;

    let authenticate: Login = {}

    this.userService.authenticateUser(loginId, password).subscribe(
      (authStatus) => {
        console.log(authStatus), authenticate = authStatus;
        console.log(authenticate)

        if (authenticate.loggedIn == "granted") {
          sessionStorage.setItem("loggedIn", "yes");
          console.log("success")
          this.router.navigate(['courses'])
        } else {

          console.log("retry!")
          this.loginForm.controls["loginId"].setValue("");
          this.loginForm.controls["password"].setValue("");
          this.router.navigate(['login'])
        }
      })
  }
}


