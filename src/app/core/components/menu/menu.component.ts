import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Sesion } from 'src/app/models/sesion';
import { SesionService } from '../../services/sesion.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  isExpanded = false;
  sesion$!: Observable<Sesion>;

  constructor(private sesionService: SesionService, private router: Router) {}

  ngOnInit(): void {
    this.sesion$ = this.sesionService.obtenerSesion();
  }

  logout() {
    this.sesionService.logout();
  }
}
