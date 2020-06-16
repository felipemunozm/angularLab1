import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  title:string = "Página no encontrada"
  constructor() { }

  ngOnInit() {
    console.log("Error iniciado")
  }

}
