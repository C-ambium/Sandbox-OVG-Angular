import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Event } from './event';

// For future api crud configuration
// import { environment } from '../environment/environment.prod';
// import { Event, EventFormDTO } from './event';
// const URL = ${environment.apiUrl}/event;

@Injectable({
  providedIn: 'root'
})
export class EventApiService {

  constructor(private http: HttpClient) { }
getAll() {
    return this.http.get<Event[]>('./assets/fixtureEvent.json');
  }
}
