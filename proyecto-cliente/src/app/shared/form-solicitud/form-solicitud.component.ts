import { Component, Input, OnInit } from '@angular/core';
import { solicitudArrendamiento } from '../../model/solicitudArrendamiento';
import { SolicitudArrendamientoService } from '../../services/solicitud-arrendamiento.service';

@Component({
  selector: 'app-form-solicitud',
  templateUrl: './form-solicitud.component.html',
  styleUrl: './form-solicitud.component.css'
})
export class FormSolicitudComponent implements OnInit{
  @Input() esCrear: boolean | undefined;
  solicitudCrearOActualizar: solicitudArrendamiento = new solicitudArrendamiento(0, 0, 0, 0, new Date(), new Date(), 0, '');

  constructor(private solicitudArrendamientoService:SolicitudArrendamientoService){}

  ngOnInit(): void {
    if(!this.esCrear){
      this 
    }
  }
  crearSolicitud() {
  }
  
  actualizarSolicitud() {
  }
}
