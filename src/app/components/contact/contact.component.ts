import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
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
