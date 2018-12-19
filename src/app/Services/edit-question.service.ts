import { AddQuestionModel } from '../Models/addQuestionModel';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EditQuestionService {
  url = "http://localhost:8300/questions/update";
  urlDelete = "http://localhost:8300/questions/delete";
  constructor(private http: HttpClient ) { }
  
  editQuestion(question: AddQuestionModel){
    return this.http.post<any>(this.url, question);
  }

  deleteQuestion(question: AddQuestionModel){
    return this.http.post<any>(this.urlDelete, question);
  }


}
