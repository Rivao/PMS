import { HttpModule } from "@angular/http";
import { Injectable } from "@angular/core";
import { Http } from '@angular/http';


@Injectable() //when you inject this class, it may need it's own dependencies
export class UserService {

    constructor(private http: Http) { }

    

    saveUser(user: IUser) {
        return this.http.post("/api/Users", user);
    }
}
interface IUser {
        ID?: string,
        FirstName: string;
        LastName: string,
        Phone: number,
        Username?: string,
        Password: string,
        Age?: number,
        Country: string,
        Email: string,
        CreatedAt?: Date

}