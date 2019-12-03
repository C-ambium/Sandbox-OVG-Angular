import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormModule } from './user-form/user-form.module';
import { UserListModule } from './user-list/user-list.module';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [
    UserListComponent
  ],
  imports: [
    CommonModule,
    UserFormModule,
    UserListModule
  ],
  exports: [
    UserListComponent
  ]
})
  
export class UserModule { }
