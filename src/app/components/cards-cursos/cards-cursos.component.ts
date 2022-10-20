import { Component, Inject, OnInit } from '@angular/core';
import { Configuracion, token } from 'src/app/config';
import { Curso } from 'src/app/models/curso';

@Component({
  selector: 'app-cards-cursos',
  templateUrl: './cards-cursos.component.html',
  styleUrls: ['./cards-cursos.component.css'],
})
export class CardsCursosComponent implements OnInit {
  filtro: string = '';
  cursos!: Curso[];
  
  constructor(
    @Inject(token) private config: Configuracion
  ) {}

  ngOnInit(): void {
    this.cursos = this.config.servicios.cursos.obtenerCursos();
  }
}
