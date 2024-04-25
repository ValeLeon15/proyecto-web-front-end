import { Component, Input, OnInit } from '@angular/core';
import { solicitudArrendamiento } from '../../model/solicitudArrendamiento';
import { SolicitudArrendamientoService } from '../../services/solicitud-arrendamiento.service';
import { getLocaleDateFormat } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-solicitud',
  templateUrl: './form-solicitud.component.html',
  styleUrl: './form-solicitud.component.css'
})
export class FormSolicitudComponent implements OnInit{
  solicitud: solicitudArrendamiento = new solicitudArrendamiento(0, 0, 0, new Date(), new Date(), 0, '');
  @Input() propiedadId!: number;

  mensajeExito: string = '';
  mensajeError: string = '';

  constructor(private solicitudService: SolicitudArrendamientoService, private router: Router) { }
  
  ngOnInit(): void {
    if (this.propiedadId !== undefined && this.solicitud.id === 0) {
      this.solicitud.idPropiedad = this.propiedadId;
    }
  }


  crearSolicitud() {
    console.log('Crear Solicitud', this.solicitud);
    this.solicitudService.crearSolicitud(this.solicitud,this.solicitud.idPropiedad,this.solicitud.idUsuarioArrendatario).subscribe(
      solicitud => {
        console.log('Solicitud creada', solicitud);
        this.solicitud = new solicitudArrendamiento(0, 0, 0, new Date(), new Date(), 0, '');
        this.mensajeExito = 'Solicitud creada correctamente.';
        this.router.navigate(['/propiedad/list']);
      },
      error => {
        this.mensajeError = 'Error al crear la solicitud.';
        console.error('Error al crear la solicitud:', error);
      }
    );
  }

  actualizarSolicitud() {
    console.log("Solicitud a actualizar", this.solicitud)
    this.solicitudService.actualizarSolicitud(this.solicitud).subscribe(
      response => {
        this.mensajeExito = 'Solicitud actualizada correctamente.';
        this.router.navigate(['/propiedad/list']);
      },
      error => {
        this.mensajeError = 'Error al actualizar la solicitud.';
        console.error('Error al actualizar la solicitud:', error);
      }
    );
  }
}
