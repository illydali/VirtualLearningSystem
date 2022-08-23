import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../model/login';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = "http://localhost:8080/api";

  constructor(
    private http: HttpClient
  ) { }

  // getUsers() {
  //   return this.http.get<User[]>(this.baseUrl);
  // }

  authenticateUser(login_id: string, password: string) {
    return this.http.get<Login>(this.baseUrl + "/login/" + login_id + "/" + password);
  }

  registerUser(user: User) {
    console.log(this.baseUrl + "/register", user)
    return this.http.post(this.baseUrl + "/register", user);
  }

  logout() {
    console.log("logging user out")
    sessionStorage.setItem("loggedIn", "no");
    return this.http.get(this.baseUrl + "/logout");

  } 
}
