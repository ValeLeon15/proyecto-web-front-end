import { Component, Input, OnInit } from '@angular/core';
import { Propiedad } from '../../model/propiedad';
import { Router } from '@angular/router';

@Component({
  selector: 'app-propiedad-create',
  templateUrl: './propiedad-create.component.html',
  styleUrl: './propiedad-create.component.css'
})
export class PropiedadCreateComponent {
  propiedadCrear: Propiedad = new Propiedad(0, '', '', '', '', '', 0, 0, true, true, false, 0, 0);
  esCrear: boolean = true;
}

