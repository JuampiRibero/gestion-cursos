import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from 'src/app/models/curso';
import { CursoService } from '../../services/curso.service';

@Component({
  selector: 'app-editar-curso',
  templateUrl: './editar-curso.component.html',
  styleUrls: ['./editar-curso.component.css'],
})
export class EditarCursoComponent implements OnInit {
  formularioCurso!: FormGroup;
  curso!: Curso;
  alumnoService: any;

  constructor(
    private cursoService: CursoService,
    private router: Router,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros) => {
      console.log(parametros);

      this.curso = {
        id: parseInt(parametros.get('id') || '0'),
        nombre: parametros.get('nombre') || '',
        comision: parametros.get('comision') || '',
        profesor: parametros.get('profesor') || '',
        fechaInicio: new Date(parametros.get('fechaInicio') || ''),
        fechaFin: new Date(parametros.get('fechaFin') || ''),
        inscripcionAbierta: parametros.get('inscripcionAbierta') === 'true',
        imagen: parametros.get('imagen' ) || '',
        alumnos: parametros.get('') || []
      }
      this.formularioCurso = new FormGroup({
        nombre: new FormControl(this.curso.nombre, [Validators.required]),
        comision: new FormControl(this.curso.comision),
        profesor: new FormControl(this.curso.profesor),
        fechaInicio: new FormControl(this.curso.fechaInicio),
        fechaFin: new FormControl(this.curso.fechaFin),
        inscripcionAbierta: new FormControl(this.curso.inscripcionAbierta)
      });
    });
  }

  editarCurso() {
    let c: Curso = {
      id: this.curso.id,
      nombre: this.formularioCurso.value.nombre,
      comision: this.formularioCurso.value.comision,
      profesor: this.formularioCurso.value.profesor,
      fechaInicio: this.formularioCurso.value.fechaInicio,
      fechaFin: this.formularioCurso.value.fechaFin,
      inscripcionAbierta: this.formularioCurso.value.inscripcionAbierta,
      imagen: this.curso.imagen,
      alumnos: this.alumnoService.obtenerAlumnosObservable(),
    };

    this.cursoService.editarCurso(c);

    this.router.navigate(['cursos/listar']);
  }
}
