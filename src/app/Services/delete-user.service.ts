
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { UsernameModel } from '../Models/UsernameModel';


@Injectable({
  providedIn: 'root'
})
export class DeleteUserService {

  constructor(private http: HttpClient) { }

  private url ="http://localhost:8765/user-actions-service/users/delete";

  deleteUser(user: UsernameModel): Observable<any>{
    return this.http.post<any>(this.url, user)
  }
}
