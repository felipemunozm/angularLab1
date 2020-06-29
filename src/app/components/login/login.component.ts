import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { User } from '../../models/user';
import { UserService } from '../../services/user.service'

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  public title: String
  public user: User
  public identity
  public token
  public status
  constructor(
    private _activateRoute: ActivatedRoute,
    private _router: Router,
    private _userService: UserService
  ) {
    this.title = "Login"
    this.user = new User('', '', '', '', '', 'ROLE_USER', '')
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this._userService.singup(this.user).subscribe(
      response => {
        let resp: any = response
        this.identity = resp.userResponse
        if (!this.identity || !this.identity._id) {
          alert("El usuario no se ha loggeado correctamente")
        } else {
          delete this.identity.password
          localStorage.setItem('identity', JSON.stringify(this.identity))
          this._userService.singup(this.user, 'true').subscribe(
            response => {
              let resp: any = response
              this.token = resp.token
              if (this.token.length <= 0) {
                alert("El token no se ha generado correctamente")
              } else {
                localStorage.setItem('token', this.token)
                this.status = 'true'
                this._router.navigate(['/home'])
              }
            },
            error => {
              let message = error.error.message
              console.log("mensaje: " + JSON.stringify(error))
              console.log(<any>error)
              this.status = 'error'

            }
          )
        }
      },
      error => {
        console.log(<any>error)
        let message = error.error.message
        console.log("mensaje: " + JSON.stringify(error))
        this.status = 'error'
      }
    )

  }
}
