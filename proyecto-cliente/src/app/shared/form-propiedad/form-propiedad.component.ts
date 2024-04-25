import { Component, Input, OnInit } from '@angular/core';
import { Propiedad } from '../../model/propiedad';
import { PropiedadService } from '../../services/propiedad.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-propiedad',
  templateUrl: './form-propiedad.component.html',
  styleUrl: './form-propiedad.component.css'
})
export class FormPropiedadComponent implements OnInit{
  @Input()
  propiedad!: Propiedad;  

  mensajeExito: string = '';
  mensajeError: string = '';

  constructor(private propiedadService: PropiedadService, private router: Router) { }
  ngOnInit(): void {
    if (!this.propiedad) {
      this.propiedad = new Propiedad(0, '', '', '', '', '', 0, 0, true, true, false, 0, 0);
    }
  }


  crearPropiedad() {
    console.log('Crear Propiedad', this.propiedad);
    this.propiedadService.crearPropiedad(this.propiedad,this.propiedad.arrendadorId).subscribe(
      propiedad => {
        console.log('Propiedad creada', propiedad);
        this.propiedad = new Propiedad(0, '', '', '', '', '', 0, 0, true, true, false, 0, 0);
        this.mensajeExito = 'Propiedad creada correctamente.';
        this.router.navigate(['/propiedad/list']);
      },
      error => {
        this.mensajeError = 'Error al crear la propiedad.';
        console.error('Error al crear la propiedad:', error);
      }
    );
  }

  actualizarPropiedad() {
    console.log("Propiedad a actualizar", this.propiedad)
    this.propiedadService.actualizarPropiedad(this.propiedad).subscribe(
      response => {
        this.mensajeExito = 'Propiedad actualizada correctamente.';
        this.router.navigate(['/propiedad/list']);
      },
      error => {
        this.mensajeError = 'Error al actualizar la propiedad.';
        console.error('Error al actualizar la propiedad:', error);
      }
    );
  }

}
