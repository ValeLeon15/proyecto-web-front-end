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

  @Input()
  set id(id: number) {
    console.log("id", id);
    this.propiedadId = id;
  }
  ngOnInit(): void {
  
  }
}
