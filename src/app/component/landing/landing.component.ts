import { Component, OnInit } from '@angular/core';
import { UserInfoService } from 'src/app/service/user-info.service';
import { UserClass } from 'src/app/user-class';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  faUsers = faUsers

  userInfo:UserClass = new UserClass("",0,0,0,"","")
  userRepos:any =[]
  color!: string
  colors: string[] = ["#f59840","#7bc8f9", "#32c48a"]

  

  constructor(private userInfoService: UserInfoService) { }

  ngOnInit(): void {
    this.userInfoService.getUser().subscribe(
      (response: UserClass)=>{
        this.userInfo = response
      })

    this.userInfoService.getUserRepos().subscribe(
      (response: any)=>{
        this.userRepos = response
    })
    for(let c = 1; c < this.colors.length; c++){
         this.color = this.colors[c]
    }
  }

}
