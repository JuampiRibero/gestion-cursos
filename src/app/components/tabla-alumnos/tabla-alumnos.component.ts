import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Alumno } from 'src/app/models/alumno';
import { Observable } from 'rxjs';
import { AlumnoService } from '../../services/alumno.service';

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
  dataSource: MatTableDataSource<Alumno> = new MatTableDataSource<Alumno>(this.alumnoService.obtenerAlumnos());

  constructor(
    private alumnoService: AlumnoService
  ) {
    //Paso 2
    this.suscripcion = this.alumnoService.obtenerAlumnosObservable().subscribe({
      next: (alumnos: Alumno[]) => {
        this.alumnos = alumnos;
      }
    });
    this.alumnos$ = this.alumnoService.obtenerAlumnosObservable();
  }

  ngOnInit(): void {
    this.alumnos = this.alumnoService.obtenerAlumnos();
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
    this.alumnoService.agregarAlumno(alumno);
  }

  editar(){
    console.log(this.alumnos);
  }

}
