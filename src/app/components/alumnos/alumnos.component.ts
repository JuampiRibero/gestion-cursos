import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../models/alumno';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css'],
})
export class AlumnosComponent implements OnInit {
  listaAlumnos: Array<Alumno> = [
    { nombre: 'Martin', apellido: 'Gonzalez', esProfesional: true, nota: 6 },
    { nombre: 'José', apellido: 'Marcantoni', esProfesional: false, nota: 3 },
    { nombre: 'Juan Pablo', apellido: 'Ribero Mazzoni', esProfesional: true, nota: 7 },
    { nombre: 'Lucia', apellido: 'Pitrelli', esProfesional: true, nota: 9 },
    { nombre: 'Verónica', apellido: 'Bergamini', esProfesional: true, nota: 10 },
    { nombre: 'Yesica', apellido: 'Suñol', esProfesional: true, nota: 4 },
    { nombre: 'Renzo', apellido: 'Gasparini', esProfesional: false, nota: 2 },
    { nombre: 'Marcos', apellido: 'Arana', esProfesional: false, nota: 1 },
    { nombre: 'Julieth', apellido: 'Sierra', esProfesional: true, nota: 5 },
    { nombre: 'Franco', apellido: 'Buccellato', esProfesional: true, nota: 4 },
    { nombre: 'Carlos', apellido: 'Gioda', esProfesional: true, nota: 6 },
    { nombre: 'Celeste', apellido: 'López', esProfesional: true, nota: 7 },
    { nombre: 'Axel', apellido: 'Lara', esProfesional: false, nota: 6 },
    { nombre: 'Sofia', apellido: 'López', esProfesional: false, nota: 5 },
    { nombre: 'Santiago', apellido: 'Gómez', esProfesional: false, nota: 10 },
  ];

  constructor() {}

  ngOnInit(): void {}
}
