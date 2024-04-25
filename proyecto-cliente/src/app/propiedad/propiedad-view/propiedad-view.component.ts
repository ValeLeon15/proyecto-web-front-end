import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PropiedadService } from '../../services/propiedad.service';
import { Propiedad } from '../../model/propiedad';
import { Arrendador } from '../../model/arrendador';
import { Router } from '@angular/router';

@Component({
  selector: 'app-propiedad-view',
  templateUrl: './propiedad-view.component.html',
  styleUrl: './propiedad-view.component.css'
})
export class PropiedadViewComponent implements OnChanges{
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
    console.log(this.propiedad)
  }
  
  ngOnInit(): void {
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
