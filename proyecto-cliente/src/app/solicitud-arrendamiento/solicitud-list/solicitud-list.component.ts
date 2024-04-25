import { solicitudArrendamiento } from './../../model/solicitudArrendamiento';
import { Component, Input } from '@angular/core';
import { SolicitudArrendamientoService } from '../../services/solicitud-arrendamiento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solicitud-list',
  templateUrl: './solicitud-list.component.html',
  styleUrl: './solicitud-list.component.css'
})
export class SolicitudListComponent {

  solicitudes: solicitudArrendamiento[] = [];
  
  constructor(
    private solicitudService: SolicitudArrendamientoService,
    private router: Router
  ){}

  @Input()
  set id(id: number) {
    this.solicitudService.listarSolicitudesArrendamiento().subscribe(
      solicitudes => {
        this.solicitudes = solicitudes;
        console.log("solicitudes",this.solicitudes);
      }
    );
  }

  borrarSolicitud(id: number) {
    this.solicitudService.borrarSolicitud(id).subscribe(
      () => {
        console.log('Solicitud borrada exitosamente');
        this.router.navigate(['/arrendador/list']);
      },
      error => {
        console.error('Error al borrar el arrendador:', error);        
      }
    );
  }
}
