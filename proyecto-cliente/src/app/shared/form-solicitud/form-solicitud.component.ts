import { Component, Input, OnInit } from '@angular/core';
import { solicitudArrendamiento } from '../../model/solicitudArrendamiento';
import { SolicitudArrendamientoService } from '../../services/solicitud-arrendamiento.service';
import { getLocaleDateFormat } from '@angular/common';

@Component({
  selector: 'app-form-solicitud',
  templateUrl: './form-solicitud.component.html',
  styleUrl: './form-solicitud.component.css'
})
export class FormSolicitudComponent implements OnInit{

  date: Date = new Date(500000000000);  

  @Input() esCrear: boolean | undefined;
  solicitudCrearOActualizar: solicitudArrendamiento = new solicitudArrendamiento(0, 0, 0, this.date, this.date, 0, "")

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
