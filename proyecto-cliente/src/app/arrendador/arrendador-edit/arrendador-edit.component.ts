import { Component } from '@angular/core';
import { Arrendador } from '../../model/arrendador';

@Component({
  selector: 'app-arrendador-edit',
  templateUrl: './arrendador-edit.component.html',
  styleUrl: './arrendador-edit.component.css'
})
export class ArrendadorEditComponent {
  arrendadorCrear: Arrendador = new Arrendador(0, '', '', '', 0, '');
  esCrear: boolean = false;

}
