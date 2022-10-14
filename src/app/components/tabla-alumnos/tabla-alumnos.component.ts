import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DatosAlumnos } from '../../data/alumnos';
import { Alumno } from 'src/app/models/alumno';

@Component({
  selector: 'app-tabla-alumnos',
  templateUrl: './tabla-alumnos.component.html',
  styleUrls: ['./tabla-alumnos.component.css']
})
export class TablaAlumnosComponent implements OnInit {

  alumnos: Alumno[] = DatosAlumnos.alumnos;
  columnas: string[] = [
    'nombre',
    'apellido',
    'correo',
    'nota',
    'esProfesional',
    'acciones',
  ];
  dataSource: MatTableDataSource<Alumno> = new MatTableDataSource<Alumno>(this.alumnos);

  constructor() {}

  ngOnInit(): void {}

  filtrarAlumno(event: Event){
    const valorObtenido = (event.target as HTMLInputElement).value;
    this.dataSource.filterPredicate = function(alumno: Alumno, filtro: string){
      return alumno.nombre.toLocaleLowerCase().includes(filtro.toLocaleLowerCase());
    };
    this.dataSource.filter = valorObtenido.trim().toLowerCase();
  }

  editar(){
    console.log(this.alumnos);
  }

}
