import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GLOBAL } from './global'
import { User } from '../models/user'
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  public url
  constructor(
    private httpClient: HttpClient
  ) {
    this.url = GLOBAL.url
  }
  makeFileRequest(fileUpload: any, user: User, token: string) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token })
    let formData: FormData = new FormData()
    formData.append('image', fileUpload, fileUpload.name)
    console.log("FormData:" + JSON.stringify(formData))
    console.log("fileUpload:" + JSON.stringify(fileUpload))
    return this.httpClient.post(this.url + 'upload-image-user/' + user._id, formData, { headers })
  }
}
