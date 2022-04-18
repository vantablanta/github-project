import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserClass } from '../user-class';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  private user!: string
  apiUrl = `https://api.github.com/users`
  // repoUrl = `https://api.github.com/users/repos?per_page=40`
  // "https://api.github.com/users/vantablanta/repos?per_page=100"


  constructor(private http: HttpClient) {
    this.user = "vantablanta"
   }

  getUsers(): Observable<UserClass>{
    return this.http.get<UserClass>(`${this.apiUrl}/${this.user}`)
    {}
  }
  // getUserRepos() {
  //   return this.http.get(`${this.apiUrl}/${this.user}/repos?per_page=100`,
  //     {
  //       headers: new HttpHeaders({
  //         Authorization: environment.apiKey
  //       })
  //     }
  //   )
  // }

  filterUser(username:string){
    this.user = username
    return this.http.get<UserClass>(`${this.apiUrl}/${this.user}`) 
  }

  filterUserRepo(username:string){
    this.user = username
    return this.http.get(`${this.apiUrl}/${this.user}/repos?per_page=100`,
    {
      headers: new HttpHeaders({
        Authorization: environment.apiKey
      })
    }
  )
  }


}
