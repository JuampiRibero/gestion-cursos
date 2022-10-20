import { Component, Inject, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { MatTableDataSource } from '@angular/material/table';
import { Configuracion, token } from 'src/app/config';

@Component({
  selector: 'app-tabla-cursos',
  templateUrl: './tabla-cursos.component.html',
  styleUrls: ['./tabla-cursos.component.css'],
})
export class TablaCursosComponent implements OnInit {
  cursos!: Curso[];
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
  ) {}

  ngOnInit(): void {
    this.cursos = this.config.servicios.cursos.obtenerCursos();
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

  editar(){
    console.log(this.cursos);
  }
}
