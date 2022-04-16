import { Component, OnInit } from '@angular/core';

import { faSearch, faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  faSearch = faSearch
  faUsers = faUsers

  constructor() { }

  ngOnInit(): void {
  }

}
