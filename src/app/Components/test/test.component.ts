import { TestSubmitService } from '../../Services/test-submit.service';
import { TestQuestion } from '../../Models/testQuestion';
import { UserService } from '../../Services/user.service';
import { testModel } from '../../Models/test.model';
import { Component, OnInit, OnDestroy, Input, EventEmitter, Output } from '@angular/core';
import { Question } from '../../Models/question.model';
import { TestQuestionsService } from '../../Services/test-questions.service';
import { Result } from '../../Models/Result.model';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit, OnDestroy {
  selectedQuestion = 1;
  questions: TestQuestion[] = [];
  modelTest: testModel;
  confirmation=false;
  warning = false;
  minutes:number=15;
  seconds: number=0;

  @Output() public modeEvent = new EventEmitter();


  get diagnostic() {
    return JSON.stringify(this.modelTest);
  }



  constructor(
    private testQuestionService: TestQuestionsService,
    private userService: UserService,
    private testSubmit: TestSubmitService,
    private result: Result
  ) {
    this.modelTest = new testModel(this.userService.getUserId());
  }


  ngOnInit() {
    this.testQuestionService.getTestQuestions().subscribe(data => {
      this.questions = data;
    });
    this.fullScreen();
    this.startCountdown();  
  }



  submitTest() {

    this.testSubmit.submitTest(this.modelTest).subscribe(
      data => this.result = data,
      error => alert("Server Error. Please contact the admin.")
    )
  }

  exitTest() {
    this.exitFullScreen();
    this.modeEvent.emit("main");
  }

  ngOnDestroy() {
    this.exitFullScreen();
    this.modeEvent.emit("main");
  }

  setSelected(selected: number) {
    this.selectedQuestion = selected;
  }

  setChosen(question: Question, choice: number, i: number) {
    question.trueanswer = choice;
    this.modelTest.list[i].id = question.id;
    this.modelTest.list[i].trueanswer = question.trueanswer;
  }
  previous() {
    if (this.selectedQuestion > 1) {
      this.selectedQuestion--;
    }
  }
  next() {
    if (this.selectedQuestion < 20) {
      this.selectedQuestion++;
    }
  }

  fullScreen() {
    let elem = document.documentElement;
    let methodToBeInvoked = elem.requestFullscreen ||
      elem['webkitRequestFullScreen'] || elem['mozRequestFullscreen']
      ||
      elem['msRequestFullscreen'];
    if (methodToBeInvoked) methodToBeInvoked.call(elem);
  }

  exitFullScreen() {
    let methodToBeInvoked = document.exitFullscreen ||
      document['webkitExitFullscreen'] || document['mozExitFullscreen']
      ||
      document['msExitFullscreen'];
    if (methodToBeInvoked) methodToBeInvoked.call(document);
  }

  
  startCountdown(){
    var minutes = 15;
    var seconds = 0;
    var interval = setInterval(() => {

      if(minutes==0 && seconds==1){
        this.submitTest();
      }

      if(seconds < 1 ){
        seconds = 60;
        minutes--;
      }

      if(minutes<5){
        this.warning = true;
      }

      seconds--;
      this.minutes = minutes;
      this.seconds = seconds;

    }, 1000);
  };

}