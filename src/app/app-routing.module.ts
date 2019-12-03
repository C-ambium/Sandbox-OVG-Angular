import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventListComponent } from './event/event-list/event-list.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { EventFormComponent } from './event/event-form/event-form.component';
import { UserFormRegisterComponent } from './user/user-form-register/user-form-register.component';

const routes: Routes = [
  { path: 'event', component: EventListComponent },
  { path: 'event/new', component: EventFormComponent },
  { path: 'user', component: UserListComponent },
  { path: 'register', component: UserFormRegisterComponent },
  { path: '',     redirectTo: 'event', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }