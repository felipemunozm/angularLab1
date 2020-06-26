import {Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit, DoCheck, OnDestroy} from '@angular/core'
@Component({

    selector: 'parques',
    templateUrl: './parques.component.html',
    styleUrls: ['./parques.component.css']
})
export class ParquesComponent implements OnChanges, OnInit, DoCheck, OnDestroy {
    public titulo: string
    @Input() nombre: string
    @Input('metros_cuadrados') metros: number
    public vegetacion: string
    public abierto: boolean

    @Output() pasameLosDatos = new EventEmitter()

    constructor(){
        this.nombre = "Parque supernatural"
        this.metros  = 450
        this.vegetacion = "Alta"
        this.abierto = true
    }

    ngOnInit() {
        console.log('Metodo onInit Lanzado')
    }

    ngOnChanges(changes: SimpleChanges) {
        //console.log(changes)ç
        console.log("Cambios en las propiedades del objeto Parque")
    }

    ngDoCheck() {
        console.log("El doCHeck se ha ejecutado")
    }

    ngOnDestroy() {
        console.log("Destroy desde parque, se va a eliminar el componente")
    }

    emitirEvento() {
        this.pasameLosDatos.emit({
            'nombre': this.nombre,
            'metros': this.metros, 
            'vegetacion': this.vegetacion,
            'abierto': this.abierto
        })
    }
}
