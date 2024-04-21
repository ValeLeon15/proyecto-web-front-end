import { Component } from '@angular/core';
import { Arrendador } from '../../model/arrendador';

@Component({
  selector: 'app-arrendador-create',
  templateUrl: './arrendador-create.component.html',
  styleUrl: './arrendador-create.component.css'
})
export class ArrendadorCreateComponent {
  arrendadorCrear: Arrendador = new Arrendador(0, '', '', '', 0, '');
  esCrear: boolean = true;
  
}
