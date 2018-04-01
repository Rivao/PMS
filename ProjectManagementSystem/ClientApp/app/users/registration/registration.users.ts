import { Component, OnInit } from '@angular/core';
import { UserService } from '../../components/sharedServices/user.service';
import { IUser } from '../../components/interfaces/user.interface';
import { ICompany } from '../../components/interfaces/company.interface';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

@Component({
    selector: 'user-registration-form',
    templateUrl: './registration.users.html',
    //styleUrls: ['./home.projects.css']
})
export class RegisterUser {

    userData: IUser = {
        FirstName: '',
        LastName: '',
        Phone: '',
        Password: '',
        Country: '',
        Email: '',       
    };
    companyData: ICompany = {
        name: '',
        subscription: '',
        ownerId: 0,
        memberCount: 1
    }
    userCredentials: IUser = {
        Password: '',
        Email: '',       
    };
    openCompanyForm: boolean = false;

    constructor(private user: UserService, private router: Router) {

    }

    submitUser(form : any){
            this.user.saveUser(this.userData).subscribe(success => {
                if(success) {
                    this.openCompanyForm = true;
                    this.userCredentials.Email = this.userData.Email;
                    this.userCredentials.Password = this.userData.Password;
                    this.user.loginUser(this.userCredentials).subscribe((userInfo) => {
                        if(userInfo) {
                            this.user.setUserId(userInfo.id);
                        };
                    })
                }
                else alert("There was an error while adding the user");
            });
    }
    submitCompany() {
        console.log(this.user.getUserId());
        console.log('PArsed ' + parseInt(this.user.getUserId()));
        this.companyData.ownerId = parseInt(this.user.getUserId());

        this.user.saveCompany(this.companyData).subscribe(success => {
            if(success) {
                this.router.navigate(['home']);
            }
            else alert("There was an error while adding the company");
        });;
    }
}