import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  public isLogged = true;

  public exit(){
    this.isLogged = false;
  }

  constructor() { }

}
