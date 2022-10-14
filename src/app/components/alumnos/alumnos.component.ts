import { Component, OnInit } from '@angular/core';
import { DatosAlumnos } from '../../data/alumnos';
import { Alumno } from 'src/app/models/alumno';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css'],
})
export class AlumnosComponent implements OnInit {
  listaAlumnos: Alumno[] = DatosAlumnos.alumnos;

  constructor() {}

  ngOnInit(): void {}
}
