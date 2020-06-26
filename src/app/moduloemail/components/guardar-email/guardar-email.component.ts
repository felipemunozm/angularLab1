import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'guardar-email',
  templateUrl: './guardar-email.component.html',
  styleUrls: ['./guardar-email.component.css']
})
export class GuardarEmailComponent implements OnInit {

  title = 'Guardar email'
  emailContacto: string
  constructor() { }

  ngOnInit(): void {
    this.emailContacto = localStorage.getItem('emailContacto')
  }

  guardarEmail() {
    localStorage.setItem('emailContacto', this.emailContacto)
  }
}
