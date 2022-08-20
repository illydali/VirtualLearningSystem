import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
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

    const loginId : string = this.loginForm.controls["loginId"].value;
    const password: string = this.loginForm.controls["password"].value;
    
    if(loginId == "testuser" && password == "rotiprata") {
      sessionStorage.setItem("loggedIn", "yes")
      this.router.navigate(['courses'])
    } else {
      this.loginForm.controls["loginId"].setValue("");
      this.loginForm.controls["password"].setValue("");
      this.router.navigate(['login'])
    }
  }


}
