import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ArrendadorService } from '../../services/arrendador.service';
import { Router } from '@angular/router';
import { Arrendador } from '../../model/arrendador';

@Component({
  selector: 'app-arrendador-view',
  templateUrl: './arrendador-view.component.html',
  styleUrl: './arrendador-view.component.css'
})
export class ArrendadorViewComponent implements OnChanges {
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
    console.log(this.arrendador)
  }
  
  ngOnInit(): void {
  }

  borrarArrendador(id: number) {
    this.arrendadorService.borrarArrendador(id).subscribe();
    this.router.navigate(['/arrendadores/list']);    }
}
