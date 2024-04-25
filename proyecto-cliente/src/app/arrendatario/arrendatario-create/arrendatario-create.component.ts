import { Component } from '@angular/core';
import { Arrendatario } from '../../model/arrendatario'; // Asumiendo que existe un modelo para arrendatarios

@Component({
  selector: 'app-arrendatario-create',
  templateUrl: './arrendatario-create.component.html',
  styleUrls: ['./arrendatario-create.component.css']
})
export class ArrendatarioCreateComponent {
  arrendatarioCrear: Arrendatario = new Arrendatario(0, '', '', '', 0, ''); // Cambiar a Arrendatario
  esCrear: boolean = true;
}

