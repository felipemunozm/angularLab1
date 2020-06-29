import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { User } from '../../models/user'
import { UserService } from '../../services/user.service'

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {

  public title: String
  public user: User
  public status

  constructor(
    private _activateRoute: ActivatedRoute,
    private _router: Router,
    private userService: UserService
  ) {
    this.title = "Registro"
    this.user = new User('', '', '', '', '', 'ROLE_USER', '')
  }

  ngOnInit(): void {
  }

  onSubmit(registerForm) {
    this.userService.register(this.user).subscribe(
      response => {
        let resp: any = response
        console.log("RESP=" + JSON.stringify(resp))
        if (resp.user._id) {
          this.user = resp.user
          this.status = 'true'
          this.user = new User('', '', '', '', '', 'ROLE_USER', '')
          registerForm.reset()
        } else {

          this.status = 'false'
        }

      },
      error => {
        console.log("ERROR")
        console.log(<any>error)
        this.status = 'false'
      }
    )
  }
}
