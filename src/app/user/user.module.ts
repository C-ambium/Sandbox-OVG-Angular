import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListModule } from './user-list/user-list.module';
import { UserFormRegisterModule } from './user-form-register/user-form-register.module';

@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    UserFormRegisterModule,
    UserListModule
    ],
  exports: [
    UserListModule,
    UserFormRegisterModule
  ]
})
  
export class UserModule { }
