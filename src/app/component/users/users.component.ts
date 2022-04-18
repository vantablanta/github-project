import { Component, OnInit } from '@angular/core';

import { UserInfoService } from 'src/app/service/user-info.service';
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

  userName!:string
  

  constructor(private userInfo: UserInfoService) { }

  findUser(){
    this.userInfo.filterUser(this.userName).subscribe(
      (data: any) => {
        this.users = data
      }
    )
  }

  ngOnInit(): void {

  }

}
