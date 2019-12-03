import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-list-card',
  templateUrl: './event-list-card.component.html',
  styleUrls: ['./event-list-card.component.scss']
})
export class EventListCardComponent implements OnInit {
  // @Input() event: Event;
  @Input() label: string;
  @Input() description: string;
  @Input() author: string;

  constructor() {}

  ngOnInit() {}

}
