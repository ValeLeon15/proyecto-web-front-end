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

  mensajeExito: string = '';
  mensajeError: string = '';

  constructor(private arrendadorService: ArrendadorService) { }
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
    
  cargarArrendador(id: number) {
    this.arrendadorService.obtenerArrendadorPorId(id).subscribe(
      (data: Arrendador) => {
        this.arrendadorCrearOActualizar = data;
      },
      error => {
        console.error('Error al cargar el arrendador:', error);
      }
    );
  }

    updateArrendador() {
      this.arrendadorService.actualizarArrendador(this.arrendadorCrearOActualizar).subscribe(
        response => {
          this.mensajeExito = 'Arrendador actualizado correctamente.';
        },
        error => {
          this.mensajeError = 'Error al actualizar el arrendador.';
          console.error('Error al actualizar el arrendador:', error);
        }
      );
    }

}
