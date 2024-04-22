import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './shared/form/form.component';
import { SolicitudListComponent } from './solicitud-arrendamiento/solicitud-list/solicitud-list.component';
import { PropiedadListComponent } from './propiedad/propiedad-list/propiedad-list.component';
import { PropiedadViewComponent } from './propiedad/propiedad-view/propiedad-view.component';

import { ArrendatarioEditComponent } from './arrendatario/arrendatario-edit/arrendatario-edit.component';
import { ArrendatarioViewComponent } from './arrendatario/arrendatario-view/arrendatario-view.component';
import { ArrentarioListComponent } from './arrendatario/arrendatario-list/arrendatario-list.component';
import { ArrendatarioCreateComponent } from './arrendatario/arrendatario-create/arrendatario-create.component';

import { ArrendadorListComponent } from './arrendador/arrendador-list/arrendador-list.component';
import { ArrendadorEditComponent } from './arrendador/arrendador-edit/arrendador-edit.component';
import { ArrendadorCreateComponent } from './arrendador/arrendador-create/arrendador-create.component';
import { ArrendadorViewComponent } from './arrendador/arrendador-view/arrendador-view.component';

import { BarraComponent } from './shared/barra/barra.component';
import { PropiedadEditComponent } from './propiedad/propiedad-edit/propiedad-edit.component';
import { PropiedadCreateComponent } from './propiedad/propiedad-create/propiedad-create.component';
import { FormPropiedadComponent } from './shared/form-propiedad/form-propiedad.component';
import { FormArrendadorComponent } from './shared/form-arrendador/form-arrendador.component';

@NgModule({
  declarations: [
    AppComponent,

    ArrendadorCreateComponent,
    ArrendadorEditComponent,
    ArrendadorViewComponent,
    ArrendadorListComponent,


    ArrentarioListComponent,
    ArrendatarioCreateComponent,
    ArrendatarioEditComponent,
    ArrendatarioViewComponent,


    FormComponent,
    SolicitudListComponent,
    PropiedadListComponent,
    PropiedadViewComponent,

    BarraComponent,
      PropiedadEditComponent,
      PropiedadCreateComponent,
      FormPropiedadComponent,
      FormArrendadorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
