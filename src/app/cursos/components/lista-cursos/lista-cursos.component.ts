import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/models/curso';
import { Router } from '@angular/router';
import { CursoService } from '../../../cursos/services/curso.service';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css'],
})
export class ListaCursosComponent implements OnInit {
  filtro: string = '';
  cursos$!: Observable<Curso[]>;

  constructor(
    private cursoService: CursoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cursos$ = this.cursoService.obtenerCursos();
  }

  editarCurso(curso: Curso) {
    this.router.navigate(['cursos/editar', curso]);
    this.cursos$ = this.cursoService.obtenerCursos();
  }

  eliminarCurso(id: number) {
    this.cursoService.eliminarCurso(id);
  }
}
