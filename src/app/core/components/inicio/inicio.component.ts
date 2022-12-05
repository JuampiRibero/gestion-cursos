import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CursoState } from '../../../models/curso.state';
import { loadCursos } from '../../../cursos/state/cursos.actions';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(
    private store: Store<CursoState>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(loadCursos());
  }

}
