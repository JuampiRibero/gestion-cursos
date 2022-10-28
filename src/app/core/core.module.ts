import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './components/inicio/inicio.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { PaginaNoEncontradaComponent } from './components/pagina-no-encontrada/pagina-no-encontrada.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { SesionService } from './services/sesion.service';
import { MaterialModule } from '../material.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    InicioComponent,
    ContactoComponent,
    PaginaNoEncontradaComponent,
    FooterComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [
    SesionService
  ],
  exports: [
    MenuComponent,
    FooterComponent
  ]
})
export class CoreModule {}
