import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Configuracion, token } from 'src/app/config';
import { Curso } from 'src/app/models/curso';

@Component({
  selector: 'app-editar-curso',
  templateUrl: './editar-curso.component.html',
  styleUrls: ['./editar-curso.component.css'],
})
export class EditarCursoComponent implements OnInit {
  formularioCurso!: FormGroup;
  id!: number;
  alumnoService: any;

  constructor(
    @Inject(token) private config: Configuracion,
    private router: Router,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros) => {
      console.log(parametros);
      this.id = parseInt(parametros.get('id') || '0');
      this.formularioCurso = new FormGroup({
        nombre: new FormControl(parametros.get('nombre'), [Validators.required]),
        comision: new FormControl(parametros.get('comision'), [Validators.required]),
        profesor: new FormControl(parametros.get('profesor'), [Validators.required]),
        fechaInicio: new FormControl(parametros.get('fechaInicio'), [Validators.required]),
        fechaFin: new FormControl(parametros.get('fechaFin'), [Validators.required]),
        inscripcionAbierta: new FormControl(parametros.get('inscripcionAbierta'), [Validators.required]),
      });
    });
  }

  editarCurso() {
    let c: Curso = {
      id: this.id,
      nombre: this.formularioCurso.value.nombre,
      comision: this.formularioCurso.value.comision,
      profesor: this.formularioCurso.value.profesor,
      fechaInicio: this.formularioCurso.value.fechaInicio,
      fechaFin: this.formularioCurso.value.fechaFin,
      inscripcionAbierta: this.formularioCurso.value.inscripcionAbierta,
      imagen: 'https://img.freepik.com/foto-gratis/encendido-computadora-portatil-gris_400718-47.jpg?w=1060&t=st=1663708656~exp=1663709256~hmac=41ed7dd4523308f9f9c145e5fe12aecfbd21619ad28f2c1988b896458dcda35a',
      alumnos: this.config.servicios.alumnos.obtenerAlumnosObservable(),
    };

    this.config.servicios.cursos.editarCurso(c);

    this.router.navigate(['cursos/listar']);
  }
}
