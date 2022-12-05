import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCursos from './cursos.reducer';
import { CursoState } from '../../models/curso.state';

export const selectCursosState = createFeatureSelector<CursoState>(
  fromCursos.cursosFeatureKey
);

export const selectStateCursos = createSelector(
  selectCursosState,
  (state: CursoState) => state.cursos
);

export const selectStateCargando = createSelector(
  selectCursosState,
  (state: CursoState) => state.cargando
);
