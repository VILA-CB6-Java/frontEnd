import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FullQuestion } from '../Models/fullQuestion';

@Injectable({
  providedIn: 'root'
})
export class AllQuestionsService {

  private url: string = "http://localhost:8765/exam-actions-service/questions"
  constructor(private http: HttpClient) { }

  getAllQuestions(): Observable <FullQuestion[]>  {  
    return this.http.get<FullQuestion[]>(this.url)
  }
}
