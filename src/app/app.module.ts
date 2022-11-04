import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BooleanATextoPipe } from './pipes/boolean-a-texto.pipe';
import { BooleanEstiloDirective } from './directives/boolean-estilo.directive';
import { FiltroCursosPipe } from './pipes/filtro-cursos.pipe';
import { TablaAlumnosComponent } from './components/tabla-alumnos/tabla-alumnos.component';
import { FormAlumnoComponent } from './components/form-alumno/form-alumno.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    BooleanATextoPipe,
    BooleanEstiloDirective,
    FiltroCursosPipe,
    TablaAlumnosComponent,
    FormAlumnoComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
