import { Component, Inject, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Alumno } from 'src/app/models/alumno';
import { Configuracion, token } from '../../config';

@Component({
  selector: 'app-tabla-alumnos',
  templateUrl: './tabla-alumnos.component.html',
  styleUrls: ['./tabla-alumnos.component.css']
})
export class TablaAlumnosComponent implements OnInit {

  alumnos!: Alumno[];
  columnas: string[] = [
    'nombre',
    'apellido',
    'correo',
    'nota',
    'esProfesional',
    'acciones',
  ];
  dataSource: MatTableDataSource<Alumno> = new MatTableDataSource<Alumno>(this.config.servicios.alumnos.obtenerAlumnos());

  constructor(
    @Inject(token) private config: Configuracion
  ) {}

  ngOnInit(): void {
    this.alumnos = this.config.servicios.alumnos.obtenerAlumnos();
  }

  filtrarAlumno(event: Event){
    const valorObtenido = (event.target as HTMLInputElement).value;
    this.dataSource.filterPredicate = function(alumno: Alumno, filtro: string){
      return alumno.nombre.toLocaleLowerCase().includes(filtro.toLocaleLowerCase());
    };
    this.dataSource.filter = valorObtenido.trim().toLowerCase();
  }

  // agregarAlumno(){
  //   let alumno: Alumno = {
  //     nombre: ,
  //     apellido: ,
  //     correo: ,
  //     nota: ,
  //     esProfesional:
  //   }
  // }

  editar(){
    console.log(this.alumnos);
  }

}
