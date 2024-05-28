import { solicitudArrendamiento } from './../../model/solicitudArrendamiento';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { SolicitudArrendamientoService } from '../../services/solicitud-arrendamiento.service';
import { PropiedadService } from '../../services/propiedad.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-solicitud-list',
  templateUrl: './solicitud-list.component.html',
  styleUrls: ['./solicitud-list.component.css']
})
export class SolicitudListComponent implements OnInit, OnDestroy {

  solicitudes: solicitudArrendamiento[] = [];
  userId = 0;
  userRole = '';

  userIdSubscription: Subscription | undefined;
  userRoleSubscription: Subscription | undefined;

  constructor(
    private solicitudService: SolicitudArrendamientoService,
    private propiedadService: PropiedadService,
    private router: Router,
    private userService: AuthService
  ){}

  ngOnInit(): void {
    this.userService.loadUserFromSessionStorage();
    this.userIdSubscription = this.userService.userId$.subscribe(id => this.userId = id);
    this.userRoleSubscription = this.userService.userRole$.subscribe(role => this.userRole = role);

    
    if (this.userId !== 0) {
      this.loadSolicitudes();
    }
  }

  ngOnDestroy(): void {
    if (this.userIdSubscription) {
      this.userIdSubscription.unsubscribe();
    }
    if (this.userRoleSubscription) {
      this.userRoleSubscription.unsubscribe();
    }
  }

  private loadSolicitudes(): void {
    if (this.userRole === 'ARRENDATARIO') {
      this.solicitudService.listarSolicitudesPorArrendatario(this.userId).subscribe(
        solicitudes => {
          this.solicitudes = solicitudes;
        }
      );
    } else if (this.userRole === 'ARRENDADOR') {
      this.propiedadService.listarPropiedadesPorArrendador(this.userId).subscribe(
        propiedades => {
          const solicitudesArray: solicitudArrendamiento[] = [];
          propiedades.forEach(propiedad => {
            this.solicitudService.listarSolicitudesPorPropiedad(propiedad.id).subscribe(
              solicitudes => {
                solicitudesArray.push(...solicitudes);
                this.solicitudes = solicitudesArray;
              }
            );
          });
        }
      );
    }
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
