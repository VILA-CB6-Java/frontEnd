import { SendMessageService } from '../../Services/send.message.service';
import { SendMessageModel } from '../../Models/sendMessage.Model';
import { RegisterModel } from '../../Models/RegisterModel';
import { RegisterService } from '../../Services/register-service.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { User } from '../../Models/user.model';
import { UserService } from '../../Services/user.service';
import { LoginModel } from '../../Models/loginModel';
import { LoginService } from '../../Services/login.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  sendMessageModel = new SendMessageModel("", "");
  user: User;
  registerModel = new RegisterModel("", "", "", "", "");
  loginModel = new LoginModel("", "");
  registerForm = false;
  loginForm = false;
  sendMessage = false;
 
  registerSubmitted = false;

  constructor(
    private userService: UserService, 
    private registerService: RegisterService, 
    private loginService: LoginService,
    private sendMessageService: SendMessageService
    ) 
    {
      if( localStorage.length > 0 ){
      this.user = new User(
      localStorage.getItem("firstName"),
      localStorage.getItem("lastName"),
      localStorage.getItem("username"),
      localStorage.getItem("email"),
      +localStorage.getItem("userId")
      );
      this.userService.email = this.user.email;
      this.userService.firstName = this.user.firstName;
      this.userService.lastName = this.user.lastName;
      this.userService.username = this.user.username;
      this.userService.userId = this.user.userId;
      
      }
    }

  

  ngOnInit() {
  }

  onSendMessageSubmit(){
    this.sendMessageModel.username = this.user.username;
    this.sendMessageService.sendMessage(this.sendMessageModel).subscribe(
      data => (alert("Message sent"), (this.sendMessage = false)),
      error => (alert("Server error"),(this.sendMessage = false))
    )
  }

  onRegisterSubmit() { 
    this.registerService.registerUser(this.registerModel).subscribe(
      data=> {
        this.registerForm=false;
        alert(data.message);

      },
      error => alert(error.error.message)
    ) 
}
  onLoginSubmit(){

    this.loginService.loginUser(this.loginModel).subscribe(
      data=> {

        this.user = data;
        this.userService.email = data.email;
        this.userService.firstName = data.firstName;
        this.userService.lastName = data.lastName;
        this.userService.username = data.username;
        this.userService.userId = data.userId;

        localStorage.setItem("userId", ""+data.userId);
        localStorage.setItem("username", data.username);
        localStorage.setItem("email", data.email);
        localStorage.setItem("firstName", data.firstName);
        localStorage.setItem("lastName", data.lastName);
      },
      error => {
        alert("Wrong username or password"); 
        (this.loginModel.password="");
      }
    )
  }

  get diagnostic() { 
    return JSON.stringify(this.loginModel); 
  }


  @Output()  public modeEvent = new EventEmitter();

  toRegister(){
    this.registerForm = !this.registerForm;
  }
  
  toMessage(){
    this.sendMessage = !this.sendMessage;
  }

 
  logOut(){
    this.user = null;
    this.userService.email = "";
    this.userService.firstName= "";
    this.userService.lastName= "";
    this.userService.userId = 0;
    this.userService.username = "";

    this.loginModel.password="";
    this.loginModel.username ="";
    localStorage.clear();
  }
    takeExam(){
    this.modeEvent.emit("takeExam");
  }
}
