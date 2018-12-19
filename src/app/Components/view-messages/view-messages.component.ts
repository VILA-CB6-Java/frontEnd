import { UserService } from './../../Services/user.service';
import { ViewMessagesService } from '../../Services/view-messages.service';
import { Component, OnInit } from '@angular/core';
import { Message } from '../../Models/message.model';

@Component({
  selector: 'app-view-messages',
  templateUrl: './view-messages.component.html',
  styleUrls: ['./view-messages.component.css']
})
export class ViewMessagesComponent implements OnInit {

  messages: Message[] = [];

  constructor(private viewMessagesService: ViewMessagesService,
    private userService: UserService) { }

  ngOnInit() {
    this.viewMessagesService.getMessages().subscribe(
      data => this.messages = data,
      error => alert("An error occurred")
    );
  }

  getdiagnostic(message){
    return (JSON.stringify(message))
  }

  deleteMessage(message: Message){
    this.viewMessagesService.deleteMessage(message).subscribe(
    data => {
      alert(data.message);
       this.reloadMessages();
  },
    error => alert("An error occured")
    );
  }

  reloadMessages(){
    this.viewMessagesService.getMessages().subscribe(
      data => this.messages = data
    );
  }

}
