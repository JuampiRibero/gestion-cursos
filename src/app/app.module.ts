import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TablaCursosComponent } from './components/tabla-cursos/tabla-cursos.component';
import { BooleanATextoPipe } from './pipes/boolean-a-texto.pipe';
import { BooleanEstiloDirective } from './directives/boolean-estilo.directive';
import { FiltroCursosPipe } from './pipes/filtro-cursos.pipe';
import { TablaAlumnosComponent } from './components/tabla-alumnos/tabla-alumnos.component';
import { FormAlumnoComponent } from './components/form-alumno/form-alumno.component';
import { config, token } from './config';
import { AutenticacionModule } from './autenticacion/autenticacion.module';
import { CursosModule } from './cursos/cursos.module';
import { CoreModule } from './core/core.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TablaCursosComponent,
    BooleanATextoPipe,
    BooleanEstiloDirective,
    FiltroCursosPipe,
    TablaAlumnosComponent,
    FormAlumnoComponent    
  ],
  imports: [
    // CommonModule,
    BrowserModule,
    AutenticacionModule,
    CursosModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule
  ],
  providers: [
    {provide: token, useValue: config}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
