import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Arrendatario } from '../../model/arrendatario'; // Asumiendo que existe un modelo para arrendatarios
import { ArrendatarioService } from '../../services/arrendatario.service'; // Asumiendo que existe un servicio para arrendatarios
import { Router } from '@angular/router';

@Component({
  selector: 'app-arrendatario-edit',
  templateUrl: './arrendatario-edit.component.html',
  styleUrls: ['./arrendatario-edit.component.css']
})
export class ArrendatarioEditComponent implements OnChanges {
  esCrear: boolean = false;
  arrendatario!: Arrendatario;

  constructor(
    private arrendatarioService: ArrendatarioService,
    private router: Router
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    let userId = 0;
    for (let propName in changes) {
      if (propName === 'id') {
        userId = changes[propName].currentValue;
        if (userId !== 0) {
          console.log("entra");
          this.arrendatarioService.obtenerArrendatarioPorId(userId).subscribe(
            (data: Arrendatario) => {
              this.arrendatario = data;
              console.log("el arrendatario es", this.arrendatario);
            },
            error => {
              console.error('Error al cargar el arrendatario:', error);
            }
          );
        }
      }
    }
  }

  @Input()
  set id(id: number) {
    console.log(id);
  }
}

