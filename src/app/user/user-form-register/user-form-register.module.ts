import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserFormRegisterComponent } from './user-form-register.component';

@NgModule({
  declarations: [ UserFormRegisterComponent ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [ UserFormRegisterComponent ]
})
export class UserFormRegisterModule { }
