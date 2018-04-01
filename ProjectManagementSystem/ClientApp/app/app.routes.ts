import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { HomeProjects } from './projects/home/home.projects';
import { RegisterUser } from './users/registration/registration.users';
import { LoginComponent } from './users/login/login.component';
import { AuthGuardService } from './components/sharedServices/auth/auth-guard.service';


const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full', canActivate: [AuthGuardService] },
    { path: 'registration', component: RegisterUser, },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuardService] },
    { path: 'projects', component: HomeProjects, canActivate: [AuthGuardService] },
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: 'home', canActivate: [AuthGuardService] },
];
@NgModule({
    
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {

}