import { AddQuestionModel } from '../Models/addQuestionModel';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class AddQuestionService {
  url = "http://localhost:8300/questions/update"
  constructor(private http: HttpClient ) { }
  
  addQuestion(question: AddQuestionModel){
    return this.http.post<any>(this.url, question);
  }
}
