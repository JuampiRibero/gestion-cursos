import { Component, OnInit, OnDestroy } from '@angular/core';
import { delay, Observable, Subscription } from 'rxjs';
import { Curso } from 'src/app/models/curso';
import { Router } from '@angular/router';
import { CursoService } from '../../../cursos/services/curso.service';
import { CursoState } from '../../../models/curso.state';
import { Store } from '@ngrx/store';
import { loadCursosSuccess, loadCursosFailure } from '../../state/cursos.actions';
import { selectStateCursos, selectStateCargando } from '../../state/cursos.selectors';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css'],
})
export class ListaCursosComponent implements OnInit, OnDestroy {
  filtro: string = '';
  cursos$!: Observable<Curso[]>;
  cargando$!: Observable<boolean>;
  suscripcionCursos!: Subscription;

  constructor(
    private cursoService: CursoService,
    private router: Router,
    private store: Store<CursoState>
  ) {}

  ngOnInit(): void {
    this.cursoService.obtenerCursos().subscribe({
      next: (cursos: Curso[]) => {
        this.store.dispatch(loadCursosSuccess({cursos}));
      },
      error: (error: any) => {
        alert('Hubo un error');
        this.store.dispatch(loadCursosFailure(error));
      }
    });
    this.cursos$ = this.store.select(selectStateCursos);
    this.cargando$ = this.store.select(selectStateCargando);
  }

  ngOnDestroy(): void {
    console.log('El componente lista-cursos se está destruyendo')
    this.suscripcionCursos.unsubscribe();
  }

  editarCurso(curso: Curso) {
    this.router.navigate(['cursos/editar', curso]);
    this.cursos$ = this.cursoService.obtenerCursos();
  }

  eliminarCurso(id: number) {
    this.cursoService.eliminarCurso(id);
    this.cursos$ = this.cursoService.obtenerCursos();
  }
}
