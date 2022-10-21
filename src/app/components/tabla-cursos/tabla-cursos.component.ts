import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { MatTableDataSource } from '@angular/material/table';
import { Configuracion, token } from 'src/app/config';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tabla-cursos',
  templateUrl: './tabla-cursos.component.html',
  styleUrls: ['./tabla-cursos.component.css'],
})
export class TablaCursosComponent implements OnInit, OnDestroy {
  cursos!: Curso[];
  cursos$!: Observable<Curso[]>;
  suscripcion: any;
  columnas: string[] = [
    'nombre',
    'comision',
    'profesor',
    'fechaInicio',
    'fechaFin',
    'inscripcionAbierta',
    'acciones',
  ];
  dataSource: MatTableDataSource<Curso> = new MatTableDataSource<Curso>(this.config.servicios.cursos.obtenerCursos());

  constructor(
    @Inject(token) private config: Configuracion
  ) {
    //Paso 1
    console.log('Paso 1');
    //Paso 2
    this.suscripcion = this.config.servicios.cursos.obtenerCursosObservable().subscribe({
      next: (cursos: Curso[]) => {
        this.cursos = cursos;
        console.log('Paso 2: desde el Observable', cursos);
      },
      error: (error) => {
        console.error(error);
      }
    }).unsubscribe();
    this.cursos$ = this.config.servicios.cursos.obtenerCursosObservable();
    //Paso 3
    console.log('Paso 3');
  }

  ngOnInit(): void {
    this.cursos = this.config.servicios.cursos.obtenerCursos();
  }

  ngOnDestroy(){
    this.suscripcion.unsubscribe();
  }

  filtrarCurso(event: Event){
    const valorObtenido = (event.target as HTMLInputElement).value;
    this.dataSource.filterPredicate = function(curso: Curso, filtro: string){
      return curso.nombre.toLocaleLowerCase().includes(filtro.toLocaleLowerCase());
    };
    this.dataSource.filter = valorObtenido.trim().toLowerCase();
  }

  filtrarComision(event: Event){
    const valorObtenido = (event.target as HTMLInputElement).value;
    this.dataSource.filterPredicate = function(curso: Curso, filtro: string){
      return curso.comision.toLocaleLowerCase().includes(filtro.toLocaleLowerCase());
    };
    this.dataSource.filter = valorObtenido.trim().toLowerCase();
  }

  agregarCurso(){
    let curso: Curso = {
      nombre: 'React Js',
      comision: '22430',
      profesor: 'Angeles',
      fechaInicio: new Date(2021, 11, 27),
      fechaFin: new Date(2022, 1, 22),
      inscripcionAbierta: false,
      imagen:
        'https://img.freepik.com/foto-gratis/encendido-computadora-portatil-gris_400718-47.jpg?w=1060&t=st=1663708656~exp=1663709256~hmac=41ed7dd4523308f9f9c145e5fe12aecfbd21619ad28f2c1988b896458dcda35a',
      alumnos: this.config.servicios.alumnos.obtenerAlumnosPromise(),
      }
    this.config.servicios.cursos.agregarCurso(curso);
  }

  editar(){
    console.log(this.cursos);
  }
}
