import { Component, OnInit } from '@angular/core';
import { UserService } from '../../components/sharedServices/user.service';
import { IUser } from '../../components/interfaces/user.interface';

@Component({
    selector: 'user-registration-form',
    templateUrl: './registration.users.html',
    //styleUrls: ['./home.projects.css']
})
export class RegisterUser {

    userData: IUser = {
        FirstName: '',
        LastName: '',
        Phone: 0,
        Password: '',
        Country: '',
        Email: '',       
    };

    constructor(private user: UserService) {

    }

    submit(form : any){
            this.user.saveUser(this.userData).subscribe(success => {
                if(success) {
                    alert("User has been saved");
                }
                else alert("There was an error while adding the user");
            })
    }
}