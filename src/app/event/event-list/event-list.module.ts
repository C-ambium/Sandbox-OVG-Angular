import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatButtonModule, MatButtonToggleModule, MatIconModule } from '@angular/material';
import { EventListCardComponent } from './event-list-card/event-list-card.component';
import { EventListToggleComponent } from './event-list-toggle/event-list-toggle.component';
import { EventListInlineComponent } from './event-list-inline/event-list-inline.component';


@NgModule({
  declarations: [EventListCardComponent, EventListToggleComponent, EventListInlineComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule
  ],
  exports: [EventListCardComponent,EventListToggleComponent, EventListInlineComponent]
})
export class EventListModule { }
