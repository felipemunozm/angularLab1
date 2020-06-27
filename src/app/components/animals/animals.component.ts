import { Component, OnInit } from '@angular/core';
import { fundido } from '../../animation'

@Component({
  selector: 'animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css'],
  animations: [fundido]
})
export class AnimalsComponent implements OnInit {
  title: String = "Animales"
  constructor() { }

  ngOnInit() {
    console.log("cargado el componente Animals")
  }

}
