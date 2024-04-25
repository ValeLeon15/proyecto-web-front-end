

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SolicitudListComponent } from './solicitud-arrendamiento/solicitud-list/solicitud-list.component';
import { SolicitudCreateComponent } from './solicitud-arrendamiento/solicitud-create/solicitud-create.component';


import { PropiedadListComponent } from './propiedad/propiedad-list/propiedad-list.component';
import { PropiedadViewComponent } from './propiedad/propiedad-view/propiedad-view.component';
import { PropiedadCreateComponent } from './propiedad/propiedad-create/propiedad-create.component';

import { ArrendadorListComponent } from './arrendador/arrendador-list/arrendador-list.component';
import { ArrendadorCreateComponent } from './arrendador/arrendador-create/arrendador-create.component';
import { ArrendadorEditComponent } from './arrendador/arrendador-edit/arrendador-edit.component';
import { ArrendadorViewComponent } from './arrendador/arrendador-view/arrendador-view.component';

import { ArrentarioListComponent } from './arrendatario/arrendatario-list/arrendatario-list.component';
import { ArrendatarioCreateComponent } from './arrendatario/arrendatario-create/arrendatario-create.component';
import { ArrendatarioEditComponent } from './arrendatario/arrendatario-edit/arrendatario-edit.component';
import { ArrendatarioViewComponent } from './arrendatario/arrendatario-view/arrendatario-view.component';
import { PropiedadEditComponent } from './propiedad/propiedad-edit/propiedad-edit.component';

const routes: Routes = [
  { path: 'arrendador/list', component: ArrendadorListComponent },
  { path: 'arrendador/create', component: ArrendadorCreateComponent },
  { path: 'arrendador/edit/:id', component: ArrendadorEditComponent},
  { path: 'arrendador/view/:id', component: ArrendadorViewComponent},

  { path: 'arrendatario/list', component: ArrentarioListComponent },
  { path: 'arrendatario/create', component: ArrendatarioCreateComponent},
  { path: 'arrendatario/view/:id', component: ArrendatarioViewComponent},
  { path: 'arrendatario/edit/:id', component: ArrendatarioEditComponent},

  { path: 'propiedades/arrendador/:id', component: PropiedadListComponent},
  { path: 'propiedad/edit/:id', component: PropiedadEditComponent},
  { path: 'propiedad/view/:id', component: PropiedadViewComponent},
  { path: 'propiedad/list', component: PropiedadListComponent},
  { path: 'propiedad/create', component: PropiedadCreateComponent},

  { path: 'solicitudarrendamiento/list', component: SolicitudListComponent},
  { path: 'solicitudarrendamiento/create/:id', component: SolicitudCreateComponent},
  { path: 'solicitudarrendamiento/arrendatario/:id', component: SolicitudListComponent},  
  { path: '', pathMatch: 'full', redirectTo: 'arrendatarios/list' }, //siempre va a redirigir a arrendatarios/list cuando no se ponga nada como path en la url
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      bindToComponentInputs: true, // Para poder usar @Input en rutas https://angular.io/guide/router
      onSameUrlNavigation: 'reload' // https://stackoverflow.com/a/52512361
    })], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
