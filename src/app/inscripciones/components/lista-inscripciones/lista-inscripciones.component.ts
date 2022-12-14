import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { InscripcionState } from '../../state/inscripciones.reducer';
import { agregarInscripcion, cargarInscripciones, eliminarInscripcion } from '../../state/inscripciones.actions';
import { Observable } from 'rxjs';
import { Inscripcion } from '../../../models/inscripcion';
import { selectInscripciones } from '../../state/inscripciones.selectors';
import { CursoState } from '../../../models/curso.state';
import { Curso } from 'src/app/models/curso';
import { selectStateCursos } from '../../../cursos/state/cursos.selectors';
import { Sesion } from 'src/app/models/sesion';
import { Usuario } from 'src/app/models/usuario';
import { selectSesionActiva } from 'src/app/core/state/sesion.selectors';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { EditarDialogComponent } from '../editar-dialog/editar-dialog.component';

@Component({
  selector: 'app-lista-inscripciones',
  templateUrl: './lista-inscripciones.component.html',
  styleUrls: ['./lista-inscripciones.component.css']
})
export class ListaInscripcionesComponent implements OnInit {
  dataSource!: MatTableDataSource<Inscripcion>;
  cursos$!: Observable<Curso[]>;
  usuarioActivo?: Usuario;
  cursoSeleccionado!: Curso;
  columnas: string[] = ['id', 'curso', 'estudiante', 'acciones'];
  
  constructor(
    private storeInscripciones: Store<InscripcionState>,
    private storeCursos: Store<CursoState>,
    private storeSesion: Store<Sesion>,
    private dialog: MatDialog
  ) {
    this.storeInscripciones.dispatch(cargarInscripciones());
  }

  ngOnInit(): void {
    this.storeInscripciones.select(selectInscripciones).subscribe((inscripciones: Inscripcion[]) => {
      this.dataSource = new MatTableDataSource<Inscripcion>(inscripciones);
    });
    this.cursos$ = this.storeCursos.select(selectStateCursos);
    this.storeSesion.select(selectSesionActiva).subscribe((sesion: Sesion) => {
      this.usuarioActivo = sesion.usuarioActivo;
    })
  }

  inscribir(curso: Curso){
    if(this.usuarioActivo){
      const inscripcion: Inscripcion = {
        id: 0,
        curso: curso,
        estudiante: this.usuarioActivo 
      };
      this.storeInscripciones.dispatch(agregarInscripcion({inscripcion}));
    }
  }

  editar(inscripcion: Inscripcion){
    this.dialog.open(EditarDialogComponent, {
      width: '300px',
      data: inscripcion
    })
  }

  eliminar(inscripcion: Inscripcion){
    this.storeInscripciones.dispatch(eliminarInscripcion({inscripcion}));
  } 

}
