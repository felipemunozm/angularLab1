import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public title: String
  constructor(private _activateRoute: ActivatedRoute, private _router: Router) {

    this.title = "Login"
  }

  ngOnInit(): void {
  }

}
