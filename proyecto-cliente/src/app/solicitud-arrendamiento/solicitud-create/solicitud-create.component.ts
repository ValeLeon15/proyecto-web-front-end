import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-solicitud-create',
  templateUrl: './solicitud-create.component.html',
  styleUrl: './solicitud-create.component.css'
})
export class SolicitudCreateComponent implements OnInit {
  @Input() propiedadId!: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Obtener el valor del parámetro de la ruta y asignarlo a propiedadId
    const propiedadIdParam = this.route.snapshot.paramMap.get('propiedadId');
    if (propiedadIdParam !== null) {
      this.propiedadId = +propiedadIdParam;
    } else {
      // Manejar el caso en que 'propiedadId' no esté presente en la URL
      console.error('El parámetro "propiedadId" no está presente en la URL.');
    }
  }
}
