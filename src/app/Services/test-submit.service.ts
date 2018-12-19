import { testModel } from '../Models/test.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Result } from '../Models/Result.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestSubmitService {

  private url="http://localhost:8300/exam/submit";
  
  constructor(private http: HttpClient) { }

  submitTest(test: testModel): Observable<Result> {
    
    return this.http.post<Result>(this.url, test);
  }
}
