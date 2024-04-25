import { Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import { Arrendatario } from '../../model/arrendatario';
import { ArrendatarioService } from '../../services/arrendatario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-arrendatario-view',
  templateUrl: './arrendatario-view.component.html',
  styleUrl: './arrendatario-view.component.css'
})
export class ArrendatarioViewComponent implements OnChanges{
  arrendatario!: Arrendatario;
  constructor(
    private arrendatarioService: ArrendatarioService,
    private router: Router
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    let userId = 0;
    for (let i in changes){
      if(i === 'id'){
        userId = changes[i].currentValue;
        if(userId!=0){
          console.log("entra")
          this.arrendatarioService.obtenerArrendatarioPorId(userId).subscribe((data: Arrendatario) => {
            this.arrendatario = data;
            console.log("el arrendatario es", this.arrendatario)
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
    console.log(this.arrendatario)
  }
  
  ngOnInit(): void {
  }

  borrarArrendatario(id: number) {
    this.arrendatarioService.borrarArrendatario(id).subscribe(
      () => {
        console.log('Arrendatario borrado exitosamente');
        this.router.navigate(['/arrendatario/list']);
      },
      error => {
        console.error('Error al borrar el arrendatario:', error);        
      }
    );
  }
  
}
