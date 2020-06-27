import { Component, OnInit } from '@angular/core';
import { fundido } from '../../animation'
@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [fundido]
})
export class ContactComponent implements OnInit {

  title: string = "Contacto"
  emailContacto: string;
  constructor() { }

  ngOnInit() {
    console.log("contacto cargados")
  }

  guardarEmail() {
    localStorage.setItem('emailContacto', this.emailContacto)
    //console.log(localStorage.getItem('emailContacto'))
  }

}
