import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadSesionActiva } from 'src/app/core/state/sesion.actions';
import { Sesion } from 'src/app/models/sesion';
import { Usuario } from 'src/app/models/usuario';
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
    private store: Store<Sesion>,
    private router: Router
  ) {
    this.formularioLogin = new FormGroup({
      usuario: new FormControl('Roberta.Rice42'),
      contrasena: new FormControl('sdb4CFlbYfZHXWc'),
      admin: new FormControl(true)
    });
  }

  ngOnInit(): void {}

  login() {
    let u: Usuario = {
      id: 0,
      usuario: this.formularioLogin.value.usuario,
      contrasena: this.formularioLogin.value.contrasena,
      admin: this.formularioLogin.value.admin
    }
    this.sesionService.login(u).subscribe((usuario: Usuario) => {
      this.store.dispatch(loadSesionActiva({usuarioActivo: usuario}));
    });

    this.router.navigate(['inicio']);
  }
}
