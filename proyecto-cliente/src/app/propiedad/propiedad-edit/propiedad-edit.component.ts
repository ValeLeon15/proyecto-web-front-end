import { Component, Input, SimpleChanges } from '@angular/core';
import { Propiedad } from '../../model/propiedad';
import { Router } from '@angular/router';
import { PropiedadService } from '../../services/propiedad.service';

@Component({
  selector: 'app-propiedad-edit',
  templateUrl: './propiedad-edit.component.html',
  styleUrl: './propiedad-edit.component.css'
})
export class PropiedadEditComponent {
  esCrear: boolean = false;
  propiedad!: Propiedad;
  constructor(
    private propiedadService: PropiedadService,
    private router: Router
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    let userId = 0;
    for (let i in changes){
      if(i === 'id'){
        userId = changes[i].currentValue;
        if(userId!=0){
          console.log("entra")
          this.propiedadService.buscarPropiedad(userId).subscribe((data: Propiedad) => {
            this.propiedad = data;
            console.log("la propiedad es", this.propiedad)
          },
          error => {
            console.error('Error al cargar la propiedad:', error);
          }
        );
        }
      } 
  }
  }

  @Input()
  set id(id: number) {
    console.log(id)
  }
}
