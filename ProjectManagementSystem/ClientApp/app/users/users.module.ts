import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppModuleShared } from '../app.shared.module';
import { RegisterUser } from './registration/registration.users';
import { FormsModule } from '@angular/forms';
import { UserService } from '../components/sharedServices/user.service';
import { FormComponent } from '../components/forms/form/form.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from '../components/sharedServices/auth/auth.service';
import { AuthGuardService } from '../components/sharedServices/auth/auth-guard.service';

@NgModule({

  imports: [
    CommonModule,
    FormsModule,
  ],

  declarations: [
    RegisterUser,
    FormComponent,
    LoginComponent
  ],

  providers: [ //for dependency injection
    UserService,
    AuthService,
    AuthGuardService,
  ]

})
export class UsersModule {}