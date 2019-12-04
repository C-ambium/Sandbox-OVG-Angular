import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EventApiService } from './event-api.service';
import { HttpClientModule } from '@angular/common/http';

describe('EventApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule, RouterTestingModule ]
  }));

  it('should be created', () => {
    const service: EventApiService = TestBed.get(EventApiService);
    expect(service).toBeTruthy();
  });
});
