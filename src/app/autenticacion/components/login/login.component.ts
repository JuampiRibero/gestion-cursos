import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SesionService } from '../../../core/services/sesion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formularioLogin: FormGroup;

  constructor(
    private sesionService: SesionService,
    private router: Router
  ) {
    this.formularioLogin = new FormGroup({
      usuario: new FormControl('Juan'),
      contrasena: new FormControl('abc123'),
      admin: new FormControl(true)
    });
  }

  ngOnInit(): void {}

  login() {
    console.log(this.formularioLogin.value);
    this.sesionService.login(
      this.formularioLogin.value.usuario,
      this.formularioLogin.value.contrasena,
      this.formularioLogin.value.admin
    );
    this.router.navigate(['inicio']);
  }
}
