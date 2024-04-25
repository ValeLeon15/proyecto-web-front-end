import { Component, Input, SimpleChanges } from '@angular/core';
import { Arrendador } from '../../model/arrendador';
import { ArrendadorService } from '../../services/arrendador.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-arrendador-edit',
  templateUrl: './arrendador-edit.component.html',
  styleUrl: './arrendador-edit.component.css'
})
export class ArrendadorEditComponent {
  esCrear: boolean = false;
  arrendador!: Arrendador;
  constructor(
    private arrendadorService: ArrendadorService,
    private router: Router
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    let userId = 0;
    for (let i in changes){
      if(i === 'id'){
        userId = changes[i].currentValue;
        if(userId!=0){
          console.log("entra")
          this.arrendadorService.obtenerArrendadorPorId(userId).subscribe((data: Arrendador) => {
            this.arrendador = data;
            console.log("el arrendador es", this.arrendador)
          },
          error => {
            console.error('Error al cargar el arrendador:', error);
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
