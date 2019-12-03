import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatFormFieldModule, MatPaginatorModule, MatFormField, MatButtonModule, MatInputModule, MatRippleModule, MatSortBase, MatSortModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { UserListComponent } from './user-list.component';

@NgModule({
  declarations: [
    UserListComponent
  ],
  imports: [
    CommonModule,
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
