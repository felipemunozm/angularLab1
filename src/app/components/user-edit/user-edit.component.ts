import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user'
import { UserService } from '../../services/user.service'
import { UploadService } from '../../services/upload.service'
import { FormBuilder, FormGroup } from '@angular/forms'
@Component({
  selector: 'user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
  providers: [FormBuilder]
})
export class UserEditComponent implements OnInit {

  private title: string
  private user: User
  public identity
  public token
  public status
  public formGroup: FormGroup
  constructor(
    private userService: UserService,
    private uploadService: UploadService,
    private formBuilder: FormBuilder
  ) {
    this.title = "Actualizar mis datos"
    this.identity = this.userService.getIdentity()
    this.token = this.userService.getToken()
    this.user = this.identity
  }

  ngOnInit(): void {
    console.log("instanciando formGroup")
    this.formGroup = this.formBuilder.group({
      image: ['']
    })
  }

  onSubmit() {
    this.userService.updateUser(this.user).subscribe(
      response => {
        let resp: any = response
        if (!resp.user) {
          this.status = 'false'
        } else {
          let updatedUser = resp.user
          localStorage.setItem('identity', JSON.stringify(updatedUser))
          this.uploadService.makeFileRequest(this.formGroup.get('image').value, this.user, this.userService.getToken()).subscribe(
            response => {
              console.log("Retorno del servicio de subir imagen user")
              let resp: any = response

              if (!resp.user || !resp.user._id) {
                console.log("Error subiendo file user")
              } else {
                this.user.image = resp.user.image
                localStorage.setItem('identity', JSON.stringify(this.user))
              }
            },
            error => {
              console.log("Error invocando FIle UPload User")
            }
          )
        }
      },
      error => {
        let errorMessage = <any>error
        if (errorMessage != null)
          this.status = 'false'
      }
    )
  }
  handleFileInput(event) {
    console.log("Evento Files: " + JSON.stringify(event.target.files))
    if (event.target.files.length > 0) {
      const file = event.target.files[0]
      this.formGroup.get('image').setValue(file)
      console.log("Se ingreso archivo: " + JSON.stringify(file))
    } else {
      console.log("No se encontro archivo para subir")
    }
  }
}
