import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserClass } from '../user-class';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  user = "vantablanta"
  userUrl = "https://api.github.com/users"
  repoUrl = "https://api.github.com/users/vantablanta/repos"
  apiKey = "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"


  constructor(private http: HttpClient) { }

  getUser():Observable<UserClass>{
    return this.http.get<UserClass>(`${this.userUrl}/${this.user}`)
  }
  getUserRepos(){
    return this.http.get(this.repoUrl)
  }
}

// getUsers() {

// }

// getRepos() {

// }
// // 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