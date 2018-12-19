import { UserExamsService } from '../../Services/userExamsService';
import { UserService } from '../../Services/user.service';
import { Component, OnInit } from '@angular/core';
import { userExam } from '../../Models/userExam.model';

@Component({
  selector: 'app-user-exams',
  templateUrl: './user-exams.component.html',
  styleUrls: ['./user-exams.component.css']
})
export class UserExamsComponent implements OnInit {

  userExams: userExam[] = [];

  constructor(private user: UserService, private userExamService: UserExamsService) { 
  
  }

  ngOnInit() {
    this.userExamService.getUserExams(this.user).subscribe(
      data => this.userExams = data,
      error => alert("Server Error")
    )
  }

}
