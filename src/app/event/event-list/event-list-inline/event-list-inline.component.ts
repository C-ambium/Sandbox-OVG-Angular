import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-list-inline',
  templateUrl: './event-list-inline.component.html',
  styleUrls: ['./event-list-inline.component.scss']
})
export class EventListInlineComponent implements OnInit {

  @Input() label: string;
  @Input() description: string;
  @Input() author: string;
  constructor() { }

  ngOnInit() {
  }

}
