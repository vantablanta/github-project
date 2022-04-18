import { Component, OnInit } from '@angular/core';
import { faSearch, faUsers } from '@fortawesome/free-solid-svg-icons';
import { UserInfoService } from 'src/app/service/user-info.service';


@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {
  faSearch = faSearch
  faUsers = faUsers

  userRepos:any =[]

  constructor(private userInfoService: UserInfoService) { }


  findUserRepos(){}

  ngOnInit(): void {


  }

}
