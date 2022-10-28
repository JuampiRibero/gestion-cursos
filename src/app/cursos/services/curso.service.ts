import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Curso } from '../../models/curso';
import { AlumnoService } from '../../services/alumno.service';

@Injectable()
export class CursoService {
  private cursos: Curso[] = [
    {
      id: 1,
      nombre: 'Angular',
      comision: '32320',
      profesor: 'Abner',
      fechaInicio: new Date(2022, 9, 13),
      fechaFin: new Date(2022, 11, 10),
      inscripcionAbierta: true,
      imagen:
        'https://img.freepik.com/foto-gratis/encendido-computadora-portatil-gris_400718-47.jpg?w=1060&t=st=1663708656~exp=1663709256~hmac=41ed7dd4523308f9f9c145e5fe12aecfbd21619ad28f2c1988b896458dcda35a',
      alumnos: this.alumnoService.obtenerAlumnosObservable(),
    },
    {
      id: 2,
      nombre: 'React Js',
      comision: '22430',
      profesor: 'Angeles',
      fechaInicio: new Date(2021, 11, 27),
      fechaFin: new Date(2022, 1, 22),
      inscripcionAbierta: false,
      imagen:
        'https://img.freepik.com/foto-gratis/encendido-computadora-portatil-gris_400718-47.jpg?w=1060&t=st=1663708656~exp=1663709256~hmac=41ed7dd4523308f9f9c145e5fe12aecfbd21619ad28f2c1988b896458dcda35a',
      alumnos: this.alumnoService.obtenerAlumnosObservable(),
    },
    {
      id: 3,
      nombre: 'JavaScript',
      comision: '23175',
      profesor: 'Tomas',
      fechaInicio: new Date(2022, 9, 18),
      fechaFin: new Date(2022, 11, 13),
      inscripcionAbierta: false,
      imagen:
        'https://img.freepik.com/foto-gratis/encendido-computadora-portatil-gris_400718-47.jpg?w=1060&t=st=1663708656~exp=1663709256~hmac=41ed7dd4523308f9f9c145e5fe12aecfbd21619ad28f2c1988b896458dcda35a',
      alumnos: this.alumnoService.obtenerAlumnosObservable(),
    },
  ];
  // cursos$: Observable<Curso[]>;
  private cursosSubject: BehaviorSubject<Curso[]>;

  constructor(private alumnoService: AlumnoService) {
    this.cursosSubject = new BehaviorSubject<Curso[]>(this.cursos);

    // this.cursos$ = new Observable<Curso[]>((suscriptor) => {
    //   suscriptor.next(this.cursos);
    // });
  }

  obtenerCursos(): Observable<Curso[]> {
    return this.cursosSubject.asObservable();
  }

  obtenerCurso(id: number): Observable<Curso[]> {
    return this.obtenerCursos().pipe(
      map((cursos: Curso[]) => cursos.filter((curso: Curso) => curso.id === id))
    );
  }

  agregarCurso(curso: Curso) {
    this.cursos.push(curso);
    this.cursosSubject.next(this.cursos);
  }

  editarCurso(curso: Curso) {}

  eliminarCurso(id: number) {}
}
