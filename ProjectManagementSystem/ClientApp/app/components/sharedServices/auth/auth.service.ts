import { Injectable } from "@angular/core";
import { UserService } from "../user.service";




@Injectable()
export class AuthService {

    constructor(private user: UserService) {}

    public isAuthenticated(): boolean {
        if(!this.user.getUserId()) {
            return false;
        }
        return true;
    }

}