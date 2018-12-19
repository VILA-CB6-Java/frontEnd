import { UserService } from './../../Services/user.service';
import { AddQuestionModel } from '../../Models/addQuestionModel';
import { AllQuestionsService } from '../../Services/all-questions.service';
import { Component, OnInit } from '@angular/core';
import { EditQuestionService } from '../../Services/edit-question.service';

@Component({
  selector: 'app-view-questions',
  templateUrl: './view-questions.component.html',
  styleUrls: ['./view-questions.component.css']
})
export class ViewQuestionsComponent implements OnInit {
  allQuestions = [];
  editToggle = false;
  editQuestionModel: AddQuestionModel;
  
  constructor(
    private allQuestionsService: AllQuestionsService, 
    private editQuestionService: EditQuestionService,
    private userService: UserService
    ) { }

  addToggle=false;

  ngOnInit() {
    this.allQuestionsService.getAllQuestions().subscribe(data => {
      this.allQuestions = data;
    });
  }

  toggle(){
    this.addToggle = !this.addToggle;
    if(!this.addToggle){
      this.reload();
    }
  }

  deleteQuestion(question) {
    if (confirm("Are you sure you want to delete this question?")) {
      this.editQuestionService.deleteQuestion(question).subscribe(
        data => {
          alert(data.message);
          this.reload();

        },
        error => {
          alert("An error occured");
        }
      )
    }
  }

  editQuestion(question) {
    this.editQuestionModel = question;
    this.editToggle = !this.editToggle;
  }

  get diagnostic() { 
    return JSON.stringify(this.editQuestionModel); 
  }

  submitEditQuestion() {
    this.editQuestionService.editQuestion(this.editQuestionModel).subscribe(
      data => {
        alert(data.message);
        this.editQuestionModel=undefined;
      },
      error => alert("Server Problem")
    )

  }

  reload(){
    this.allQuestionsService.getAllQuestions().subscribe(data => {
      this.allQuestions = data;
    });
  }

}
