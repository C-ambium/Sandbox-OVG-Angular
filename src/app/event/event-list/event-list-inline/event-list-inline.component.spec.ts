import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EventListInlineComponent } from './event-list-inline.component';
import { MatCardModule } from '@angular/material';

describe('EventListInlineComponent', () => {
  let component: EventListInlineComponent;
  let fixture: ComponentFixture<EventListInlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EventListInlineComponent
      ],
      imports: [
        MatCardModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventListInlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
