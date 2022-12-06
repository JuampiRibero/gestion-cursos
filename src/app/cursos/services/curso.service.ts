import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, filter, map, Observable, Subject, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Curso } from '../../models/curso';

@Injectable({ providedIn: 'any' })
export class CursoService {
  constructor(private http: HttpClient) {}

  obtenerCursos(): Observable<Curso[]> {
    return this.http.get<Curso[]>(`${environment.api}/cursos`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarError)
    )
  }

  obtenerCurso(id: number): Observable<Curso> {
    return this.http.get<Curso>(`${environment.api}/cursos/${id}`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarError)
    )
  }

  agregarCurso(curso: Curso) {
    this.http.post<Curso>(`${environment.api}/cursos`, curso, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarError)
    ).subscribe();
  }

  editarCurso(curso: Curso){
    this.http.put(`${environment.api}/cursos/${curso.id}`, curso).pipe(
      catchError(this.manejarError)
    ).subscribe();
  }

  eliminarCurso(id: number){
    this.http.delete<Curso>(`${environment.api}/cursos/${id}`).pipe(
      catchError(this.manejarError)
    ).subscribe();
    alert("Curso eliminado");
  }

  private manejarError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.warn('Error del lado del cliente', error.error.message);
    }else{
      console.warn('Error del lado del servidor', error.error.message);
    }

    return throwError(() => new Error('Error en la comunicacion HTTP'));
  }
}

// export class CursoService {
//   private cursos: Curso[] = [
//     {
//       id: 1,
//       nombre: 'Angular',
//       comision: '32320',
//       profesor: 'Abner',
//       fechaInicio: new Date(2022, 9, 13),
//       fechaFin: new Date(2022, 11, 10),
//       inscripcionAbierta: true,
//       imagen:
//         'https://img.freepik.com/foto-gratis/encendido-computadora-portatil-gris_400718-47.jpg?w=1060&t=st=1663708656~exp=1663709256~hmac=41ed7dd4523308f9f9c145e5fe12aecfbd21619ad28f2c1988b896458dcda35a',
//       alumnos: this.alumnoService.obtenerAlumnosObservable(),
//     },
//     {
//       id: 2,
//       nombre: 'React Js',
//       comision: '22430',
//       profesor: 'Angeles',
//       fechaInicio: new Date(2021, 11, 27),
//       fechaFin: new Date(2022, 1, 22),
//       inscripcionAbierta: false,
//       imagen:
//         'https://img.freepik.com/foto-gratis/encendido-computadora-portatil-gris_400718-47.jpg?w=1060&t=st=1663708656~exp=1663709256~hmac=41ed7dd4523308f9f9c145e5fe12aecfbd21619ad28f2c1988b896458dcda35a',
//       alumnos: this.alumnoService.obtenerAlumnosObservable(),
//     },
//     {
//       id: 3,
//       nombre: 'JavaScript',
//       comision: '23175',
//       profesor: 'Tomas',
//       fechaInicio: new Date(2022, 9, 18),
//       fechaFin: new Date(2022, 11, 13),
//       inscripcionAbierta: false,
//       imagen:
//         'https://img.freepik.com/foto-gratis/encendido-computadora-portatil-gris_400718-47.jpg?w=1060&t=st=1663708656~exp=1663709256~hmac=41ed7dd4523308f9f9c145e5fe12aecfbd21619ad28f2c1988b896458dcda35a',
//       alumnos: this.alumnoService.obtenerAlumnosObservable(),
//     },
//   ];
//   private cursosSubject: BehaviorSubject<Curso[]>;

//   constructor(private alumnoService: AlumnoService) {
//     this.cursosSubject = new BehaviorSubject<Curso[]>(this.cursos);
//   }

//   obtenerCursos(): Observable<Curso[] | any> {
//     return this.cursosSubject.asObservable();
//   }

//   obtenerCurso(id: number): Observable<Curso> {
//     return this.obtenerCursos().pipe(
//       map((cursos: Curso[]) => cursos.filter((curso: Curso) => curso.id === id)[0])
//     );
//   }

//   agregarCurso(curso: Curso) {
//     this.cursos.push(curso);
//     this.cursosSubject.next(this.cursos);
//   }

//   editarCurso(curso: Curso){
//     let indice = this.cursos.findIndex((c: Curso) => c.id === curso.id);

//     if(indice > -1){
//       this.cursos[indice] = curso;
//     }

//     this.cursosSubject.next(this.cursos);
//   }

//   eliminarCurso(id: number){
//     let indice = this.cursos.findIndex((c: Curso) => c.id === id);

//     if(indice > -1){
//       this.cursos.splice(indice, 1);
//     }

//     this.cursosSubject.next(this.cursos);
//   }
// }
