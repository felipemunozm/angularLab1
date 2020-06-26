import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'keepers',
  templateUrl: './keeper.component.html',
  styleUrls: ['./keeper.component.css']
})
export class KeeperComponent implements OnInit {

  title: string = "Cuidadores"
  constructor() { }

  ngOnInit() {
    console.log("iniciado Keepers")
  }

}
