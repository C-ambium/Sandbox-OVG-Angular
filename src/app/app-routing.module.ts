import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventListComponent } from './event/event-list/event-list.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { EventFormComponent } from './event/event-form/event-form.component';
import { UserFormLoginComponent } from './user/user-form/user-form-login/user-form-login.component';
import { UserFormRegisterComponent } from './user/user-form/user-form-register/user-form-register.component';
import { LogguedGuard } from './auth/loggued.guard';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [

  { path: '',     redirectTo: 'login', pathMatch: 'full' },
  { path: 'event', component: EventListComponent },
  { path: 'user', component: UserListComponent },

  // USER routing path
  { path: 'user',
      children: [
        { path: '',       component: UserListComponent, pathMatch: 'full' },
        { path: 'register', component: UserFormRegisterComponent },
  //    { path: ':id',    component: UserDetailsComponent } // user detail
        ],
        canActivate: [ LogguedGuard ]
  },
  // EVENT routing path
  { path: 'event',
    children: [
      { path : '', component: EventListComponent, pathMatch: 'full'},
      { path: 'new', component: EventFormComponent }
  //  { path : ':id', component: EventDetailComponent } // event detail
    ],
    canActivate: [ LogguedGuard ]
  },
  { path: '**',   component: NotFoundComponent }, // not found
];
  // OLD Direct path routing
  // { path: 'event', component: EventListComponent },
  // { path: 'event/new', component: EventFormComponent },
  // { path: 'user', component: UserListComponent },
  // { path: 'register', component: UserFormRegisterComponent },
  // { path: 'login', component: UserFormLoginComponent },
  // { path: '',     redirectTo: 'event', pathMatch: 'full' }

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
