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
  fieldTextType: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      id: [],
      email: ["",[ Validators.required, Validators.email]],
      user: ["", [Validators.required, Validators.minLength(4), Validators.maxLength(10), Validators.pattern("^[a-zA-Z \-\']+")]],
      phone: ["", [Validators.required, Validators.pattern("^[0-9]*$")]],
      password: ["", [Validators.required, Validators.minLength(8), Validators.maxLength(10),
      Validators.pattern(`(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$`)]],
    })
  }

  // ^[a-zA-Z \-\']+
  // (?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*\W+)(.{4,20})$
  // (?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,15}

  get password() {
    return this.registerForm.get('password');
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
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

