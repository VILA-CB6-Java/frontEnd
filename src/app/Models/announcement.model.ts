export class Announcement {
    dtime: string;
    title: string;
    body: string;

    constructor(dtime: string, title: string, body: string){
        this.dtime = dtime;
        this.title = title;
        this.body = body;
    }
}