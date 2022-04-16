import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  userUrl = "https://api.github.com/users/vantablanta"
  repoUrl = "https://api.github.com/users/vantablanta/repos"
  apiKey = "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"

  constructor(private http: HttpClient) { }

  getUser() {
    return this.http.get(this.userUrl)
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