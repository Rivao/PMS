import { Component, OnInit } from '@angular/core';
import { UserService } from '../../components/sharedServices/user.service';
import { Router} from '@angular/router';
import { IUser } from '../../components/interfaces/user.interface';

@Component({
    selector: 'login-form',
    templateUrl: './login.component.html',
    //styleUrls: ['./home.projects.css']
})
export class LoginComponent {

    userData: IUser = {
        Password: '',
        Email: '',       
    };

    constructor(private user: UserService, private router: Router) {

    }

    submit(form : any){
            
        this.user.loginUser(this.userData)
        .subscribe((userInfo) => {
            if(userInfo) {
                //localStorage.setItem("User", JSON.stringify(user.ID));
                this.user.setUserId(userInfo.id);
                this.router.navigate(['home']);
            }
            else {
                alert("nayyy");
                form.reset();
            }
        });
    }
}