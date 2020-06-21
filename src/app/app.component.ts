import { Component, DoCheck, OnInit } from '@angular/core';
import { Logger } from 'log4js';
import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck, OnInit {
  title = 'ZOO Angular UDEMY';
  emailContacto: string;
  ngDoCheck() {
    //console.log("doCheck en ejecucion desde appRoot")
    this.emailContacto = localStorage.getItem('emailContacto')
  }
  ngOnInit() {
    console.log(localStorage.getItem('emailContacto'))
    this.emailContacto = localStorage.getItem('emailContacto')
  }
  borrarEmail() {
    localStorage.removeItem('emailContacto')
    this.emailContacto = null
  }
}
