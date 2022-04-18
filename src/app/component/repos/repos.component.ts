import { Component, OnInit, Input,} from '@angular/core';
import { faSearch, faUsers } from '@fortawesome/free-solid-svg-icons';
import { UsersService } from 'src/app/service/users.service';


@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  @Input() name!: string 

  faSearch = faSearch
  faUsers = faUsers

  userRepos:any =[]

  constructor(private usersService: UsersService) { }


  findUserRepos(){
    this.usersService.filterUserRepo(this.name).subscribe(
      (data: any) => {
        this.userRepos = data
        console.log(this.userRepos)
      }
    )

  }

  ngOnInit(): void {


  }

}
