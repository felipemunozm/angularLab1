import { Component, OnInit } from '@angular/core'
import { trigger, state, transition, style, animate } from '@angular/animations'
import { fundido } from '../../animation'

@Component({

    selector: 'tienda',
    templateUrl: './tienda.component.html',
    styleUrls: ['./tienda.component.css'],
    animations: [fundido,
        trigger('marcar', [
            state('inactive', style({
                border: '5px solid #ccc'
            })),
            state('active', style({
                border: '5px solid yellow',
                background: 'red',
                borderRadius: '50px',
                transform: 'scale(1.2)'
            })),
            transition('inactive => active', animate('300ms linear')),
            transition('active => inactive', animate('300ms linear'))
        ])
    ]
})
export class TiendaComponent implements OnInit {
    public titulo;
    public nombreDelParque: string
    public miParque
    public status;
    constructor() {
        this.titulo = "Esta es la tienda"
    }
    mostrarNombre() {
        console.log(this.nombreDelParque)
    }
    verDatosParque(event) {
        console.log(event)
        this.miParque = event
    }
    cambiarEstado(status) {
        this.status = (this.status == 'inactive') ? 'active' : 'inactive'
    }
    ngOnInit() {
        $('#textoJQ').hide()
        $('#botonJQ').click(() => {
            $('#textoJQ').slideToggle()
        })
        //$('#cajaChica').dotdotdot()
        this.status = 'inactive'
    }
    keyupHandler(event) {
        console.log(event)
    }
}
