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
  constructor(
    private httpClient: HttpClient
  ) {
    this.url = GLOBAL.url
  }

  register(newUser): Observable<User> {
    let newUserString = JSON.stringify(newUser)
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' })

    return this.httpClient.post<User>(this.url + 'register', newUser, { headers: headers })
  }
}
