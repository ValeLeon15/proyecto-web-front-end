import { Component } from '@angular/core';
import { ArrendadorService } from '../../services/arrendador.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-arrendador-view',
  templateUrl: './arrendador-view.component.html',
  styleUrl: './arrendador-view.component.css'
})
export class ArrendadorViewComponent {
 arrendador :any;

  constructor(
    private arrendadorService: ArrendadorService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.arrendadorService
      .listarArrendadores()
      .subscribe((arrendadores) => (this.arrendador = arrendadores));
    console.log(this.arrendador);
  }

  borrarArrendador(id: number) {
    this.arrendadorService.borrarArrendador(id).subscribe();
    this.router.navigate(['/arrendadores/list']);    }
}
