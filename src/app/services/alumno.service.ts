import { Injectable } from '@angular/core';
import { Alumno } from '../models/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  private alumnos: Alumno[] = [
    { nombre: 'Martin', apellido: 'Gonzalez', correo: 'mg@gmail.com', nota: 6, esProfesional: true },
    { nombre: 'José', apellido: 'Marcantoni', correo: 'jm@gmail.com', nota: 3, esProfesional: false },
    { nombre: 'Juan Pablo', apellido: 'Ribero Mazzoni', correo: 'jp@gmail.com', nota: 7, esProfesional: true },
    { nombre: 'Lucia', apellido: 'Pitrelli', correo: 'lp@gmail.com', nota: 9, esProfesional: true },
    { nombre: 'Verónica', apellido: 'Bergamini', correo: 'vb@gmail.com', nota: 10, esProfesional: true },
    { nombre: 'Yesica', apellido: 'Suñol', correo: 'ys@gmail.com', nota: 4, esProfesional: true },
    { nombre: 'Renzo', apellido: 'Gasparini', correo: 'rg@gmail.com', nota: 2, esProfesional: false },
    { nombre: 'Marcos', apellido: 'Arana', correo: 'ma@gmail.com', nota: 1, esProfesional: false },
    { nombre: 'Julieth', apellido: 'Sierra', correo: 'js@gmail.com', nota: 5, esProfesional: true },
    { nombre: 'Franco', apellido: 'Buccellato', correo: 'fb@gmail.com', nota: 4, esProfesional: true },
    { nombre: 'Carlos', apellido: 'Gioda', correo: 'cg@gmail.com', nota: 6, esProfesional: true },
    { nombre: 'Celeste', apellido: 'López', correo: 'cl@gmail.com', nota: 7, esProfesional: true },
    { nombre: 'Axel', apellido: 'Lara', correo: 'al@gmail.com', nota: 6, esProfesional: false },
    { nombre: 'Sofia', apellido: 'López', correo: 'sl@gmail.com', nota: 5, esProfesional: false },
    { nombre: 'Santiago', apellido: 'Gómez', correo: 'sg@gmail.com', nota: 10, esProfesional: false },
];

  constructor() { }

  obtenerAlumnos(): Alumno[]{
    return this.alumnos;
  }

  agregarAlumno(alumno: Alumno){
    this.alumnos.push(alumno);
  }
}
