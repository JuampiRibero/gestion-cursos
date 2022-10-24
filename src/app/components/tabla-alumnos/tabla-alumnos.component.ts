import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Alumno } from 'src/app/models/alumno';
import { Configuracion, token } from '../../config';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tabla-alumnos',
  templateUrl: './tabla-alumnos.component.html',
  styleUrls: ['./tabla-alumnos.component.css']
})
export class TablaAlumnosComponent implements OnInit {

  alumnos!: Alumno[];
  alumnos$!: Observable<Alumno[]>;
  suscripcion: any;
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
  ) {
    //Paso 1
    console.log('Paso 1');
    //Paso 2
    this.suscripcion = this.config.servicios.alumnos.obtenerAlumnosObservable().subscribe({
      next: (alumnos: Alumno[]) => {
        this.alumnos = alumnos;
        console.log('Paso 2: desde el Observable', alumnos);
      },
      error: (error) => {
        console.error(error);
      }
    });
    this.alumnos$ = this.config.servicios.alumnos.obtenerAlumnosObservable();
    //Paso 3
    console.log('Paso 3');
  }

  ngOnInit(): void {
    this.alumnos = this.config.servicios.alumnos.obtenerAlumnos();
  }

  ngOnDestroy(){
    this.suscripcion.unsubscribe();
  }

  filtrarAlumno(event: Event){
    const valorObtenido = (event.target as HTMLInputElement).value;
    this.dataSource.filterPredicate = function(alumno: Alumno, filtro: string){
      return alumno.nombre.toLocaleLowerCase().includes(filtro.toLocaleLowerCase());
    };
    this.dataSource.filter = valorObtenido.trim().toLowerCase();
  }

  agregarAlumno(){
    let alumno: Alumno = {
      nombre: 'Pepe',
      apellido: 'Gonzales',
      correo: 'pg@gmail.com',
      nota: 7,
      esProfesional: true
    }
    this.config.servicios.alumnos.agregarAlumno(alumno);
  }

  editar(){
    console.log(this.alumnos);
  }

}
