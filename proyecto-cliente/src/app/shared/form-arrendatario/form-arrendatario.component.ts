import { Component, Input, OnInit } from '@angular/core';
import { Arrendatario } from '../../model/arrendatario';
import { ArrendatarioService } from '../../services/arrendatario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-arrendatario',
  templateUrl: './form-arrendatario.component.html',
  styleUrls: ['./form-arrendatario.component.css']
})
export class FormArrendatarioComponent implements OnInit {
  @Input() arrendatario!: Arrendatario;  

  mensajeExito: string = '';
  mensajeError: string = '';

  constructor(private arrendatarioService: ArrendatarioService, private router: Router) { }

  ngOnInit(): void {
    if (!this.arrendatario) {
      this.arrendatario = new Arrendatario(0, '', '', '', 0, '');
    }
  }

  crearArrendatario() {
    console.log('Crear arrendatario:', this.arrendatario);
    this.arrendatarioService.crearArrendatario(this.arrendatario).subscribe(
      arrendatario => {
        console.log('Arrendatario creado:', arrendatario);
        this.arrendatario = new Arrendatario(0, '', '', '', 0, '');
      },
      error => {
        console.error('Error al crear arrendatario:', error);
      }
    );
  }
    
  actualizarArrendatario() {
    console.log('Arrendatario a actualizar:', this.arrendatario);
    this.arrendatarioService.actualizarArrendatario(this.arrendatario).subscribe(
      response => {
        this.mensajeExito = 'Arrendatario actualizado correctamente.';
        this.router.navigate(['/arrendatario/list']);
      },
      error => {
        this.mensajeError = 'Error al actualizar el arrendatario.';
        console.error('Error al actualizar el arrendatario:', error);
      }
    );
  }
}

