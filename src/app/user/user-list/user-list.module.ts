import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatFormFieldModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { UserListComponent } from './user-list.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    UserListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule
  ],
  exports: [
    UserListComponent
  ]
})
export class UserListModule { }
