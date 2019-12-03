import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';
import { UserApiService } from '../user-api.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor(private api: UserApiService) { }

  @Input() username: string;
  @Input() email: string;
  @Input() birthdate: Date;
  @Input() registeredAt: Date;
  
  private users: User[] = null;

  ngOnInit() {
    this.api.getAll()
    .subscribe(data => this.users = data);
  }
}
