import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TestQuestion } from '../Models/testQuestion';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TestQuestionsService {

  private url: string = "http://localhost:8765/exam-actions-service/exam"
  constructor(private http: HttpClient) { }

  getTestQuestions(): Observable <TestQuestion[]>  { 
     
    return this.http.get<TestQuestion[]>(this.url)
  }

}
