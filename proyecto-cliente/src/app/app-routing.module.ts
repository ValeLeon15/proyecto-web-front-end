import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importa el componente LoginComponent si no está importado
import { LoginComponent } from './login/login.component'; // Asegúrate de importar correctamente el componente de inicio de sesión
import { RegistroComponent } from './registro/registro.component'; // Asegúrate de importar correctamente el componente de registro


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
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'arrendador/list', component: ArrendadorListComponent, canActivate: [AuthGuard] },
  { path: 'arrendador/create', component: ArrendadorCreateComponent , canActivate: [AuthGuard]},
  { path: 'arrendador/edit/:id', component: ArrendadorEditComponent, canActivate: [AuthGuard]},
  { path: 'arrendador/view/:id', component: ArrendadorViewComponent, canActivate: [AuthGuard]},

  { path: 'arrendatario/list', component: ArrentarioListComponent, canActivate: [AuthGuard] },
  { path: 'arrendatario/create', component: ArrendatarioCreateComponent, canActivate: [AuthGuard]},
  { path: 'arrendatario/view/:id', component: ArrendatarioViewComponent, canActivate: [AuthGuard]},
  { path: 'arrendatario/edit/:id', component: ArrendatarioEditComponent, canActivate: [AuthGuard]},

  { path: 'propiedades/arrendador/:id', component: PropiedadListComponent, canActivate: [AuthGuard]},
  { path: 'propiedad/edit/:id', component: PropiedadEditComponent, canActivate: [AuthGuard]},
  { path: 'propiedad/view/:id', component: PropiedadViewComponent, canActivate: [AuthGuard]},
  { path: 'propiedad/list', component: PropiedadListComponent, canActivate: [AuthGuard]},
  { path: 'propiedad/create', component: PropiedadCreateComponent, canActivate: [AuthGuard]},

  { path: 'solicitudarrendamiento/list', component: SolicitudListComponent, canActivate: [AuthGuard]},
  { path: 'solicitudarrendamiento/create/:id', component: SolicitudCreateComponent, canActivate: [AuthGuard]},
  { path: 'solicitudarrendamiento/arrendatario/:id', component: SolicitudListComponent, canActivate: [AuthGuard]},  

  { path: 'login', component: LoginComponent }, // Agrega esta línea para la ruta de inicio de sesión
  { path: 'registro', component: RegistroComponent }, // Ruta al componente de registro

  { path: '', pathMatch: 'full', redirectTo: 'login' }, // Redirige a la ruta de inicio de sesión cuando la URL está vacía
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      bindToComponentInputs: true,
      onSameUrlNavigation: 'reload'
    })], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
