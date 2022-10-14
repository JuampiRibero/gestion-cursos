import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { DatosCursos } from '../../data/cursos';

@Component({
  selector: 'app-cards-cursos',
  templateUrl: './cards-cursos.component.html',
  styleUrls: ['./cards-cursos.component.css'],
})
export class CardsCursosComponent implements OnInit {
  filtro: string = '';
  cursos: Curso[] = DatosCursos.cursos;
  constructor() {}

  ngOnInit(): void {}
}
