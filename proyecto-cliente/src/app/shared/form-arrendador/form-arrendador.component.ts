import { Component, Input, OnInit } from '@angular/core';
import { Arrendador } from '../../model/arrendador';
import { ArrendadorService } from '../../services/arrendador.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-arrendador',
  templateUrl: './form-arrendador.component.html',
  styleUrl: './form-arrendador.component.css'
})
export class FormArrendadorComponent implements OnInit{
  @Input()
  arrendador!: Arrendador;
  arrendadorCrearOActualizar: Arrendador = new Arrendador(0, '', '', '', '', 0);

  mensajeExito: string = '';
  mensajeError: string = '';

  constructor(private arrendadorService: ArrendadorService, private router: Router) { }
  ngOnInit(): void {
    if(!this.arrendador){
      this.arrendador = this.arrendadorCrearOActualizar;
    }
  }


  crearArrendador() {
    console.log('crear Arrendador', this.arrendadorCrearOActualizar);
    this.arrendadorService.crearArrendador(this.arrendadorCrearOActualizar).subscribe(
      arrendador => {
        console.log('Arrendador creado', arrendador);
        this.arrendadorCrearOActualizar = new Arrendador(0, '', '', '', '', 0);
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
      console.log("arrendador a actualizar", this.arrendador)
      this.arrendadorService.actualizarArrendador(this.arrendador).subscribe(
        response => {
          this.mensajeExito = 'Arrendador actualizado correctamente.';
          this.router.navigate(['/arrendador/list']);
        },
        error => {
          this.mensajeError = 'Error al actualizar el arrendador.';
          console.error('Error al actualizar el arrendador:', error);
        }
      );
    }

}
