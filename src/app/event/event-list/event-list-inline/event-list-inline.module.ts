import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatPaginatorModule } from '@angular/material';
import { EventListInlineComponent } from './event-list-inline.component';
import { MaterialModule } from 'src/app/shared/material/material.module';

@NgModule({
  declarations: [EventListInlineComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MaterialModule
  ],
  exports: [EventListInlineComponent]
})
export class EventListInlineModule { }
