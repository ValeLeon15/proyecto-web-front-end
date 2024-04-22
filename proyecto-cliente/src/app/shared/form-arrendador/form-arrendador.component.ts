import { Component, Input, OnInit } from '@angular/core';
import { Arrendador } from '../../model/arrendador';
import { ArrendadorService } from '../../services/arrendador.service';

@Component({
  selector: 'app-form-arrendador',
  templateUrl: './form-arrendador.component.html',
  styleUrl: './form-arrendador.component.css'
})
export class FormArrendadorComponent implements OnInit{
  @Input() esCrear: boolean | undefined;
  arrendadorCrearOActualizar: Arrendador = new Arrendador(0, '', '', '', 0, '');
  
  constructor(private arrendadorService: ArrendadorService) { 

  }
  ngOnInit(): void {
    if(!this.esCrear){
      this 
    }
  }
  crearArrendador() {
    console.log('crear Arrendador', this.arrendadorCrearOActualizar);
    this.arrendadorService.crearArrendador(this.arrendadorCrearOActualizar).subscribe(
      arrendador => {
        console.log('Arrendador creado', arrendador);
        this.arrendadorCrearOActualizar = new Arrendador(0, '', '', '', 0, '');
      }
    );
    }

    actualizarArrendador() {
      console.log('Actualizar Arrendador', this.arrendadorCrearOActualizar);
      this.arrendadorService.actualizarArrendador(this.arrendadorCrearOActualizar).subscribe(
        arrendador => {
          console.log('Arrendador actualizado', arrendador);
          this.arrendadorCrearOActualizar = new Arrendador(0, '', '', '', 0, '');
        }
      );
    }

}
