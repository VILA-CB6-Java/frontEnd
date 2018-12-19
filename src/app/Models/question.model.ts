export class Question {
    
    id: number;
    question: string;
    answerOne: string;
    answerTwo: string;
    answerThree: string;
    answerFour: string;
    trueanswer: number;
    flagged: boolean;

    constructor( id: number, question: string, answerOne: string, answerTwo: string, 
        answerThree: string, answerFour: string) {

            this.id = id;
            this.question = question;
            this.answerOne = answerOne;
            this.answerTwo = answerTwo;
            this.answerThree = answerThree;
            this.answerFour = answerFour;
            this.trueanswer = null;
            this.flagged=false;
    }
}