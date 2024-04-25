import { Component, Input, OnInit } from '@angular/core';
import { Propiedad } from '../../model/propiedad';
import { PropiedadService } from '../../services/propiedad.service';
import { Arrendador } from '../../model/arrendador';

@Component({
  selector: 'app-form-propiedad',
  templateUrl: './form-propiedad.component.html',
  styleUrl: './form-propiedad.component.css'
})
export class FormPropiedadComponent implements OnInit{
  @Input() esCrear: boolean | undefined;

  propiedadCrearOActualizar: Propiedad = new Propiedad(0, '', '', '','','', 0,0,true,true,false,0, 0);
  constructor(private propiedadService:PropiedadService) { }

  ngOnInit(): void {
    if(!this.esCrear){
      this 
    }
  }
    crearPropiedad() {
      console.log('crear Arrendatario', this.propiedadCrearOActualizar);
      this.propiedadService.crearPropiedad(this.propiedadCrearOActualizar).subscribe(
        propiedad => {
          console.log('Arrendatario creado', propiedad);
          this.propiedadCrearOActualizar = new Propiedad(0, '', '', '','','', 0,0,true,true,false,0, 0);
        }
      );
      }
  
      actualizarPropiedad() {
        console.log('Actualizar Propiedad', this.propiedadCrearOActualizar);
        this.propiedadService.actualizarPropiedad(this.propiedadCrearOActualizar).subscribe(
          propiedad => {
            console.log('Propiedad actualizada', propiedad);
            this.propiedadCrearOActualizar = new Propiedad(0, "", "", "", "", "", 0, 0, false, false, false, 0, 0);
          }
        );
      }

}
