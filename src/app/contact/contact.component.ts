import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  title: string = "Contacto"
  constructor() { }

  ngOnInit() {
    console.log("contacto cargados")
  }

}
