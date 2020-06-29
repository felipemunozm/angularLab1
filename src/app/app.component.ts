import { Component, OnInit, DoCheck } from '@angular/core';
import { Logger } from 'log4js';
import { UserService } from './services/user.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit, DoCheck {
  public title: string
  public identity
  constructor(
    private userService: UserService,
    private _router: Router
  ) {
    this.title = 'NGZOO'
  }

  ngOnInit() {

  }
  ngDoCheck() {
    this.identity = this.userService.getIdentity()
  }
  logout() {
    localStorage.clear()
    this.identity = null
    this._router.navigate(['/'])
  }
}
