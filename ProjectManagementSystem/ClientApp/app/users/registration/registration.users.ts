import { Component, OnInit } from '@angular/core';
import { UserService } from '../../components/sharedServices/user.service';

@Component({
    selector: 'user-registration-form',
    templateUrl: './registration.users.html',
    //styleUrls: ['./home.projects.css']
})
export class RegisterUser implements OnInit {

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
        if(this.userData.ID) {

        }
        else {
            
            this.user.saveUser(this.userData).subscribe(success => {
                if(success) {
                    alert("User has been saved");
                }
                else alert("There was an error while adding the user");
            })
        }
    }

    ngOnInit(): void {
        
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