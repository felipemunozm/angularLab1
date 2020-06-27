import { Component, OnInit } from '@angular/core';
import { fundido } from '../../animation'

@Component({
  selector: 'keepers',
  templateUrl: './keeper.component.html',
  styleUrls: ['./keeper.component.css'],
  animations: [fundido]
})
export class KeeperComponent implements OnInit {

  title: string = "Cuidadores"
  constructor() { }

  ngOnInit() {
    console.log("iniciado Keepers")
  }

}
