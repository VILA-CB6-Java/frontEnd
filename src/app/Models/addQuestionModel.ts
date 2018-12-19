export class AddQuestionModel {

    constructor(
        public question: string,
        public answerOne: string,
        public answerTwo: string,
        public answerThree: string,
        public answerFour: string,
        public trueanswer: number 
    ){}

}