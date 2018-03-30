import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { DashBoardComponent } from './components/dashboard/dashboard.component';

import { AppRoutingModule } from './app.routes';
import { HomeProjects } from './projects/home/home.projects';
import { RegisterUser } from './users/registration/registration.users';
import { FormComponent } from './components/forms/form/form.component';
import { FormHeader } from './components/forms/header/formHeader.component';

import { UsersModule } from './users/users.module';


@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        DashBoardComponent,
        FormHeader,
        
        HomeProjects,

    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        AppRoutingModule,
        UsersModule
    ],
})
export class AppModuleShared {
}
