import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { CardsCursosComponent } from './components/cards-cursos/cards-cursos.component';
import { FormComponent } from './components/form/form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { TablaCursosComponent } from './components/tabla-cursos/tabla-cursos.component';
import { BooleanATextoPipe } from './pipes/boolean-a-texto.pipe';
import { BooleanEstiloDirective } from './directives/boolean-estilo.directive';
import { FiltroCursosPipe } from './pipes/filtro-cursos.pipe';
import { TablaAlumnosComponent } from './components/tabla-alumnos/tabla-alumnos.component';
import { FormAlumnoComponent } from './components/form-alumno/form-alumno.component';
import { TituloEstiloDirective } from './directives/titulo-estilo.directive';
import { config, token } from './config';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CardsCursosComponent,
    FormComponent,
    TablaCursosComponent,
    BooleanATextoPipe,
    BooleanEstiloDirective,
    FiltroCursosPipe,
    TablaAlumnosComponent,
    FormAlumnoComponent,
    TituloEstiloDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [
    {provide: token, useValue: config}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
