import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Configuracion, token } from 'src/app/config';
import { Curso } from 'src/app/models/curso';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css'],
})
export class ListaCursosComponent implements OnInit {
  filtro: string = '';
  cursos$!: Observable<Curso[]>;

  constructor(
    @Inject(token) private config: Configuracion,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cursos$ = this.config.servicios.cursos.obtenerCursos();
  }

  eliminarCurso(id: number) {
    this.config.servicios.cursos.eliminarCurso(id);
  }

  editarCurso(curso: Curso) {
    this.router.navigate(['cursos/editar', curso]);
  }
}
