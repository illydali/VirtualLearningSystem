import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      id: [],
      user: ["", [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
      password: ["", [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
    })
  }

  get password() {
    return this.registerForm.get('password');
  }

  saveUser() {
    this.userService.registerUser(this.registerForm.value).subscribe(
      (d) => {
        return console.log("new data added", d)
      }
    )

    console.log("registering user");
    console.log(this.registerForm.value);
  }
}

