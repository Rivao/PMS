import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { HomeProjects } from './projects/home/home.projects';
import { RegisterUser } from './users/registration/registration.users';


const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'registration', component: RegisterUser },
    { path: 'home', component: HomeComponent },
    { path: 'projects', component: HomeProjects },
    { path: '**', redirectTo: 'home' },
];
@NgModule({
    
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {

}