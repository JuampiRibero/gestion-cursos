import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarCursoComponent } from './components/agregar-curso/agregar-curso.component';
import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';
import { EditarCursoComponent } from './components/editar-curso/editar-curso.component';
import { DetalleCursoComponent } from './components/detalle-curso/detalle-curso.component';
import { AutenticacionGuard } from '../core/guards/autenticacion.guard';
import { AdminGuard } from '../core/guards/admin.guard';

const routes: Routes = [
  { path: '', children: [
    { path: 'listar', component: ListaCursosComponent },
    { path: 'agregar', component: AgregarCursoComponent, canActivate: [AutenticacionGuard, AdminGuard] },
    { path: 'editar', component: EditarCursoComponent, canActivate: [AutenticacionGuard, AdminGuard] },
    { path: ':id', component: DetalleCursoComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
