import { Component, OnInit } from '@angular/core';
import { Arrendatario } from '../../model/arrendatario';
import { ArrendatarioService } from '../../services/arrendatario.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-arrendatario-view',
  templateUrl: './arrendatario-view.component.html',
  styleUrl: './arrendatario-view.component.css'
})
export class ArrendatarioViewComponent implements OnInit{
  arrendatario: any;

  constructor(
    private arrendatarioService: ArrendatarioService,
    private route: ActivatedRoute ) { }

  ngOnInit(): void {
    const arrendatarioId = this.route.snapshot.params['id']; // Obtén el ID del arrendatario de la URL
    this.arrendatario = this.arrendatarioService.obtenerArrendatarioPorId(arrendatarioId); // Utiliza el servicio para obtener la información del arrendatario específico
  }
}
