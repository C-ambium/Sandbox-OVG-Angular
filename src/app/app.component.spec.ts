import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ToolbarModule } from './shared/toolbar/toolbar.module';
import { EventListModule } from './event/event-list/event-list.module';
import { RouterTestingModule } from '@angular/router/testing';
import { AppModule } from './app.module';
import { EventModule } from './event/event.module';
import { UserModule } from './user/user.module';
import { MatCardModule, MatButtonModule, MatFormFieldModule } from '@angular/material';
import { SharedModule } from './shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
      ],
      imports: [
        AppModule,
        FormsModule,
        ReactiveFormsModule,
        ToolbarModule,
        EventModule,
        EventListModule,
        UserModule,
        RouterTestingModule,
        SharedModule,
        MatCardModule
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ovg'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('ovg');
  });

  // it('should render title in a h1 tag', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to ovg!');
  // });
});
