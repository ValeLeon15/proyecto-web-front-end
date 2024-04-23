import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-subir-foto',
  templateUrl: './subir-foto.component.html',
  styleUrl: './subir-foto.component.css'
})
export class SubirFotoComponent {
  @Output() fotoSubida: EventEmitter<void> = new EventEmitter();

  // Método para simular la subida de la foto 
  subirFoto() {
    // Aquí iría tu lógica para subir la foto al servidor
    // Una vez completada la subida, el vento fotoSubida
    this.fotoSubida.emit();
  }
}
