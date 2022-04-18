import { Component, OnInit } from '@angular/core';
import { UserInfoService } from 'src/app/service/user-info.service';
import { UserClass } from 'src/app/user-class';
import { faUsers, faHeart, faFileCode, faEye, faSearch } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  faUsers = faUsers
  faHeart = faHeart
  faFileCode = faFileCode
  faEye = faEye
  faSearch = faSearch

  userInfo:UserClass = new UserClass("",0,0,0,"","")
  
  userRepos:any =[]

  userName!: string

  constructor(private userInfoService: UserInfoService) { }



  // findUser(){
  //   this.userInfoService.filterUser(this.userName).subscribe(
  //     (data: any) => {
  //       this.userInfo = data
  //     }
  //   )
  // }

  // findRepo(){
  //   this.userInfoService.filterUserRepo(this.userName).subscribe(
  //     (data: any) => {
        
  //     }
  //   )
  // }


  ngOnInit(): void {
    this.userInfoService.getUser().subscribe(
      (response: UserClass)=>{
        this.userInfo = response
      })
    
      this.userInfoService.getUserRepos().subscribe(
        (response: any)=>{
          this.userRepos = response
      })
    
    
  }

}
