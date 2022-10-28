import { CursoService } from './cursos/services/curso.service';
import { AlumnoService } from './services/alumno.service';
import { InjectionToken } from '@angular/core';

export interface Configuracion {
  servicios: {
    cursos: CursoService;
    alumnos: AlumnoService;
  };
}

export const config: Configuracion = {
  servicios: {
    cursos: new CursoService(new AlumnoService),
    alumnos: new AlumnoService(),
  },
};

export const token = new InjectionToken<Configuracion>('Config')
