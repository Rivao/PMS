import { HttpModule } from "@angular/http";
import { Injectable, PLATFORM_ID, Inject } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { IUser } from "../interfaces/user.interface";
import { isPlatformBrowser, isPlatformServer } from "@angular/common";




@Injectable() //when you inject this class, it may need it's own dependencies
export class UserService {

    private userId: any;
    private localstorage:any;
    constructor(private http: Http, @Inject(PLATFORM_ID) platformId: string) {
        if(isPlatformServer(platformId)){ // Needed, so localStorage is not undefined when server side rendering
            this.localstorage = false;
        }
        if(isPlatformBrowser(platformId)) {
            this.localstorage = true;
        }
    }

    saveUser(user: IUser) {

        return this.http.post("/api/Users", user);
    }

    loginUser(user: IUser) {

        return this.http.post("/api/auth", user)
        .map(response => {
            const data = response.json();
            return data;
        })
    }
    logOutUser() {
        if(this.localstorage){
            localStorage.setItem("User", "");
        }
    }

    getUserId() {console.log('getting it '+this.localstorage);
    
        if(this.localstorage){
            return localStorage.getItem('User');
        }
    }

    setUserId(id: any) {console.log('setting it '+id);

        if(this.localstorage){
            localStorage.setItem("User", JSON.stringify(id));
        }
    }

}
