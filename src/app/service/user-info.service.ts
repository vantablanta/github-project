import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserClass } from '../user-class';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  user = "vantablanta"
  userUrl = `https://api.github.com/users/${this.user}`
  repoUrl = `https://api.github.com/users/${this.user}/repos?per_page=40`
  // "https://api.github.com/users/vantablanta/repos?per_page=100"


  constructor(private http: HttpClient) { }

  getUser():Observable<UserClass>{
    return this.http.get<UserClass>(this.userUrl)
  }
  getUserRepos(){
    return this.http.get(this.repoUrl,
      {
        headers: new HttpHeaders({
          Authorization: environment.apiKey
        })
      }
    )
  }
}

// getUsers() {

// }

// getRepos() {

// }
// // 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