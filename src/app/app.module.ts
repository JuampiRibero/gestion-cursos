import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BooleanATextoPipe } from './pipes/boolean-a-texto.pipe';
import { BooleanEstiloDirective } from './directives/boolean-estilo.directive';
import { FiltroCursosPipe } from './pipes/filtro-cursos.pipe';
import { TablaAlumnosComponent } from './components/tabla-alumnos/tabla-alumnos.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    BooleanATextoPipe,
    BooleanEstiloDirective,
    FiltroCursosPipe,
    TablaAlumnosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production, name: 'Proyecto Final Angular' }),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
