import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';
import { AgregarCursoComponent } from './components/agregar-curso/agregar-curso.component';
import { EditarCursoComponent } from './components/editar-curso/editar-curso.component';
import { BooleanEstiloDirective } from './directives/boolean-estilo.directive';
import { BooleanATextoPipe } from './pipes/boolean-a-texto.pipe';
import { FiltroCursosPipe } from './pipes/filtro-cursos.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CursoService } from './services/curso.service';
import { SharedModule } from '../shared/shared.module';
import { DetalleCursoComponent } from './components/detalle-curso/detalle-curso.component';

@NgModule({
  declarations: [
    ListaCursosComponent,
    AgregarCursoComponent,
    EditarCursoComponent,
    BooleanEstiloDirective,
    BooleanATextoPipe,
    FiltroCursosPipe,
    DetalleCursoComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    CursoService
  ]
})

export class CursosModule {}
