import { SendMessageModel } from '../Models/sendMessage.Model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SendMessageService {

  constructor(private http: HttpClient) { }
  private url: string = "http://localhost:8500/messages/post";
  sendMessage(message: SendMessageModel){
    return this.http.post<any>(this.url, message);
  }
}
