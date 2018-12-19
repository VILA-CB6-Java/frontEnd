import { AddQuestionService } from '../../Services/add-question.service';
import { AddQuestionModel } from '../../Models/addQuestionModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  addQuestionModel = new AddQuestionModel("", "", "", "", "", 1);

  constructor(private addQuestionService: AddQuestionService) { }

  ngOnInit() {
  }

  onAddQuestion() {
    this.addQuestionService.addQuestion(this.addQuestionModel).subscribe(
      data => {
        alert(data.message);
        this.addQuestionModel.question = "";
        this.addQuestionModel.answerOne = "";
        this.addQuestionModel.answerTwo = "";
        this.addQuestionModel.answerThree = "";
        this.addQuestionModel.answerFour = "";
        this.addQuestionModel.trueanswer = 1;
      },
      error => {
        alert("An error occured")
      }
    )
  }

  get diagnostic() {
    return JSON.stringify(this.addQuestionModel);
  }

}
