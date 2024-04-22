import { Component, Input, OnInit } from '@angular/core';
import { Propiedad } from '../../model/propiedad';

@Component({
  selector: 'app-propiedad-create',
  templateUrl: './propiedad-create.component.html',
  styleUrl: './propiedad-create.component.css'
})
export class PropiedadCreateComponent {
  propiedadCrear: Propiedad = new Propiedad(0, '', '', '','','', 0,true,true,true,0,0);
  esCrear: boolean = true;
}

