import { Component } from '@angular/core';
import { UserService } from '../sharedServices/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'nav-menu',
    templateUrl: './navmenu.component.html',
    styleUrls: ['./navmenu.component.css']
})
export class NavMenuComponent {

    constructor(private user: UserService, public router: Router){}

    logOut() {
        this.user.logOutUser();
        this.router.navigate(['/login']);
    }
}
