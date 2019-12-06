import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';
import { EventListCardComponent } from './event-list-card.component';

@NgModule({
  declarations: [EventListCardComponent],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [EventListCardComponent]
})
export class EventListCardModule { }
