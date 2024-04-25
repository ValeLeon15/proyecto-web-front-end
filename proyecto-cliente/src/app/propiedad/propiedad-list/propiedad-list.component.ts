import { Component, OnInit } from '@angular/core';
import { Propiedad } from '../../model/propiedad';
import { PropiedadService } from '../../services/propiedad.service';
import { ArrendadorService } from '../../services/arrendador.service';
import { Arrendador } from '../../model/arrendador';

@Component({
  selector: 'app-propiedad-list',
  templateUrl: './propiedad-list.component.html',
  styleUrls: ['./propiedad-list.component.css']
})
export class PropiedadListComponent implements OnInit {

  propiedades: Propiedad[] = [];

  constructor(
    private propiedadService: PropiedadService,    
  ) {}

  ngOnInit(): void {
    this.propiedadService.listarPropiedades().subscribe((propiedades) => {
      this.propiedades = propiedades;
    });
  }
}
