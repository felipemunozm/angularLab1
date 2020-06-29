import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GLOBAL } from './global'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { User } from '../models/user'


@Injectable({
  providedIn: 'root'
})
export class UserService {
  public url: string
  userObservable: Observable<User[]>
  public postUser: User
  public identity
  public token
  constructor(
    private httpClient: HttpClient
  ) {
    this.url = GLOBAL.url
  }

  register(newUser): Observable<User> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' })
    return this.httpClient.post<User>(this.url + 'register', newUser, { headers: headers })
  }

  singup(loginUser, getToken = null) {
    if (getToken != null)
      loginUser.getToken = getToken
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' })
    return this.httpClient.post<User>(this.url + 'login', loginUser, { headers: headers })
  }

  getIdentity() {
    let identity = JSON.parse(localStorage.getItem('identity'))
    if (identity != undefined) {
      this.identity = identity
    }
    else {
      this.identity = null
    }
    return this.identity
  }
  getToken() {
    let token = JSON.parse(localStorage.getItem('token'))
    if (token != undefined) {
      this.token = token
    }
    else {
      this.token = null
    }
    return this.token
  }
}
