import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppModuleShared } from '../app.shared.module';
import { RegisterUser } from './registration/registration.users';
import { FormsModule } from '@angular/forms';
import { UserService } from '../components/sharedServices/user.service';
import { FormComponent } from '../components/forms/form/form.component';

@NgModule({

  imports: [
    CommonModule,
    FormsModule,
  ],

  declarations: [
    RegisterUser,
    FormComponent
  ],

  providers: [ //for dependency injection
    UserService
  ]

})
export class UsersModule {}