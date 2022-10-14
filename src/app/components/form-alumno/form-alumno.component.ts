import { Component, OnInit} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form-alumno',
  templateUrl: './form-alumno.component.html',
  styleUrls: ['./form-alumno.component.css'],
})
export class FormAlumnoComponent implements OnInit {
  formularioAlumno: FormGroup;
  labelPosition: 'before' | 'after' = 'before';

  constructor(private fb: FormBuilder) {
    this.formularioAlumno = fb.group({
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      correo: new FormControl('', [
        Validators.pattern('^[a-z]+@[a-z]+\\.[a-z]{2,3}$'),
        Validators.required,
      ]),
      nota: new FormControl('', [Validators.required]),
      profesional: new FormControl(false, []),
    });
  }

  ngOnInit(): void {}

  agregarAlumno() {
    this.formularioAlumno.addControl('control1', new FormControl('', []));

    console.log(this.formularioAlumno);
  }
}
