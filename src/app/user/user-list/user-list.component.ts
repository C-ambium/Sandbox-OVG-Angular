import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { User } from '../user';
import { UserApiService } from '../user-api.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'username', 'email', 'birthdate', 'age', 'registeredAt', 'enabled' ];
  dataSource: MatTableDataSource<User>;

  @ViewChild(MatPaginator, { read: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { read: true }) sort: MatSort;

  constructor(private api: UserApiService) {

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.users);
  }

  ngOnInit() {
    this.api.getAll()
      .subscribe(data => this.users = data);

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  @Input() id: number;
  @Input() username: string;
  @Input() email: string;
  @Input() birthdate: Date;
  public age = this.calculateAge();
  @Input() registeredAt: Date;
  @Input() enabled: boolean;


  private users: User[] = null;


  public calculateAge(): number {
    const dob = new Date(this.birthdate)
    let timeDiff = Math.abs(Date.now() - dob.getTime());
    let age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
    return age;
  }

  // get total() {
  //   return (this.users || []).length;
  // }

  // applyFilter(filterValue: string) {
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }
}

