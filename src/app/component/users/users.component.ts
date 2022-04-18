import { Component, OnInit } from '@angular/core';

import { UserInfoService } from 'src/app/service/user-info.service';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {



constructor(private userInfo: UserInfoService) { }



  ngOnInit(): void {

  }

}
