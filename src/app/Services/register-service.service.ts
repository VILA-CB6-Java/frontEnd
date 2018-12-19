import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterModel } from '../Models/RegisterModel';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  
  url = "http://localhost:8100/users/register";

  constructor(private http: HttpClient) { }

  registerUser(user: RegisterModel){
    return this.http.post<any>(this.url, user);
  }

}
