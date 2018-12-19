import { HttpClient } from '@angular/common/http';
import { Message } from '../Models/message.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewMessagesService {

  private url = "http://localhost:8500/messages"
  private urlDelete = "http://localhost:8500/messages/delete"
  constructor(private http: HttpClient) { }

  getMessages(): Observable<Message[]>{
    return this.http.get<Message[]>(this.url);
  }

  deleteMessage(message: Message): Observable<any>{
   
    return this.http.post<any>(this.urlDelete, message);
  }
}
