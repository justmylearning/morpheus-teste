import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users = [];
  usersImmutable = [];

  filterInputValue = '';

  constructor(private userService: UserService) {
    this.getAll();
  }

  ngOnInit() {
  }

  getAll(){
    this.userService.getAll().subscribe((data: any) => {
      this.users = data.users;
      this.usersImmutable = data.users;
    }, this.handleHttpErrors);
  }

  handleHttpErrors(){
    alert('Ocorreu um erro!');
  }

  filter(){
    let usersFiltered = [];
    this.usersImmutable.map((user) => {
      if(user.name.toLowerCase().includes(this.filterInputValue.toLowerCase())){
        usersFiltered.push(user);
      }
    });

    this.users = usersFiltered;
  }

}
