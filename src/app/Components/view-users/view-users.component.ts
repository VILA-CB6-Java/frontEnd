import { UserService } from './../../Services/user.service';
import { UserExamsService } from '../../Services/userExamsService';
import { ViewUsersService } from '../../Services/view-users.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../Models/user.model';
import { DeleteUserService } from '../../Services/delete-user.service';
import { UsernameModel } from '../../Models/UsernameModel';
import { userExam } from '../../Models/userExam.model';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {

  userList: User[];
  userExams: userExam[];
  viewExams= false;

  constructor(
    private viewUsersService: ViewUsersService,
    private deleteUserService: DeleteUserService,
    private userExamsService: UserExamsService,
    private userService: UserService
    ) { }

  ngOnInit() {
    this.viewUsersService.getUsers().subscribe(data => this.userList = data);
  }           

  deleteUser(username: string){
    let user = new UsernameModel(username);

    if(confirm("Are you sure you want to delete this user?")){
      this.deleteUserService.deleteUser(user).subscribe(
        data => {
          alert("User Deleted"); 
          this.reloadUsers()
        },
        error => alert("An error occured")
      );
    }
  }

  viewUserExams(user: User){
    if(!this.viewExams){
    this.userExamsService.getUserExams(user).subscribe(
      data => {
        this.userExams = data;
        this.viewExams = true;
      }
    )
    }
    else{
      this.viewExams = false;
    }
  }

  reloadUsers(){
    this.viewUsersService.getUsers().subscribe(data =>{ 
      this.userList = data;
      this.loadUsers();

    });
  }

  loadUsers(){
    this.viewUsersService.getUsers().subscribe(data => {
      this.userList = data;
    });

  }

}