import { Component, OnInit, Input,Output} from '@angular/core';
import { faSearch, faUsers, faTimes } from '@fortawesome/free-solid-svg-icons';
import { UsersService } from 'src/app/service/users.service';
import { RepoClass } from 'src/app/repo-class';


@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  @Input() name!: string 
  

  faSearch = faSearch
  faUsers = faUsers
  faTimes = faTimes

  userRepos:RepoClass[] =[]

  clicked: boolean = false 

  constructor(private usersService: UsersService) { }


  findUserRepos(){
    this.usersService.filterUserRepo(this.name).subscribe(
      (data: any) => {
        this.userRepos = data
      }
    )
      this.clicked = !this.clicked
  }

  ngOnInit(): void {


  }

}
