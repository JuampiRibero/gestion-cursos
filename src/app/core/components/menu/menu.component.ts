import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Sesion } from 'src/app/models/sesion';
import { SesionService } from '../../services/sesion.service';
import { selectSesionActiva } from '../../state/sesion.selectors';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  isExpanded = false;
  sesion$!: Observable<Sesion>;

  constructor(private sesionService: SesionService, private router: Router, private store: Store<Sesion>) {}

  ngOnInit(): void {
    this.sesion$ = this.store.select(selectSesionActiva);
  }

  logout() {
    this.sesionService.logout();
  }
}
