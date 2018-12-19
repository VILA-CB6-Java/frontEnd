
export class userExam {
    dtime: string;
    grade: number;
    passed: boolean;
    id: number;
    viewIt: boolean;

    constructor(dtime: string, grade: number, passed: boolean, id: number) {
        this.dtime = dtime;
        this.grade = grade;
        this.passed = passed;
        this.id = id;
        this.viewIt = true;
    }

}

