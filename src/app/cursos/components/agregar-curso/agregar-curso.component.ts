import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Curso } from 'src/app/models/curso';
import { Router } from '@angular/router';
import { CursoService } from '../../services/curso.service';
import { AlumnoService } from '../../../services/alumno.service';

@Component({
  selector: 'app-agregar-curso',
  templateUrl: './agregar-curso.component.html',
  styleUrls: ['./agregar-curso.component.css']
})
export class AgregarCursoComponent implements OnInit {
  formularioCurso: FormGroup;

  constructor(private cursoService: CursoService, private alumnoService: AlumnoService, private router: Router, private fb: FormBuilder) {
    this.formularioCurso = fb.group({
      nombre: new FormControl('', [Validators.required]),
      comision: new FormControl('', [Validators.required]),
      profesor: new FormControl('', [Validators.required]),
      fechaInicio: new FormControl('', [Validators.required]),
      fechaFin: new FormControl('', [Validators.required]),
      inscripcionAbierta: new FormControl(true, [Validators.required]),
    })
  }

  ngOnInit(): void {
  }

  agregarCurso(){
    const curso: Curso = {
      id: Math.round(Math.random()*1000),
      nombre: this.formularioCurso.value.nombre,
      comision: this.formularioCurso.value.comision,
      fechaInicio: this.formularioCurso.value.fechaInicio,
      fechaFin: this.formularioCurso.value.fechaFin,
      profesor: this.formularioCurso.value.profesor,
      inscripcionAbierta: this.formularioCurso.value.inscripcionAbierta,
      imagen: 'https://img.freepik.com/foto-gratis/encendido-computadora-portatil-gris_400718-47.jpg?w=1060&t=st=1663708656~exp=1663709256~hmac=41ed7dd4523308f9f9c145e5fe12aecfbd21619ad28f2c1988b896458dcda35a',
      alumnos: this.alumnoService.obtenerAlumnosObservable(),
    };
    console.log(curso);
    this.formularioCurso.addControl('control1', new FormControl('', []));
    this.cursoService.agregarCurso(curso);
    this.router.navigate(['cursos/listar']);
  }

}
