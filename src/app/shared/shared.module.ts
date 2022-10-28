import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BooleanEstiloDirective } from '../directives/boolean-estilo.directive';
import { BooleanATextoPipe } from '../pipes/boolean-a-texto.pipe';
import { FiltroCursosPipe } from '../pipes/filtro-cursos.pipe';
import { TituloEstiloDirective } from '../cursos/directives/titulo-estilo.directive';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    // BooleanEstiloDirective,
    // BooleanATextoPipe,
    // FiltroCursosPipe,
    // TituloEstiloDirective
  ],
  exports: [
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    // BooleanEstiloDirective,
    // BooleanATextoPipe,
    // FiltroCursosPipe,
    // TituloEstiloDirective
  ]
})
export class SharedModule { }
