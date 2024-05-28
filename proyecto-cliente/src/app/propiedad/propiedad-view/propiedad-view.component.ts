import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { PropiedadService } from '../../services/propiedad.service';
import { Propiedad } from '../../model/propiedad';

@Component({
  selector: 'app-propiedad-view',
  templateUrl: './propiedad-view.component.html',
  styleUrls: ['./propiedad-view.component.css']
})
export class PropiedadViewComponent implements OnInit, OnDestroy, OnChanges {
  propiedad!: Propiedad;
  userId = 0;
  userRole = "";

  userIdSubscription: Subscription | undefined;
  userRoleSubscription: Subscription | undefined;

  constructor(
    private propiedadService: PropiedadService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.loadUserFromSessionStorage();
    this.userIdSubscription = this.authService.userId$.subscribe(id => this.userId = id);
    this.userRoleSubscription = this.authService.userRole$.subscribe(role => this.userRole = role);
  }

  ngOnDestroy(): void {
    if (this.userIdSubscription) {
      this.userIdSubscription.unsubscribe();
    }
    if (this.userRoleSubscription) {
      this.userRoleSubscription.unsubscribe();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    let userId = 0;
    for (let i in changes){
      if(i === 'id'){
        userId = changes[i].currentValue;
        if(userId != 0){
          console.log("entra");
          this.propiedadService.buscarPropiedad(userId).subscribe((data: Propiedad) => {
            this.propiedad = data;
            console.log("la propiedad es", this.propiedad);
          },
          error => {
            console.error('Error al cargar la propiedad:', error);
          });
        }
      }
    }
  }

  @Input()
  set id(id: number) {
    console.log(this.propiedad);
  }

  borrarPropiedad(id: number) {
    this.propiedadService.borrarPropiedad(id).subscribe(
      () => {
        console.log('Arrendador borrado exitosamente');
        this.router.navigate(['/propiedad/list']);
      },
      error => {
        console.error('Error al borrar el arrendador:', error);
      }
    );
  }
}
