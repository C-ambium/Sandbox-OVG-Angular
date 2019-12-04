import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventListComponent } from './event-list.component';
import { MatCardModule, MatButtonModule, MatButtonToggleModule, MatIconModule } from '@angular/material';
import { EventListToggleComponent } from './event-list-toggle/event-list-toggle.component';
import { EventListInlineComponent } from './event-list-inline/event-list-inline.component';
import { EventListCardComponent } from './event-list-card/event-list-card.component';
import { HttpClientModule } from '@angular/common/http';

describe('EventListComponent', () => {
  let component: EventListComponent;
  let fixture: ComponentFixture<EventListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EventListComponent,
        EventListToggleComponent,
        EventListInlineComponent,
        EventListCardComponent
      ],
      imports: [
        HttpClientModule,
        MatCardModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatIconModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
