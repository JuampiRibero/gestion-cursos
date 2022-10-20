import { Injectable } from '@angular/core';
import { Curso } from '../models/curso';
import { AlumnoService } from './alumno.service';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private cursos: Curso[] = [
    {
        nombre: 'Angular',
        comision: '32320',
        profesor: 'Abner',
        fechaInicio: new Date(2022, 9, 13),
        fechaFin: new Date(2022, 11, 10),
        inscripcionAbierta: true,
        imagen:
          'https://img.freepik.com/foto-gratis/encendido-computadora-portatil-gris_400718-47.jpg?w=1060&t=st=1663708656~exp=1663709256~hmac=41ed7dd4523308f9f9c145e5fe12aecfbd21619ad28f2c1988b896458dcda35a',
        alumnos:this.alumnoService.obtenerAlumnos()
      },
      {
        nombre: 'React Js',
        comision: '22430',
        profesor: 'Angeles',
        fechaInicio: new Date(2021, 11, 27),
        fechaFin: new Date(2022, 1, 22),
        inscripcionAbierta: false,
        imagen:
          'https://img.freepik.com/foto-gratis/encendido-computadora-portatil-gris_400718-47.jpg?w=1060&t=st=1663708656~exp=1663709256~hmac=41ed7dd4523308f9f9c145e5fe12aecfbd21619ad28f2c1988b896458dcda35a',
        alumnos:this.alumnoService.obtenerAlumnos()
      },
      {
        nombre: 'JavaScript',
        comision: '23175',
        profesor: 'Tomas',
        fechaInicio: new Date(2022, 9, 18),
        fechaFin: new Date(2022, 11, 13),
        inscripcionAbierta: false,
        imagen:
          'https://img.freepik.com/foto-gratis/encendido-computadora-portatil-gris_400718-47.jpg?w=1060&t=st=1663708656~exp=1663709256~hmac=41ed7dd4523308f9f9c145e5fe12aecfbd21619ad28f2c1988b896458dcda35a',
        alumnos:this.alumnoService.obtenerAlumnos()
      },
];

constructor(
  private alumnoService: AlumnoService
) {}

  obtenerCursos(): Curso[]{
    return this.cursos;
  }

  agregarCurso(curso: Curso){
    this.cursos.push(curso);
  }
}
