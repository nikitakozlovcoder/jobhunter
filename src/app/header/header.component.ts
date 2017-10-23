import {Component, OnInit} from '@angular/core';
import {UserService} from "../Servises/user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(public User: UserService) { }

  ngOnInit() {
  }

}
