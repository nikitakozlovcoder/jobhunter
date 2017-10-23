import { Component, OnInit } from '@angular/core';
import {UserService} from "../Servises/user.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  public formShow = false;
  constructor(public User: UserService) { }

  onClickRegister(){
  this.formShow = !this.formShow;
  }
  ngOnInit() {
  }

}
