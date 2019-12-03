import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar.component';
import { MatMenuModule, MatToolbarModule, MatIconModule } from '@angular/material';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    AppRoutingModule
  ],
  exports: [
    ToolbarComponent
  ]
})
export class ToolbarModule { }
