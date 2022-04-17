import { Component, OnInit } from '@angular/core';
import { faSearch, faUsers } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {
  faSearch = faSearch
  faUsers = faUsers

  constructor() { }

  ngOnInit(): void {
  }

}
