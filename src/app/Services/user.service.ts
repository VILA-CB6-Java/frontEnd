import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })

export class UserService {
    userId: number;
    firstName: string;
    lastName: string;
    email: string;
    username: string;

    setUserId(id:number){
        this.userId = id;
    }
    getUserId(){
        return this.userId;
    }

    

}