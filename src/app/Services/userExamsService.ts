import { userExam } from '../Models/userExam.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Models/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserExamsService {

  private url = "http://localhost:8300/exam/retrieve"
  constructor(private http: HttpClient) { }

  getUserExams(user: User): Observable<userExam[]> {
    return this.http.post<userExam[]>(this.url, user);
 }

}