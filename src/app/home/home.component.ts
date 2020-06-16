import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title: String = "Home"
  constructor() { }

  ngOnInit() {
    console.log("home.component cargado")
  }

}
