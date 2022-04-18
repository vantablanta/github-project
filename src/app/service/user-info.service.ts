import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserClass } from '../user-class';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  private user!: string
  apiUrl = `https://api.github.com/users`
  // repoUrl = `https://api.github.com/users/repos?per_page=40`
  // "https://api.github.com/users/vantablanta/repos?per_page=100"


  constructor(private http: HttpClient) {
    this.user = "vantablanta"
   }

  getUser(): Observable<UserClass>{
    return this.http.get<UserClass>(`${this.apiUrl}/${this.user}`,{
      headers: new HttpHeaders({
        Authorization: environment.apiKey
      })
    })
    
  }
  getUserRepos() {
    return this.http.get(`${this.apiUrl}/${this.user}/repos?per_page=40`,
      {
        headers: new HttpHeaders({
          Authorization: environment.apiKey
        })
      }
    )
  }

  // filterUser(username:string){
  //   this.user = username
  //   return this.http.get<UserClass>(`${this.apiUrl}/${this.user}`) 
  // }




}



// getRepos() {

// }
// // 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