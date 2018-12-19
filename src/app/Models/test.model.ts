import { SubmitQuestion } from './submitQuestion.model';


export class testModel {
    userId: number;
    list: SubmitQuestion[];


public setAnswer(i:number, id:number, answer:number){
     this.list[i] = {id: id, trueanswer:answer}  
}

constructor(userId){
    this.userId = userId;
    this.list = [
        {id:0, trueanswer:0 },
        {id:0, trueanswer:0 },
        {id:0, trueanswer:0 },
        {id:0, trueanswer:0 },
        {id:0, trueanswer:0 },
        {id:0, trueanswer:0 },
        {id:0, trueanswer:0 },
        {id:0, trueanswer:0 },
        {id:0, trueanswer:0 },
        {id:0, trueanswer:0 },
        {id:0, trueanswer:0 },
        {id:0, trueanswer:0 },
        {id:0, trueanswer:0 },
        {id:0, trueanswer:0 },
        {id:0, trueanswer:0 },
        {id:0, trueanswer:0 },
        {id:0, trueanswer:0 },
        {id:0, trueanswer:0 },
        {id:0, trueanswer:0 },
        {id:0, trueanswer:0 },
    ];
   
}
}