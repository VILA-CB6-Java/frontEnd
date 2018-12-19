export class SendMessageModel{
    dtime: string;
    username: string;
    body: string;

    constructor(username: string, body: string){
        this.username = username;
        this.body = body;
    }
}