import { LoginModel } from '../Models/loginModel';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url="http://localhost:8000/users/login"
  constructor(private http: HttpClient) { }

  loginUser(user: LoginModel): Observable<User>{
    return this.http.post<User>(this.url, user );
  }
}
