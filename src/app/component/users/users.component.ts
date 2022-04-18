import { Component, OnInit } from '@angular/core';

import { UsersService } from 'src/app/service/users.service';
import { UserClass } from 'src/app/user-class';

import { faSearch, faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  faSearch = faSearch
  faUsers = faUsers

  users! : UserClass

  userName!: string
  
  

  constructor(private usersService: UsersService) { }

  findUser(){
    this.usersService.filterUser(this.userName).subscribe(
      (data: any) => {
        this.users = data
      }
    )
  }

  ngOnInit(): void {
  //   this.usersService.getUsers().subscribe(
  //     (data:any) => {
  //      this.users = data
  //      console.log(this.users)
  //     }
      
  //   )
 }

}
