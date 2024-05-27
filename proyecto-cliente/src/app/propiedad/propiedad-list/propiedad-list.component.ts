import { Component, Input, OnInit } from '@angular/core';
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
  userId = 0;
  userRole = "";
  propiedades: Propiedad[] = [];

  @Input()
  set id(id: number) {
    console.log("idArrendador", id);
    if(id != 0 && id != undefined){
      this.propiedadService.listarPropiedadesPorArrendador(id).subscribe(
        propiedades => {
          this.propiedades = propiedades;
          console.log("propiedades",this.propiedades);
        }
      );
    } else{
      this.propiedadService.listarPropiedades().subscribe(
        propiedades => {
          this.propiedades = propiedades;
          console.log("propiedades",this.propiedades);
        }
      );
    }
  }

  constructor(
    private propiedadService: PropiedadService,    
  ) {}

  ngOnInit(): void {
    const ID = "user-id";
    const ROLE = "user-role"
    this.userId = +(sessionStorage.getItem(ID) || 0);
    this.userRole = sessionStorage.getItem(ROLE) || '';
    console.info("user role: " + this.userRole + ", user id: " + this.userId);
  }
}
