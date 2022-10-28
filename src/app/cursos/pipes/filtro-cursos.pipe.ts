import { Pipe, PipeTransform } from '@angular/core';
import { Curso } from '../../models/curso';

@Pipe({
  name: 'filtroCursos'
})
export class FiltroCursosPipe implements PipeTransform {

  transform(cursos: Curso[] | any, filtro: string): Curso[] {
    return cursos.filter(
      (      curso: { nombre: string; comision: string | string[]; fechaInicio: { getMonth: () => number; }; }) => curso.nombre.toLocaleLowerCase().includes(filtro.toLocaleLowerCase()) || 
      curso.comision.includes(filtro) ||
      curso.fechaInicio.getMonth() + 1 == parseInt(filtro)
    );
  }

}
