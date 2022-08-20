import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = "http://localhost:8080/api/login";

  constructor(
    private http: HttpClient
  ) { }

  getUsers() {
    return this.http.get<User[]>(this.baseUrl);
  }
}
