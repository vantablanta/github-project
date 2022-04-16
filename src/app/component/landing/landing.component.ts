import { Component, OnInit } from '@angular/core';
import { UserInfoService } from 'src/app/service/user-info.service';
import { UserClass } from 'src/app/user-class';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  userInfo: UserClass[] = []
  userRepo = []

  constructor(private userInfoService: UserInfoService) { }

  ngOnInit(): void {
    this.userInfoService.getUser().subscribe(
      (response: any)=>{
        this.userInfo = response
      })

    this.userInfoService.getUserRepos().subscribe(
      (response: any)=>{
        this.userRepo = response
    })
  }

}
